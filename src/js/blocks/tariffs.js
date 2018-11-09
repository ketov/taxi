$(document).ready(function () {
    $('.tariffs .i').hover(
        function(){
            var el = $(this);
            var c = el.siblings('.comment');
            c.addClass('active');
        },
        function(){
            var el = $(this);
            var c = el.siblings('.comment');
            c.removeClass('active');
        });
});