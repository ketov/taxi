'use strict'


/*function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}*/




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
    });

    $('.input').on('focusout', function(){
        var el = $(this);
        var t = el.val().trim();
        if(t===''){
            el.removeClass('focus');
        }
    });


    $('#adult-passengers-label').on('click', function(){
        $('#adult-passengers').children('option').show();
    });

    $('.checkbox').children('input').on('click', function(){
        var el = $(this);
        if(el.prop('checked')){
            el.siblings('label').addClass('active');
        }
        else{
            el.siblings('label').removeClass('active');
        }
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





    $('#passengers').on('focus', function(){
        var p = $('.passengers-add');
        //if(p.hasClass('active')){
        //    return;
        //}
        //else{
            p.fadeIn(250);
            //p.addClass('active');
        //}
        //p.fadeIn(400);

    });

    $(document).click(function (event) {
        if ($(event.target).closest(".passengers-add").length || $(event.target).closest("#passengers").length || $(event.target).closest("#label-for-passengers").length){
            return;
        }
           else{
            $('.passengers-add').fadeOut(250);
            //$('.passengers-add').removeClass('active');
        }

    });


    //$('#passengers').on('focusout', function(){

    //});



    //alert($('#standards-menu-container').height());
    //alert($('#standards-menu').height());
    //alert($('#standards-menu-container').height()-$('#standards-menu').height());

    //alert($('#standards-menu').height());

    //var x = document.getElementById('standards-menu-container').width;
    //var x = ;
    //alert(x);

    /*$('.input').one('focus', function(){
       var el = $(this);
       el.addClass('focus');
    });

    $('.input').one('focusout', function(){
        var el = $(this);
        var t = el.val().trim();
        if(t===''){
            el.removeClass('focus');
        }
    });*/

});