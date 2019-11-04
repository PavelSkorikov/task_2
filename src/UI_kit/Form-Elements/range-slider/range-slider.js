$(document).ready(function() {
    //функция для подстановки пробела между тысячами и десятками тысяч в числе
    function number_separator(number){
        number = String(number);
        if((number>999)&&(number<10000)){
            number = number.slice(0, 1)+' '+number.slice(1, 4);
        }
        if(number>9999){
            number = number.slice(0, 2)+' '+number.slice(2, 5);
        }
        return number;
    }
    // подключаем и настраиваем плагин ionRangeSlider
    $(".range-slider__slider").ionRangeSlider({
        skin: "big", //скин в котором я изменил стили под требования задания
        type: "double",
        min: 0,
        max: 15000,
        from: 4500,
        to: 9600,
        step: 100,
        hide_min_max: true,
        hide_from_to: true,
        //при изменении ползунка выводим значение в рублях
        onChange: function (data) {
            $(".range-slider__cost").html(number_separator(data.from)+'&#8381'+' - '+number_separator(data.to)+'&#8381');    
        }
    });
    
});
