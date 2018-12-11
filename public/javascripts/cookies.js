var setCookie = function(cookieType, cookieValue, expDate){
    var date = new Date();
    date.setTime(date.getTime() + (expDate*24*60*60*1000));
    var expiration = "expiress=" + date.toUTCString();
    document.cookie = cookieType + "=" + cookieValue + ";" + expiration + ";path=/";
}

var getCookie = function(cookieType){
    var type = cookieType + "=";
    var decCookie = decodeURIComponent(document.cookie);
    var splitCookie = decCookie.split(";");
    for(var i = 0; i < splitCookie.length; i++){
        var cookie = splitCookie[i];
        while(cookie.charAt(0) == ' '){
            cookie = cookie.substring(1);
        }

        if(cookie.indexOf(type) == 0) {
            return cookie.substring(type.length, cookie.length);
        }
    }
    return "";
}

var checkCookie = function(){
    var visitTime = getCookie("visitTime");
    if(visitTime != ""){
        alert("You've visited " + visitTime + " times");
        visitTime++;
        setCookie("visitTime", visitTime, 69);
    }
    else{
        alert("Welcome!");
        visitTime = 1;
        setCookie("visitTime", visitTime, 69);
    }
}

document.getElementById("body").onload = function(){
    checkCookie();
}