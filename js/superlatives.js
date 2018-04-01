$(document).ready(function(){
	$("#superlative h2").html("superlatives");
	var superlative = setInterval(displayTimer, 3000);
	var i = 0;
	var arrSuperlatives = ["superlatives",
                        "fun",
                        "things",
                        "to describe",
                        "you!",
                        "cyclist",
                        "photographer",
                        "creative thinker",
                        "explorer",
                        "graphic designer",
                        "weekend adventurer",
                        "obsessive flosser",
                        "freelancer",
                        "cooking enthusiast",
                        "artist",
                        "developer",
                        "team player",
                        "consultant"];

	function displayTimer() {
		if (i > (arrSuperlatives.length - 1)) {
			i = 0;
		};

    $("#superlative").fadeOut("slow", function() {
      $("#superlative h2").html(arrSuperlatives[i]);
      $("#superlative").fadeIn();
    });

		i++;
	};
});
