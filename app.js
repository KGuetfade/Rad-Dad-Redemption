const express = require("express");
const http = require("http");
const path = require("path");
const websocket = require("ws");

const app = express();
const port = process.argv[2];

var Game = require("./game.js")

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + '/public')));

app.get("/", function(req, res) {
      res.statusCode = 200;
      res.sendFile("splash.html", {root: "./public"});
})

var server = http.createServer(app);
const wss = new websocket.Server({ server });

var game = new Game();
var id_counter = 0;
var game_at_id = {};

wss.on("connection", function(ws){
    console.log("Socket connection made");

    /* Initialize client and game*/
    let client = ws;
    client.id = id_counter++;
    game_at_id[client.id] = game;

    if(!game.hasTwoPlayers()){
        game.addPlayer(client);

        if (game.hasOnePlayer()){
            //player 1 has to wait for player 2 and can't make a move until then
            let message = {
                type:"status",
                message:0
            };

            client.send(JSON.stringify(message));
        }
        else{
            //2 players have connected, now both players have to put their boats
            let message = {
                type:"status",
                message:1
            };

            game.sendBothPlayers(message);

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

        if (data.type === "playerstatus")
        {
            //player is done placing boats
            if (data.message === 0)
            {
                if (client === current_game.playerA){
                    current_game.playerA.ready = true;
                }
                else if (client === current_game.playerB){
                    current_game.playerB.ready = true;
                }

                //tell both players that game beginss
                if (current_game.bothPlayersReady())
                {
                    message.type = "gamestate";
                    message.message = 1;

                    current_game.sendBothPlayers(message);
                }
            }
        }
    });

    client.on("close", function(code){
        let current_game = game_at_id[client.id];
        if (current_game.playerA === client){
            current_game.playerA = null;
        }
        else if (current_game.playerB === client){
            current_game.playerB = null;
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

gamestate 0 : place Boats
gamestate 1 : shoot (play the game)

--SEND TO SERVER--
playerstatus 0 : boats placed
*/
