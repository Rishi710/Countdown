const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("mins");
const secEl = document.getElementById("seconds");
// New Year Date
const newYears = "25 Dec 2022";

// Countdown Function
function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const mins = Math.floor((totalSeconds / 60) % 24);
  const secs = Math.floor(totalSeconds) % 60;

  // daysEl.innerHTML=addZero(days);
  daysEl.innerHTML=addZero(days);
  hoursEl.innerHTML=addZero(hours);
  minEl.innerHtml=addZero(mins);
  secEl.innerHTML=addZero(secs);

  // document.getElementById("days").innerHTML = addZero(days);
  // document.getElementById("hours").innerHTML = addZero(hours);
  // document.getElementById("mins").innerHTML = addZero(mins);
  // document.getElementById("seconds").innerHTML = addZero(secs);

  // document.getElementById("days").innerHTML = days;
  // document.getElementById("hours").innerHTML = hours;
  // document.getElementById("mins").innerHTML = mins;
  // document.getElementById("seconds").innerHTML = secs;
  // console.log(days, hours, mins, secs);

  function addZero(time) {
    return time < 10 ? `0${time}` : time;
  }
}
setInterval(countdown, 1000);
// countdown();
