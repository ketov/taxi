$(document).ready(function () {
    $('.question').on('click', function(){
        var el = $(this);
        if(el.hasClass('active')){
            el.removeClass('active');
            el.siblings('.answer').stop(true, true).slideUp(300);
        }
        else{
            $('.question.active').siblings('.answer').stop(true, true).slideUp(300);
            $('.question.active').stop(true, true).removeClass('active');
            el.addClass('active');
            el.siblings('.answer').stop(true, true).slideDown(300);
        }
    });
});