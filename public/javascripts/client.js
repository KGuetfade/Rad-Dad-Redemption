var socket = new WebSocket("ws://localhost:3000")
var player1 = new Player();
var nickname = localStorage.getItem("user_nickname");

socket.onopen = function(event){

    //send nickname to server
    let message = {
        type:"playerdata",
        message:0,
        data:nickname
    };
    socket.send(JSON.stringify(message));

    socket.onmessage = function(event){
        data = JSON.parse(event.data);

        /*status*/
        if (data.type === "status")
        {
            waitPlayer2(data);
        }

        /*gamestate*/
        if (data.type === "gamestate")
        {
            /*place boats*/
            if (data.message === 0)
            {
                startTimer();
                $("#state").html("You can now place your boats");
                placeBoats();
            }
            /*shoot*/
            else if (data.message === 1)
            {
                $("#state").html("Your turn to shoot");
                shoot();

            }
            /*wait for turn*/
            else if (data.message === 2)
            {
                $("#state").html("Opponent's turn to shoot");
                //disable board click?
                //wait for player 1 to shoot
            }
        }

        /*serverdata*/
        if (data.type === "serverdata")
        {
            /*nickname*/
            if (data.message === 0)
            {
                /*set nicknames*/
                $("#other_name").html(data.data);
                $("#your_name").html(nickname);
            }
        }
    }
}

var placeBoats = function(){
    $("#buttonReady").on("click", function(){
        //check if all boats are placed
        $('#buttonReadyWrapper').css("display", "none");
        $("#state").html("Waiting for other player to be ready");

        let message = {
            type: "playerdata",
            message:1,
            data:player.board
        };
        socket.send(JSON.stringify(message));

        message.type = "playerstatus";
        message.message = 0;
        message.data = 0;

        socket.send(JSON.stringify(message));
    });
}

var shoot = function(){
    $(".board-itemE").on("click", function(){
        let cell = $(this);
        let message = {
            type: "playerdata",
            message: 2,
            data: player.Shoot(cell)
        };

        socket.send(JSON.stringify(message));
    });
}

var waitPlayer2 = function(data){
    if (data.message === 0)
    {
        $('#myModal').css("display", "block");
    }

    if (data.message === 1)
    {
        $('#myModal').css("display", "none");
        $('#buttonReadyWrapper').css("display", "block");
    }
}

var startTimer = function(){
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
