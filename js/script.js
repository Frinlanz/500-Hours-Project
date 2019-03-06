
$('#testimonials').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});

$(document).ready(function() {
  $('.burger').click(function() {
    $('.burger').toggleClass('active');
  });
});

$(document).ready(function(){
  $(".burger").click(function(){
    $(".mobilenav").toggle();
  });
});

$('.listmobile').click(function(){
  $('.mobilenav').css('display','none');
});

