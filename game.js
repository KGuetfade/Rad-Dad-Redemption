var game = function(player_A, player_B){
    this.playerA = player_A;
    this.playerB = player_B;
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
