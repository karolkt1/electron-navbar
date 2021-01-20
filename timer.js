let startTime;
let elapsedTime = 0;
let timerInterval;
let disabled = false;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

function startTimer() {
    if (!disabled) {
        disabled = true;
        disableButton(disabled);
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function printTime() {
            elapsedTime = Date.now() - startTime;
            document.getElementById("clock").innerHTML = timeToString(elapsedTime);
        }, 10);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    disabled = false;
    disableButton(disabled);
}

function resetTimer() {
    disabled = false;
    disableButton(disabled);
    clearInterval(timerInterval);
    document.getElementById("clock").innerHTML = "00:00:00";
    elapsedTime = 0;
}

function disableButton(disabled) {
    if (disabled) {
        document.getElementById("start-timer").classList.remove('btn-primary');
        document.getElementById("start-timer").classList.add('btn-secondary');
    } else if (!disabled) {
        document.getElementById("start-timer").classList.remove('btn-secondary');
        document.getElementById("start-timer").classList.add('btn-primary');
    }
}

function renderStopWatch() {
    clearBody();
    let body = document.getElementById("body");

    let btn = document.createElement("button");
    btn.innerHTML = "Start Timer";
    btn.setAttribute("onclick", "startTimer()");
    btn.id = "start-timer";
    btn.classList.add('btn');
    btn.classList.add('btn-primary');
    body.appendChild(btn);

    let btn2 = document.createElement("button");
    btn2.innerHTML = "Pause Timer";
    btn2.setAttribute("onclick", "pauseTimer()");
    btn2.classList.add('btn');
    btn2.style.marginLeft = "5px";
    btn2.classList.add('btn-outline-primary');
    body.appendChild(btn2);

    let btn3 = document.createElement("button");
    btn3.innerHTML = "Reset Timer";
    btn3.setAttribute("onclick", "resetTimer()");
    btn3.classList.add('btn');
    btn3.style.marginLeft = "5px";
    btn3.classList.add('btn-outline-primary');
    body.appendChild(btn3);

    let div = document.createElement("div");
    div.id = "clock";
    div.innerHTML = "00:00:00"
    div.classList.add('display-2');
    body.appendChild(div);

}