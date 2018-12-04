
$(function(){
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

});

$(function(){
    var i = 0;
    var array = [4, 3, 2, 1];

    $(".board-item").on("click", function(){

        var cell = $(this);
        var cell2 = $(this).next('td');
        var cell3 = cell2.next('td');
        var cell4 = cell3.next('td');

        if(array[i] === 4){
        if (!(cell.prop("tagName") === "TH"))
        {
            cell.css("background-color", "gray");
            cell2.css("background-color", "gray");
            cell3.css("background-color", "gray");
            cell4.css("background-color", "gray");
        }
        }
        else if(array[i] === 3){
            if (!(cell.prop("tagName") === "TH"))
            {
                cell.css("background-color", "gray");
                cell2.css("background-color", "gray");
                cell3.css("background-color", "gray");
            }
            }
        else if(array[i] === 2){
            if (!(cell.prop("tagName") === "TH"))
            {
                cell.css("background-color", "gray");
                cell2.css("background-color", "gray");
            }
            }
        else if(array[i] === 1){
            if (!(cell.prop("tagName") === "TH"))
            {
                cell.css("background-color", "gray");
            }
            }
    });

    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: i++;
            if(i>3){
                i = 0;
            }
            if(array[i] === 1){
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
            else if(array[i] === 3){
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
            if(array[i] === 1){
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
            else if(array[i] === 3){
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
    
            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });
});
