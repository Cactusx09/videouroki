$(document).ready(function(){
    var minus = $('#minus'),
        plus = $('#plus'),
        n = $('#n-of-members'),
        wrap = $('#animation'),
        val=n.val();
    minus.click(function(){
        wrap.find('.minus').remove();
        wrap.find('img').removeClass('plus');
        val = n.val();
        if(val>1 && val<=11){
            var last = wrap.find('img').eq(val-1).addClass('minus');
            n.val(val-1);
        } else if(val>1){
            wrap.find('img').last().addClass('minus');
            wrap.prepend('<img src="../images/add-anim/'+ (Math.floor(Math.random() * 10) + 1) +'.png" alt="">');
            var first = wrap.find('img').first();
            first.addClass('plus');
            n.val(val-1);
        }
        Chek();
    });
    plus.click(function(){
        wrap.find('.minus').remove();
        val = parseInt(n.val());
        if(val<10){
            wrap.append('<img src="../images/add-anim/'+ (Math.floor(Math.random() * 10) + 1) +'.png" alt="">');
            var last = wrap.find('img').last();
            last.addClass('plus');
            n.val(val+1);
        } else{
            wrap.find('img').first().addClass('minus');
            wrap.append('<img src="../images/add-anim/'+ (Math.floor(Math.random() * 10) + 1) +'.png" alt="">');
            var last = wrap.find('img').last();
            last.addClass('plus');
            n.val(val+1);
        }
        Chek();
    });
    n.on('keyup',function(){
        current_val = n.val();
        if(current_val<=10){
            return;
        }
        var r = val - current_val;
            if(val>=10){
                for(var i = 1; i<Math.abs(r); i++){
                    wrap.find('.minus').remove();
                    wrap.find('img').first().addClass('minus');
                    wrap.append('<img src="../images/add-anim/'+ (Math.floor(Math.random() * 10) + 1) +'.png" alt="">');
                    var last = wrap.find('img').last();
                    last.addClass('plus');
                }
            } else{
                var iterator=0;
                for(var i = 1; i<=Math.abs(r); i++){
                    if(i>(10-val)){
                        wrap.append('<img class="minus" src="../images/add-anim/'+ (Math.floor(Math.random() * 10) + 1) +'.png" alt="">');
                    } else{
                        wrap.append('<img src="../images/add-anim/'+ (Math.floor(Math.random() * 10) + 1) +'.png" alt="">');
                    }
                    var last = wrap.find('img').last();
                    last.addClass('plus');
                    iterator++;

                }
            }
        Chek();
    });
    n.on('change',function(){
        if(current_val<=10){
            n.val(10);
        }
    });
    Chek();
    function Chek (){
        var val = n.val();
        if(val>=10){
            n.addClass('active').prop('readonly',false);
        } else{
            n.removeClass('active').prop('readonly',true);
        }
        $('.r-n-of-members').text(val);
        $('.r-sum').text(val*100+' руб.');
        $('.r-skidka').text('- '+val*30+' руб.');
        $('.r-k-oplate').text(val*70+' руб.');
    }

//    $('#request-pop,.overlay').addClass('visible-pop'); thnx popup
});
