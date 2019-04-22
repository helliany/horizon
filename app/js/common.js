$(document).ready(function () {
    
    // menu
    function initMenu() {
        if ($(window).width() <= 767) {
            $('.navigation--mobile').mmenu({
                extensions: ["fullscreen"],
                navbar: {
                    title: null
                },
                navbars: [{
                    "position": "top",
                    "content": $('.header').clone()
                }]
            });
        } else {
            $('.navigation').superfish({
                speed: 200,
                delay: 500
            });
        }
        
    };
    initMenu();
    // end menu

    // forms
    $('.form__btn-close').click(function () {
        modalClose();
    });

    $('.overlay').click(function () {
        modalClose();
    });

    $(document).on('keydown', function (evt) {
        if (evt.keyCode == 27) {
            modalClose();
        }
    });

    modalOpen($('.btn-write'), $('.form--write'));
    modalOpen($('.btn-call'), $('.form--call'));
    modalOpen($('.btn-back-call'), $('.form--back-call'));
    modalTestiOpen($('.leave-feedback__btn'), $('.form--testimonial'));
    modalOpen($('.contacts-btn'), $('.form--director'));

    function modalOpen(btn, form) {
        btn.click(function () {
            form.fadeIn().css({ 'top': $(window).scrollTop() + ($(window).height() / 2) });
            $('.overlay').fadeIn();
        });
    };

    function modalTestiOpen(btn, form) {
        btn.click(function () {
            form.fadeIn().css({ 'top': $(window).scrollTop() + ($(window).height() * 0.6) });
            $('.overlay').fadeIn();

            if ($(window).width() <= 374) {
                form.fadeIn().css({ 'top': $(window).scrollTop() + ($(window).height() * 0.7) });
            }

            if ($(window).width() <= 320) {
                form.fadeIn().css({ 'top': $(window).scrollTop() + ($(window).height() * 0.85) });
            }
        });
    };

    function modalClose() {
        $('.form').hide();
        $('.overlay').hide();
    };
    // end forms

    $('.load-button').click(function () {
        $('.product').addClass("active");
        $('.load-button').fadeOut();
    });

    // btns +/-
    $(".basket-quantity__btn-plus").click(function () {
        var newQty = +($(this).siblings(".basket-quantity__number").val()) + 1;
        if (newQty > 100) newQty = 100;
        $(this).siblings(".basket-quantity__number").val(newQty);
    });

    $(".basket-quantity__btn-min").click(function () {
        var newQty = +($(this).siblings(".basket-quantity__number").val()) - 1;
        if (newQty < 0) newQty = 0;
        $(this).siblings(".basket-quantity__number").val(newQty);
    });
    // end btns

    // tabs
    $(".tabs__content").not(":first").hide();
    $(".subnav-tab").on('click touchstart', function () {
        $(".subnav-tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__content").hide().eq($(this).index()).fadeIn();
        $(".subnav--catalog").addClass("active");
    }).eq(0).addClass("active");

    $(".subnav--catalog").mouseleave(function () {
        if ($(".subnav--catalog").hasClass("active")) {
            $(".subnav-tab").removeClass("active").eq(0).addClass("active");
            $(".tabs__content").hide().eq(0).fadeIn();
            $(".subnav--catalog").removeClass("active");
        }
    });

    $(".production-tab.index").click(function () {
        $(".production-tab.index").removeClass("active").eq($(this).index()).addClass("active");
        $('.product').removeClass("active");
        $('.load-button').fadeIn();
        $(".production-content.index").removeClass("active").eq($(this).index()).addClass("active")
    }).eq(0).addClass("active");

    $(".production__arr.index").click(function () {
        $('.product').removeClass("active");
        $('.load-button').fadeIn();
    });
    //end tabs

    // order form
    $(".order__form-fieldset--data").not($('.active')).find('input[required]').removeAttr('required');
    $(".order__form-fieldset--data").find('input').css('box-shadow', 'none');
    $(".order__form-fieldset--data").find('input').css('outline', 'none');
    $(".order__item--extra").click(function () {
        $(".order__form-fieldset--data").removeClass("active").eq($(this).index()).addClass("active");
        $(".order__form-fieldset--data").find('input').attr('required', true).val('');
        $(".order__form-fieldset--data").not($('.active')).find('input[required]').removeAttr('required');
    });
    //end order form

    $(".catalog-print-add").click(function () {
        $(this).addClass("active");
        $(this).siblings(".catalog-print-done").removeClass("active");
    });

    $(".catalog-souvenir__filter-title").click(function () {
        $(".catalog-souvenir__filter-wrapper").toggleClass("active");
        $(".services-card__item").not($('.services-card__link.active').parent()).removeClass("active");
    });

    //navigation input
    $(".navigation-search__input").css('box-shadow', 'none');
    $(".navigation-search__input").css('outline', 'none');
    //end navigation input

    $('.navigation-search__button').click(function () {
        $('.navigation-search__input').css({
            'opacity': '1',
            'right': $('.navigation__list').width()*0.25 + 65,
            'visibility': 'visible',
            'width': $('.navigation__list').width() - $('.nav-button--orange').width() - $('.navigation__list').width()*0.25
        });
        $('.navigation-search select').css({
            'opacity': '1',
            'visibility': 'visible',
            'width': $('.navigation__list').width()*0.25
        });
        setTimeout(function () {
            $('.navigation-search__button').prop('type', 'submit');
        }, 300);
    });

    $('.mobile-search__btn').click(function () {
        $('.mobile-search__form').toggleClass('active');
        setTimeout(function () {
            $('.mobile-search__button').prop('type', 'submit');
        }, 300);
    });

    // catalog souvenir card
    $(function () {
        $('.catalog-souvenir__list li img').click(function () {
            $(this).parent('li').parent('.catalog-souvenir__list').prev().children('.catalog-souvenir-card__img-main').attr('src', $(this).attr('src'));
            $('.catalog-print-card__slider').hide().eq($(this).parent('li').index()).fadeIn().slick('reinit');
        })
    });

    $(function () {
        $('.catalog-print-card__slide img').click(function () {
            $('.catalog-souvenir-card__img-main').attr('src', $(this).attr('src'));
        })
    });
    // end catalog souvenir card

    $(document).mouseup(function (e) {
        var container = $('.navigation-search');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.navigation-search__input').css({
                'width': '0',
                'right': '0',
                'opacity': '0',
                'visibility': 'hidden'
            });
            $('.navigation-search select').css({
                'width': '0',
                'opacity': '0',
                'visibility': 'hidden'
            });

            $('.navigation-search__button').prop('type', 'button');
        }
    });

    $(function () {
        $('.hero__slider-list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('.hero__prev'),
            nextArrow: $('.hero__next')
        });
    });

    $(function () {
        $('.clients-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
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

    $(function () {
        $('.testis').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            prevArrow: $('.testimonials__prev'),
            nextArrow: $('.testimonials__next')
        });
    });

    $('.mobile-search__btn').click(function () {
        $(this).toggleClass('active');
    });

    $('.mobile-btn').click(function () {
        $('.navigation--mobile').data( "mmenu" ).open();
        $('.mm-navbar').find('.mobile-btn').click(function () {
            $('.navigation--mobile').data( "mmenu" ).close();
        });
    });

    function resizeServiceMenu () {
        if ($(window).width() <= 767) {
            $('.services-card__link.active').parent().addClass('active');
            $('.services-card__btn').click(function () {
                $('.services-card__item').not($(this).parent()).toggleClass('active');
                $(".catalog-souvenir__filter-wrapper").removeClass("active");
                $(this).toggleClass('active');
            });
            $('.catalog-souvenir__filter-link.active').parent().addClass('active');
            $('.catalog-souvenir__filter-link').click(function () {
                $('.catalog-souvenir__filter-item').not($(this).parent()).toggleClass('active');
                $('.catalog-souvenir__filter-list').toggleClass('active');
            });
        }
    };
    resizeServiceMenu();

    $(function () {
        $('.catalog-souvenir__filter-link').click(function (e) {
            $('.catalog-souvenir__filter-link').removeClass('active');
            $(this).addClass('active');
        })
    });

    function slickSlider() {
        var wrapper = $(".production-slider.index");
        if ($(".slick-initialized").length) {
            wrapper.slick('unslick');
        }
        wrapper.slick({
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: $('.tabs__wrapper--prod.index'),
            prevArrow: $('.production__prev.index'),
            nextArrow: $('.production__next.index'),
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
        var wrapper = $(".tabs__wrapper--prod.index");
        if ($(".tabs__wrapper--prod.index.slick-initialized").length) {
            wrapper.slick('unslick');
        }
        wrapper.slick({
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: $('.production-slider.index'),
            prevArrow: $('.production__prev.index'),
            nextArrow: $('.production__next.index'),
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

    $(function () {
        $('.catalog-print-card__slider').each(function () {
            $(this).slick({
                slidesToShow: 3,
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
        $('.catalog-print-card__slider:first').slick('reinit');
        $('.catalog-print-card__slider').css('height', $('.catalog-print-card__img > div').height()*0.85);
        $('.catalog-souvenir-card__img-main').css('height', $('.catalog-souvenir-card__img-main').height());
    });

    $.extend(true, $.magnificPopup.defaults, {
        tClose: 'Закрыть',
        tLoading: 'Загрузка...',
        gallery: {
            tPrev: 'Назад',
            tNext: 'Вперед',
            tCounter: '%curr% из %total%',
        },
        image: {
            tError: '<a href="%url%">Изображение</a> не может быть загружено.',
        }
    });

    $('.magnific-gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        },
        fixedContentPos: false,
        fixedBgPos: false,
    });

    slickSlider();

    $(window).resize(function () {
        slickSlider();
        initMenu();
        resizeServiceMenu();
    });

    $(function () {
        if ($(window).width() <= 767) {
            $('.news-card .text p').first().prependTo('.news-card .text');
        }
    });

    //input file value
    $(function() {
        $('.form--testimonial').on('change', '.form__input--file', function(){
            if($(this).val().length) {
                $(this).parent('.form__label').prev('span').html($(this).val().split('\\').pop());
            } else {
                $(this).parent('.form__label').prev('span').html('');
            }
        });
    });

    $(function() {
        $('.form__input--file-catalog').change(function(){
            if($(this).val().length) {
                const files = [];
                for (let i = 0; i < $(this).get(0).files.length; i++) {
                    files.push($(this).get(0).files[i].name);
                }
                const mappedFiles = files.map(function(file) {
                    return '<p>' + file + '</p>'
                });
                $(this).parent('.basket-vendor-code__link').next('.catalog-souvenir-card__file').html(mappedFiles);
            } else {
                $(this).parent('.basket-vendor-code__link').next('.catalog-souvenir-card__file').html('');
            }
        });
    });
    // end input file value
});
