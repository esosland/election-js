$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#clinton").slideToggle();
  });
  $(".clickable2").click(function() {
    $("#trump").toggle();
  });
  $(".clickable3").click(function() {
    $("#sanders").toggle();
  });
});
