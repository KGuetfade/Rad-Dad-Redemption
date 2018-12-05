var socket = new WebSocket("ws://localhost:3000")

socket.onopen = function(event){
    socket.send("hello from client");
}

socket.onmessage = function(event){
    alert(event.data);
}

var player = function(playerID){
    this.ID = playerID;
    this.board = [[],[]]; //10x10
    this.ships = 0;
    this.gamestate = 0;
}

player.prototype.Shoot = function(){
    //shoot on other board and then send the coordinates to server
}

module.exports = player;
