const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

let countdownTitle = "";
let countdownDate = "";

// Set date input min with todays date
const today = new Date().toISOString().split("T")[0];

dateEl.setAttribute("min", today);

function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownDate);
}

// Event Listners
countdownForm.addEventListener("submit", updateCountdown);
