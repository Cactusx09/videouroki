$(document).ready(function(){
     //countdown
    if (window.matchMedia('(min-width: 768px)').matches){
        var date = '2016/07/10';
        $('#timer').countdown(date, function (event) {
            var $this = $(this).html(event.strftime('<div><span>%D</span> <span>Дней</span></div>:' + '<div><span>%H</span> <span>Часов</span></div>:' + '<div><span>%M</span> <span>Минут</span></div>:' + '<div><span>%S</span> <span>Секунд</span></div>'));
        });
        $('#timer-uho').countdown(date, function (event) {
            var $this = $(this).html(event.strftime('<span>%D</span>:' + '<span>%H</span>:' + '<span>%M</span>:' + '<span>%S</span>'));
        });
        $('.uho').click(function(){
            $('#uho').toggleClass('visible-pop');
        });
    }
});
