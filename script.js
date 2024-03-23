let workPanel = document.getElementById("work");
let breakPanel = document.getElementById("break");

let workTime = 25;
let breakTime = 5;

let seconds = "00";
let lofi;

window.onload = () => {
  document.getElementById("minutes").innerHTML = workTime;
  document.getElementById("seconds").innerHTML = seconds;

  workPanel.classList.add("active");
}

// start timer
const start = () => {
  // change button
  document.getElementById("start").style.display = "none";
  document.getElementById("reset").style.display = "block";

  // change time
  seconds = 5;
  let workMinutes = workTime - 1;
  let breakMinutes = breakTime - 1;

  breakCount = 0;

  // countdown
  let timer = () => {
    // change the display
    document.getElementById("minutes").innerHTML = workMinutes;
    document.getElementById("seconds").innerHTML = seconds;

    // start
    seconds = seconds - 1;

    if (seconds === 0) {
      workMinutes = workMinutes - 1;

      if (workMinutes === -1) {
        if (breakCount % 2 === 0) {
          // start break
          workMinutes = breakMinutes;
          breakCount++;

          // play lofi
          playLofi();

          // change the panel
          workPanel.classList.remove("active");
          breakPanel.classList.add("active");
        } else {
          // continue work
          
          workMinutes = workTime;
         
          breakCount++;
          stopLofi();

          // stop lofi
          

          // change the panel
          workPanel.classList.add("active");
          breakPanel.classList.remove("active");

          // stop timer when break is over
          
        }
      }

      seconds = 59;
    }
  }

  // start the countdown and store interval reference
  setInterval(timer, 1000);
}

const playLofi = () => {
  lofi = new Audio("./sound/lofi.mp3");
  lofi.play();
}

const stopLofi = () => {
  if (lofi) {
    lofi.pause();
    lofi.currentTime = 0;
  }
}
