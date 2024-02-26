"use strict";

$(document).ready(function () {
  $('.slider-top').slick({
    autoplay: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1
  });
});
var lightSlider = $('#lightSlider').lightSlider({
  item: 5,
  auto: true,
  loop: true,
  slideMargin: 0,
  controls: false,
  speed: 300,
  slideMove: 1
});

window.goToPrevSlide = function () {
  lightSlider.goToPrevSlide();
};

window.goToNextSlide = function () {
  lightSlider.goToNextSlide();
};

$(document).ready(function () {
  var partnersSlider = $('.lightSliderPartners');
  partnersSlider.slick({
    autoplay: true,
    dots: false,
    speed: 300,
    slidesToShow: 9,
    arrows: false,
    slidesToScroll: 1,
    prevArrow: '',
    nextArrow: ''
  });
  $('#btnPrev').on('click', function () {
    partnersSlider.slick('slickPrev');
  });
  $('#btnNext').on('click', function () {
    partnersSlider.slick('slickNext');
  });
});