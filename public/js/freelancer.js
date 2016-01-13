$(function() {

  var scrolled = 0;
  $('body').on('click', '.upButton', function(event) {
    scrolled = scrolled + $('body')[0].scrollHeight * -10000;
    $("body").animate({
      scrollTop:  scrolled
    });
  });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});
