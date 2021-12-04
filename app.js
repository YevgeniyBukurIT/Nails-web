$(function () {
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPosition = $(window).scrollTop();



    $(window).on('scroll load resize', function () {
        introH = intro.innerHeight();
        scrollPosition = $(this).scrollTop();
        if (scrollPosition > introH) {
            header.addClass('fixed')
        }
        else {
            header.removeClass('fixed')
        }
    })



})