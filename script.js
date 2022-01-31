// we select our values
// total biz hours
// we select the vslues
let openBizHours = document.querySelector("#biz_hours").value;
let monthBonusMoney = document.querySelector("#month_bonus").value;
let workStaff = document.querySelector("#total_staff").value;
// let staffHours = document.querySelector("#staff_hours").value;
// let hourValue = document.querySelector("#hour_value").value;
let totalBonus = document.querySelector("#display");
// button selection
const calculate = document.querySelector("#calculate");
const reset = document.querySelector("#reset");

// display selection
const workHourDisplay = document.querySelector("#work_hour_display");

calculate.addEventListener("click", function () {
  let openBizHours = document.querySelector("#biz_hours").value;
  let monthBonusMoney = document.querySelector("#month_bonus").value;
  let workStaff = document.querySelector("#total_staff").value;
  calculation = monthBonusMoney / openBizHours / workStaff;

  if (calculation) {
    workHourDisplay.innerHTML = calculation;
  }
  if (monthBonusMoney || workStaff) {
    workHourDisplay.style.color = "red";
    workHourDisplay.innerHTML = "Please Put all Values !!!";
  } else {
    workHourDisplay.style.color = "red";
    workHourDisplay.innerHTML = "Please Put all Values !!!";
  }

  //   totalBonus=0
});

// reset btn fun

// function reset() {
//   const resetBtn = document.querySelector("#reset");
//   resetBtn = "file:///Users/jannispaps/Desktop/workHour_Calc/index.html";
//   resetBtn.innerHTML = resetBtn;
// }
