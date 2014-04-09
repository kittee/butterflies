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
    if (totalSeconds <= 0) {
      clearInterval(timer);
      alert("Time's up!");
      return;
    }
    
    totalSeconds -= 1;
    updateTimer();
  }
  
  function createTimer (time) {
    totalSeconds = time;

    updateTimer();
    timer = setInterval(tick, 1000);
  }

  function updateTimer() {
    $("#game_timer p").text(totalSeconds);
  }
});
