$(document).ready(function(){
  $("#menu").hide();
  $("#menu").slideDown(1000);

  $("#nav-circle").click(function(){
    $("#menu").slideToggle();
  });

});
