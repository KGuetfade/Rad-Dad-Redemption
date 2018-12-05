var game = function(){
    this.playerA = null;
    this.playerB = null;
    this.state = 0;
}

game.prototype.addPlayer = function(player){
    if (this.playerA === null)
    {
        this.playerA = player;
    }
    else if (this.playerB === null)
    {
        this.playerB = player;
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

module.exports = game;
