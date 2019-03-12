$(document).ready(function() {
  //Hamburger
  $('.burger').click(function() {
    $('.burger').toggleClass('active');
  });

  //Slick Slider
  $('#testimonials').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

  // Mobile Navigation
  $(".burger").click(function(){
    $(".mobilenav").toggle();
  });

  // List Mobile 
  $('.listmobile').click(function(){
    $('.mobilenav').css('display','none');
  });
});