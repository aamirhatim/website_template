$(document).ready(function(){
  // $("#test").html();

  var scrollPos = $(document).scrollTop();
  var contactDim = $("#email").position();
  var skillHeight = $("#skills").outerHeight(true);

  //initial positions
  setLineHeight(scrollPos);
  checkHeight(scrollPos, contactDim.top);
  animateSkill(scrollPos, 200);

  //animate on scroll
  $(document).scroll(function() {
    scrollPos = $(document).scrollTop();
    setLineHeight(scrollPos);
    checkHeight(scrollPos, contactDim.top);
    animateSkill(scrollPos, 200);
  });

  function setLineHeight(scroll) {
    $("#superlatives").css("line-height", (scroll/4) + 150 + "%");
    $("#superlatives").css("opacity", 1-(scroll/900));
  };

  function checkHeight(scroll, height) {
    if (scroll >= height-700) {
      $("#email").animate({width: "50%"});
    }
  };

  function animateSkill(scroll, base) {
    if (scroll > 0) {
      var diff = 120*(skillHeight-scroll)/skillHeight;
      $("#skills").css("top", (-1)*(diff+base) + "px");
    }
  };

});
