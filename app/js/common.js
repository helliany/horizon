$(document).ready(function() {

    $('.navigation__list').superfish({
		speed: 200,
		delay: 200
    });
    
// forms
    $('.btn-write').click(function (){
        $('.form--write').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.btn-call').click(function (){
        $('.form--call').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.btn-back-call').click(function (){
        $('.form--back-call').fadeIn();
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
    });

    function modalClose() {
        $('.form').hide();
        $('.overlay').hide();
    };
// end forms

    $('.load-button').click(function (){
        $('.product').addClass("active");
    });

// btns +/-
    $(".basket-quantity__btn-plus").click(function(){ 
        var newQty = +($(this).siblings(".basket-quantity__number").val()) + 1; 
        if(newQty > 100)newQty = 100; 
        $(this).siblings(".basket-quantity__number").val(newQty); 
    }); 
    
    $(".basket-quantity__btn-min").click(function(){ 
        var newQty = +($(this).siblings(".basket-quantity__number").val()) - 1; 
        if(newQty < 0)newQty = 0; 
        $(this).siblings(".basket-quantity__number").val(newQty); 
    }); 
// end btns

    $(".tabs__content").not(":first").hide();
    $(".subnav-tab").click(function() {
        $(".subnav-tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__content").hide().eq($(this).index()).fadeIn();
        $(".subnav--catalog").addClass("active");

        if ( $(window).width() <= 767 ) {
            $('.subnav-tab').not($('.active')).hide();
            $(".nav-button.active").hide();
        }
    }).eq(0).addClass("active");

    $(".subnav--catalog").mouseleave(function() {
        if ( $(".subnav--catalog").hasClass("active") ) {
            $(".subnav-tab").removeClass("active").eq(0).addClass("active");
            $(".tabs__content").hide().eq(0).fadeIn();
            $(".subnav--catalog").removeClass("active");
        }
    });

    $(".production-tab").click(function() {
        $(".production-tab").removeClass("active").eq($(this).index()).addClass("active");
        $('.product').removeClass("active");
        $(".production-content").removeClass("active").eq($(this).index()).addClass("active")
    }).eq(0).addClass("active");

    $(".production__arr").click(function() {
        $('.product').removeClass("active");
    });

// order form
    $(".order__form-fieldset--data").not($('.active')).find('input[required]').removeAttr('required');
    $(".order__form-fieldset--data").find('input').css('box-shadow', 'none');
    $(".order__form-fieldset--data").find('input').css('outline', 'none');
    $(".order__item--extra").click(function() {
        $(".order__form-fieldset--data").removeClass("active").eq($(this).index()).addClass("active");
        $(".order__form-fieldset--data").find('input').attr('required', true).val('');
        $(".order__form-fieldset--data").not($('.active')).find('input[required]').removeAttr('required');
    });
//end order form

    $(".catalog-print-add").click(function() {
        $(this).addClass("active");
        $(this).siblings(".catalog-print-done").removeClass("active");
        $(".catalog-print-card__comment").addClass("active");
    });

    $(".catalog-print-done").click(function() {
        $(".catalog-print-card__comment").toggleClass("active");
    });

    $(".catalog-souvenir__filter-title").click(function() {
        $(".catalog-souvenir__filter-wrapper").toggleClass("active");
    });

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

    $('.mobile-search__btn').click(function() {
        $('.mobile-search__form').toggleClass('active');
        setTimeout(function(){
            $('.mobile-search__button').prop('type', 'submit');
        }, 300);
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
        $(this).toggleClass('active');
    });

    $('.mobile-btn').click(function() {
        $('.navigation').toggleClass('active');
        if (!$('.navigation').hasClass("active")) {
            menuClose();
            $('.navigation__item--back').hide();
        }
    });

    $(function() {
        if ( $(window).width() <= 767 ) {
            $('.nav-button').click(function(e) {
                e.preventDefault();
            });
            $('.nav-button').not($('.nav-button--back')).click(function (){
                $(".subnav-tab").removeClass("active");
                $('.subnav').not($(this).siblings('.subnav')).removeClass('active');
                $(this).siblings('.subnav').toggleClass('active');
                $('.navigation__item').not($(this).parent()).not($('.navigation__item--back')).hide();
                $(this).addClass("active");
                $('.navigation__item--back').fadeIn();
                $('.subnav-tab').removeClass('active');
                $('.subnav-tab').fadeIn();
            });

            $('.subnav-list__heading').click(function (){
                $('.subnav-list__item').not($(this).parent()).hide();
                $(this).addClass("tabs__item active");
                $(this).siblings('.subnav-list__body').fadeIn().children('.subnav-list__links').fadeIn();
                $('.navigation__item--back').fadeIn();
                $('.subnav-tab.active').hide();
            });

            $('.dropdown__link--service').click(function (){
                $('.dropdown__item').not($(this).parent()).hide();
                $(this).addClass("active");
                $('.nav-button.active').hide();
            });

            $('.nav-button--back').click(function (){
                menuClose();
                $('.subnav-list__heading').removeClass("tabs__item active");
                $('.navigation__item--back').hide();
            });
        }
    });

    $(function() {
        if ( $(window).width() <= 767 ) {
            $('.services-card__link').parent().eq(0).addClass('active');
            $('.services-card__link').click(function (){
                $('.services-card__link').removeClass('active');
                $(this).addClass('active');
                $(this).parent().addClass('active');
                $('.services-card__item').not($(this).parent()).toggleClass('active');
                $(".catalog-souvenir__filter-wrapper").removeClass("active");
            });
            $('.catalog-souvenir__filter-link').parent().eq(0).addClass('active');
            $('.catalog-souvenir__filter-link').eq(0).addClass('active');
            $('.catalog-souvenir__filter-link').click(function (){
                $('.catalog-souvenir__filter-link').removeClass('active');
                $(this).addClass('active');
                $(this).parent().addClass('active');
                $('.catalog-souvenir__filter-item').not($(this).parent()).toggleClass('active');
                $('.catalog-souvenir__filter-list').toggleClass('active');
            });
        }
    });

    $(function() {
        $('.portfolio-card__link').click(function (){
            $('.portfolio-card__link').removeClass('active');
            $(this).addClass('active');
        })
    });

    $(function() {
        $('.catalog-souvenir__filter-link').click(function (){
            $('.catalog-souvenir__filter-link').removeClass('active');
            $(this).addClass('active');
        })
    });

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
    //     $('.nav-button').fadeIn().removeClass("nav-button active");
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

    function menuClose() {
        if ( $(window).width() <= 767 ) {
            $('.tabs__content').hide();
            $('.navigation__item').fadeIn();
            $('.nav-button').fadeIn().removeClass("active");
        }
        if ( $('.nav-button.active')) {
            $('.subnav').removeClass('active');
        }
        $('.subnav').removeClass('active');
        $(".subnav-list__heading").removeClass("active");
        $(".subnav-list__links").hide();
        $('.subnav-list__heading').parent().fadeIn();
        $(".subnav-list__body").hide();
        $('.dropdown__item').fadeIn();
        $(".sublist").hide();
        $(".dropdown__link--service").removeClass('active');
    }

    $(function() {
        if ( $(window).width() <= 767 ) {
            $('.news-card .text p').first().prependTo('.news-card .text');
        }
    });
});
