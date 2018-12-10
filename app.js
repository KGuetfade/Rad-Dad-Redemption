const express = require("express");
const http = require("http");
const path = require("path");
const websocket = require("ws");

const app = express();
const port = process.argv[2];

var indexRouter = require("./routes/index.js");
var Game = require("./game.js");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + '/public')));

app.get("/", indexRouter);
app.get("/splash", indexRouter);
app.get("/game", indexRouter);

var server = http.createServer(app);
const wss = new websocket.Server({ server });

var game = new Game();
var id_counter = 0;
var game_at_id = {};

wss.on("connection", function(ws){

    /* Initialize client and game*/
    let client = ws;
    client.id = id_counter++;
    game_at_id[client.id] = game;
    console.log("Socket connection made with ID: " + client.id);

    if(!game.hasTwoPlayers()){
        game.addPlayer(client);

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

            game = new Game();
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
                    console.log("player A nickname: " + current_game.playerA.nickname);
                }
                else if (client === current_game.playerB){
                    current_game.playerB.nickname = data.data;
                    console.log("player B nickname: " + current_game.playerB.nickname);

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
                    console.log(current_game.playerA.board);
                }
                else if (client === current_game.playerB){
                    current_game.playerB.board = data.data;
                    console.log(current_game.playerB.board);
                }
            }

            /*shoot coordinates*/
            else if (data.message === 2)
            {
                if (client === current_game.playerA){
                    current_game.playerA.shootCoords = data.data;
                    console.log(current_game.playerA.shootCoords);
                }
                else if (client === current_game.playerB){
                    current_game.playerB.shootCoords = data.data;
                    console.log(current_game.playerB.shootCoords);
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
                        console.log("player B won");
                    }
                    else if (client === current_game.playerB)
                    {
                        message.message = 4;
                        current_game.playerB.send(JSON.stringify(message));
                        message.message = 3;
                        current_game.playerA.send(JSON.stringify(message));
                        console.log("player A won");
                    }
                }

                /*if miss then other player can now shoot*/
                if (client === current_game.playerA){
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
                else if (client === current_game.playerB){
                    if (!data.data)
                    {
                        current_game.playerB.send(JSON.stringify(message));
                        message.message = 2;
                        current_game.playerA.send(JSON.stringify(message));
                    }
                    else
                    {
                        current_game.playerA.send(JSON.stringify(message));
                        message.message = 2;
                        current_game.playerB.send(JSON.stringify(message));
                    }
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

        if (current_game.playerA === client){
            current_game.playerA = null;
            current_game.playerB.send(JSON.stringify(message));
        }
        else if (current_game.playerB === client){
            current_game.playerB = null;
            current_game.playerA.send(JSON.stringify(message));
        }
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
*/
