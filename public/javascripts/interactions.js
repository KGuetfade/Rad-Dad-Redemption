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


<<<<<<< HEAD
    var i = 1;
=======
$(function(){
    var i = 0;
>>>>>>> a460955e585e1fa1d2cfd83909b3e7041d63574b
    var array = [4, 3, 2, 1];

    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: i++;
            if(i>3){
                i = 0;
            }
            if(array[i] === 3){
                document.getElementById("b4").style.display = "none";
                document.getElementById("b3").style.display = "none";
                document.getElementById("b2").style.display = "none";
                document.getElementById("b1").style.display = "table-cell";
            }
            else if(array[i] === 2){
                document.getElementById("b4").style.display = "none";
                document.getElementById("b3").style.display = "none";
                document.getElementById("b2").style.display = "table-cell";
                document.getElementById("b1").style.display = "table-cell";
            }
            else if(array[i] === 1){
                document.getElementById("b4").style.display = "none";
                document.getElementById("b3").style.display = "table-cell";
                document.getElementById("b2").style.display = "table-cell";
                document.getElementById("b1").style.display = "table-cell";
            }
            else if(array[i] === 4){
                document.getElementById("b4").style.display = "table-cell";
                document.getElementById("b3").style.display = "table-cell";
                document.getElementById("b2").style.display = "table-cell";
                document.getElementById("b1").style.display = "table-cell";
            }
            break;
    
            case 38: // up
            break;
    
            case 39: i--;
            if(i<0){
                i = 3;
            }
            if(array[i] === 3){
                document.getElementById("b4").style.display = "none";
                document.getElementById("b3").style.display = "none";
                document.getElementById("b2").style.display = "none";
                document.getElementById("b1").style.display = "table-cell";
            }
            else if(array[i] === 2){
                document.getElementById("b4").style.display = "none";
                document.getElementById("b3").style.display = "none";
                document.getElementById("b2").style.display = "table-cell";
                document.getElementById("b1").style.display = "table-cell";
            }
            else if(array[i] === 1){
                document.getElementById("b4").style.display = "none";
                document.getElementById("b3").style.display = "table-cell";
                document.getElementById("b2").style.display = "table-cell";
                document.getElementById("b1").style.display = "table-cell";
            }
            else if(array[i] === 4){
                document.getElementById("b4").style.display = "table-cell";
                document.getElementById("b3").style.display = "table-cell";
                document.getElementById("b2").style.display = "table-cell";
                document.getElementById("b1").style.display = "table-cell";
            }
            break;
    
            case 40: // down
            break;
    
            defa
            ult: return; // exit this handler for other keys
        }
<<<<<<< HEAD
    }
});
=======
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });
});


>>>>>>> a460955e585e1fa1d2cfd83909b3e7041d63574b
