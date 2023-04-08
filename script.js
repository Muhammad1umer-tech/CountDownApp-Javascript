const newyears = '1 Jan 2024';
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const seconsEl = document.getElementById("seconds");
function countdown() {
  const newyearDate = new Date(newyears)
  const currrentDate = new Date();
  const microseconds = (newyearDate - currrentDate);
  const totalSeconds = (newyearDate - currrentDate)/1000;

  const days = Math.floor(totalSeconds/3600/24);
  const hours = Math.floor(totalSeconds/3600)%24;
  const minutes = Math.floor(totalSeconds/60)%60;
  const seconds = Math.floor(totalSeconds)%60;

daysEl.innerHTML = days;
hoursEl.innerHTML = hours;
minEl.innerHTML = minutes;
seconsEl.innerHTML = seconds;
}

setInterval(countdown, 1000);
