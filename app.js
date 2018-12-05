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

var server = http.createServer(app);
const wss = new websocket.Server({ server });

wss.on("connection", function(ws){
    console.log("Socket connection made");

    ws.on("message", function(data){
        console.log(data);
    });

    ws.send("hello from server");

});

server.listen(port, () =>{
      console.log("Server Started on Port " + port);
});
