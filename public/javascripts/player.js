var socket = new WebSocket("ws://localhost:3000")

socket.onopen = function(event){
    socket.send("hello from client");
}

socket.onmessage = function(event){
    alert(event.data);
}

var player = function(playerID){
    this.ID = playerID;
    this.board = []
    this.ships = 0;
    this.gamestate = 0;

    //make board 10x10 with 0's
    for (var i = 0; i < 10; i++)
    {
        var row = [];
        for (var j = 0; j < 10; j ++)
        {
            row.push(0);
        }

        this.board.push(row);
    }
}

player.prototype.Shoot = function(){
    //shoot on other board and then send the coordinates to server
}

module.exports = player;
