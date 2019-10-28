$(document).ready(function() {
    var clicking = false, x;
    //обработчик нажатия мышки, считываем координаты ползунка
    $(".range-slider__point").mousedown(function(){
        clicking = true;
        
        $(".range-slider__point").mousemove(function(event){
            if(clicking == false) return;
            
                x = $(this).offset().left;
                console.log(x);
                var move = event.pageX-x;
                console.log(move);
                if(move>=6) move = 1;
                else move = -1;
                console.log(move);
                if($(this).next().hasClass("range-slider__line")){
                    var pos_left = parseInt($(".range-slider__range").css("margin-left"));
                    var pos_right = parseInt($(".range-slider__range").css("margin-right"));
                    if((pos_left+pos_right<266)&&(pos_left>=0)) $(".range-slider__range").css("margin-left", pos_left+move+'px');
                }
                              
        });
    });

    //запоминаем состояние отжатой кнопки мыши
    $(document).mouseup(function(){
        clicking = false;
    });

    $(".range-slider__point").mouseleave(function(){
        clicking = false;
    });
    
    
    

    
    
    
});
