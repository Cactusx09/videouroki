var slider = function () {
    var sl_1 = $('#sl-1').lightSlider({
        item: 4,
        controls: false,
        pager: false,
        loop: true,
        slideMargin: 20,
        responsive: [
            {
                breakpoint: 1275,
                settings: {
                    item: 3,
                    slideMargin: 15,
                    controls: false,
                    pager: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    item: 2,
                    slideMargin: 15,
                    controls: false,
                    pager: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    item: 1,
                    slideMargin: 10,
                    controls: false,
                    pager: false,
                    adaptiveHeight: true
                }
            }
        ]
    });
    $('#sl-prev').click(function () {
        sl_1.goToPrevSlide();
    });
    $('#sl-next').click(function () {
        sl_1.goToNextSlide();
    });
    $('.select-wrp').click(function () {
        $(this).toggleClass('active');
    });
};
$(document).ready(
    slider()
);
