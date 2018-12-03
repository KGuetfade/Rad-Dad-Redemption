$(function(){
    $(".board-item").on("click", function(){
        var cell = $(this);
        if (!(cell.prop("tagName") === "TH"))
        {
            cell.css("background-color", "gray");
        }
    });
});
