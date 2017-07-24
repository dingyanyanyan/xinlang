$(function () {
            $('.icon_div').click(function (){
                $('.icon_div+ul').not($(this).next('ul')).hide();
                //
                $(this).next('ul').toggle();
            })
        })
