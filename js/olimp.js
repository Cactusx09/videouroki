$(document).ready(function(){
    var sl_1 = $('.sl-1 .slider').lightSlider({
        item: 1,
        controls:false,
        pager: true,
        loop: true
    });
    $('.sl-1 .sl-prev').click(function(){
        sl_1.goToPrevSlide();
    });
    $('.sl-1 .sl-next').click(function(){
        sl_1.goToNextSlide();
    });
    var sl_2 = $('.sl-2 .slider-2').lightSlider({
        item: 1,
        controls:false,
        pager: false,
        adaptiveHeight: true,
        loop: true
    });
    $('.sl-2 .sl-prev').click(function(){
        sl_2.goToPrevSlide();
    });
    $('.sl-2 .sl-next').click(function(){
        sl_2.goToNextSlide();
    });
    var sl_3 = $('.sl-3 .slider-3').lightSlider({
        item: 3,
        slideMove: 1,
        controls:false,
        pager: false,
        loop: true,
        slideMargin: 20,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1
                  }
            }
        ]
    });
    $('.sl-3 .sl-prev').click(function(){
        sl_3.goToPrevSlide();
    });
    $('.sl-3 .sl-next').click(function(){
        sl_3.goToNextSlide();
    });
    var sl_4 = $('.sl-4 .slider-4').lightSlider({
        item: 1,
        controls:false,
        loop: true,
        slideMargin: 20,
        adaptiveHeight: true
    });
    $('.sl-4 .sl-prev').click(function(){
        sl_4.goToPrevSlide();
    });
    $('.sl-4 .sl-next').click(function(){
        sl_4.goToNextSlide();
    });

    $('.b_q h3').click(function(){
        if($(this).hasClass('current')){
            $(this).removeClass('current').next('div').removeClass('current');
        } else{
            $('.b_q>div, .b_q h3').removeClass('current');
            $(this).addClass('current').next('div').addClass('current');
        }
    });
    $('.primer_links span').click(function(){
        $('.b_primer img').removeClass('bsh');
        $('.b_primer img').eq($(this).index()).addClass('bsh');
    });
    if (window.matchMedia('(max-width: 1023px)').matches) {
        $(".sticky").sticky({zIndex:777});
    }
    $(window).resize(function(){
        if (window.matchMedia('(max-width: 1023px)').matches) {
            $(".sticky").sticky({zIndex:777});
        } else{
            $('.sticky').unstick();
        }
    });
});
