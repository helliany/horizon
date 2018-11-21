$(document).ready(function() {

    $('.navigation__list').superfish({
		speed: 200,
		delay: 200
    });
    
    // $('.nav-button').click(function (){
    //     // $('.subnav').not($(this).siblings('.subnav')).removeClass('active');
    //     // $(this).siblings('.subnav').toggleClass('active');
    //     if ( $(window).width() <= 767 ) {
    //         $('.navigation__item').not($(this).parent()).not($('.navigation__item--back')).hide();
    //         $(this).addClass("nav-button--active");
    //         $('.navigation__item--back').fadeIn();
    //         // $('.subnav-tab').removeClass('active');
    //         // $('.subnav-tab').fadeIn();
    //     }
    // });

    // $('.nav-button--back').click(function (){
    //     menuClose();
    //     $('.navigation__item--back').hide();
    // });

    $('.btn-write').click(function (){
        $('.form--write').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.btn-call').click(function (){
        $('.form--call').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.leave-feedback__btn').click(function (){
        $('.form--testimonial').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.contacts-btn').click(function (){
        $('.form--director').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.form__btn-close').click(function (){
        modalClose();
    });

    $('.overlay').click(function (){
        modalClose();
    });

    $(document).on('keydown', function(evt) {
        if (evt.keyCode == 27) {
            modalClose();
        }
    })

    function modalClose() {
        $('.form').hide();
        $('.overlay').hide();
    };

    $('.load-button').click(function (){
        $('.product').addClass("active");
    });

    $(".tabs__content").not(":first").hide();
    $(".subnav-tab").click(function() {
        $(".subnav-tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__content").hide().eq($(this).index()).fadeIn();
        $(".subnav--catalog").addClass("active");

        if ( $(window).width() <= 767 ) {
            $('.subnav-tab').not($('.active')).hide();
            $(".nav-button--active").hide();
        }
    }).eq(0).addClass("active");

    $(".subnav--catalog").mouseleave(function() {
        if ( $(".subnav--catalog").hasClass("active") ) {
            $(".subnav-tab").removeClass("active").eq(0).addClass("active");
            $(".tabs__content").hide().eq(0).fadeIn();
            $(".subnav--catalog").removeClass("active");
        }
    });

//     $(".subnav-list__heading").click(function() {
//         if ( $(window).width() <= 767 ) {
//             $(this).addClass("active");
//             $('.subnav-tab.active').hide();
//             $(".subnav-list__links").hide().eq($(this).index()).fadeIn();
//             $('.subnav-list__heading').not($(this)).parent().hide();
//             $(".subnav-list__body").hide();
//             $(this).siblings('.subnav-list__body').fadeIn().children(".subnav-list__links").fadeIn();
//         }
//     });

//     $(".dropdown__link--service").click(function() {
//         if ( $(window).width() <= 767 ) {
//             $(this).addClass("active");
//             $('.nav-button--active').hide();
//             $('.dropdown__link').not($(this)).parent().hide();
//             $(".sublist").fadeIn();
//         }
//     });

    $(".production-tab").click(function() {
        $(".production-tab").removeClass("active").eq($(this).index()).addClass("active");
        $('.product').removeClass("active");
        $(".production-content").removeClass("production-content--open").eq($(this).index()).addClass("production-content--open")
    }).eq(0).addClass("active");

    $(".production__arr").click(function() {
        $('.product').removeClass("active");
    });

    $(".order__form-fieldset--data").not($('.active')).find('input[required]').removeAttr('required');
    $(".order__item--extra").click(function() {
        $(".order__form-fieldset--data").removeClass("active").eq($(this).index()).addClass("active");
        $(".order__form-fieldset--data").find('input').attr('required', true).val('');
        $(".order__form-fieldset--data").not($('.active')).find('input[required]').removeAttr('required');
    });

    $(".catalog-print-add").click(function() {
        $(this).addClass("active");
        $(".catalog-print-done").removeClass("active");
        $(".catalog-print-card__comment").addClass("active");
    });

    $(".catalog-print-done").click(function() {
        $(".catalog-print-card__comment").toggleClass("active");
    });

//     $('.navigation-search__button').click(function() {

//         $('.navigation-search__input').css({
//             'opacity': '1',
//             'visibility': 'visible',
//             'width': $('.navigation__container').width() - $('.nav-button').width() - $('.navigation-search__button').width() - 24 + 'px'
//         });

//         setTimeout(function(){
//             $('.navigation-search__button').prop('type', 'submit');
//         }, 300);
//     });
// });

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
        $(this).toggleClass('active');
    });

    // $('.mobile-btn').click(function() {
    //     $('.navigation').toggleClass('navigation--active');
    //     if (!$('.navigation').hasClass("navigation--active")) {
    //         menuClose();
    //         $('.nav-button--back').hide();
    //     }
    // });

    function slickSlider() {
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
        slickSliderTab();
    };

    function slickSliderTab() {
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

    $(function() {
        $('.catalog-print-card__slider').slick({
            slidesToShow: 4,
            verticalSwiping: true,
            dots: false,
            vertical: true,
            prevArrow: $('.catalog-print-card__arr--prev'),
            nextArrow: $('.catalog-print-card__arr--next'),
            infinite: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: "unslick"
                }            
            ]
        });
    });

// function resizeMenu() {
//     $('.navigation__item').not($('.navigation__item--mobile')).not($('.navigation__item--back')).fadeIn();
//     $('.nav-button').fadeIn().removeClass("nav-button--active");
//     $('.navigation__item--back').hide();
//     $('.subnav').removeClass('active');
//     $(".subnav-list__heading").removeClass("active");
//     $('.subnav-list__heading').parent().fadeIn();
//     $(".subnav-list__body").fadeIn();
//     $(".subnav-list__links").fadeIn();
//     $(".subnav-tab").removeClass("active").fadeIn().eq(0).addClass("active");
//     $('.tabs__content').fadeIn();
//     $('.dropdown__item').fadeIn();
//     $(".dropdown__link--service").removeClass('active');
//     $(".sublist").fadeIn();
//     if ( $(window).width() <= 767 ) {
//         $(".subnav-list__links").hide();
//         $('.tabs__content').hide();
//         $('.navigation__item').not($('.navigation__item--back')).fadeIn();
//         $('.navigation__item--back').hide();
//         $('.navigation').removeClass('navigation--active');
//     }
// }

    slickSlider();

$(window).resize(function() {
    slickSlider();
    // resizeMenu();
});

// function menuClose() {
//     if ( $(window).width() <= 767 ) {
//         $('.tabs__content').hide();
//         $('.navigation__item').fadeIn();
//         $('.nav-button').fadeIn().removeClass("nav-button--active");
//     }
//     if ( $('.nav-button--active')) {
//         $('.subnav').removeClass('active');
//     }
//     $('.subnav').removeClass('active');
//     $(".subnav-list__heading").removeClass("active");
//     $(".subnav-list__links").hide();
//     $('.subnav-list__heading').parent().fadeIn();
//     $(".subnav-list__body").hide();
//     $('.dropdown__item').fadeIn();
//     $(".sublist").hide();
//     $(".dropdown__link--service").removeClass('active');
// }

    $(function() {
        if ( $(window).width() <= 767 ) {
            $('.news-card .text p').first().prependTo('.news-card .text');
        }
    });

});