$(document).ready(function () {


    if($("#n-1").length>0) {
        var postion1 = $('#n-1').offset().top,
            w = $(window).height();
        $(document).on('scroll', function (){
            var scroll = $(document).scrollTop();
            if(scroll  > postion1-w/1.5) {
                $('#n-1').addClass('n-1--active');
            }
        });
    }
    else{
        return;
    }


    if($("#n-2").length>0) {
        var postion2 = $('#n-2').offset().top,
            w = $(window).height();
        $(document).on('scroll', function (){
            var scroll = $(document).scrollTop();
            if(scroll  > postion2-w/1.5) {
                $('#n-2').addClass('n-2--active');
            }
        });
    }
    else{
        return;
    }

    if($("#n-3").length>0) {
        var postion3 = $('#n-3').offset().top,
            w = $(window).height();
        $(document).on('scroll', function (){
            var scroll = $(document).scrollTop();
            if(scroll  > postion3-w/1.5) {
                $('#n-3').addClass('n-3--active');
            }
        });
    }
    else{
        return;
    }


    if($("#n-4").length>0) {
        var postion4 = $('#n-4').offset().top,
            w = $(window).height();
        $(document).on('scroll', function (){
            var scroll = $(document).scrollTop();
            if(scroll  > postion4-w/1.5) {
                $('#n-4').addClass('n-4--active');
            }
        });
    }
    else{
        return;
    }


    if($("#n-5").length>0) {
        var postion5 = $('#n-5').offset().top,
            w = $(window).height();
        $(document).on('scroll', function (){
            var scroll = $(document).scrollTop();
            if(scroll  > postion5-w/1.5) {
                $('#n-5').addClass('n-5--active');
            }
        });
    }
    else{
        return;
    }


    if($("#n-6").length>0) {
        var postion6 = $('#n-6').offset().top,
            w = $(window).height();
        $(document).on('scroll', function (){
            var scroll = $(document).scrollTop();
            if(scroll  > postion6-w/1.5) {
                $('#n-6').addClass('n-6--active');
            }
        });
    }
    else{
        return;
    }


    if($("#n-7").length>0) {
        var postion7 = $('#n-7').offset().top,
            w = $(window).height();
        $(document).on('scroll', function (){
            var scroll = $(document).scrollTop();
            if(scroll  > postion7-w/1.5) {
                $('#n-7').addClass('n-7--active');
            }
        });
    }
    else{
        return;
    }


    if($("#n-8").length>0) {
        var postion8 = $('#n-8').offset().top,
            w = $(window).height();
        $(document).on('scroll', function (){
            var scroll = $(document).scrollTop();
            if(scroll  > postion8-w/1.5) {
                $('#n-8').addClass('n-8--active');
            }
        });
    }
    else{
        return;
    }



    if($("#n-9").length>0) {
        var postion9 = $('#n-9').offset().top,
            w = $(window).height();
        $(document).on('scroll', function (){
            var scroll = $(document).scrollTop();
            if(scroll  > postion9-w/1.5) {
                $('#n-9').addClass('n-9--active');
            }
        });
    }
    else{
        return;
    }

});