const timerNode = document.querySelector(".timer_seconds_value");
let timerValue = 0;

const CountDown = () => {
    if (timerValue >= 0 && timerValue <= 60) {
        timerNode.innerText = timerValue;
        setTimeout(CountDown, 1000);
    } else {
        timerNode.innerText = 60;
    }
    timerValue++;
};
CountDown();
