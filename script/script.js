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
        speed: 300,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        fade: true
    });

    $('.slick-slider-3').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow:'<img class="prev" src="../img/prev.svg">',
        nextArrow:'<img class="next" src="../img/next.svg">'
    });

    (function() {

        var swInstance = new ScrollWatch({
            watchOnce: false
        });

    })();

});