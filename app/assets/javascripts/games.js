// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$("document").ready(function(){
  var totalSeconds;
  var timer;
  
  $("#start_button").on("click", function () {
    $("#start_button").fadeOut(200, function() {
      $("#game_nav").append('<div id="game_timer"><p></p></div>');
      createTimer(30);
    });
  });

  function tick() {
    totalSeconds -= 1;
    updateTimer();
    
    if (totalSeconds <= 0) {
      clearInterval(timer);
      alert("Time's up!");
      return;
    }
  }
  
  function createTimer (time) {
    totalSeconds = time;

    updateTimer();
    timer = setInterval(tick, 1000);
  }

  function updateTimer() {
    seconds_text = function () {
      if (totalSeconds != 1) {
        return " seconds";
      } else {
        return " second";
      }
    };
    $("#game_timer p").text(totalSeconds + seconds_text());
  }
});
