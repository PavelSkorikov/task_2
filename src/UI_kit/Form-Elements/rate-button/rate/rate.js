$(document).ready(function() {
    $(".rate__star").click(function(){
        if($(this).text() == 'star'){
             $(this).text('star_border'); //меняем элемент
             $(this).toggleClass('rate__star_checked'); //обновляем фон элемента для правильного отображения
        }
        else {
            $(this).text('star');//меняем элемент
            $(this).toggleClass('rate__star_checked');//обновляем фон элемента для правильного отображения
        }
        $(this).nextAll('.rate__star').text('star_border'); // скрытие всех звездочек после выделенной 
        $(this).nextAll('.rate__star').toggleClass('rate__star_checked');
        $(this).prevAll('.rate__star').text('star'); // закрашивание всех звездочек до выделенной
        $(this).prevAll('.rate__star').toggleClass('rate__star_checked');
       
       
    });
});