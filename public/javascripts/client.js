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
            }
            /*won*/
            else if (data.message === 3)
            {
                $(".board-itemE").off("click");
                showWinScreen();

            }
            /*lost*/
            else if (data.message === 4)
            {
                showLossScreen();
            }
        }

        /*serverdata*/
        if (data.type === "serverdata")
        {
            /*nickname*/
            if (data.message === 0)
            {
                $("#your_name").html(nickname);
                /*set nicknames*/
                $("#other_name").html(data.data);
            }

            /*shot coordinates other player*/
            else if (data.message === 1)
            {
                let shootCoords = data.data;
                let hit = player.isHit(shootCoords);
                hitBoat(shootCoords, hit);

                let message = {
                    type:"playerdata",
                    message:1,
                    data:player.board
                };
                socket.send(JSON.stringify(message));

                /*send hit or miss*/
                message.message = 3;
                message.data = hit;
                socket.send(JSON.stringify(message));
            }

            /*see if you hit or missed*/
            else if (data.message === 2)
            {
                let board = document.getElementsByTagName("td");
                let i = (player.shootCoords[1] + (player.shootCoords[0]*10));
                let hit = data.data;

                if (hit){
                    board[i].setAttribute("class", "destroyed");
                }
                else{
                    board[i].setAttribute("class", "missed");
                }
            }

        }
    }
}

var placeBoats = function(){
    $("#buttonReady").on("click", function(){
        /*check if all boats are placed*/
        if (!(four === 0 && three === 0 && two === 0 && one === 0))
        {
            alert("You haven't placed all your boats")
            return;
        }

        /*do some styling shit*/
        $('#buttonReadyWrapper').css("display", "none");
        $('.board-item').off('click');

        document.getElementById('boat').style.display = "none";
        document.getElementById('number').style.display = "none";
        document.getElementById('h4').style.display = "none";

        $("#state").html("Waiting for other player to be ready");

        /*send your board to server */
        let message = {
            type: "playerdata",
            message:1,
            data:player.board
        };
        socket.send(JSON.stringify(message));

        /*send that boats are placed*/
        message.type = "playerstatus";
        message.message = 0;
        message.data = 0;

        socket.send(JSON.stringify(message));
        $("#buttonReady").off("click");
    });
}

var shoot = function(){
    $(".board-itemE").on("click", function(){
        /*send coordinates of shot*/
        let cell = $(this);
        let message = {
            type: "playerdata",
            message: 2,
            data: player.Shoot(cell)
        };

        socket.send(JSON.stringify(message));

        /*send that you shot*/
        message.type = "playerstatus";
        message.message = 1;
        message.data = 0;

        socket.send(JSON.stringify(message));

        $(".board-itemE").off("click");
        $(this).removeClass("board-itemE");

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

var showWinScreen = function(){
    $('#myModal').css("display", "block");
    $('#modal-text').html("You won!");
}

var showLossScreen = function(){
    $('#myModal').css("display", "block");
    $('#modal-text').html($("#other_name").text() + " won.");
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
