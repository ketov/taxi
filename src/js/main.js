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
            var destination = $(anchor).offset().top-65;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
            return false;
        });
    }

    scrollTo('.header__company', '#company');
    scrollTo('.header__about-product', '.about-product');
    scrollTo('.header__financial-analytics', '.financial-analytics');
    scrollTo('.header__index-form', '.index-form');

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