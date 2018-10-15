$(document).ready(function () {

    var postion = $('#product-icon-1').offset().top,
        w = $(window).height();
    $(document).on('scroll', function (){
        var scroll = $(document).scrollTop();
        if(scroll  > postion-w/2) {
            $('#product-icon-1').addClass('product-icon-1--active');
        }
    });

    var postion1 = $('#product-icon-2').offset().top,
        w = $(window).height();
    $(document).on('scroll', function (){
        var scroll = $(document).scrollTop();
        if(scroll  > postion1-w/2) {
            $('#product-icon-2').addClass('product-icon-2--active');
        }
    });

    var postion2 = $('#product-icon-3').offset().top,
        w = $(window).height();
    $(document).on('scroll', function (){
        var scroll = $(document).scrollTop();
        if(scroll  > postion2-w/2) {
            $('#product-icon-3').addClass('product-icon-3--active');
        }
    });

    var postion3 = $('#product-icon-4').offset().top,
        w = $(window).height();
    $(document).on('scroll', function (){
        var scroll = $(document).scrollTop();
        if(scroll  > postion3-w/2) {
            $('#product-icon-4').addClass('product-icon-4--active');
        }
    });

    var postion4 = $('#product-icon-5').offset().top,
        w = $(window).height();
    $(document).on('scroll', function (){
        var scroll = $(document).scrollTop();
        if(scroll  > postion4-w/2) {
            $('#product-icon-5').addClass('product-icon-5--active');
        }
    });

});