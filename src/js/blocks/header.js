$(document).ready(function () {
    $('#hamburger').on('click', function(){
        var h = $('header');
        var el = $(this);
        if(h.hasClass('hamburger-active')){
            h.removeClass('hamburger-active');
            h.find('.mobile').find('.links').stop(true, true).slideUp(400);
            h.find('.mobile').find('.phone').stop(true, true).slideUp(400);
            $('body').css({'overflow':'auto'});
            el.removeClass('active');
        }
        else{
            h.addClass('hamburger-active');
            h.find('.mobile').find('.links').stop(true, true).slideDown(400);
            h.find('.mobile').find('.phone').stop(true, true).slideDown(400);
            $('body').css({'overflow':'hidden'});
            el.addClass('active');
        }
    });
});