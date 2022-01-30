// we select our values
// total biz hours

let biz_hours = document.querySelector("#biz_hours").value;
let monthBonus = document.querySelector("#month_bonus").value;
let totalStaff = document.querySelector("#total_staff").value;
let staffHours = document.querySelector("#staff_hours").value;

let hourValue = document.querySelector("#hour_value").value;

let totalBonus = document.querySelector("#display");
// button selection
const calculate = document.querySelector("#calculate");
const reset = document.querySelector("#creset");

// hour value= biz hours/ month bonus

calculate.addEventListener("click", function () {
  let biz_hours = document.querySelector("#biz_hours").value;
  let monthBonus = document.querySelector("#month_bonus").value;
  let totalStaff = document.querySelector("#total_staff").value;
  let staffHours = document.querySelector("#staff_hours").value;

  let hourValue = document.querySelector("#hour_value").value;
  hourValue = monthBonus / biz_hours / totalStaff;
  //   totalBonus=0

  totalBonus.innerHTML = hourValue;
});
