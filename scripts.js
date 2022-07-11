//scroll offset to account for navbar height
var scrollOffset = $("#scrollspyNav").height();
$(".scrollSection").css({paddingTop: scrollOffset + 15 + "px"});

//return-to-top button visibility
$(document).ready( function() {
  var scrollPast = $("#about").offset().top;
  $(window).scroll(function(){
    if ($(window).scrollTop() > scrollPast){
      $("#returnLink").css({opacity: 1});
    }
    else { $("#returnLink").css({opacity: 0}); }
  });
});

//HBL image swaps
$("#hblHead").click( function() {
  var src = ($(this).attr("src")=="./images/HBL1_head.jpg")?"./images/HBL2_head.jpg":"./images/HBL1_head.jpg";
  $(this).attr("src", src);
});

$("#hblBody").click( function() {
  var src = ($(this).attr("src")=="./images/HBL1_body.jpg")?"./images/HBL2_body.jpg":"./images/HBL1_body.jpg";
  $(this).attr("src", src);
});

$("#hblLegs").click( function() {
  var src = ($(this).attr("src")=="./images/HBL1_legs.jpg")?"./images/HBL2_legs.jpg":"./images/HBL1_legs.jpg";
  $(this).attr("src", src);
});
