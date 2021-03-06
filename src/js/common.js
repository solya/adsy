$(function () {
    $('.services__slider-image').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    $('.slider-content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        mobileFirst:true,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          }],
        prevArrow:"<div class='carousel-prev'><i class='arrow left'></i></div>",
        nextArrow:"<div class='carousel-next'><i class='arrow right'></i></div>"
    });

    $('.burger').click(function () {
        $(this).find('span').toggleClass('active');
        $(this).closest('.header-inner').find('.header__nav').toggleClass('active');
        $(this).closest('html').toggleClass('active');
        $(this).closest('.header-inner').find('.submenu').removeClass('active');
        $(this).closest('.header-inner').find('.submenu-icon').removeClass('active');
    });

    $('.submenu').prev().append("<span class='submenu-icon'><i class='arrow-sm down'></i></span>");

    $('.submenu-icon').click(function(){
        $(this).closest('li').find('.submenu').toggleClass('active');
        $(this).toggleClass('active');
    })

    $(".sign-up-modal").click(function () {
        $(this).modal({
            showClose: false
        });
    })

    $("#hero_form").validate();
    $("#modal_form").validate();

    AOS.init();

});