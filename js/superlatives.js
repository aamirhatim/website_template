$(document).ready(function(){
  $("#title-name").hide();
  $("#superlative").hide();

  var superlatives = ["write",
                      "some",
                      "words",
                      "that",
                      "describe",
                      "you",
                      "professionally",
                      "and outside",
                      "of work.",
                      "Or",
                      "just put",
                      "whatever",
                      "you want.",
                      "cooking enthusiast",
                      "artist",
                      "developer",
                      "team player",
                      "consultant",
                      "add as many words",
                      "as you want.",
                      "Fill up",
                      "the space!"];

  var spans = "<span>";
  for (var i = 0; i < superlatives.length; i++) {
    spans = spans + superlatives[i] + " </span><span>";
  }
  spans = spans + "</span>";

  $("#title-name").fadeIn({queue: false, duration: 1000, complete: function() {
    $(spans).hide().appendTo("#superlatives").each(function(i) {
        $(this).delay(100 * i).fadeIn(1000);
    });
  }});

});
