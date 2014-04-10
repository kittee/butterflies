$("document").ready(function(){
  var totalSeconds;
  var timer;
  var level = 0;
  var score = 0;
  var gameIsOver = true;
  var levelIsOver = true;
  var colors = ["red", "yellow", "green", "blue"];
  
  // Main Flow
  $("#start_button").click(function () {
    level++;
    gameIsOver = false;
    levelIsOver = false;
    
    $("#butterfly").fadeTo(3000, 0, function () {
      $("#butterfly").attr("class", ""); // Removes bouncing from the intro page
    });
    
    $("#start_button").hide();
    $("#game_timer").hide();
    $("#score_calc").hide();
    $("#score").hide();
    $("#game_messages").removeClass("messages_left").addClass("messages_center");
    $("#get_ready").show().fadeOut(3000, function() {
      $("#game_timer").fadeIn(250);
      $("#score").text("Level: " + level + " | Score: " + score).fadeIn(250);
      createTimer();
      assignSections();
      
        $("#butterfly").fadeTo(250, 1);
    });
    
    $("#get_ready").text("Ready");
    setTimeout(setText, 1000);
    setTimeout(goText, 2000);
    
    function setText () {
      $("#get_ready").text("Set");
    }
    
    function goText () {
      $("#get_ready").text("Go!");
    }
  });
  
  // Timer Mechanics
  // The tick method also determines when the game is lost.
  function tick() {
    totalSeconds -= 1;
    updateTimer();
    
    if (totalSeconds <= 0) {
      clearInterval(timer);
      clearInterval(changer);
      $("#game_timer").hide().text("Game Over").fadeIn(1000);
      $("#butterfly").fadeTo(500, 0.5);
      gameIsOver = true;
      return;
    }
  }
  
  function createTimer () {
    totalSeconds = 32 - level*2;
    
    if (totalSeconds < 10) {
      totalSeconds = 7;
    }

    updateTimer();
    timer = setInterval(tick, 1000);
    changer = setInterval(randomChange, 3000);
  }

  function updateTimer() {
    seconds_text = function () {
      if (totalSeconds != 1) {
        return " seconds";
      } else {
        return " second";
      }
    };
    $("#game_timer").text(totalSeconds + seconds_text());
  }
  
  // Color Changing Mechanics
  // After every color change, the game looks to see if the game has been won yet.
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
        $("#butterfly").fadeTo(500, 0.5);
        levelIsOver = true;
        clearInterval(timer);
        clearInterval(changer);
        calculateScore();
        levelWonMessages();
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
  "green", "yellow", "yellow", "red", "red"];
  
  var pattern5 =
  ["blue", "blue", "blue", "blue", "blue", 
  "blue", "blue", "blue", "blue", "blue", 
  "blue", "blue", "blue", "blue", "blue", 
  "blue", "blue", "blue", "blue", "blue"];
  
  var pattern6 =
  ["green", "yellow", "yellow", "yellow", "yellow", 
  "green", "green", "yellow", "yellow", "green", 
  "green", "yellow", "yellow", "yellow", "yellow", 
  "green", "green", "yellow", "yellow", "green"];
  
  var pattern7 =
  ["red", "red", "red", "red", "red", 
  "red", "red", "red", "red", "red", 
  "blue", "blue", "blue", "blue", "blue", 
  "blue", "blue", "blue", "blue", "blue"];
  
  var pattern8 =
  ["yellow", "yellow", "yellow", "yellow", "yellow", 
  "yellow", "yellow", "yellow", "yellow", "yellow", 
  "yellow", "yellow", "yellow", "yellow", "yellow", 
  "yellow", "yellow", "yellow", "yellow", "yellow"];
  
  var pattern9 =
  ["yellow", "red", "yellow", "yellow", "red",
  "yellow", "yellow", "green", "green", "yellow",
  "yellow", "red", "yellow", "yellow", "red",
  "yellow", "yellow", "green", "green", "yellow"];
  
  var pattern10 =
  ["blue", "red", "blue", "blue", "blue",
  "blue", "red", "red", "red", "red",
  "blue", "red", "blue", "blue", "blue",
  "blue", "red", "red", "red", "red"];
  
  var pattern11 =
  ["green", "green", "red", "green", "green",
  "green", "green", "green", "red", "green",
  "blue", "blue", "yellow", "blue", "blue",
  "blue", "blue", "blue", "yellow", "blue"];
  
  var patterns =
  [pattern0, pattern1, pattern2, pattern3, pattern4,
  pattern5, pattern6, pattern7, pattern8, pattern9,
  pattern10, pattern11];
  
  function assignSections () {
    var chosenPattern = patterns[Math.floor(Math.random()*patterns.length)];
    for (var i = 0; i < 20; i++) {
      $("#sect_" + i).attr("class", chosenPattern[i]);
    };
  }
  
  // Computer Randomness
  
  function randomChange() {
    var randNum = Math.floor(Math.random()*19);
    var randColor = colors[Math.floor(Math.random()*colors.length)];
    $("#sect_" + randNum).attr("class", randColor);
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
    for (var i = 0; i < nonLinearPairs.length; i++) {
      if ($("#sect_" + nonLinearPairs[i][0]).attr("class") == $("#sect_" + nonLinearPairs[i][1]).attr("class")) {
        return true;
      }
    };
    return false;
  }
  
  function levelWon () {
    if (!linearMatch() && !nonLinearMatch()) {
      return true;
    } else {
      return false;
    }
  }
  
  function levelWonMessages () {
    $("#score").hide();
    $("#game_messages").removeClass("messages_center").addClass("messages_left");
    $("#game_timer").hide().text("Great job!").fadeIn(1000);
    setTimeout(function () {
      $("#score_calc").text("Points Earned: " + totalSeconds + " (time left) x " + level + " (level) = " + (totalSeconds * level)).fadeIn(1000);
    }, 1500);
    setTimeout(function () {
      $("#score").text("Total Score: " + score).fadeIn(1000);
    }, 3000);
    setTimeout(function () {
      $("#start_button").addClass("floatright").text("Next").fadeIn(1000);
    }, 4500);
  }
  
  // Scoring Logic
  function calculateScore () {
    score += totalSeconds * level;
    return score;
  }
});
