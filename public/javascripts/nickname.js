document.getElementById("buttonStart").addEventListener("click", function(){
    document.getElementById("nicknameModal").style.display = "block";
});

document.getElementById("nickname-submit").addEventListener("click", function()
{
    var nickname = document.getElementById("nickname-input").value;
    if (nickname === "")
    {
        alert("ENTER A NICKNAME");
    }
    else
    {
        localStorage.setItem("user_nickname", nickname);
        document.getElementById("gameLink").click();
    }
});
