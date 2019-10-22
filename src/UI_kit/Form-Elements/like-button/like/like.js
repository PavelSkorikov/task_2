$(document).ready(function() {
    $(".like").click(function(){
        $(this).toggleClass("like_checked");
        var count = parseInt($(this).children(".like__count").text());
        if (!$(this).hasClass("like_checked")) {
            $(this).children(".like__count").text(count-1);
        }
        else $(this).children(".like__count").text(count+1); 
    });
});