var Game = function(){
    this.playerA = null;
    this.playerB = null;
    this.state = 0;
}

Game.prototype.addPlayer = function(player){
    if (this.playerA === null)
    {
        this.playerA = player;
        this.playerA.nickname = "";
        this.playerA.ready = false;
        this.playerA.board = [];
        this.playerA.shootCoords = [-1,-1];
    }
    else if (this.playerB === null)
    {
        this.playerB = player;
        this.playerB.nickname = "";
        this.playerB.ready = false;
        this.playerB.board = [];
        this.playerB.shootCoords = [-1,-1];
    }
}

Game.prototype.hasTwoPlayers = function(){
    if (this.playerA != null && this.playerB != null)
    {
        return true;
    }

    return false;
}

Game.prototype.hasOnePlayer = function(){
    if ((this.playerA != null && this.playerB === null) || (this.playerA === null && this.playerB != null)){
        return true;
    }

    return false;
}

Game.prototype.bothPlayersReady = function(){
    if (this.playerA.ready && this.playerB.ready){
        return true;
    }

    return false;
}

Game.prototype.sendBothPlayers = function(message){
    this.playerA.send(JSON.stringify(message));
    this.playerB.send(JSON.stringify(message));
}

Game.prototype.checkEmptyBoard = function(client){
    var board = client.id === this.playerA.id ? this.playerA.board : this.playerB.board;

    for (var i = 0; i < board.length; i++)
    {
        let row = board[i];
        for (var j = 0; j < row.length; j++){
            if (board[i][j] === 1){
                return false;
            }
        }
    }
    return true;
}

Game.prototype.resetPlayer = function(client){
    if (client.id === this.playerA.id)
    {
        
    }
    else if (client.id === this.playerB.id)
    {

    }
}
module.exports = Game;
