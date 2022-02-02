// we select our values
// total biz hours
// we select the vslues
const openBizHours = document.querySelector("#biz_hours").value;
const monthBonusMoney = document.querySelector("#month_bonus").value;
const workStaff = document.querySelector("#total_staff").value;
const totalBonus = document.querySelector("#display");

// button selection
const calculate = document.querySelector("#calculate");

// display selection
const workHourDisplay = document.querySelector("#work_hour_display");
const displayDiv = document.querySelector("#displayDiv");

// fuctions start here

calculate.addEventListener("click", function () {
  let openBizHours = document.querySelector("#biz_hours").value;
  let monthBonusMoney = document.querySelector("#month_bonus").value;
  let workStaff = document.querySelector("#total_staff").value;
  let calculation = monthBonusMoney / openBizHours / workStaff;
  workHourDisplay.innerHTML = calculation;

  if (!openBizHours || !monthBonusMoney || !workStaff) {
    workHourDisplay.style.color = "red";
    workHourDisplay.innerHTML = "Please Put all Values !!!";
  }
});

// reset btn fun

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", function () {
  workHourDisplay.innerHTML = 0;
  monthBonusMoney.innerHTML = 0;
});

// toolip massege code
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// p value msg function
