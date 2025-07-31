const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const timeElements = document.querySelectorAll("span");

const completeEl = document.getElementById("complete");
const completeElInfo = document.getElementById("complete-info");
const completeBtn = document.getElementById("complete-button");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
let countdownActive;

// Time constants
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set date input min with today’s date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// Populate countdown
function updateDOM() {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;

    if (distance < 0) {
      clearInterval(countdownActive);
      countdownEl.hidden = true;
      completeElInfo.textContent = `Countdown Finished on ${countdownDate}`;
      completeEl.hidden = false;
    } else {
      const days = Math.floor(distance / day);
      const hours = Math.floor((distance % day) / hour);
      const minutes = Math.floor((distance % hour) / minute);
      const seconds = Math.floor((distance % minute) / second);

      countdownElTitle.textContent = countdownTitle;
      timeElements[0].textContent = days;
      timeElements[1].textContent = hours;
      timeElements[2].textContent = minutes;
      timeElements[3].textContent = seconds;

      inputContainer.hidden = true;
      countdownEl.hidden = false;
    }
  }, 1000);
}

// Take values from form input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  countdownValue = new Date(countdownDate).getTime();

  if (countdownDate === "") {
    alert("Please select a date for the countdown.");
  } else {
    updateDOM();
  }
}

// Reset all DOM elements
function resetDOM() {
  clearInterval(countdownActive);
  inputContainer.hidden = false;
  countdownEl.hidden = true;
  completeEl.hidden = true;
  countdownTitle = "";
  countdownDate = "";
}

// Event Listeners
countdownForm.addEventListener("submit", updateCountdown);
countdownBtn.addEventListener("click", resetDOM);
completeBtn.addEventListener("click", resetDOM);
