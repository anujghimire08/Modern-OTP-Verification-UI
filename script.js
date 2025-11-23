let timetxt = document.querySelector(".time");
let timeEl = document.querySelector(".clk");
let time = 60;

let timer = setInterval(() => {
  time--;
  timeEl.textContent = time;
  if (time <= 0) {
    clearInterval(timer);
    timetxt.textContent = "you code is expired";
  }
}, 1000);
