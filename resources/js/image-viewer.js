$(document).ready(function () {

    $('#show-list').not('.slick-initialized').slick({
        slidesToShow: 5,
        vertical: true,
        arrows: true,
        dot: false,
        swipe: true,
        asNavFor: '#show-main',
        verticalSwiping: true,
        focusOnSelect: true,
    });
    $('#show-main').not('.slick-initialized').slick({
        slidesToShow: 1,
        arrows: true,
        dot: true,
        fade: true,
        asNavFor: '#show-list',
    });

});