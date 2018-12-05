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
            //player 1 has to wait for player 2 and can't make a move untill then
            let message = {
                type:"string",
                message:"Waiting for player 2"
            };

            client.send(JSON.stringify(message));
        }
        else{
            //2 players have connected, now both players have to put their boats?
            let message = {
                type:"string",
                message:"2 Players in game, game will start"
            };

            game.playerA.send(JSON.stringify(message));
            game.playerB.send(JSON.stringify(message));

            game = new Game();
        }
    }

    ws.on("message", function(raw_data){
        let game = game_at_id[client.id];
        let data = JSON.parse(raw_data);

        
    });

});

server.listen(port, () =>{
      console.log("Server Started on Port " + port);
});
