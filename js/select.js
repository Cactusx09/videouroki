$(document).ready(function(){
    var wrp = $('.select-wrp-auto').each(function(){
        var select = $(this).find('select');
        var add_current = select.find('option').eq(0).text();
        var max = select.find('option').length;
        var li='';
        select.find('option').each(function(){
            if($(this).index()<1){
                data_value = $(this).attr('value');
                text = $(this).text();
                li = li +'<li class="active" data-value="'+data_value+'">'+text+'</li>';
            }else{
                data_value = $(this).attr('value');
                text = $(this).text();
                li = li +'<li data-value="'+data_value+'">'+text+'</li>';
            }
        });
        $(this).append('<div class="custom_select"><div class="current_option" data-value=""><span>'+add_current+'</span><b><img src="../images/ar_down.svg"/></b></div><ul' +
            ' class="perfect-scroll custom_options">'+li+'</ul> </div>');
    });
});
