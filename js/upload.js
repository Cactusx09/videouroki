$(document).ready(function(){
     //file input
    var text = $("input[type=file]").attr('data-text');

	$("input[type=file]").each(function(){
		var btn = $(this).data('btn');
		if($(this).data('btn')){
			$(this).nicefileinput({
				label : btn
			});
		}else{
			$(this).nicefileinput({
				label : 'Выбрать файл'
			});
		}
	});

    $(".NFI-filename").val(text);
    $("input[type=file]").on('change',function(){
        $(".NFI-button").addClass('hide-for-pre');
        $('#close-input').show();
        if($(".NFI-filename").val()==""){
            $(".NFI-filename").val(text);
            $(".NFI-button").removeClass('hide-for-pre');
            $('#close-input').hide();
        }
    });
    $('.NFI-wrapper').append('<div id="close-input"><svg width="10px" height="10px" viewBox="0 0 10 10"><path fillRule="evenodd" d="M 6.41 5C 6.41 5 9.24 7.83 9.24 7.83 9.63 8.22 9.63 8.85 9.24 9.24 8.85 9.63 8.22 9.63 7.83 9.24 7.83 9.24 5 6.41 5 6.41 5 6.41 2.17 9.24 2.17 9.24 1.78 9.63 1.15 9.63 0.76 9.24 0.37 8.85 0.37 8.22 0.76 7.83 0.76 7.83 3.59 5 3.59 5 3.59 5 0.76 2.17 0.76 2.17 0.37 1.78 0.37 1.15 0.76 0.76 1.15 0.37 1.78 0.37 2.17 0.76 2.17 0.76 5 3.58 5 3.58 5 3.58 7.83 0.76 7.83 0.76 8.22 0.37 8.85 0.37 9.24 0.76 9.63 1.15 9.63 1.78 9.24 2.17 9.24 2.17 6.41 5 6.41 5Z"/></svg></div>');
    $('#close-input').click(function(){
        $(this).hide();
        $(".NFI-filename").val(text);
        $('.NFI-current').trigger("click");
        $(".NFI-button").removeClass('hide-for-pre');
    });
});
