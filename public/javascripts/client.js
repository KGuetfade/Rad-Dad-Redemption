var socket = new WebSocket("ws://localhost:3000")
var player = new player();

socket.onopen = function(event){

    socket.onmessage = function(event){
        data = JSON.parse(event.data);

        if (data.type === "status")
        {
            waitPlayer2(data);
        }

        if (data.type === "gamestate")
        {
            if (data.message === 0)
            {
                $("#state").html("You can now place your boats");

                //place boats

                let message = {
                    type: "playerstatus",
                    message: 0
                };
                socket.send(JSON.stringify(message));
            }
            else if (data.message === 1)
            {
                $("#state").html("You can now shoot the other player!");
                //shoot
            }
        }
    }
}

var waitPlayer2 = function(data){
    if (data.message === 0)
    {
        $('#myModal').css("display", "block");
    }

    if (data.message === 1)
    {
        $('#myModal').css("display", "none");
    }
}
