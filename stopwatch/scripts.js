
let timelaps = 0;
let interval;
let isRunning = false;

const startPause = document.getElementById("startPause")
const lapButton = document.getElementById("lapButton")
const resetButton = document.getElementById("resetButton")
const time = document.querySelector(".time")
const lapslist = document.querySelector(".laps")

function formattime(ms) {
    const minute = Math.floor(ms/60000);
    const seconds =  Math.floor((ms % 60000)/1000);
    const millixeconds = (ms % 1000).toString().substr(0,2);
    const minuteString = (minute < 10 ? '0' : '')+minute
    const secondsString = (seconds < 10 ? '0' : '')+seconds
    const millixecondsString = (millixeconds < 10 ? '0' : '')+millixeconds
    return `${minuteString}:${secondsString}.${millixecondsString}`;

}

function startStopWatch() {
   
    interval = setInterval(function() {
        timelaps += 10;
        time.textContent = formattime(timelaps);
    }, 10)
}


function pauseStopwatch () {
    clearInterval(interval);
}

startPause.addEventListener("click", function() {
    if(isRunning) {
        pauseStopwatch();
        startPause.textContent = "Start"
        isRunning = false;
    } else {
        startStopWatch();
        startPause.textContent = "Pause"
        isRunning = true;
    }
    lapButton.disabled = !isRunning
})

lapButton.addEventListener("click", function() {
    const li = document.createElement("li")
    li.textContent = formattime(timelaps);
    lapslist.appendChild(li);
})

resetButton.addEventListener("click", function() {
    pauseStopwatch();
    isRunning = false;
    time.textContent = formattime(0);
    startPause.textContent = "Start"
    timelaps = 0;
    lapslist.innerHTML = '';
    lapButton.disabled = true;
})