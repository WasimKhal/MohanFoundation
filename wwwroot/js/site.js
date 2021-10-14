$(document).ready(function () {
    $("#myCarousel").carousel({
        interval: 8000,
    });
    $(function () {
        if ($(window).width() > 960) {
            //$('.dropdown').hover(function() {
            //			 $(this).toggleClass('open');
            //		});
            $(".dropdown").mouseenter(function () {
                $(this).addClass("open");
            });
            $(".dropdown").mouseleave(function () {
                $(this).removeClass("open");
            });
        } else {
        }
    });
});
