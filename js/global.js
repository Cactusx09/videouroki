var calculatePrice = function (olympPrice) {
    n = $('#n-of-members');
    members = $('.r-n-of-members');
    var val = parseFloat(n.val());
    if (val >= 10) {
        n.addClass('active').prop('readonly', false);
    } else {
        n.removeClass('active').prop('readonly', true);
    }
    members.html(val);

    $('#freePayment').remove();

    if (olympPrice.title) {
        $('#olymp_title').html( olympPrice.title);
        $('.olymp_title').show();
        $('.olymp-select').hide();
    } else {
        $('.olymp-select').show();
        $('.olymp_title').hide();
    }

    if (olympPrice.free == "true") {

        $('.r-sum').text((val * olympPrice.price).toFixed(2) + ' руб.');
        $('.r-price').text(olympPrice.price + ' руб.');
        $('.r-price-t').text('Бесплатно');
        $('.r-skidka').text('- ' + (val * olympPrice.price).toFixed(2) + ' руб.');
        $('.r-k-oplate').text('Бесплатно');
    } else {
        $('.r-sum').text((val * olympPrice.price).toFixed(2) + ' руб.');
        $('.r-price').text(olympPrice.price + ' руб.');
        $('.r-price-t').text((olympPrice.price - olympPrice.discount).toFixed(2) + ' руб.');
        $('.r-skidka').text('- ' + (val * olympPrice.discount).toFixed(2) + ' руб.');
        $('.r-k-oplate').text((val * (olympPrice.price - olympPrice.discount)).toFixed(2) + ' руб.');
    }
    if (olympPrice.isFree == "true" && olympPrice.countForFree >= 0) {
        console.log('free');
        $('.meropriatie').append('<div id="freePayment">Бесплатно при наличии ' + olympPrice.countForFree + ' оплаченных участников</div>');
    }

};
var changeSelect = function () {
    $(".custom_options .olympiadPrice").click(function () {
        if ($(this).attr('data-olymp')) {
            olympPrice = JSON.parse($(this).attr('data-olymp'));
            calculatePrice(olympPrice);
        }
    });
    $(".custom_options li").click(function () {
        console.log('li');
        customOptionsBlock = $(this).parent();
        customOptionsBlock.find('li').removeClass('active');
        $(this).addClass('active');
        choosenValue = $(this).data("value");
        select = customOptionsBlock.parent().parent();
        select.find('input').val(choosenValue);
        select.find('select').val(choosenValue).prop("selected", true);
        span = select.find('.current_option>span');
        if (select.attr('data-num')) {
            var str = $(this).text().split(' ');
            var num = str[str.length - 1];
            str[str.length - 1] = '';
            str = str.toString();
            str = str.replace(/,/g, ' ');
            span.text(str);
            span.append('<span>' + num + '</span>');
        } else {
            var str = $(this).text();
            span.text(str);
        }
        customOptionsBlock.data("value", choosenValue);
        $(".custom_options ,.current_option").removeClass('active');
    });
    $(".current_option").click(function (event) {
        event.stopPropagation();
        customOptionsBlock = $(this).next();
        $(".current_option").removeClass('active');
        $(this).addClass('active');
        $(".custom_options").removeClass('active');
        customOptionsBlock.addClass('active');
    });
};
var left_menu = function () {
    $(document).ready(function () {
        $('#left .wrp a.active').click(function (e) {
            $(this).toggleClass('clicked');
            $(this).closest('.wrp').toggleClass('active');
            e.preventDefault();
        });
    });
};
var edit_pupil = function () {
    $('.edit_pupil').click(function (e) {
        e.preventDefault();
        var id = $(this).data("id");
        $('#pupil_item_enter__' + id).hide();
        $('#pupil_item__' + id).show();
    });
};
$(document).ready(function () {
    ///////////////fixed to top
    var $menu = $("#top");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#to-top').addClass('visible');
        } else {
            $('#to-top').removeClass('visible');
        }
    });
    $('.kursiv > span:last-of-type').addClass('hidden');
    //show full
    $('#edit_select').click(function (e) {
        e.preventDefault();
        $('.olymp_title').hide();
        $('.olymp-select').show();
    });
    $('.kursiv a').click(function (e) {
        e.preventDefault();
        $('.kursiv > span:first-of-type').addClass('active');
        $(this).find('span').hide();
        $(this).parent().find('span:last-of-type').removeClass('hidden');
    });
    edit_pupil();
    $('.kursiv > span:last-of-type').click(function () {
        $(this).addClass('hidden');
        $('.kursiv > span:first-of-type').removeClass('active');
        $(this).parent().find('a span').show();
    });
    //hamb
    var head = $('#top');
    $(window).scroll(function () {
        var pos = $(window).scrollTop();
        if (pos > 0) {
            head.addClass('animate');
        } else {
            head.removeClass('animate');
        }
    });
    $('#top .icon').on('click', function () {
        $(this).children('div').toggleClass('open');
    });
    //scroll index article
    var step_top = 20;
    $('#scroll-top').click(function (e) {
        e.preventDefault();
        var al = $('#content').scrollTop();
        al = al - step_top;
        $('#content').scrollTop($('.ps-container').scrollTop() + al).perfectScrollbar('update');
    });
    var step_bot = 20;
    $('#scroll-bot').click(function (e) {
        e.preventDefault();
        var al = $('#content').scrollTop();
        al = al + step_bot;
        $('#content').scrollTop($('.ps-container').scrollTop() + al).perfectScrollbar('update');
    });
    //hamb click
    head.click(function () {
        head.find('.container').toggleClass('active');
        $('.icon span').toggleClass('active');
        $('.responsive').toggleClass('hide-a');
    });
    ////////animate scroll
    $("a#to-top").click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 60});
    });
    //pop
    $('.click').click(function (e) {
        e.stopPropagation();
        $('header .pop').removeClass('visible-pop');
        var pop = $(this).parent().find('.pop');
        pop.toggleClass('visible-pop');
        $('header .profile').toggleClass('active');
    });
    $('header .close-pop').click(function () {
        $('header .pop').removeClass('visible-pop');
        $('header .profile').removeClass('active');
    });
    $('#custom, .custom').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.pop').removeClass('visible-pop');
        $(this).find('svg').addClass('active');
        $(this).find('.pop').addClass('visible-pop');
    });
    //expand
    $('#expand').click(function (e) {
        e.preventDefault();
        $('#content').addClass('active');
        $('.overlay').addClass('visible-pop');
        $('.perfect-scroll').perfectScrollbar('update');
    });
    $(window).click(function (e) {
        $(".custom_options, .current_option").removeClass('active');
        $(".pop").removeClass('visible-pop');
        $('#custom svg').removeClass('active');
    });
    $('.pop').click(function (e) {
       // e.stopPropagation();
        //e.preventDefault();
    });
    function clearErrors() {
        $('.auth-form_error').each(function () {
            $(this).html('');
        });
    }
    //popup
    $('.open-register').click(function () {
        $('#register, .overlay').addClass('visible-pop');
        clearErrors();
    });
    $('header a.pull-right, .download-video').click(function (e) {
        e.preventDefault();
        $('#premium-pop, .overlay').addClass('visible-pop');
    });
    $('.open-login').click(function () {
        clearErrors();
        $('#login, .overlay').addClass('visible-pop');
    });
    $('.open-password').click(function () {
        clearErrors();
        $('#password, .overlay').addClass('visible-pop');
    });
    $('.open-edit').click(function (e) {
        e.preventDefault();
        $('#edit-pop, .overlay').addClass('visible-pop');
    });
    $('.open-rules').click(function (e) {
        e.preventDefault();
        $('#rules, .overlay').addClass('visible-pop');
    });
    $('.open-photo').click(function (e) {
        e.preventDefault();
        $('#photo-pop, .overlay').addClass('visible-pop');
    });
    $('.popup .open-register, .popup .open-login, .popup .open-password').click(function () {
        $(this).parent().parent('.popup').removeClass('visible-pop');
    });
    $('.close-pop, .close-popup, .overlay').click(function () {
        $('.popup, .overlay').removeClass('visible-pop');
        $('#content').removeClass('active');
        $('#olimp #left .l_nav, #olimp .hamb_left').removeClass('show');

        $('.perfect-scroll').perfectScrollbar('update');
    });
    //inputs with password
    var eye = false;
    $(".input-pass1").each(function () {
        var $input = $(this);
        $input.next().click(function () {
            var change = "";
            if (!eye) {
                change = "text";
                eye = true;
                $(this).attr('src', '/videouroki/images/ico/eye.svg');
            } else {
                change = "password";
                eye = false;
                $(this).attr('src', '/videouroki/images/ico/eye-disabled.svg');
            }
            var rep = $("<input type='" + change + "' />")
                .attr("id", $input.attr("id"))
                .attr("name", $input.attr("name"))
                .attr('class', $input.attr('class'))
                .val($input.val())
                .insertBefore($input);
            $input.remove();
            $input = rep;
        }).insertAfter($input);
    });
    //custom scroll
    $('.perfect-scroll').perfectScrollbar();
    $(window).resize(function () {
        $('.perfect-scroll').perfectScrollbar('update');
    });
    //textarea autosize
    autosize($('textarea'));
    //selects
    changeSelect();
	//add test time checkbox
	$('.add_test__time_box').click(function(){
		if($(this).find('input').is(':checked')){
			$(this).nextAll().removeClass('disabled');
			$(this).nextAll('input').prop('disabled',false);
		}else{
			$(this).nextAll().addClass('disabled');
			$(this).nextAll('input').prop('disabled',true);
		}
	});
	//sortable b_que
	$( ".b_que__left_sortable").sortable({
		items: '.sortable',
		placeholder: 'b_que__left_placeholder'
	});

    $('.input-list input').click(function (event) {
        event.stopPropagation();
    });
    $('.input-list input').focusin(function (event) {

        customOptionsBlock = $(this).next().children();
        $(".current_option").removeClass('active');
        if (!customOptionsBlock.hasClass("active")) {
            $(".custom_options").removeClass('active');
            customOptionsBlock.addClass('active');
        } else {
            $(customOptionsBlock, ".current_option").removeClass('active');
            $(this).removeClass('active');
        }
    });
    //////validate
    /* $("form").each(function (index) {
     var it = $(this);
     it.validate({
     rules: {
     mail: {required: true},
     password: {required: true},
     uo: {required: true},
     stay: {required: false}
     },
     messages: {},
     errorPlacement: function (error, element) {

     },

     success: function () {

     },
     highlight: function (element, errorClass) {
     $(element).closest('.input-error').addClass('active');
     $(element).addClass('error');
     $('.popup-bot.error').addClass('active');
     setTimeout(function () {
     $('.popup-bot.error').removeClass('active');
     }, 5000);
     },
     unhighlight: function (element, errorClass, validClass) {
     $(element).removeClass('error');
     }
     });
     });*/
    left_menu();
    //request checkbox border | logic
    $('.chekbox-border').change(function () {
        if ($(this).prop('checked')) {
            $(this).closest('.wrp').addClass('border');
            var numbers = Summa();
            $('.kolichestvo').text(numbers[1]);
            $('.k-oplate').text(numbers[0]);
        } else {
            $(this).closest('.wrp').removeClass('border');
            var numbers = Summa();
            $('.kolichestvo').text(numbers[1]);
            $('.k-oplate').text(numbers[0]);
        }
    });
    //requests checkbox logic
    var pay_checkbox = $('.pay').find('.css-checkbox');
    pay_checkbox.change(function () {
        if ($(this).prop('checked')) {
            $('.chekbox-border, .pay .css-checkbox, #checkboxNew').prop('checked', true);
            $('.request.new').addClass('border');
            var numbers = Summa();
            $('.kolichestvo').text(numbers[1]);
            $('.k-oplate').text(numbers[0]);
        } else {
            $('.chekbox-border, .pay .css-checkbox, #checkboxNew').prop('checked', false);
            $('.request.new').removeClass('border');
            var numbers = Summa();
            $('.kolichestvo, .k-oplate').text(0);
        }

    });
    $('#checkboxNew').change(function () {
        if ($(this).prop('checked')) {
            $('.chekbox-border, .pay .css-checkbox').prop('checked', true);
            $('.request.new').addClass('border');
            var numbers = Summa();
            $('.kolichestvo').text(numbers[1]);
            $('.k-oplate').text(numbers[0]);
        } else {
            $('.chekbox-border, .pay .css-checkbox').prop('checked', false);
            $('.request.new').removeClass('border');
            var numbers = Summa();
            $('.kolichestvo, .k-oplate').text(0);
        }

    });
    var Summa = function () {
        var suma_string, suma = 0, n = 0;
        $('.new.border').each(function () {
            suma_string = $(this).find('.suma').text().replace(/ /g, '');
            suma += parseInt(suma_string);
            n++
        });
        if (suma > 0) {
            $('.pay').show();
        } else {
            $('.pay').hide();
        }

        return [suma, n];
    }
});
