$(function(){
    $(".board-item").on("click", function(){
        var cell = $(this);
        if (!(cell.prop("tagName") === "TH"))
        {
            cell.css("background-color", "gray");
        }
    });
});


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
