var socket = new WebSocket("ws://localhost:3000")
var player = new player("karim");

socket.onopen = function(event){

    socket.onmessage = function(event){
        data = JSON.parse(event.data);

        if (data.type === "string")
        {
            alert(data.message);
        }
    }
}
