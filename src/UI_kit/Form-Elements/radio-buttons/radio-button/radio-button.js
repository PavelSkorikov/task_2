/*document.querySelector('.radio-button').addEventListener('click', function() {
    document.querySelector('.radio-button__select').classList.toggle('radio-button__select_checked');
    document.querySelector('.radio-button__label').classList.toggle('radio-button__label_checked');
}, false);*/
$(document).ready(function() {
    $(".radio-button__select").click(function(){
        $(".radio-button__select").toggleClass("radio-button__select_checked");
        $(".radio-button__label").toggleClass("radio-button__label_checked");
    });
});