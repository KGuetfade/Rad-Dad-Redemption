var Player = function(){
    this.board = [];
    this.ships = 0;
    this.shootCoords = [-1,-1];

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
        this.shootCoords = array;
        return this.shootCoords;
}

Player.prototype.isHit = function(array){
    if(this.board[array[0]][array[1]] === 1){
        this.board[array[0]][array[1]] = 0;
        return true;
    }
    else if(this.board[array[0]][array[1]] === 0){
        return false;
    }else{
        return false;
    }
}

Player.prototype.clearBoard = function(){
    this.board = [];

    for (var i = 0; i < 10; i++)
    {
        var row = [];
        for (var j = 0; j < 10; j ++)
        {
            row.push(0);
        }

        this.board.push(row);
    }

    cells = $("td");
        for(var i = 0; i < cells.length; i++){
            if(cells[i].className !== "board-itemE" && cells[i].className !== "boat-item1" && cells[i].className !== "boat-item2" && cells[i].className !== "boat-item3" && cells[i].className !== "boat-item4"){
            cells[i].removeAttribute("id");
            cells[i].className = "board-item";
            }
            else if(cells[i].className !== "boat"){
                cells[i].className = "board-itemE";
            }
        }

    four = 1;
    three = 2;
    two = 3;
    one = 4;
}
