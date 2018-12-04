const express = require("express");
const http = require("http");
const cookies = require("cookie-parser");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3000;

fs.readFile('splash.html', (err, html) => {
    if(err){
        throw err;
    }
    app.get("/", function(req, res) {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();
    })
    
    app.listen(port, function(){
        console.log("Server Started on Port " + port);
    });
})

