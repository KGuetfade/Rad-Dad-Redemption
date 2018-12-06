
var game = function(){
    this.playerA = null;
    this.playerB = null;
    this.state = 0;
}

game.prototype.addPlayer = function(player){
    if (this.playerA === null)
    {
        this.playerA = player;
        this.playerA.ready = false;
    }
    else if (this.playerB === null)
    {
        this.playerB = player;
        this.playerB.ready = false;
    }
}

game.prototype.hasTwoPlayers = function(){
    if (this.playerA != null && this.playerB != null)
    {
        return true;
    }

    return false;
}

game.prototype.hasOnePlayer = function(){
    if ((this.playerA != null && this.playerB === null) || (this.playerA === null && this.playerB != null)){
        return true;
    }

    return false;
}

game.prototype.bothPlayersReady = function(){
    if (this.playerA.ready && this.playerB.ready){
        return true;
    }

    return false;
}


module.exports = game;
