var Game = function(){
    this.playerA = null;
    this.playerB = null;
    this.state = 0;
}

Game.prototype.addPlayer = function(player){
    if (this.playerA === null)
    {
        this.playerA = player;
        this.playerA.ready = false;
        this.playerA.board = [];
    }
    else if (this.playerB === null)
    {
        this.playerB = player;
        this.playerB.ready = false;
        this.playerB.board = [];
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


module.exports = game;
