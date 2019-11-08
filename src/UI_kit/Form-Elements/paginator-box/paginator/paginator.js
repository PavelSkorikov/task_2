$(document).ready(function() {
    $('.paginator__page-number').click(function(){{
        if(($(this).text()!='...')&&(!$(this).hasClass("paginator__page-number_active"))&&(!$(this).children().hasClass("arrow"))){
            $(this).addClass('paginator__page-number_active')
        }
    }
    });
});