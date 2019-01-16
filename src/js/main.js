'use strict'


/*function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}*/


var chbox;
chbox=document.getElementById('i-agree');

$(chbox).on('change', function() {
    if (chbox.checked) {
        $('#order-continue').removeClass('not-agree');
        $('#need-agree').hide();
    }
    else {
        $('#order-continue').addClass('not-agree');
        $('#need-agree').show();
    }
});

$('#order-continue').on('click', function(){
    var el = $(this);
    if(el.hasClass('not-agree')){
        $('#need-agree').show();
    }
    else{
        $('#need-agree').hide();
    }
});



$(document).ready(function () {
    //Работа с верхним меню
    window.onscroll = function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled !== 0) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
    };

    var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
    $containers.scrollAnimations();


    function scrollTo(element, anchor) {
        $(element).click(function () {
            var destination = $(anchor).offset().top-75;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
            return false;
        });
    }

    scrollTo('.standards__nav--1', '.standards__h3--1');
    scrollTo('.standards__nav--2', '.standards__h3--2');
    scrollTo('.standards__nav--3', '.standards__h3--3');
    scrollTo('.standards__nav--4', '.standards__h3--4');
    scrollTo('.standards__nav--5', '.standards__h3--5');
    scrollTo('.standards__nav--6', '.standards__h3--6');
    scrollTo('.standards__nav--7', '.standards__h3--7');
    scrollTo('.standards__nav--8', '.standards__h3--8');

    $('#company').on('click', function(){
        $( "#company" ).animate({
            width: "90%", // ширина элемента
            opacity: 0.5, // прозрачность элемента
            height: "150px", // высота элемента
            fontSize: "2em", // размер шрифта элемента
            borderWidth: "5px" // ширина границ элемента
        });
    });

    $('.input').on('focus', function(){
        var el = $(this);
        el.addClass('focus');

        if(el.attr('id')==='passengers'){
            var p = $('.passengers-add');
            p.fadeIn(250);
        }
    });


    $('.input').on('focusout', function(){
        var el = $(this);
        var t = el.val().trim();
        if(t===''){
            el.removeClass('focus');
        }
    });



    $('.with-hidden').on('input', function(){
        var el = $(this);
        //var ul = el.siblings('ul');
        var l = el.val().length;
        if(l>=1){
            el.siblings('.suggestion-menu').fadeIn(250);
        }
        else{
            el.siblings('.suggestion-menu').fadeOut(250);
        }
    });

    $('.with-hidden').on('focusout', function(){
        var el = $(this);
        el.siblings('.suggestion-menu').fadeOut(250);
    });

    $('.suggestion-menu li').on('click', function(){
        var input = $(this).parent('ul').siblings('input');
        input.val($(this).text());
    });


    $('#adult-passengers-label').on('click', function(){
        $('#adult-passengers').children('option').show();
    });

    $('.checkbox').children('input').on('click', function(){
        var el = $(this);
        var block = el.siblings('label').attr('data-block');
        if(el.prop('checked')){
            el.siblings('label').addClass('active');
            $(block).css({'display':'flex'});

            if(block==='#back-row'){
                $('#one-way').children('.span-1').show();
            }
        }
        else{
            el.siblings('label').removeClass('active');
            $(block).css({'display':'none'});

            if(block==='#back-row'){
                $('#one-way').children('.span-1').hide();
            }
        }
    });



    $('.passengers-select').on('change', function() {
        var n = 0;
        $('.passengers-select').each(function(){
            n = parseInt(n) + parseInt(this.value);
        });
        $('#passengers-result').text(n);
    });




    if($("#standards-menu").length>0){
        var el = document.getElementById('standards-menu');
        var limit = document.getElementById('how-to-order');
        var elTop = el.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
        var limitTop = limit.getBoundingClientRect().top - document.body.getBoundingClientRect().top;

        window.addEventListener('scroll', function(){
            var w = document.querySelector('#standards-menu-container').offsetWidth-30;
            var h = $('#standards-menu').height();
            if ((document.documentElement.scrollTop > elTop-70) && (document.documentElement.scrollTop < (limitTop-70-h))){
                el.style.position = 'fixed';
                el.style.top = '76px';
                //el.style.width = w+'px';
            }
            else if(document.documentElement.scrollTop >= (limitTop-70-h))
            {
                el.style.position = 'absolute';
                el.style.top = $('#standards-menu-container').height()-$('#standards-menu').height()+'px';
                //alert(($('#standards-menu').height()-h));
            }
            else{
                el.style.position = 'absolute';
                el.style.top = 0;
            }
            el.style.width = w+'px';
        });
    }


    if($("#order__result").length>0){
        var el = document.getElementById('order__result');
        var limit = document.getElementById('footer');
        var elTop = el.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
        var limitTop = limit.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 160;

        window.addEventListener('scroll', function(){
            var w = document.querySelector('#order__result-container').offsetWidth-30;
            var h = $('#order__result').height();
            if ((document.documentElement.scrollTop > elTop-70) && (document.documentElement.scrollTop < (limitTop-70-h))){
                el.style.position = 'fixed';
                el.style.top = '76px';
                //el.style.width = w+'px';
            }
            else if(document.documentElement.scrollTop >= (limitTop-70-h))
            {
                el.style.position = 'absolute';
                el.style.top = $('#order__result-container').height()-$('#order__result').height()+'px';
                //alert(($('#standards-menu').height()-h));
            }
            else{
                el.style.position = 'absolute';
                el.style.top = 0;
            }
            el.style.width = w+'px';
        });
    }



    if($("#search-index").length>0) {
        var s1 = $('.reviews').offset().top,
            w = $(window).height();
        $(document).on('scroll', function (){
            var scroll = $(document).scrollTop();
            if(scroll  > s1-w/1.5) {
                $('#search-index,#jcont').addClass('fixed');
            }
            else{
                $('#search-index,#jcont').removeClass('fixed');
            }
        });
    }
    /*else{
        return;
    }*/





    $('#passengers').on('focus', function(){
        var p = $('.passengers-add');
        p.fadeIn(250);
    });


    $(document).click(function (event) {

        if ($(event.target).closest(".passengers-add").length || $(event.target).closest("#passengers").length || $(event.target).closest("#label-for-passengers").length){
            return;
        }
           else{
            $('.passengers-add').fadeOut(250);
        }

    });

    
    $('#adult-plus').on('click', function(){
        var n = parseFloat($('#adult-number-input').val());
        n = n+1;

        
        var s = parseFloat($('#adult-number-input').val())+parseFloat($('#children-number-input').val());
        if(s>=0&&s<8){
            $('#passengers').val(s+1);
            $('#passengers').addClass('focus');
            $('#adult-number-input').val(n);
            $('#adult-number').text(n);
        }
        else{
            //$('#passengers').val('');
            $('#passengers').addClass('focus');
        }
    });
    
    $('#children-plus').on('click', function(){
        var n = parseFloat($('#children-number-input').val());
        n = n+1;

        
        var s = parseFloat($('#adult-number-input').val())+parseFloat($('#children-number-input').val());
        if(s>=0&&s<8){
            $('#passengers').val(s+1);
            $('#passengers').addClass('focus');
            $('#children-number-input').val(n);
            $('#children-number').text(n);
        }
        else{
            //$('#passengers').val('');
            $('#passengers').addClass('focus');
        }
    });
    
    $('#adult-minus').on('click', function(){
        var n = parseFloat($('#adult-number-input').val());
        if(n==0){
            return;
        }
        else{
            n = n-1;
            $('#adult-number-input').val(n);
            $('#adult-number').text(n);
        }   
        
        
        var s = parseFloat($('#adult-number-input').val())+parseFloat($('#children-number-input').val());
        if(s>0){
            $('#passengers').val(s);
            $('#passengers').addClass('focus');
        }
        else{
            $('#passengers').val('');            
            $('#passengers').addClass('focus');
        }
    });
    
    $('#children-minus').on('click', function(){
        var n = parseFloat($('#children-number-input').val());
        if(n==0){
            return;
        }
        else{
            n = n-1;
            $('#children-number-input').val(n);
            $('#children-number').text(n);
        }       
        
        
        var s = parseFloat($('#adult-number-input').val())+parseFloat($('#children-number-input').val());
        if(s>0){
            $('#passengers').val(s);
            $('#passengers').addClass('focus');
        }
        else{
            $('#passengers').val('');            
            $('#passengers').addClass('focus');
        }
    });

});