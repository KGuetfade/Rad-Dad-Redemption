$(function(){
    $(".board-item").on("click", function(){
        var cell = $(this);
        if (!(cell.prop("tagName") === "TH"))
        {
            cell.css("background-color", "gray");
        }
    });

    var seconds = 0;
    var minutes = 0;

    function incMin(){
       minutes++;
       document.getElementById("time").innerHTML = minutes + ":0" + seconds;
    }

    function incSec(){
    if(seconds === 59) {
        seconds = 0;
        document.getElementById("time").innerHTML = minutes + ":0" + seconds;
    }
    else {
        seconds++;
        if(seconds < 10){
            document.getElementById("time").innerHTML = minutes + ":0" + seconds;
        }
        else{
            document.getElementById("time").innerHTML = minutes + ":" + seconds;
        }
    }
    }

    var x = setInterval(incSec, 1000);
    var y = setInterval(incMin, 60000);


    var i = 1;
    var array = [4, 3, 2, 1];
    document.getElementById("trr").onclick = function(){
        if(i>3){
            i = 0;
        }
        if(array[i] === 3){
            document.getElementById("b4").style.display = "none";
            i++;
        }
        else if(array[i] === 2){
            document.getElementById("b3").style.display = "none";
            i++;
        }
        else if(array[i] === 1){
            document.getElementById("b2").style.display = "none";
            i++;
        }
        else if(array[i] === 4){
            document.getElementById("b4").style.display = "table-cell";
            document.getElementById("b3").style.display = "table-cell";
            document.getElementById("b2").style.display = "table-cell";
            i++;
        }
    }
});
