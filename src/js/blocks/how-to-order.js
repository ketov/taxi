$(document).ready(function () {


    if($("#h-1").length>0) {
        var postion1 = $('#h-1').offset().top,
            w = $(window).height();
        $(document).on('scroll', function (){
            var scroll = $(document).scrollTop();
            if(scroll  > postion1-w/1.5) {
                $('#h-1').addClass('h-1--active');
            }
        });
    }
    else{
        return;
    }




    if($("#h-2").length>0) {
        var postion2 = $('#h-2').offset().top,
            w = $(window).height();
        $(document).on('scroll', function (){
            var scroll = $(document).scrollTop();
            if(scroll  > postion2-w/1.5) {
                $('#h-2').addClass('h-2--active');
            }
        });
    }
    else{
        return;
    }




    if($("#h-3").length>0) {
        var postion3 = $('#h-3').offset().top,
            w = $(window).height();
        $(document).on('scroll', function (){
            var scroll = $(document).scrollTop();
            if(scroll  > postion3-w/1.5) {
                $('#h-3').addClass('h-3--active');
            }
        });
    }
    else{
        return;
    }




    if($("#h-4").length>0) {
        var postion4 = $('#h-4').offset().top,
            w = $(window).height();
        $(document).on('scroll', function (){
            var scroll = $(document).scrollTop();
            if(scroll  > postion4-w/1.5) {
                $('#h-4').addClass('h-4--active');
            }
        });
    }
    else{
        return;
    }




    if($("#h-5").length>0) {
        var postion5 = $('#h-5').offset().top,
            w = $(window).height();
        $(document).on('scroll', function (){
            var scroll = $(document).scrollTop();
            if(scroll  > postion5-w/1.5) {
                $('#h-5').addClass('h-5--active');
            }
        });
    }
    else{
        return;
    }



    if($("#h-6").length>0) {
        var postion6 = $('#h-6').offset().top,
            w = $(window).height();
        $(document).on('scroll', function (){
            var scroll = $(document).scrollTop();
            if(scroll  > postion6-w/1.5) {
                $('#h-6').addClass('h-6--active');
            }
        });
    }
    else{
        return;
    }



});