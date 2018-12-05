const express = require("express");
const http = require("http");
const path = require("path");
const websocket = require("ws");
var game = require("./game");
//var player = require("./public/javascripts/player.js")

const app = express();
const port = process.argv[2];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + '/public')));

app.get("/", function(req, res) {
      res.statusCode = 200;
      res.sendFile("splash.html", {root: "./public"});
})

var server = http.createServer(app);
const wss = new websocket.Server({ server });

var playerID = 0;
var game = new Game();

wss.on("connection", function(ws){
    console.log("Socket connection made");

    //var player = new Player(playerID);
    playerID++;

    if (!game.hasTwoPlayers)
    {
        //game.addPlayer(player);
    }
    else
    {
        game = new Game();
    }

    ws.on("message", function(data){
        console.log(data);
    });

    ws.send("hello from server");

});

server.listen(port, () =>{
      console.log("Server Started on Port " + port);
});
