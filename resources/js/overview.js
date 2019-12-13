$(document).ready(function () {
    $("#review-input").starRating({
        starSize: 30,
        useFullStars: true,
        activeColor: '#FFC200',
        ratedColor: '#FFC200',

        callback: function (currentRating, $el) {
            $("#review-value").val(currentRating);
        }
    });
});

$(function () {
    $(".overview-zoom").imagezoomsl({
        stepzoom: 0.5,
        zoomrange: [2, 2],
        zoomstart: 2,
        disablewheel: true

    });
});