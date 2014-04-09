// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$("document").ready(function(){
  var totalSeconds;
  var timer;
  var gameIsOver = true;
  
  $("#start_button").click(function () {
    gameIsOver = false;
    $("#start_button").fadeOut(3000, function() {
      $("#game_nav").append('<div id="game_timer"><p></p></div>');
      createTimer(30);
    });
    $("#start_button").text("Ready");
    setTimeout(setText, 1000);
    setTimeout(goText, 2000);
    
    function setText () {
      $("#start_button").text("Set");
    }
    
    function goText () {
      $("#start_button").text("Go!");
    }
  });
  
  // Timer Mechanics
  function tick() {
    totalSeconds -= 1;
    updateTimer();
    
    if (totalSeconds <= 0) {
      clearInterval(timer);
      $("#game_timer p").text("Game Over");
      gameIsOver = true;
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
  
  // Color Changing Mechanics
  
  $("#sections polygon").click(changeColor);
  
  // function changeColor () {
  //   console.log("Colors!");
  //   if ($(this).hasClass("red")) {
  //     console.log(this);
  //     console.log("It's red");
  //     $(this).switchClass("red", "yellow", 200);
  //   } else if ($(this).hasClass("yellow")) {
  //     $(this).switchClass("yellow", "green", 200);
  //   } else if ($(this).hasClass("green")) {
  //     $(this).switchClass("green", "blue", 200);
  //   } else if ($(this).hasClass("blue")) {
  //     $(this).switchClass("blue", "red", 200);
  //   } else {
  //     console.log("No color");
  //     console.log(this);
  //     $("body").toggleClass("test");
  //     $("#sect_0").toggleClass("red");
  //   }
  // };
  
  function changeColor () {
    if (!gameIsOver) {
      if ($(this).attr("class") == "red") {
        $(this).attr("class", "yellow");
      } else if ($(this).attr("class") == "yellow") {
        $(this).attr("class", "green");
      } else if ($(this).attr("class") == "green") {
        $(this).attr("class", "blue");
      } else if ($(this).attr("class") == "blue") {
        $(this).attr("class", "red");
      } else {
        $(this).attr("class", "red");
      }
    }
  }
});
