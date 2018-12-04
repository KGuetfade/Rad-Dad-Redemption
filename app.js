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

http.createServer(app).listen(port, "127.0.0.1", () =>{
      console.log("Server Started on Port " + port);
});

