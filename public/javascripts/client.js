var socket = new WebSocket("ws://localhost:3000")
var player = new player();

socket.onopen = function(event){

    socket.onmessage = function(event){
        data = JSON.parse(event.data);

        if (data.type === "string")
        {
            alert(data.message);
            //waitPlayer2(data);

        }
    }
}

var waitPlayer2 = function(data){
    if (data.message === "Waiting for player 2")
    {
        $('#myModal').css("display", "block");
    }

    if (data.message === "2 Players in game, game will start")
    {
        $('#myModal').css("display", "none");
    }
}
