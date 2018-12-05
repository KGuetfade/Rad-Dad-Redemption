
var player = function(){
    this.board = []
    this.ships = 0;
    this.gamestate = 0;

    //make board 10x10 with 0's
    for (var i = 0; i < 10; i++)
    {
        var row = [];
        for (var j = 0; j < 10; j ++)
        {
            row.push(0);
        }

        this.board.push(row);
    }
}

player.prototype.Shoot = function(){
    //shoot on other board and then send the coordinates to server
}
