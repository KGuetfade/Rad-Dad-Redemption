var player = function(){
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

player.prototype.Shoot = function(box){
        var index = box.prevAll().length
        var index2 = box.parent().prevAll().length;
        var array = [index2, index];
        return array;
}

player.prototype.setBoats = function(){
    //set boats at beginning of game
}
