$(document).ready(function () {
    sl_tabs = $('#sl-tabs').lightSlider({
        item: 1,
        controls: false,
        pager: false,
        loop: false,
        slideMargin: 15,
        speed: 250,
        adaptiveHeight: true,
//        mode: 'fade',
        enableTouch: false,
        enableDrag: false
    });
    var tab = $('.tabs a');
    tab.eq(0).click(function (e) {
        e.preventDefault();
        $('.tabs a').removeClass('active');
        $(this).addClass('active');
        sl_tabs.goToSlide(0);
    });
    tab.eq(1).click(function (e) {
        e.preventDefault();
        $('.tabs a').removeClass('active');
        $(this).addClass('active');
        sl_tabs.goToSlide(1);
    });
    tab.eq(2).click(function (e) {
        e.preventDefault();
        $('.tabs a').removeClass('active');
        $(this).addClass('active');
        sl_tabs.goToSlide(2);
    });


});
var refreshSlider = function () {
    var element=document.getElementById('sl-tabs');
    if (element) {
        sl_tabs.refresh();
    }
};
