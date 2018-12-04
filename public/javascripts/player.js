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
