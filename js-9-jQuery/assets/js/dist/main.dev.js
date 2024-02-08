"use strict";

$(document).ready(function () {
  $('.slider-top').slick({
    adaptiveHeight: true,
    autoplay: true,
    // dots: true,
    speed: 500,
    slidesToShow: 1,
    // Додайте цей параметр
    slidesToScroll: 1 // Додайте цей параметр

  });
}); // $(function(){
//   $('#sliderFirst').lightSlider({
//     item:1,
//     auto: true,
//   })
//   })

var drawCats = function drawCats(howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + "=<.>=");
  }
};