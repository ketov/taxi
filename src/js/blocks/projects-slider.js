$(document).ready(function () {
   /*var projectsSlider = new Swiper('.gallery-top', {
       autoplay: 5000,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
    });
    var projectSliderThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 10,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        breakpoints: {
            1190: {
                slidesPerView: 7
            },
            1110: {
                slidesPerView: 6
            },
            640: {
                slidesPerView: 2
            }
        }
    });
    projectsSlider.params.control = projectSliderThumbs;
    projectSliderThumbs.params.control = projectsSlider;*/

   //alert(1);
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 0,
        effect: 'fade',
        loop: true,
        autoplay: 5000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
    });
});