/* hide top info block */
$('.close').click(function () {
  $(this).parents('.top-info').hide();
});


/* show mobile list */
$('.mobile-menu--hamburger-icon').click(function () {
  $('.header-top-menu__menu-item, .header-top-menu__substrate').addClass('show');
});
$('.close-menu').click(function () {
  $('.header-top-menu__menu-item, .header-top-menu__substrate').removeClass('show');
});
/* show mobile list end */

/* slider */
$('.single-item').slick({
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  adaptiveHeight: true,
  appendArrows: '.slider-navigation',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: false,
        arrows: false,
      }
    }
  ]
});
/* slider end */

/* product items slider */
// var $slick = $('.product-slider');
// $slick.slick({
//   rows: 2,
//   dots: false,
//   arrows: true,
//   infinite: true,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2
//       }
//     }, {
//       breakpoint: 610,
//       settings: {
//         slidesToShow: 1
//       }
//     }
//   ]
// });
var width = window.innerWidth || document.body.clientWidth;
var $slick = $('.product-slider');

if (width < 992) {
  $slick.slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 610,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
} else {
  $slick.slick({
    rows: 2,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4
  });
}

/* progress in number  mobile slider */
$('.progress-in-numbers__list').slick({
  responsive: [{
    breakpoint: 99999,
    settings: "unslick"
  }, {
    breakpoint: 768,
    settings: {
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
/* product items slider end */

/* */
$('.promotional-offers-slide').slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  // useTransform: false,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 610,
      settings: {
        variableWidth: false,
        slidesToShow: 2
      }
    }
  ]
});

/* news slider */
var width = window.innerWidth || document.body.clientWidth;

if (width < 992) {
  $('.news-slider').slick({
    dots: false,
    arrows: true,
    variableWidth: true,
    slidesToShow: 1,
    useTransform: false,
    adaptiveHeight: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 610,
        settings: {
          variableWidth: false,
          slidesToShow: 1
        }
      }
    ]
  });

  /* show and hide filters */
  $('.filters-title').click(function () {
    $(this).toggleClass('open');
    $(this).next().toggleClass('open');
  });
  /* show and hide filters end*/
}
/* news slider end */

/* show cart popup */
$('.cart-item.header-top-menu__menu-item--link, .cart-item.mobile').click(function () {
  $('body').addClass('show-cart-popup');
  $('.cart-popup').addClass('open');
});
$('.cart-close').click(function () {
  $('body').removeClass('show-cart-popup');
  $('.cart-popup, .aviable-popup').removeClass('open');
  $('.gallery-popup').removeClass('open');
});
/* show cart popup end */

/* tabs */
$('.tabs__header--title, .login-form--registration').on('click', function () {
  var openTab = $(this).data('tab');

  $('.tabs__header--title').removeClass('active');
  $(this).addClass('active');
  $('.tabs__content').removeClass('active');
  $(openTab).addClass('active');
  $('.recovery-password').removeClass('open');
  $('.form-item').show();
});
/* tabs end */

/* show recovery password tab */
$('.login-form--restore-pass').click(function () {
  $('.form-item').hide();
  $('.recovery-password').addClass('open');
});
$('.login-form--remembered-pass').click(function () {
  $('.form-item').show();
  $('.recovery-password').removeClass('open');
});
/* show recovery password tab end */

/* show login popup on click */
$('.login-open').click(function () {
  $('.sign').addClass('open');
  $('.header-top-menu__menu-item').removeClass('show');
});
$('.sign-out').click(function () {
  $('.sign, .gallery-popup, .aviable-popup').removeClass('open');
});
$('.cart-not-available').click(function () {
  $('#text-613').val(window.location.href);
  $('.aviable-popup').addClass('open');
});
/* show login popup on click end */

/* show gallery */
$('body').on('click', '.product-sliders-top-img, .glass', function () {
  $('.gallery-popup').addClass('open');
});
/* show gallery end */

/* gallery slider */
$('.gallery-slider').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  variableWidth: true,
});
/* gallery slider end*/

/* product slider with nav blocks */
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  loop: true,
  fade: true,
  asNavFor: '.slider-nav',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        adaptiveWidth: true,
        arrows: true
      }
    }
  ]
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: true,
  loop: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        unslick: true
      }
    }
  ]
});
/* product slider with nav blocks end */

/* faq accordion */
if ($(".faq").length > 0) {
  var accordionHeader = $('.accordion__header'),
      accordionContent = $('.accordion__content');
  $(accordionHeader).click(function () {
    if ($(this).hasClass('is-active')) {
      $(this).next(accordionContent).slideUp('slow');
      $(this).removeClass('is-active');
    }
    else {
      $(accordionHeader).not(this).next(accordionContent).slideUp('slow');
      $(accordionHeader).not(this).removeClass('is-active');
      $(this).next(accordionContent).slideDown('slow');
      $(this).addClass('is-active');
    }
  });
}
/* faq accordion end */

/* offers slider */
if ($(".offers-slider").length > 0) {
  $('.offers-slider').slick({
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false
        }
      }
    ]
  });
}
/* offers slider end */

if ($(window).width() < 992) {
  $(document).on('click', '.catalog-item', function () {
    $('.catalog-item').removeClass('open');
    $(this).toggleClass('open');
  });
  /* hide menu */
  $('.header-top-menu__substrate').click(function () {
    $(this).removeClass('show');
    $('.header-top-menu__menu-item').removeClass('show');
  });
  /* hide menu end */
}