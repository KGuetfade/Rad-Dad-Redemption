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
    var seconds = 60;
    var minutes = 4;

   function decMin(){   
       minutes--;
       document.getElementById("time").innerHTML = minutes + ":" + seconds;
   }

   function decSec(){
    if(seconds === 0) { 
        document.getElementById("time").innerHTML = minutes + ":0" + seconds;
        seconds = 59;
    }
    else {
        seconds = seconds - 1;
        if(seconds < 10){
            document.getElementById("time").innerHTML = minutes + ":0" + seconds;
        }
        else{
            document.getElementById("time").innerHTML = minutes + ":" + seconds;
        }
    }
   }

   var x = setInterval(decSec, 1000);
   var y = setInterval(decMin, 61000);

});
