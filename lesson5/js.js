let minutes = 0;
let seconds = 0;

let counter = document.getElementById("counter");
let btnPlus = document.getElementById("speedPlus");
let btnMinus = document.getElementById("speedMinus");
let btnReset = document.getElementById("reset");

function showTime() {
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  counter.textContent = m + ":" + s;
}

btnPlus.addEventListener("click", function() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  showTime();
  document.body.style.background = "linear-gradient(135deg, #0e573cff, #53bd7cff)";
  counter.style.color = "#d80909ff"; 
});

btnMinus.addEventListener("click", function() {
  if (minutes > 0 || seconds > 0) {
    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
  }
  showTime();
  document.body.style.background = "linear-gradient(135deg, #68131aff, #e93939ff)";
  counter.style.color = "#1fc356ff"; 
});

btnReset.addEventListener("click", function() {
  minutes = 0;
  seconds = 0;
  showTime();
  document.body.style.background = "linear-gradient(135deg, #444, #222)";
  counter.style.color = "#fff"; 
});

showTime();
