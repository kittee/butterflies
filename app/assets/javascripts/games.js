// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$("document").ready(function(){
  $("#start_button").on("click", function () {
    $("#start_button").fadeOut(200, function() {
      
    });
  });

  var timer;
  var totalSeconds;


  function createTimer (timerID, time) {
    timer = document.getElementById(timerID);
    totalSeconds = time;

    updateTimer()
    window.setTimeout("Tick()", 1000);
  }

  function tick() {
    totalSeconds -= 1;
    updateTimer()
    window.setTimeout("Tick()", 1000);
  }

  function updateTimer() {
    timer.innerHTML = totalSeconds;
  }
});
