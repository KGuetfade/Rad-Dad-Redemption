const express = require("express");
const http = require("http");
const path = require("path");
const websocket = require("ws");

const app = express();
const port = process.env.PORT || 3000;

var indexRouter = require("./routes/index.js");
var Game = require("./game.js");
var GameStats = require("./stats.js");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + '/public')));

app.get("/", function(req, res) {
    res.render("splash.ejs", { amountGames: GameStats.amountGames, amountPlayers: GameStats.amountPlayers, highScore: GameStats.highScore });
})

app.get("/splash", (req, res) => {
    res.render("splash.ejs", { amountGames: GameStats.amountGames, amountPlayers: GameStats.amountPlayers,  highScore: GameStats.highScore });
});

app.get("/game", indexRouter);

var server = http.createServer(app);
const wss = new websocket.Server({ server });

var game = new Game();
var next_game = new Game();
var id_counter = 0;
var game_at_id = {};

wss.on("connection", function(ws){

    /* Initialize client and game*/
    let client = ws;
    client.id = id_counter++;
    game_at_id[client.id] = game;

    if(!game.hasTwoPlayers()){
        game.addPlayer(client);
        GameStats.amountPlayers++;

        if (game.hasOnePlayer()){
            /*player 1 has to wait for player 2 and can't make a move until then*/
            let message = {
                type:"status",
                message:0
            };

            client.send(JSON.stringify(message));
        }
        else{
            /*2 players have connected, now both players have to put their boats*/
            let message = {
                type:"status",
                message:1
            };

            GameStats.amountGames++;
            game.sendBothPlayers(message);

            /*send playerB nickname of playerA*/
            message.type = "serverdata";
            message.message = 0;
            message.data = game.playerA.nickname;
            game.playerB.send(JSON.stringify(message));

            /*send both players that they can place boats*/
            message.type = "gamestate";
            message.message = 0;
            game.sendBothPlayers(message);

            if (next_game.hasOnePlayer()){
                game = next_game;
                next_game = new Game();
            }
            else{
                game = new Game();
            }
        }
    }

    client.on("message", function(raw_data){
        let current_game = game_at_id[client.id];

        let data = JSON.parse(raw_data);
        let message = {
            type:null,
            message:null
        };

        /*playerstatus*/
        if (data.type === "playerstatus")
        {
            /*player is done placing boats*/
            if (data.message === 0)
            {
                if (client === current_game.playerA){
                    current_game.playerA.ready = true;
                }
                else if (client === current_game.playerB){
                    current_game.playerB.ready = true;
                }

                /*tell both players that game begins*/
                if (current_game.bothPlayersReady())
                {
                    message.type = "gamestate";

                    message.message = 1;
                    current_game.playerA.send(JSON.stringify(message));

                    message.message = 2;
                    current_game.playerB.send(JSON.stringify(message));
                }
            }
            /*player has shot*/
            else if (data.message === 1)
            {
                /*send other player coordinates of shot*/
                let message = {
                    type:"serverdata",
                    message:1,
                    data:0
                };

                if (client === current_game.playerA){
                    message.data = current_game.playerA.shootCoords;
                    current_game.playerB.send(JSON.stringify(message));
                }
                else if (client === current_game.playerB){
                    message.data = current_game.playerB.shootCoords;
                    current_game.playerA.send(JSON.stringify(message));
                }
            }
        }

        /*playerdata*/
        if (data.type === "playerdata")
        {
            /*nickname*/
            if (data.message === 0)
            {
                if (client === current_game.playerA){
                    current_game.playerA.nickname = data.data;
                    console.log("player: " + current_game.playerA.nickname + " joined");
                }
                else if (client === current_game.playerB){
                    current_game.playerB.nickname = data.data;
                    console.log("player: " + current_game.playerB.nickname + " joined");

                    /*send playerA nickname of playerB*/
                    let message = {
                        type:"serverdata",
                        message:0,
                        data:current_game.playerB.nickname
                    };
                    current_game.playerA.send(JSON.stringify(message));
                }
            }

            /*array*/
            else if (data.message === 1)
            {
                if (client === current_game.playerA){
                    current_game.playerA.board = data.data;
                }
                else if (client === current_game.playerB){
                    current_game.playerB.board = data.data;
                }
            }

            /*shoot coordinates*/
            else if (data.message === 2)
            {
                if (client === current_game.playerA){
                    current_game.playerA.shootCoords = data.data;
                }
                else if (client === current_game.playerB){
                    current_game.playerB.shootCoords = data.data;
                }
            }

            /*hit or miss*/
            else if (data.message === 3)
            {
                /*send player who shot if it hit or missed*/
                let message = {
                    type:"serverdata",
                    message:2,
                    data: data.data
                };

                if (client === current_game.playerA){
                    current_game.playerB.send(JSON.stringify(message));
                }
                else if (client === current_game.playerB){
                    current_game.playerA.send(JSON.stringify(message));
                }

                message.type = "gamestate";
                message.message = 1;
                message.data = 0;

                /*check if player lost*/
                if (current_game.checkEmptyBoard(client))
                {
                    if (client === current_game.playerA)
                    {
                        message.message = 4;
                        current_game.playerA.send(JSON.stringify(message));
                        message.message = 3;
                        current_game.playerB.send(JSON.stringify(message));
                        console.log("player: " + current_game.playerB.nickname + " won");
                    }
                    else if (client === current_game.playerB)
                    {
                        message.message = 4;
                        current_game.playerB.send(JSON.stringify(message));
                        message.message = 3;
                        current_game.playerA.send(JSON.stringify(message));
                        console.log("player: " + current_game.playerA.nickname + " won");
                    }
                }
                /*if miss then other player can now shoot*/
                else if (client === current_game.playerA){
                    if (!data.data)
                    {
                        current_game.playerA.send(JSON.stringify(message));
                        message.message = 2;
                        current_game.playerB.send(JSON.stringify(message));
                    }
                    /*else tell player he can shoot again*/
                    else
                    {
                        current_game.playerB.send(JSON.stringify(message));
                        message.message = 2;
                        current_game.playerA.send(JSON.stringify(message));
                    }
                }
                /*if miss then other player can now shoot*/
                else if (client === current_game.playerB){
                    if (!data.data)
                    {
                        current_game.playerB.send(JSON.stringify(message));
                        message.message = 2;
                        current_game.playerA.send(JSON.stringify(message));
                    }
                    /*else tell player he can shoot again*/
                    else
                    {
                        current_game.playerA.send(JSON.stringify(message));
                        message.message = 2;
                        current_game.playerB.send(JSON.stringify(message));
                    }
                }
            }

            /*Game time (for highscore)*/
            else if(data.message === 4)
            {
                let time = data.data;
                let datestring = "01/01/2000 00:";

                if(time.length === 4){
                    datestring += "0" + time;
                }
                else if (time.length === 5){
                    datestring += time;
                }

                let current_date = new Date(datestring);
                if (GameStats.highScore.getTime() === (new Date("01/01/2000 00:00:00").getTime()))
                {
                    GameStats.highScore = current_date;
                }
                else if (current_date < GameStats.highScore){
                    GameStats.highScore = current_date;
                }
            }
        }
    });

    client.on("close", function(code){
        let current_game = game_at_id[client.id];

        let message = {
            type:"status",
            message:2
        };

        GameStats.amountPlayers--;
        if (!current_game.hasOnePlayer()){
            current_game.resetPlayer(client);
        }
        else{
            if (!(GameStats.amountGames === 0)){
                GameStats.amountGames--;
            }
        }

        if (current_game.playerA === client){
            console.log("player: " + current_game.playerA.nickname + " left");
            current_game.playerA = null;
            if (current_game.hasOnePlayer()){
                current_game.playerB.send(JSON.stringify(message));
            }
        }
        else if (current_game.playerB === client){
            console.log("player: " + current_game.playerB.nickname + " left");
            current_game.playerB = null;
            if (current_game.hasOnePlayer()){
                current_game.playerA.send(JSON.stringify(message));
            }
        }

        /*if (!game.hasOnePlayer()){
            game = current_game;
        }
        else {
            next_game = current_game;
        }*/
    });

});

server.listen(port, () =>{
      console.log("Server Started on Port " + port);
});

/*
::SOCKET CODES::

--SEND TO PLAYER--
status 0 : wait for player
status 1 : start the game
status 2 : player left

gamestate 0 : place boats
gamestate 1 : Shoot
gamestate 2 : wait for turn
gamestate 3 : won
gamestate 4 : lost

serverdata 0 : nickname
serverdata 1 : shot coordinates other player
serverdata 2 : hit or miss

--SEND TO SERVER--
playerstatus 0 : boats placed
playerstatus 1 : shot opponent

playerdata 0 : nickname
playerdata 1 : array
playerdata 2 : shoot coordinates
playerdata 3 : hit or miss (true or false)
playerdata 4 : gametime
*/
