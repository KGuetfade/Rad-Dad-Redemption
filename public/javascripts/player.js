var socket = new WebSocket("ws://localhost:3000")

/* Listens for connection and executes function when connection is made */
socket.onopen = function(event){
    socket.send("hello from client");
}

/* Listens for message from server
   Gets triggered when server does ws.send();
*/
socket.onmessage = function(event){
    alert(event.data);
}

var player = function(playerID){
    this.ID = playerID;
    this.board = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]; //10x10
    this.ships = 0;
    this.gamestate = 0;
}

player.prototype.Shoot = function(){
    //shoot on other board and then send the coordinates to server
}

