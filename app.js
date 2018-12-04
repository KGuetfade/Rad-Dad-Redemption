const express = require("express");
const http = require("http");
const fs = require("fs");
const path = require("path");
const websocket = require("ws");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + '/public')));

app.get("/", function(req, res) {
      res.statusCode = 200;
      res.sendFile("splash.html", {root: "./public"});
})

var server = http.createServer(app);
const wss = new websocket.Server({server});

/* Listens for websocket connection and returns the websocket (Ws)*/
wss.on("connection", function(ws)
{
    console.log("Websocket connection made with status " + ws.readyState);

    /* Listen for "message" event, takes the data and logs it
       Gets triggered when client uses socket.send();
    */
    ws.on("message", function(data){
        console.log(data);
    });

    ws.send("Received your message");
});

 server.listen(port, function(){
    console.log("Server Started on Port " + port);
});
