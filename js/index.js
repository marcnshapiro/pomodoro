var time = 0;
var running = false;

var lenSession = 25;
var lenBreak = 5;

var hrs = 0;
var mins = 0;
var secs = 0;

var countdown = function() {
  if (running) {
    if (secs < 0) {
      secs = 59;
      mins--
    }
    if (mins < 0) {
      mins = 59;
      hrs--
    }

    var strHours = (hrs.toString());
    var strMinutes = (mins < 10 ? "0" + mins: mins.toString());
    var strSeconds = (secs < 10 ? "0" + secs: secs.toString());

    var remainingTime = "Time remaining: " + strHours + ":" + strMinutes + ":" + strSeconds;

    document.getElementById("output").innerHTML = remainingTime;

    secs--;

    setTimeout(countdown, 1000);
  }
}

$(document).ready( function() {
  "use strict";

  if (lenSession > 59) {
    hrs = Math.trunc(lenSession / 60);
    mins = lenSession % 60;
    secs = 0;
  } else {
    hrs = 0;
    mins = lenSession;
    secs = 0;
  }

  document.getElementById("sessionTime").innerHTML = lenSession;
  document.getElementById("breakTime").innerHTML = lenBreak;

  $("#start").on("click", function() {
    if (!running) {
      running = true;
      countdown();
      document.getElementById("start").innerHTML = "Pause";
    } else {
      running = false;
      document.getElementById("start").innerHTML = "Ressume";      
    }
  });    
  
  $("#reset").on("click", function() {
    running = false;
    document.getElementById("start").innerHTML = "Start";

    if (lenSession > 59) {
      hrs = Math.trunc(lenSession / 60);
      mins = lenSession % 60;
      secs = 0;
    } else {
      hrs = 0;
      mins = lenSession;
      secs = 0;
    }

    var strHours = (hrs.toString());
    var strMinutes = (mins < 10 ? "0" + mins: mins.toString());
    var strSeconds = (secs < 10 ? "0" + secs: secs.toString());

    var remainingTime = "Time remaining: " + strHours + ":" + strMinutes + ":" + strSeconds;

    document.getElementById("output").innerHTML = remainingTime;
  });    
});

