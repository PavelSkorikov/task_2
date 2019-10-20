$(document).ready(function() {
    $(".radio-button__select").click(function(){
        $(this).toggleClass("radio-button__select_checked");
        $(this).next(".radio-button__label").toggleClass("radio-button__label_checked");

    });
});