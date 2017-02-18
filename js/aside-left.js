$(document).ready(function () {
    var nav_scroll_offset = 15;
    if (window.matchMedia('(min-width: 1023px)').matches) {
        var top = $("#left").offset().top;
        var bottom = $("#left").outerHeight(true) + top + 50;
        var menu = $("#left .l_nav");
        var center = $("#center").offset().top + $("#center").outerHeight(true);
        $("#left .l_nav").sticky({topSpacing: 20, bottomSpacing: bottom - 753});
    } else {
        nav_scroll_offset = 80;
    }
    $(window).resize(function () {
        if (window.matchMedia('(min-width: 1023px)').matches) {
            var top = $("#left").offset().top;
            var bottom = $("#left").outerHeight(true) + top + 50;
            var menu = $("#left .l_nav");
            var center = $("#center").offset().top + $("#center").outerHeight(true);
            $("#left .l_nav").sticky({topSpacing: 20, bottomSpacing: bottom - 753});
            nav_scroll_offset = 15;
        } else {
            $("#left .l_nav").unstick();
            nav_scroll_offset = 80;
        }
    });
    $('.hamb_left').click(function () {
        $('#left .l_nav, .hamb_left').toggleClass('show');
        $('.overlay').toggleClass('visible-pop');
    });
    ////////animate scroll
    $(".l_nav a").click(function (event) {
        if ($(this).attr('href') == "#nav_1") {
            $('body,html').animate({scrollTop: 0}, 500);
            return;
        }
        $('#left .l_nav, .hamb_left').removeClass('show');
        $('.overlay').removeClass('visible-pop');
        var id = $(this).attr('href');
        if (id[0] == '#') {
            event.preventDefault();
            var top = $(id).offset().top;
            $('body,html').animate({scrollTop: top - nav_scroll_offset + 15}, 500);
        }
    });
    $(window).scroll(function () {
        if ($(".nav_1").is(":in-viewport")) {
            $('.l_nav a').removeClass('current').eq(0).addClass('current');
        } else if ($(".nav_2").is(":in-viewport")) {
            $('.l_nav a').removeClass('current').eq(1).addClass('current');
        } else if ($(".nav_3").is(":in-viewport")) {
            $('.l_nav a').removeClass('current').eq(2).addClass('current');
        } else if ($(".nav_4").is(":in-viewport")) {
            $('.l_nav a').removeClass('current').eq(3).addClass('current');
        } else if ($(".nav_5").is(":in-viewport")) {
            $('.l_nav a').removeClass('current').eq(4).addClass('current');
        } else if ($(".nav_6").is(":in-viewport")) {
            $('.l_nav a').removeClass('current').eq(5).addClass('current');
        } else if ($(".nav_7").is(":in-viewport")) {
            $('.l_nav a').removeClass('current').eq(6).addClass('current');
        } else if ($(".nav_8").is(":in-viewport")) {
            $('.l_nav a').removeClass('current').eq(7).addClass('current');
        }
    });
});
