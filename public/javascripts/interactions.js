$(function(){

});

var player = new Player();

var j = 1;
var i = 0;
var array = [4, 3, 2, 1];

var four = 1;
var three = 2;
var two = 3;
var one = 4;

var fourboat = 4;
var threeboatA = 3;
var threeboatB = 3;
var twoboatA = 2;
var twoboatB = 2;
var twoboatC = 2;
var oneboatA = 1;
var oneboatB = 1;
var oneboatC = 1;
var oneboatD = 1;

var total = 0;

var v = 0;

var updateTotal = function(){
    document.getElementById("OwnTotal").innerHTML = total;
}


$(document).keydown(function(event){
    if(v === 0){
    if(event.which === 8){

        player.clearBoard();

    }

    boatAmount();

}
});


var hitBoat = function(coords, hit){

    var board = document.getElementsByTagName("td");
    var i = (coords[1] + (coords[0]*10));
    var classname = board[i].className;

    if(hit){

        board[i].setAttribute('id', 'hit');

        if(classname == "fourBoat"){
            fourboat--;
        }
        else if(classname == "threeBoat1"){
            threeboatA--;
        }
        else if(classname == "threeBoat2"){
            threeboatB--;
        }
        else if(classname == "twoBoat1"){
            twoboatA--;
        }
        else if(classname == "twoBoat2"){
            twoboatB--;
        }
        else if(classname == "twoBoat3"){
            twoboatC--;
        }
        else if(classname == "oneBoat1"){
            oneboatA--;
        }
        else if(classname == "oneBoat2"){
            oneboatB--;
        }
        else if(classname == "oneBoat3"){
            oneboatC--;
        }
        else if(classname == "oneBoat4"){
            oneboatD--;
        }

        if(fourboat === 0){
            alert("BOAT DESTROYED");
            fourboat--;
            total--;
        }
        if(threeboatA === 0){
            alert("BOAT DESTROYED");
            threeboatA--;
            total--;
        }
        if(threeboatB === 0){
            alert("BOAT DESTROYED");
            threeboatB--;
            total--;
        }
        if(twoboatA === 0){
            alert("BOAT DESTROYED");
            twoboatA--;
            total--;
        }
        if(twoboatB === 0){
            alert("BOAT DESTROYED");
            twoboatB--;
            total--;
        }
        if(twoboatC === 0){
            alert("BOAT DESTROYED");
            twoboatC--;
            total--;
        }
        if(oneboatA === 0){
            alert("BOAT DESTROYED");
            oneboatA--;
            total--;
        }
        if(oneboatB === 0){
            alert("BOAT DESTROYED");
            oneboatB--;
            total--;
        }
        if(oneboatC === 0){
            alert("BOAT DESTROYED");
            oneboatC--;
            total--;
        }
        if(oneboatD === 0){
            alert("BOAT DESTROYED");
            oneboatD--;
            total--;
        }
        updateTotal();
    }
    else if(!hit){
        board[i].setAttribute('id', 'missed');
    }
}

var boatAmount = function(){
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
}

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

    if(array[i] === 4 && player.board[index2-1][index-1] !== 1 && four !== 0){
    if (!(cell.prop("tagName") === "TH"))
    {
        if(j === 0 && cell4.prevAll().length !== 0 && player.board[index2-1][index] !== 1 && player.board[index2-1][index+1] !== 1 && player.board[index2-1][index+2] !== 1 && four !== 0){
        player.board[index2-1][index - 1] = 1;
        player.board[index2-1][index] = 1;
        player.board[index2-1][index + 1] = 1;
        player.board[index2-1][index + 2] = 1;
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
        else if(j === 1 && cellBelow3.prevAll().length !== 0 && player.board[index2][index-1] !== 1 && player.board[index2+1][index-1] !== 1 && player.board[index2+2][index-1] !== 1 && four !== 0){
        player.board[index2-1][index - 1] = 1;
        player.board[index2][index - 1] = 1;
        player.board[index2 + 1][index - 1] = 1;
        player.board[index2 + 2][index - 1] = 1;
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
        total++;
    }
    }
    else if(array[i] === 3 && player.board[index2-1][index-1] !== 1 && three !== 0){
        if (!(cell.prop("tagName") === "TH"))
        {
            if(j === 0 && cell3.prevAll().length !== 0 && player.board[index2-1][index] !== 1 && player.board[index2-1][index+1] !== 1 && three !== 0){
                player.board[index2-1][index - 1] = 1;
                player.board[index2-1][index] = 1;
                player.board[index2-1][index + 1] = 1;
                cell.removeClass("board-item");
                cell2.removeClass("board-item");
                cell3.removeClass("board-item");
                cell.addClass("threeBoat" + three);
                cell2.addClass("threeBoat" + three);
                cell3.addClass("threeBoat" + three);
                three--;
                }
                else if(j === 1 && cellBelow2.prevAll().length !== 0 && player.board[index2][index-1] !== 1 && player.board[index2+1][index-1] !== 1 && three !== 0){
                player.board[index2-1][index - 1] = 1;
                player.board[index2][index - 1] = 1;
                player.board[index2 + 1][index - 1] = 1;
                cell.removeClass("board-item");
                cellBelow.removeClass("board-item");
                cellBelow2.removeClass("board-item");
                cellBelow3.removeClass("board-item");
                cell.addClass("threeBoat" + three);
                cellBelow.addClass("threeBoat" + three);
                cellBelow2.addClass("threeBoat" + three);
                three--;                     }
                total++;
        }
        }
    else if(array[i] === 2 && player.board[index2-1][index-1] !== 1 && two !== 0){
        if (!(cell.prop("tagName") === "TH"))
        {
            if(j === 0 && cell2.prevAll().length !== 0 && player.board[index2-1][index] !== 1){
                player.board[index2-1][index - 1] = 1;
                player.board[index2-1][index] = 1;
                cell.removeClass("board-item");
                cell2.removeClass("board-item");
                cell.addClass("twoBoat" + two);
                cell2.addClass("twoBoat" + two);
                two--;
                }
                else if(j === 1 && cellBelow.prevAll().length !== 0 && player.board[index2][index-1] !== 1){
                player.board[index2-1][index - 1] = 1;
                player.board[index2][index - 1] = 1;
                cell.removeClass("board-item");
                cellBelow.removeClass("board-item");
                cell.addClass("twoBoat" + two);
                cellBelow.addClass("twoBoat" + two);
                two--;
                }
            total++;
        }
        }
    else if(array[i] === 1 && player.board[index2-1][index-1] !== 1 && one !== 0){
        if (!(cell.prop("tagName") === "TH"))
        {
            player.board[index2-1][index - 1] = 1;
            cell.removeClass("board-item");
            cell.addClass("oneBoat" + one);
            one--;
            }
            total++;
        }
        boatAmount();
        updateTotal();

});

var boatSize = function(){
    
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
}

var resetDirection = function(){

    if(j === 0){
        j = 1;
        document.getElementById("h4").innerHTML = "Vertical";
    }
    else if(j === 1){
        j = 0;
        document.getElementById("h4").innerHTML = "Horizontal";
    }
}

$(document).keydown(function(event) {
    switch(event.which) {
        case 37:
        i++;
        if(i>3){
            i = 0;
        }

        boatSize();

        break;

        case 38:

        resetDirection();

        break;

        case 39:
        i--;
        if(i<0){
            i = 3;
        }

        boatSize();

        break;

        case 40:

        resetDirection();
        
        break;

        default: return;
    }
    event.preventDefault();
});
