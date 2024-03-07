$(document).ready(function () {

    $('.burger').click(function () {
        $(this).children().toggleClass('active')
        $('.header__mobile').toggleClass('active')
        $('body').toggleClass('fixed')
        return false
    })


    $(window).scroll(function () {
        var sc = $(window).scrollTop()
        if (sc > 450) {
            $('.header').addClass('show')
        } else {
            $('.header').removeClass('show')
        }
        if (sc > 300) {
            $('.header').addClass('dop')
        } else {
            $('.header').removeClass('dop')
        }
    })

    $('[data-tabs-type]').on('click', function () {
        if (!$(this).hasClass('active')) {
            var index = $(this).index()
            $(this).addClass('active').siblings().removeClass('active')
            $('[data-tabs-typecontent]').hide().eq(index).fadeIn()
        }
        $('.project__slider').slick('setPosition');
    })


    $('[data-tabs-oplata]').on('click', function () {
        if (!$(this).hasClass('active')) {
            var index = $(this).index()
            $(this).addClass('active').siblings().removeClass('active')
            $('[data-tabs-oplatacontent]').hide().eq(index).fadeIn()
        }
        $('.project__slider').slick('setPosition');
    })



    $('.select-box__input').each(function () {
        let input = $(this).is(':checked')
        if (input == true) {
            let numberItem = $(this).attr('id')
            $('.select-box__list').find(`[for='${numberItem}']`).hide()
        }
    })

    $('.select-box__option').click(function () {
        let item = $(this).attr('for')
        $('.select-box__option').show()
        $('.select-box__list').find(`[for='${item}']`).hide()
    })


    $('.month__header').click(function () {
        if ($(this).hasClass('active')) {
          $(this).toggleClass('active')
          $(this).removeClass('active')
          $(this).next().slideUp(300)
        } else {
          $('.month__header').removeClass('active')
          $('.month__body').slideUp(300)
          $(this).toggleClass('active')
          $(this).next().slideToggle(300)
        }
      })

 

      new AirDatepicker('#sertificate-date');
      

   
  



    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show')
            }
        })
    }
    let options = { threshold: [0.5] }
    let observer = new IntersectionObserver(onEntry, options)
    let elements = document.querySelectorAll('.element-animation')
    for (let elm of elements) {
        observer.observe(elm)
    }


   

    $('.project__slider').slick({
        slidesToShow: 2,
        infinite: false,

        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],

    })

    $('.team__blocks').slick({
        slidesToShow: 1,
        infinite: false,
    })

    $('.partners__slider').slick({
        slidesToShow: 5,
        infinite: false,
        arrows: false,
        dots: true,

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 767,
                settings: "unslick",
            },
        ],
    })




    function responsive_slider(selector, size, options) {
        if ($(window).width() < size) {
            if (!$(selector).hasClass('slick-slider')) {
                $(selector).slick(options)
            }
        } else {
            if ($(selector).hasClass('slick-slider')) {
                $(selector).slick('destroy')
            }
        }
    }


    responsive_slider('.information__blocks', 767, {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: false,
    })

    $(window).resize(function () {
        responsive_slider('.information__blocks', 767, {
            slidesToShow: 1,
            arrows: false,
            dots: true,
            infinite: false,
        })
    })

    responsive_slider('.history__blocks', 767, {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: false,
        adaptiveHeight: true
    })

    $(window).resize(function () {
        responsive_slider('.history__blocks', 767, {
            slidesToShow: 1,
            arrows: false,
            dots: true,
            infinite: false,
            adaptiveHeight: true
        })
    })


});
