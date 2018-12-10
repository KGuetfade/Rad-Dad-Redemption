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

$(document).on('click', '.fourBoat', function () {

    var index = $(this).prevAll().length
    var index2 = $(this).parent().prevAll().length;

    var boats = document.getElementsByClassName("fourBoat");

    if($(this).attr('id') == "clicked"){

        boats[0].removeAttribute('id');
        boats[1].removeAttribute('id');
        boats[2].removeAttribute('id');
        boats[3].removeAttribute('id');
        boats[3].className = "board-item";
        boats[2].className = "board-item";
        boats[1].className = "board-item";
        boats[0].className = "board-item";
        if(j === 0){
        player.board[index2-1][index - 1] = 0;
        player.board[index2-1][index] = 0;
        player.board[index2-1][index + 1] = 0;
        player.board[index2-1][index + 2] = 0;
        }
        else{
        player.board[index2-1][index - 1] = 0;
        player.board[index2][index - 1] = 0;
        player.board[index2 + 1][index - 1] = 0;
        player.board[index2 + 2][index - 1] = 0;
        }
        four++;
        if(array[i] === 4){
        document.getElementById("number").innerHTML = "(" + four + ")";
        }
    }
    else{
    boats[0].setAttribute('id', 'clicked');
    boats[1].setAttribute('id', 'clicked');
    boats[2].setAttribute('id', 'clicked');
    boats[3].setAttribute('id', 'clicked');
    }
});

$(document).on('click', '.threeBoat1', function () {

    var index = $(this).prevAll().length
    var index2 = $(this).parent().prevAll().length;

    var boats = document.getElementsByClassName("threeBoat1");

    if($(this).attr('id') == "clicked"){

        boats[0].removeAttribute('id');
        boats[1].removeAttribute('id');
        boats[2].removeAttribute('id');
        boats[2].className = "board-item";
        boats[1].className = "board-item";
        boats[0].className = "board-item";
        if(j === 0){
        player.board[index2-1][index - 1] = 0;
        player.board[index2-1][index] = 0;
        player.board[index2-1][index + 1] = 0;
        }
        else{
        player.board[index2-1][index - 1] = 0;
        player.board[index2][index - 1] = 0;
        player.board[index2 + 1][index - 1] = 0;
        }
        three++;
        if(array[i] === 3){
        document.getElementById("number").innerHTML = "(" + three + ")";
        }
    }
    else{
    boats[0].setAttribute('id', 'clicked');
    boats[1].setAttribute('id', 'clicked');
    boats[2].setAttribute('id', 'clicked');
    }
});

$(document).on('click', '.threeBoat2', function () {

    var index = $(this).prevAll().length
    var index2 = $(this).parent().prevAll().length;

    var boats = document.getElementsByClassName("threeBoat2");

    if($(this).attr('id') == "clicked"){

        boats[0].removeAttribute('id');
        boats[1].removeAttribute('id');
        boats[2].removeAttribute('id');
        boats[2].className = "board-item";
        boats[1].className = "board-item";
        boats[0].className = "board-item";
        if(j === 0){
        player.board[index2-1][index - 1] = 0;
        player.board[index2-1][index] = 0;
        player.board[index2-1][index + 1] = 0;
        }
        else{
        player.board[index2-1][index - 1] = 0;
        player.board[index2][index - 1] = 0;
        player.board[index2 + 1][index - 1] = 0;
        }
        three++;
        if(array[i] === 3){
        document.getElementById("number").innerHTML = "(" + three + ")";
        }
    }
    else{
    boats[0].setAttribute('id', 'clicked');
    boats[1].setAttribute('id', 'clicked');
    boats[2].setAttribute('id', 'clicked');
    }
});



$(document).on('click', '.twoBoat2', function () {

    var index = $(this).prevAll().length
    var index2 = $(this).parent().prevAll().length;

    var boats = document.getElementsByClassName("twoBoat2");

    if($(this).attr('id') == "clicked"){

        boats[0].removeAttribute('id');
        boats[1].removeAttribute('id');
        boats[1].className = "board-item";
        boats[0].className = "board-item";
        if(j === 0){
        player.board[index2-1][index - 1] = 0;
        player.board[index2-1][index] = 0;
        }
        else{
        player.board[index2-1][index - 1] = 0;
        player.board[index2][index - 1] = 0;
        }
        two++;
        if(array[i] === 2){
        document.getElementById("number").innerHTML = "(" + two + ")";
        }
    }
    else{
    boats[0].setAttribute('id', 'clicked');
    boats[1].setAttribute('id', 'clicked');
    }
});

$(document).on('click', '.twoBoat3', function () {

    var index = $(this).prevAll().length
    var index2 = $(this).parent().prevAll().length;

    var boats = document.getElementsByClassName("twoBoat3");

    if($(this).attr('id') == "clicked"){

        boats[0].removeAttribute('id');
        boats[1].removeAttribute('id');
        boats[1].className = "board-item";
        boats[0].className = "board-item";
        if(j === 0){
        player.board[index2-1][index - 1] = 0;
        player.board[index2-1][index] = 0;
        }
        else{
        player.board[index2-1][index - 1] = 0;
        player.board[index2][index - 1] = 0;
        }
        two++;
        if(array[i] === 2){
        document.getElementById("number").innerHTML = "(" + two + ")";
        }
    }
    else{
    boats[0].setAttribute('id', 'clicked');
    boats[1].setAttribute('id', 'clicked');
    }
});

$(document).on('click', '.twoBoat1', function () {

    var index = $(this).prevAll().length
    var index2 = $(this).parent().prevAll().length;

    var boats = document.getElementsByClassName("twoBoat1");

    if($(this).attr('id') == "clicked"){

        boats[0].removeAttribute('id');
        boats[1].removeAttribute('id');
        boats[1].className = "board-item";
        boats[0].className = "board-item";
        if(j === 0){
        player.board[index2-1][index - 1] = 0;
        player.board[index2-1][index] = 0;
        }
        else{
        player.board[index2-1][index - 1] = 0;
        player.board[index2][index - 1] = 0;
        }
        two++;
        if(array[i] === 2){
        document.getElementById("number").innerHTML = "(" + two + ")";
        }
    }
    else{
    boats[0].setAttribute('id', 'clicked');
    boats[1].setAttribute('id', 'clicked');
    }
});

$(document).on('click', '.oneBoat1', function () {

    var index = $(this).prevAll().length
    var index2 = $(this).parent().prevAll().length;

    var boats = document.getElementsByClassName("oneBoat1");

    if($(this).attr('id') == "clicked"){

        boats[0].removeAttribute('id');
        boats[0].className = "board-item";
        if(j === 0){
        player.board[index2-1][index - 1] = 0;
        }
        else{
        player.board[index2-1][index - 1] = 0;
        }
        one++;
        if(array[i] === 1){
        document.getElementById("number").innerHTML = "(" + one + ")";
        }
    }
    else{
    boats[0].setAttribute('id', 'clicked');
    }
});

$(document).on('click', '.oneBoat2', function () {

    var index = $(this).prevAll().length
    var index2 = $(this).parent().prevAll().length;

    var boats = document.getElementsByClassName("oneBoat2");

    if($(this).attr('id') == "clicked"){

        boats[0].removeAttribute('id');
        boats[0].className = "board-item";
        if(j === 0){
        player.board[index2-1][index - 1] = 0;
        }
        else{
        player.board[index2-1][index - 1] = 0;
        }
        one++;
        if(array[i] === 1){
        document.getElementById("number").innerHTML = "(" + one + ")";
        }
    }
    else{
    boats[0].setAttribute('id', 'clicked');
    }
});

$(document).on('click', '.oneBoat3', function () {

    var index = $(this).prevAll().length
    var index2 = $(this).parent().prevAll().length;

    var boats = document.getElementsByClassName("oneBoat3");

    if($(this).attr('id') == "clicked"){

        boats[0].removeAttribute('id');
        boats[0].className = "board-item";
        if(j === 0){
        player.board[index2-1][index - 1] = 0;
        }
        else{
        player.board[index2-1][index - 1] = 0;
        }
        one++;
        if(array[i] === 1){
        document.getElementById("number").innerHTML = "(" + one + ")";
        }
    }
    else{
    boats[0].setAttribute('id', 'clicked');
    }
});

$(document).on('click', '.oneBoat4', function () {

    var index = $(this).prevAll().length
    var index2 = $(this).parent().prevAll().length;

    var boats = document.getElementsByClassName("oneBoat4");

    if($(this).attr('id') == "clicked"){

        boats[0].removeAttribute('id');
        boats[0].className = "board-item";
        if(j === 0){
        player.board[index2-1][index - 1] = 0;
        }
        else{
        player.board[index2-1][index - 1] = 0;
        }
        one++;
        if(array[i] === 1){
        document.getElementById("number").innerHTML = "(" + one + ")";
        }
    }
    else{
    boats[0].setAttribute('id', 'clicked');
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
        }
        if(threeboatA === 0){
            alert("BOAT DESTROYED");
            threeboatA--;
        }
        if(threeboatB === 0){
            alert("BOAT DESTROYED");
            threeboatB--;
        }
        if(twoboatA === 0){
            alert("BOAT DESTROYED");
            twoboatA--;
        }
        if(twoboatB === 0){
            alert("BOAT DESTROYED");
            twoboatB--;
        }
        if(twoboatC === 0){
            alert("BOAT DESTROYED");
            twoboatC--;
        }
        if(oneboatA === 0){
            alert("BOAT DESTROYED");
            oneboatA--;
        }
        if(oneboatB === 0){
            alert("BOAT DESTROYED");
            oneboatB--;
        }
        if(oneboatC === 0){
            alert("BOAT DESTROYED");
            oneboatC--;
        }
        if(oneboatD === 0){
            alert("BOAT DESTROYED");
            oneboatD--;
        }
    }
    else if(!hit){
        board[i].setAttribute('id', 'missed');
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

        /*if(four ===0 && three === 0 && two === 0 && one === 0){
            $("ready").css("background-color", "gray");
            $("ready").addId("ready");
        }*/
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
    if(player.board[index2-1][index-1] !== 1){
    if(j === 0 && array[i] === 4 && player.board[index2-1][index] !== 1 && player.board[index2-1][index+1] !== 1 && player.board[index2-1][index+2] !== 1){
    cell.css("background-color","#00008B");
    cell2.css("background-color","#00008B");
    cell3.css("background-color","#00008B");
    $(this).css("background-color","#00008B");
    }
    else if(j === 0 && array[i] === 3 && player.board[index2-1][index] !== 1 && player.board[index2-1][index+1] !== 1){
        cell.css("background-color","#00008B");
        cell2.css("background-color","#00008B");
        $(this).css("background-color","#00008B");
    }
    else if(j === 0 && array[i] === 2 && player.board[index2-1][index] !== 1){
        cell.css("background-color","#00008B");
        $(this).css("background-color","#00008B");
    }
    else if(array[i]===1){
        $(this).css("background-color", "#00008B");
    }
    if(j === 1 && array[i] === 4 && player.board[index2][index-1] !== 1 && player.board[index2+1][index-1] !== 1 && player.board[index2+2][index-1] !== 1){
        cellBelow.css("background-color","#00008B");
        cellBelow2.css("background-color","#00008B");
        cellBelow3.css("background-color","#00008B");
        $(this).css("background-color","#00008B");
        }
    else if(j === 1 && array[i] === 3 && player.board[index2][index-1] !== 1 && player.board[index2+1][index-1] !== 1){
        cellBelow.css("background-color","#00008B");
        cellBelow2.css("background-color","#00008B");
        $(this).css("background-color","#00008B");
    }
    else if(j === 1 && array[i] === 2 && player.board[index2][index-1] !== 1){
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
            if(player.board[index2-1][index-1] !== 1){
            if(j === 0 && array[i] === 4 && player.board[index2-1][index] !== 1 && player.board[index2-1][index+1] !== 1 && player.board[index2-1][index+2] !== 1){
            cell.css("background-color","#00008B");
            cell2.css("background-color","#00008B");
            cell3.css("background-color","#00008B");
            $(this).css("background-color","#00008B");
            }
            else if(j === 0 && array[i] === 3 && player.board[index2-1][index] !== 1 && player.board[index2-1][index+1] !== 1){
                cell.css("background-color","#00008B");
                cell2.css("background-color","#00008B");
                $(this).css("background-color","#00008B");
            }
            else if(j === 0 && array[i] === 2 && player.board[index2-1][index] !== 1){
                cell.css("background-color","#00008B");
                $(this).css("background-color","#00008B");
            }
            else if(array[i]===1){
                $(this).css("background-color", "#00008B");
            }
            if(j === 1 && array[i] === 4 && player.board[index2][index-1] !== 1 && player.board[index2+1][index-1] !== 1 && player.board[index2+2][index-1] !== 1){
                cellBelow.css("background-color","#00008B");
                cellBelow2.css("background-color","#00008B");
                cellBelow3.css("background-color","#00008B");
                $(this).css("background-color","#00008B");
                }
            else if(j === 1 && array[i] === 3 && player.board[index2][index-1] !== 1 && player.board[index2+1][index-1] !== 1){
                cellBelow.css("background-color","#00008B");
                cellBelow2.css("background-color","#00008B");
                $(this).css("background-color","#00008B");
            }
            else if(j === 1 && array[i] === 2 && player.board[index2][index-1] !== 1){
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
    if(player.board[index2-1][index-1] !== 1 && player.board[index2-1][index] !== 1 && player.board[index2-1][index+1] !== 1 && player.board[index2-1][index+2] !== 1){
    cell.css("background-color","transparent");
    cell2.css("background-color","transparent");
    cell3.css("background-color","transparent");
    $(this).css("background-color","transparent");
    }
    else if(player.board[index2-1][index+2] === 1 && player.board[index2-1][index+1] !== 1 && player.board[index2-1][index] !== 1){
        cell.css("background-color","transparent");
        cell2.css("background-color","transparent");
        $(this).css("background-color","transparent");
    }
    else if(player.board[index2-1][index+1] === 1 && player.board[index2-1][index] !== 1){
        cell.css("background-color","transparent");
        $(this).css("background-color","transparent");
    }
    else if(player.board[index2-1][index-1] !== 1){
        $(this).css("background-color","transparent");
    }
    }
    if(j===1){
    if(player.board[index2-1][index-1] !== 1 && player.board[index2][index-1] !== 1 && player.board[index2+1][index-1] !== 1 && player.board[index2+2][index-1] !== 1){
        cellBelow.css("background-color","transparent");
        cellBelow2.css("background-color","transparent");
        cellBelow3.css("background-color","transparent");
        $(this).css("background-color","transparent");
    }
    else if(j === 1 && array[i] === 3 && player.board[index2][index-1] !== 1 && player.board[index2+1][index-1] !== 1){
        cellBelow.css("background-color","transparent");
        cellBelow2.css("background-color","transparent");
        $(this).css("background-color","transparent");
    }
    else if(j === 1 && array[i] === 2 && player.board[index2][index-1] !== 1){
        cellBelow.css("background-color","transparent");
        $(this).css("background-color","transparent");
    }
    else if(player.board[index2-1][index-1] !== 1){
        $(this).css("background-color","transparent");
    }
}
});
*/
