const express = require("express");
const http = require("http");
const path = require("path");
const websocket = require("ws");

const app = express();
const port = process.argv[2];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + '/public')));

app.get("/", function(req, res) {
      res.statusCode = 200;
      res.sendFile("splash.html", {root: "./public"});
})

var server = http.createServer(app);  //create http server from app
const wss = new websocket.Server({ server });  //create websocket server from server

/* Listens to websocket connection from client and then fires function */
wss.on("connection", function(ws){
    console.log("Socket connection made");

    /* Listens for message from client (socket.send in player.js) and then fires function */
    ws.on("message", function(data){
        console.log(data);
    });

    /* Sends data to client */
    ws.send("hello from server");

});

server.listen(port, () =>{
      console.log("Server Started on Port " + port);
});
