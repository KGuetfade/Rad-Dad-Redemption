var Player = function(){
    this.board = []
    this.ships = 0;

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

Player.prototype.Shoot = function(box){
        var index = box.prevAll().length - 1;
        var index2 = box.parent().prevAll().length - 1;
        var array = [index2, index];
        return array;
}

Player.prototype.HitorMis = function(array){
    if(board[array[0]][array[1]] === 1){
        return true;
    }
    else if(board[array[0]][array[1]] === 0){
        return false;
    }
}

Player.prototype.setBoats = function(){
    //set boats at beginning of game
}
