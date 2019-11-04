$(document).ready(function() {
    $(".button-short").hover(function(){
        if($(this).hasClass('button-short_style_light')) $(this).toggleClass("button-short_style_light_clicked");
        if($(this).hasClass('button-short_style_dark')) $(this).toggleClass("button-short_style_dark_clicked");
    });
});