$(document).ready(function(){
    if (window.matchMedia('(min-width: 767px)').matches) {
        var top = $("#right").offset().top;
        var bottom = $("#right").outerHeight(true) + top+50;
        var menu = $("#right .priem");
        var center = $("#center").offset().top + $("#center").outerHeight(true);
            $(window).scroll(function() {
                var offset = $(this).scrollTop();
                if(offset>bottom-20){
                    if(offset+menu.outerHeight()>center){
                        menu.removeClass('fixed op').addClass('absol');
                    } else{
                        menu.removeClass('absol').addClass('fixed');
                    }
                } else{
                    menu.removeClass('fixed op');
                    if(offset>menu.offset().top+menu.outerHeight(true)){
                        menu.addClass('op');
                    }
                }
            });
    }
});
