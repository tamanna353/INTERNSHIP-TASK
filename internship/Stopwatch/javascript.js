let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

const timeDisplay = document.getElementById('time');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime() {
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedHours = hours < 10 ? '0' + hours : hours;
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function startStopwatch() {
  interval = setInterval(function() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    timeDisplay.textContent = formatTime();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(interval);
}

startStopBtn.addEventListener('click', function() {
  if (isRunning) {
    stopStopwatch();
    startStopBtn.textContent = 'Start';
  } else {
    startStopwatch();
    startStopBtn.textContent = 'Stop';
  }
  isRunning = !isRunning;
});

resetBtn.addEventListener('click', function() {
  stopStopwatch();
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  timeDisplay.textContent = formatTime();
  startStopBtn.textContent = 'Start';
});
