// we select our values
// total biz hours
// we select the values
const openBizHours = document.querySelector("#biz_hours").value;
const monthBonusMoney = document.querySelector("#month_bonus").value;
const workStaff = document.querySelector("#total_staff").value;
const totalBonus = document.querySelector("#display");
const staff_value_display = document.querySelector("#staff_value_display");

// button selection
const calculate = document.querySelector("#calculate");

// display selection
const workHourDisplay = document.querySelector("#work_hour_display");
const displayDiv = document.querySelector("#displayDiv");

// fuctions start here

calculate.addEventListener("click", function () {
  const openBizHours = document.querySelector("#biz_hours").value;
  let monthBonusMoney = document.querySelector("#month_bonus").value;
  let workStaff = document.querySelector("#total_staff").value;
  let calculation = monthBonusMoney / openBizHours / workStaff;
  const staffValueCalc = calculation / workStaff;
  workHourDisplay.innerHTML = `${calculation} euro`;
  staff_value_display.innerHTML = ` ${staffValueCalc} euro`;

  if (!openBizHours || !monthBonusMoney || !workStaff) {
    // workHourDisplay.style.backgroundColor = "red";
    // staff_value_display.style.backgroundColor = "red";
    workHourDisplay.innerHTML = "Please Put all Values !!!";
    staff_value_display.innerHTML = "Missing Values";
    // staff_value_display.style.color = "red";
  }
});

// reset btn fun

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", function () {
  // preventDefault();

  workHourDisplay.innerHTML = 0;
  staff_value_display.innerHTML = 0;
});

// toolip message code
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// p value msg function
