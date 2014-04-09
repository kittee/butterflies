// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$("document").ready(function(){
  var totalSeconds;
  var timer;
  var gameIsOver = true;
  var levelIsOver = true;
  
  // Main Flow
  $("#start_button").click(function () {
    gameIsOver = false;
    levelIsOver = false;
    
    $("#start_button").fadeOut(3000, function() {
      $("#game_nav").append('<div id="game_timer"><p></p></div>');
      createTimer(30);
      assignSections();
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
    if (!gameIsOver && !levelIsOver) {
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
      if (levelWon()) {
        levelIsOver = true;
        clearInterval(timer);
        $("#game_timer p").text("Great job!");
      }
    }
  }
  
  // Level Patterns
  var pattern0 =
  ["red", "red", "red", "yellow", "yellow", 
  "yellow", "yellow", "yellow", "red", "red", 
  "green", "green", "green", "blue", "blue", 
  "blue", "blue", "blue", "green", "green"];
  
  var pattern1 =
  ["blue", "blue", "blue", "blue", "blue", 
  "blue", "green", "green", "green", "green", 
  "red", "red", "red", "red", "red", 
  "red", "yellow", "yellow", "yellow", "yellow"];
  
  var pattern2 =
  ["red", "yellow", "yellow", "yellow", "yellow", 
  "red", "red", "blue", "blue", "red", 
  "red", "green", "green", "green", "green", 
  "red", "red", "blue", "blue", "red"];
  
  var pattern3 =
  ["green", "yellow", "red", "red", "yellow", 
  "green", "blue", "red", "yellow", "blue", 
  "green", "yellow", "red", "red", "yellow", 
  "green", "blue", "red", "yellow", "blue"];
  
  var pattern4 =
  ["red", "red", "red", "yellow", "yellow", 
  "yellow", "green", "green", "blue", "blue", 
  "blue", "blue", "blue", "green", "green",
  "green", "yellow", "yellow", "red", "red"]
  
  var patterns = [pattern0, pattern1, pattern2, pattern3, pattern4];
  
  function assignSections () {
    var chosenPattern = patterns[Math.floor(Math.random()*patterns.length)];
    for (var i = 0; i < 20; i++) {
      $("#sect_" + i).attr("class", chosenPattern[i]);
    };
  }
  
  // Win Logic
  var nonLinearPairs = [[0, 5], [1, 4], [6, 9], [10, 15], [11, 14], [16, 19]];
  
  function linearMatch () {
    for (var i = 0; i < 19; i++) {
      if ( ($("#sect_" + i).attr("class") == $("#sect_" + (i+1)).attr("class")) && (i != 9) ) {
        return true;
      }
    };
    return false;
  }
  
  function nonLinearMatch () {
    for (var i = 0; i < nonLinearMatch.length; i++) {
      if ($("#sect_" + nonLinearPairs[i][0]).attr("class") == $("#sect_" + nonLinearPairs[i][1])) {
        return true;
      }
    };
    return false;
  }
  
  function levelWon () {
    if (!linearMatch() && !nonLinearMatch()) {
      return true;
    }
  }  
});
