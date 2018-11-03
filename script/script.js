$(document).ready(function() {
    'use strict';

    $('.slick-slider-1').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: false,
        fade: true
    });

    $('.slick-slider-2').slick({
        dots: false,
        infinite: true,
        speed: 400,
        // centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // autoplay:true,
        // fade: true
    });

});