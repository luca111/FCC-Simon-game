$(document).ready(function(){

  var currentSerie = [];
  var correctCurrentButtonPosition;
  var strictMode = false;

  var buttonOneSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
  var buttonTwoSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
  var buttonThreeSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
  var buttonFourSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

  var addRandomButton = function() {
    currentSerie.push(Math.floor(Math.random() * (4)) + 1);
    console.log(currentSerie);
    $("#stepsInSerieAndMsgDisplay").html("<p id='stepsInSerieAndMsgDisplay'>" + currentSerie.length + "</p>");
  };


  var timeoutID = [];
  var stepNumber = [];
  var playCurrentSerie = function() {
    for (i = 0; i < (currentSerie.length); i++) {
      stepNumber.push(i);
      timeoutID[i] = window.setTimeout(function(){playNextStep(stepNumber[0]);}, (1500 + (i * 1500)));
    };
  };
  function playNextStep(whichStep) {
    stepNumber.shift();
    console.log("step" + whichStep);
    switch (currentSerie[whichStep]) {
      case 1:
        buttonOneSound.play();
        $("#buttonOne").fadeIn(400).fadeOut(400).fadeIn(400);
        break;
      case 2:
        buttonTwoSound.play();
        $("#buttonTwo").fadeIn(400).fadeOut(400).fadeIn(400);
        break;
      case 3:
        buttonThreeSound.play();
        $("#buttonThree").fadeIn(400).fadeOut(400).fadeIn(400);
        break;
      case 4:
        buttonFourSound.play();
        $("#buttonFour").fadeIn(400).fadeOut(400).fadeIn(400);
        break;
    };
  };

  var timeoutID2;
  function delayedResetRestart() {
    timeoutID2 = window.setTimeout(function(){resetRestart();}, 4000);
  };

  $("#buttonOne").click(function(){
    if (currentSerie[correctCurrentButtonPosition] == 1) {
      $("#buttonOne").fadeIn(400).fadeOut(400).fadeIn(400);
      buttonOneSound.play();
      if ((currentSerie.length - 1) > correctCurrentButtonPosition) {
        correctCurrentButtonPosition++}
      else if (currentSerie.length == 20) {
        $("#stepsInSerieAndMsgDisplay").html("<p id='stepsInSerieAndMsgDisplay'>" + "You win!" + "</p>");
        console.log("You win!");
        delayedResetRestart();
      }
      else {
        addRandomButton();
        playCurrentSerie();
        correctCurrentButtonPosition = 0;
      };
    }
    else {
      $("#buttonOne").fadeIn(800).fadeOut(800).fadeIn(800);
      if (strictMode) {
        indicateErrorAndResetRestart();
      }
      else {
        indicateErrorAndRestart();
      };
    };
  });

  $("#buttonTwo").click(function(){
    if (currentSerie[correctCurrentButtonPosition] == 2) {
      $("#buttonTwo").fadeIn(400).fadeOut(400).fadeIn(400);
      buttonTwoSound.play();
      if ((currentSerie.length - 1) > correctCurrentButtonPosition) {
        correctCurrentButtonPosition++}
      else if (currentSerie.length == 20) {
        $("#stepsInSerieAndMsgDisplay").html("<p id='stepsInSerieAndMsgDisplay'>" + "You win!" + "</p>");
        console.log("You win!");
        delayedResetRestart();
      }
      else {
        addRandomButton();
        playCurrentSerie();
        correctCurrentButtonPosition = 0;
      };
    }
    else {
      $("#buttonTwo").fadeIn(800).fadeOut(800).fadeIn(800);
      if (strictMode) {
        indicateErrorAndResetRestart();
      }
      else {
        indicateErrorAndRestart();
      };
    };
  });

  $("#buttonThree").click(function(){
    if (currentSerie[correctCurrentButtonPosition] == 3) {
      $("#buttonThree").fadeIn(400).fadeOut(400).fadeIn(400);
      buttonThreeSound.play();
      if ((currentSerie.length - 1) > correctCurrentButtonPosition) {
        correctCurrentButtonPosition++}
      else if (currentSerie.length == 20) {
        $("#stepsInSerieAndMsgDisplay").html("<p id='stepsInSerieAndMsgDisplay'>" + "You win!" + "</p>");
        console.log("You win!");
        delayedResetRestart();
      }
      else {
        addRandomButton();
        playCurrentSerie();
        correctCurrentButtonPosition = 0;
      };
    }
    else {
      $("#buttonThree").fadeIn(800).fadeOut(800).fadeIn(800);
      if (strictMode) {
        indicateErrorAndResetRestart();
      }
      else {
        indicateErrorAndRestart();
      };
    };
  });

  $("#buttonFour").click(function(){
    if (currentSerie[correctCurrentButtonPosition] == 4) {
      $("#buttonFour").fadeIn(400).fadeOut(400).fadeIn(400);
      buttonFourSound.play();
      if ((currentSerie.length - 1) > correctCurrentButtonPosition) {
        correctCurrentButtonPosition++}
      else if (currentSerie.length == 20) {
        $("#stepsInSerieAndMsgDisplay").html("<p id='stepsInSerieAndMsgDisplay'>" + "You win!" + "</p>");
        console.log("You win!");
        delayedResetRestart();
      }
      else {
        addRandomButton();
        playCurrentSerie();
        correctCurrentButtonPosition = 0;
      };
    }
    else {
      $("#buttonFour").fadeIn(800).fadeOut(800).fadeIn(800);
      if (strictMode) {
        indicateErrorAndResetRestart();
      }
      else {
        indicateErrorAndRestart();
      };
    };
  });

  $("#startRestartButton").click(function(){
    resetRestart();
  });

  var resetRestart = function() {
    currentSerie = [];
    addRandomButton();
    correctCurrentButtonPosition = 0;
    playCurrentSerie();
  };

  $("#strictModeButton").click(function(){
    strictMode = !strictMode;
    console.log("strict mode " + strictMode);
  });

  var timeoutID3;
  var indicateErrorAndRestart = function() {
    // playing those two sounds at the same time to make a noise indicating an error
    buttonTwoSound.play();
    buttonThreeSound.play();
    correctCurrentButtonPosition = 0;
    $("#stepsInSerieAndMsgDisplay").html("<p id='stepsInSerieAndMsgDisplay'>" + "Error!" + "</p>");
    timeoutID3 = window.setTimeout(function(){
      $("#stepsInSerieAndMsgDisplay").html("<p id='stepsInSerieAndMsgDisplay'>" + currentSerie.length + "</p>");
      playCurrentSerie();
    }, 2000);
  };

  var timeoutID4
  var indicateErrorAndResetRestart = function() {
    // playing those two sounds at the same time to make a noise indicating an error
    buttonTwoSound.play();
    buttonThreeSound.play();
    $("#stepsInSerieAndMsgDisplay").html("<p id='stepsInSerieAndMsgDisplay'>" + "Error!" + "</p>");
    timeoutID4 = window.setTimeout(function(){resetRestart();}, 2000);
  };

});
