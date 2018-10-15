$(document).ready(function () {
    $('.nav-container').hover(
            function () {
                if ($(window).width() > 1040 && !$(this).children('a').hasClass('activesubmenu')) {
                    $(this).children('ul').stop(true, true).show('drop', { direction: 'down' }, 250);
                } else {
                    return;
                }
            },
            function () {
                if ($(window).width() > 1040 && !$(this).children('a').hasClass('activesubmenu')) {
                    $(this).children('ul').stop(true, true).hide('drop', { direction: 'down' }, 250);
                } else {
                    return;
                }
            });

    function nav() {
        var submenu = $('.nav-container').children('.active');
        submenu.addClass('activesubmenu');

        if ($(window).width() <= 1040) {
            $('nav').addClass('nav-mobile');
            $('header').addClass('header-mobile');
        } else {
            $('nav').removeClass('nav-mobile');
            $('header').removeClass('header-mobile');
        }
    }

    nav();
    $(window).resize(function () {
        nav();
    }); 

    $('#hamburger').on('click', function () {
        var el = $(this);
        if (el.hasClass('active')) {
            $('.nav-mobile').removeClass('active');
            el.removeClass('active');
            $('.nav-container, .lang, .pc').stop(true, true).slideUp(250);
        } else {
            $('.nav-mobile').addClass('active');
            el.addClass('active');
            $('.nav-container, .lang, .pc').stop(true, true).slideDown(250);
        }
    });
    
    $('.nav-mobile .nav-container').on('click', function(){
        var el = $(this);
        if(el.hasClass('active')){
            el.removeClass('active');
            el.children('ul').stop(true, true).slideUp(250);
            
        }
        else{
            el.addClass('active');
            el.children('ul').stop(true, true).slideDown(250);
        }
    });

    $('nav').simpleScrollFollow();
});