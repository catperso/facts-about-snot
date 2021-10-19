$(document).ready(function() {
  $(".clickable").click(function() {
    $(".dark-swap").toggle();
    $(".light-swap").toggle();
  });
  $(".dark-swap").click(function() {
    $("body").addClass("dark-theme");
  });
  $(".light-swap").click(function() {
    $("body").removeClass();
  });
});