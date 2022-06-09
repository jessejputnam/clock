"use strict";

const hourDisplay = document.getElementById("hour");
const minDisplay = document.getElementById("min");
const secDisplay = document.getElementById("sec");

const getTime = function () {
  const hour = new Date().getHours().toString().padStart(2, 0);
  const min = new Date().getMinutes().toString().padStart(2, 0);
  const sec = new Date().getSeconds().toString().padStart(2, 0);

  return [hour, min, sec];
};

hourDisplay.textContent = getTime()[0];
minDisplay.textContent = getTime()[1];
secDisplay.textContent = getTime()[2];

setInterval(() => {
  const [hour, min, sec] = getTime();
  hourDisplay.textContent = hour;
  minDisplay.textContent = min;
  secDisplay.textContent = sec;
}, 1000);
