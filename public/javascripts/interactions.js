$(function(){
    
});

var player1 = new player();

var j = 1;
var i = 0;
var array = [4, 3, 2, 1];

var four = 1;
var three = 2;
var two = 3;
var one = 4;

/*
$(".board-item").hover(function(){
    var cell = $(this).next('td');
    var cell2 = cell.next('td');
    var cell3 = cell2.next('td');
    var index = $(this).prevAll().length
    var index2 = $(this).parent().prevAll().length;
    var cellBelow = $(this).parent().next('tr').children('td:nth-child(' + (index + 1) + ')');
    var cellBelow2 = cellBelow.parent().next('tr').children('td:nth-child(' + (index + 1) + ')');
    var cellBelow3 = cellBelow2.parent().next('tr').children('td:nth-child(' + (index + 1) + ')');
    if(player1.board[index2-1][index-1] !== 1){
    if(j === 0 && array[i] === 4 && player1.board[index2-1][index] !== 1 && player1.board[index2-1][index+1] !== 1 && player1.board[index2-1][index+2] !== 1){
    cell.css("background-color","#00008B");
    cell2.css("background-color","#00008B");
    cell3.css("background-color","#00008B");
    $(this).css("background-color","#00008B");
    }
    else if(j === 0 && array[i] === 3 && player1.board[index2-1][index] !== 1 && player1.board[index2-1][index+1] !== 1){
        cell.css("background-color","#00008B");
        cell2.css("background-color","#00008B");
        $(this).css("background-color","#00008B");
    }
    else if(j === 0 && array[i] === 2 && player1.board[index2-1][index] !== 1){
        cell.css("background-color","#00008B");
        $(this).css("background-color","#00008B");
    }
    else if(array[i]===1){
        $(this).css("background-color", "#00008B");
    }
    if(j === 1 && array[i] === 4 && player1.board[index2][index-1] !== 1 && player1.board[index2+1][index-1] !== 1 && player1.board[index2+2][index-1] !== 1){
        cellBelow.css("background-color","#00008B");
        cellBelow2.css("background-color","#00008B");
        cellBelow3.css("background-color","#00008B");
        $(this).css("background-color","#00008B");
        }
    else if(j === 1 && array[i] === 3 && player1.board[index2][index-1] !== 1 && player1.board[index2+1][index-1] !== 1){
        cellBelow.css("background-color","#00008B");
        cellBelow2.css("background-color","#00008B");
        $(this).css("background-color","#00008B");
    }
    else if(j === 1 && array[i] === 2 && player1.board[index2][index-1] !== 1){
        cellBelow.css("background-color","#00008B");
        $(this).css("background-color","#00008B");
    }
    }

    $(function(){

        var j = 1;
        var i = 0;
        var array = [4, 3, 2, 1];

        /*
        $(".board-item").hover(function(){
            var cell = $(this).next('td');
            var cell2 = cell.next('td');
            var cell3 = cell2.next('td');
            var index = $(this).prevAll().length
            var index2 = $(this).parent().prevAll().length;
            var cellBelow = $(this).parent().next('tr').children('td:nth-child(' + (index + 1) + ')');
            var cellBelow2 = cellBelow.parent().next('tr').children('td:nth-child(' + (index + 1) + ')');
            var cellBelow3 = cellBelow2.parent().next('tr').children('td:nth-child(' + (index + 1) + ')');
            if(player1.board[index2-1][index-1] !== 1){
            if(j === 0 && array[i] === 4 && player1.board[index2-1][index] !== 1 && player1.board[index2-1][index+1] !== 1 && player1.board[index2-1][index+2] !== 1){
            cell.css("background-color","#00008B");
            cell2.css("background-color","#00008B");
            cell3.css("background-color","#00008B");
            $(this).css("background-color","#00008B");
            }
            else if(j === 0 && array[i] === 3 && player1.board[index2-1][index] !== 1 && player1.board[index2-1][index+1] !== 1){
                cell.css("background-color","#00008B");
                cell2.css("background-color","#00008B");
                $(this).css("background-color","#00008B");
            }
            else if(j === 0 && array[i] === 2 && player1.board[index2-1][index] !== 1){
                cell.css("background-color","#00008B");
                $(this).css("background-color","#00008B");
            }
            else if(array[i]===1){
                $(this).css("background-color", "#00008B");
            }
            if(j === 1 && array[i] === 4 && player1.board[index2][index-1] !== 1 && player1.board[index2+1][index-1] !== 1 && player1.board[index2+2][index-1] !== 1){
                cellBelow.css("background-color","#00008B");
                cellBelow2.css("background-color","#00008B");
                cellBelow3.css("background-color","#00008B");
                $(this).css("background-color","#00008B");
                }
            else if(j === 1 && array[i] === 3 && player1.board[index2][index-1] !== 1 && player1.board[index2+1][index-1] !== 1){
                cellBelow.css("background-color","#00008B");
                cellBelow2.css("background-color","#00008B");
                $(this).css("background-color","#00008B");
            }
            else if(j === 1 && array[i] === 2 && player1.board[index2][index-1] !== 1){
                cellBelow.css("background-color","#00008B");
                $(this).css("background-color","#00008B");
            }
            }
});

$(".board-item").mouseleave(function(){
    var cell = $(this).next('td');
    var cell2 = cell.next('td');
    var cell3 = cell2.next('td');
    var index = $(this).prevAll().length
    var index2 = $(this).parent().prevAll().length;
    var cellBelow = $(this).parent().next('tr').children('td:nth-child(' + (index + 1) + ')');
    var cellBelow2 = cellBelow.parent().next('tr').children('td:nth-child(' + (index + 1) + ')');
    var cellBelow3 = cellBelow2.parent().next('tr').children('td:nth-child(' + (index + 1) + ')');
    if(j===0){
    if(player1.board[index2-1][index-1] !== 1 && player1.board[index2-1][index] !== 1 && player1.board[index2-1][index+1] !== 1 && player1.board[index2-1][index+2] !== 1){
    cell.css("background-color","transparent");
    cell2.css("background-color","transparent");
    cell3.css("background-color","transparent");
    $(this).css("background-color","transparent");
    }
    else if(player1.board[index2-1][index+2] === 1 && player1.board[index2-1][index+1] !== 1 && player1.board[index2-1][index] !== 1){
        cell.css("background-color","transparent");
        cell2.css("background-color","transparent");
        $(this).css("background-color","transparent");
    }
    else if(player1.board[index2-1][index+1] === 1 && player1.board[index2-1][index] !== 1){
        cell.css("background-color","transparent");
        $(this).css("background-color","transparent");
    }
    else if(player1.board[index2-1][index-1] !== 1){
        $(this).css("background-color","transparent");
    }
    }
    if(j===1){
    if(player1.board[index2-1][index-1] !== 1 && player1.board[index2][index-1] !== 1 && player1.board[index2+1][index-1] !== 1 && player1.board[index2+2][index-1] !== 1){
        cellBelow.css("background-color","transparent");
        cellBelow2.css("background-color","transparent");
        cellBelow3.css("background-color","transparent");
        $(this).css("background-color","transparent");
    }
    else if(j === 1 && array[i] === 3 && player1.board[index2][index-1] !== 1 && player1.board[index2+1][index-1] !== 1){
        cellBelow.css("background-color","transparent");
        cellBelow2.css("background-color","transparent");
        $(this).css("background-color","transparent");
    }
    else if(j === 1 && array[i] === 2 && player1.board[index2][index-1] !== 1){
        cellBelow.css("background-color","transparent");
        $(this).css("background-color","transparent");
    }
    else if(player1.board[index2-1][index-1] !== 1){
        $(this).css("background-color","transparent");
    }
}
});
*/


$(".board-itemE").on("click", function(){
    alert(player1.Shoot($(this)));
});

$(".board-item").on("click", function(){

    var cell = $(this);
    var cell2 = $(this).next('td');
    var cell3 = cell2.next('td');
    var cell4 = cell3.next('td');

    var index = $(this).prevAll().length
    var index2 = $(this).parent().prevAll().length;
    var cellBelow = $(this).parent().next('tr').children('td:nth-child(' + (index + 1) + ')');
    var cellBelow2 = cellBelow.parent().next('tr').children('td:nth-child(' + (index + 1) + ')');
    var cellBelow3 = cellBelow2.parent().next('tr').children('td:nth-child(' + (index + 1) + ')');

    if(array[i] === 4 && player1.board[index2-1][index-1] !== 1){
    if (!(cell.prop("tagName") === "TH"))
    {
        if(j === 0 && cell4.prevAll().length !== 0 && player1.board[index2-1][index] !== 1 && player1.board[index2-1][index+1] !== 1 && player1.board[index2-1][index+2] !== 1){
        cell.css("background-color", "gray");
        cell2.css("background-color", "gray");
        cell3.css("background-color", "gray");
        cell4.css("background-color", "gray");
        player1.board[index2-1][index - 1] = 1;
        player1.board[index2-1][index] = 1;
        player1.board[index2-1][index + 1] = 1;
        player1.board[index2-1][index + 2] = 1;  
        cell.removeClass("board-item");
        cell2.removeClass("board-item");
        cell3.removeClass("board-item");
        cell4.removeClass("board-item");
        cell.addClass("fourBoat");
        cell2.addClass("fourBoat");
        cell3.addClass("fourBoat");
        cell4.addClass("fourBoat");
        four--;
        }
        else if(j === 1 && cellBelow3.prevAll().length !== 0 && player1.board[index2][index-1] !== 1 && player1.board[index2+1][index-1] !== 1 && player1.board[index2+2][index-1] !== 1){
        cell.css("background-color", "gray");
        cellBelow.css("background-color", "gray");
        cellBelow2.css("background-color", "gray");
        cellBelow3.css("background-color", "gray");
        player1.board[index2-1][index - 1] = 1;
        player1.board[index2][index - 1] = 1;
        player1.board[index2 + 1][index - 1] = 1;
        player1.board[index2 + 2][index - 1] = 1;
        cell.removeClass("board-item");
        cellBelow.removeClass("board-item");
        cellBelow2.removeClass("board-item");
        cellBelow3.removeClass("board-item");
        cell.addClass("fourBoat");
        cellBelow.addClass("fourBoat");
        cellBelow2.addClass("fourBoat");
        cellBelow3.addClass("fourBoat");
        four--;
        }
    }
    }
    else if(array[i] === 3 && player1.board[index2-1][index-1] !== 1){
        if (!(cell.prop("tagName") === "TH"))
        {
            if(j === 0 && cell3.prevAll().length !== 0 && player1.board[index2-1][index] !== 1 && player1.board[index2-1][index+1] !== 1){
                cell.css("background-color", "gray");
                cell2.css("background-color", "gray");
                cell3.css("background-color", "gray");
                player1.board[index2-1][index - 1] = 1;
                player1.board[index2-1][index] = 1;
                player1.board[index2-1][index + 1] = 1;
                cell.removeClass("board-item");
                cell2.removeClass("board-item");
                cell3.removeClass("board-item");
                cell.addClass("threeBoat" + three);
                cell2.addClass("threeBoat" + three);
                cell3.addClass("threeBoat" + three);
                three--;
                }
                else if(j === 1 && cellBelow2.prevAll().length !== 0 && player1.board[index2][index-1] !== 1 && player1.board[index2+1][index-1] !== 1){
                cell.css("background-color", "gray");
                cellBelow.css("background-color", "gray");
                cellBelow2.css("background-color", "gray");
                player1.board[index2-1][index - 1] = 1;
                player1.board[index2][index - 1] = 1;
                player1.board[index2 + 1][index - 1] = 1;
                cell.removeClass("board-item");
                cellBelow.removeClass("board-item");
                cellBelow2.removeClass("board-item");
                cellBelow3.removeClass("board-item");
                cell.addClass("threeBoat" + three);
                cellBelow.addClass("threeBoat" + three);
                cellBelow2.addClass("threeBoat" + three);   
                three--;                     }
        }
        }
    else if(array[i] === 2 && player1.board[index2-1][index-1] !== 1){
        if (!(cell.prop("tagName") === "TH"))
        {
            if(j === 0 && cell2.prevAll().length !== 0 && player1.board[index2-1][index] !== 1){
                cell.css("background-color", "gray");
                cell2.css("background-color", "gray");
                player1.board[index2-1][index - 1] = 1;
                player1.board[index2-1][index] = 1;
                cell.removeClass("board-item");
                cell2.removeClass("board-item");
                cell.addClass("twoBoat" + two);
                cell2.addClass("twoBoat" + two);
                two--;                       
                }
                else if(j === 1 && cellBelow.prevAll().length !== 0 && player1.board[index2][index-1] !== 1){
                cell.css("background-color", "gray");
                cellBelow.css("background-color", "gray");
                player1.board[index2-1][index - 1] = 1;
                player1.board[index2][index - 1] = 1;
                cell.removeClass("board-item");
                cellBelow.removeClass("board-item");
                cell.addClass("twoBoat" + two);
                cellBelow.addClass("twoBoat" + two);  
                two--;              
                }
        }
        }
    else if(array[i] === 1 && player1.board[index2-1][index-1] !== 1){
        if (!(cell.prop("tagName") === "TH"))
        {
            cell.css("background-color", "gray");
            player1.board[index2-1][index - 1] = 1; 
            cell.removeClass("board-item");
            cell.addClass("oneBoat" + one);
            one--;
            }
        }

        if(array[i] === 4){
            document.getElementById("number").innerHTML = "(" + four + ")";
        }
        else if(array[i] === 3){
            document.getElementById("number").innerHTML = "(" + three + ")";
        }
        else if(array[i] === 2){
            document.getElementById("number").innerHTML = "(" + two + ")";
        }
        else if(array[i] === 1){
            document.getElementById("number").innerHTML = "(" + one + ")";
        }
});

$(document).keydown(function(event) {
    switch(event.which) {
        case 37:
        i++;
        if(i>3){
            i = 0;
        }
        if(array[i] === 1){
            document.getElementById("b4").style.display = "none";
            document.getElementById("b3").style.display = "none";
            document.getElementById("b2").style.display = "none";
            document.getElementById("b1").style.display = "table-cell";
            document.getElementById("number").innerHTML = "(" + one + ")";
        }
        else if(array[i] === 2){
            document.getElementById("b4").style.display = "none";
            document.getElementById("b3").style.display = "none";
            document.getElementById("b2").style.display = "table-cell";
            document.getElementById("b1").style.display = "table-cell";
            document.getElementById("number").innerHTML = "(" + two + ")";

        }
        else if(array[i] === 3){
            document.getElementById("b4").style.display = "none";
            document.getElementById("b3").style.display = "table-cell";
            document.getElementById("b2").style.display = "table-cell";
            document.getElementById("b1").style.display = "table-cell";
            document.getElementById("number").innerHTML = "(" + three + ")";

        }
        else if(array[i] === 4){
            document.getElementById("b4").style.display = "table-cell";
            document.getElementById("b3").style.display = "table-cell";
            document.getElementById("b2").style.display = "table-cell";
            document.getElementById("b1").style.display = "table-cell";
            document.getElementById("number").innerHTML = "(" + four + ")";

        }
        break;

        case 38:
        if(j === 0){
            j = 1;
            document.getElementById("h4").innerHTML = "Vertical";
        }
        else if(j === 1){
            j = 0;
            document.getElementById("h4").innerHTML = "Horizontal";
        }
        break;

        case 39:
        i--;
        if(i<0){
            i = 3;
        }
        if(array[i] === 1){
            document.getElementById("b4").style.display = "none";
            document.getElementById("b3").style.display = "none";
            document.getElementById("b2").style.display = "none";
            document.getElementById("b1").style.display = "table-cell";
            document.getElementById("number").innerHTML = "(" + one + ")";

        }
        else if(array[i] === 2){
            document.getElementById("b4").style.display = "none";
            document.getElementById("b3").style.display = "none";
            document.getElementById("b2").style.display = "table-cell";
            document.getElementById("b1").style.display = "table-cell";
            document.getElementById("number").innerHTML = "(" + two + ")";

        }
        else if(array[i] === 3){
            document.getElementById("b4").style.display = "none";
            document.getElementById("b3").style.display = "table-cell";
            document.getElementById("b2").style.display = "table-cell";
            document.getElementById("b1").style.display = "table-cell";
            document.getElementById("number").innerHTML = "(" + three + ")";

        }
        else if(array[i] === 4){
            document.getElementById("b4").style.display = "table-cell";
            document.getElementById("b3").style.display = "table-cell";
            document.getElementById("b2").style.display = "table-cell";
            document.getElementById("b1").style.display = "table-cell";
            document.getElementById("number").innerHTML = "(" + four + ")";

        }
        break;

        case 40:
        if(j === 0){
            j = 1;
            document.getElementById("h4").innerHTML = "Vertical";
        }
        else if(j === 1){
            j = 0;
            document.getElementById("h4").innerHTML = "Horizontal";
        }
        break;

        default: return;
    }
    event.preventDefault();
});
