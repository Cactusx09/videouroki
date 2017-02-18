$(document).ready(function(){
    var org = $('.org input[type="range"]');
    var qua = $('.qua input[type="range"]');
    org.rangeslider({
        polyfill: false,
        onSlide: function(position, value) {
            var handle = org.next().find('.rangeslider__handle');
            handle.removeClass('c_1 c_2 c_3 c_4 c_5 c_6 c_7 c_8 c_9 c_10').addClass('c_'+value);
            lol(org,'boy');
        }
    });
    qua.rangeslider({
        polyfill: false,
        onSlide: function(position, value) {
            var handle = qua.next().find('.rangeslider__handle');
            handle.removeClass('c_1 c_2 c_3 c_4 c_5 c_6 c_7 c_8 c_9 c_10').addClass('c_'+value);
            lol(qua,'girl');
        }
    });
//    rangeSlider.create(slider, {
//        polyfill: true,
//        onSlide: function(value) {
//            $('#js-rangeSlider-0').find('.rangeSlider__handle').removeClass('c_1 c_2 c_3 c_4 c_5 c_6 c_7 c_8 c_9 c_10').addClass('c_'+value);
//        }
//    });
    function lol(el,gender){
        var val = el.val(),
            fill = el.next().find('.rangeslider__fill'),
            handle = el.next().find('.rangeslider__handle'),
            img = el.parent().prev(),
            feel;
        if(val<5){
            handle.addClass('red');
            fill.addClass('red');
            feel = 'sad';
        } else{
            handle.removeClass('red');
            fill.removeClass('red');
            if(val<=7){
                feel = 'normal';
            }else{
                feel = 'happy';
            }
        }
        img.attr('src','../images/'+gender+'-'+feel+'.png');
        handle.addClass('c_'+val);
    }
    lol(org,'boy');
    lol(qua,'girl');
});
