var socket = new WebSocket("ws://localhost:3000")
var player = new player();

socket.onopen = function(event){

    socket.onmessage = function(event){
        data = JSON.parse(event.data);

        if (data.type === "string")
        {
            //alert(data.message);
            waitPlayer2(data);

        }
    }
    
    var seconds = 0;
    var minutes = 0;

    function incMin(){
       minutes++;
       document.getElementById("time").innerHTML = minutes + ":0" + seconds;
    }

    function incSec(){
    if(seconds === 59) {
        seconds = 0;
        document.getElementById("time").innerHTML = minutes + ":0" + seconds;
    }
    else {
        seconds++;
        if(seconds < 10){
            document.getElementById("time").innerHTML = minutes + ":0" + seconds;
        }
        else{
            document.getElementById("time").innerHTML = minutes + ":" + seconds;
        }
    }
    }
    
    var x = setInterval(incSec, 1000);
    var y = setInterval(incMin, 60000);
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

