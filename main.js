var stopwatchDisplay = document.getElementById("stopwatch-display")
// var handleSeconds = document.getElementById("seconds");
// var handleMili = document.getElementById("mili");
const buttonStart = document.getElementById("start");
const buttonStop = document.getElementById("stop");
const buttonReset = document.getElementById("reset");

// var seconds = 00;
// var mili = 00;

var startTime;
var elapsedTime = 0;
var timer;

buttonStart.onclick = () => {
  clearInterval(timer);
  startTime = Date.now();
  timer = setInterval(startTimer, 10);
}

buttonStop.onclick = () => {
  clearInterval(timer);
  elapsedTime += Date.now() - startTime;
}

buttonReset.onclick = () => {
  clearInterval(timer);
  stopwatchDisplay.innerHTML = "00:00:00";
}

function startTimer () {
  var time = elapsedTime + (Date.now() - startTime);
  var minutes = Math.floor(time / 60000);
  var seconds = Math.floor((time % 60000) / 1000);
  var milliseconds = time % 1000;

  stopwatchDisplay.innerHTML = minutes + ":" + seconds + ":" + milliseconds;
}
