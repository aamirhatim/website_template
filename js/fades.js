$(document).ready(function(){
  $("nav").hide();
  $("nav").fadeIn("slow");
  var delay_time = 200;

  $(".project").each(function() {
    $(this).delay(delay_time)
    .animate({opacity: [1, "swing"]}, 1500);
    delay_time += 150;
  });

});
