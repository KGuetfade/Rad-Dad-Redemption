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
            let message = {
                type:"string",
                message:"Waiting for player 2"
            };

            client.send(JSON.stringify(message));
        }
        else{
            let message = {
                type:"string",
                message:"2 Players in game, game will start"
            };

            game.playerA.send(JSON.stringify(message));
            game.playerB.send(JSON.stringify(message));

            game = new Game();
        }
    }

    ws.on("message", function(data){

    });

});

server.listen(port, () =>{
      console.log("Server Started on Port " + port);
});
