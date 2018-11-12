$(document).ready(function() {


    $('.nav-button').click(function (){
        $('.subnav').toggleClass('active');
        if ( $(window).width() <= 767 ) {
            $('.navigation__link').eq($(this).addClass('navigation__link--active'));
            $('.navigation__link').not(".navigation__link--active").hide();
            $('.nav-button--back').fadeIn();
        }
    });

    $('.nav-button--back').click(function (){
        $('.subnav').removeClass('active');
        $('.tabs__content').hide();
        $('.navigation__link').not(".navigation__link--active").fadeIn();
        $('.nav-button--back').hide();
    });

    $('.subnav-tab--print').click(function (){
        $('.tabs__content--print').fadeIn();
    });

    $('.subnav-tab--souvenir').click(function (){
        $('.tabs__content--souvenir').fadeIn();
    });

    $('.header__btn-write').click(function (){
        $('.form').removeClass('form--open');
        $('.form--write').addClass('form--open');
        $('.overlay').addClass('overlay--open');
    });

    $('.header__btn-call').click(function (){
        $('.form').removeClass('form--open');
        $('.form--call').addClass('form--open');
        $('.overlay').addClass('overlay--open');
    });

    $('.leave-feedback__btn').click(function (){
        $('.form').removeClass('form--open');
        $('.form--testimonial').addClass('form--open');
        $('.overlay').addClass('overlay--open');
    });

    $('.form__btn-close').click(function (){
        $('.form').removeClass('form--open');
        $('.overlay').removeClass('overlay--open');
    });

    $('.overlay').click(function (){
        $('.form').removeClass('form--open');
        $('.overlay').removeClass('overlay--open');
    });

    $('.load-button').click(function (){
        $('.product[style="display: none;"]').attr('style', "display: block;");
    });

    $(".tabs__content").not(":first").hide();
    $(".subnav-tab").click(function() {
        $(".subnav-tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".production-tab").click(function() {
        $(".production-tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".production-content").removeClass("production-content--open").eq($(this).index()).addClass("production-content--open")
    }).eq(0).addClass("active");

    $('.navigation-search__button').click(function() {

        $('.navigation-search__input').css({
            'opacity': '1',
            'visibility': 'visible',
            'width': $('.navigation__container').width() - $('.nav-button').width() - $('.navigation-search__button').width() - 24 + 'px'
        });

        setTimeout(function(){
            $('.navigation-search__button').prop('type', 'submit');
        }, 300);
    });
});

$(document).mouseup(function(e) {
    var container = $('.navigation-search');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.navigation-search__input').css({
            'width': '0',
            'opacity': '0',
            'visibility': 'hidden'
        });

        $('.navigation-search__button').prop('type', 'button');
    }
});

$(function() {
    $('.hero__slider-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.hero__prev'),
        nextArrow: $('.hero__next')
    });
});

$(function() {
    $('.clients-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        prevArrow: $('.clients__prev'),
        nextArrow: $('.clients__next'),
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
        ]
    });
});

$(function() {
    $('.testis').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.testimonials__prev'),
        nextArrow: $('.testimonials__next')
    });
});

$('.mobile-search__btn').click(function() {
    $('.mobile-search__form').toggleClass('active');
    $(this).toggleClass('active');
});

$('.mobile-btn').click(function() {
    $('.navigation').toggleClass('navigation--active');
});

function slick_slider() {
    var wrapper = $(".production-slider");
    if ($(".slick-initialized").length) {
        wrapper.slick('unslick');
    }
    wrapper.slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: $('.tabs__wrapper--prod'),
        prevArrow: $('.production__prev'),
        nextArrow: $('.production__next'),
		responsive: [
            {
                breakpoint: 99999,
                settings: "unslick"
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });
    slick_slider_tab();
};

function slick_slider_tab() {
    var wrapper = $(".tabs__wrapper--prod");
    if ($(".tabs__wrapper--prod.slick-initialized").length) {
        wrapper.slick('unslick');
    }
    wrapper.slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: $('.production-slider'),
        prevArrow: $('.production__prev'),
        nextArrow: $('.production__next'),
		responsive: [
            {
                breakpoint: 99999,
                settings: "unslick"
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });
};

slick_slider();
$(window).resize(slick_slider);

$(function() {
    if ( $(window).width() <= 767 ) {
        $('.news-card .text p').first().prependTo('.news-card .text');
    }
});