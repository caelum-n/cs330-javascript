import Grid from "./Grid.js";

window.onload = function () {
    const rowCount = 10;
    const colCount = 45;

    const safeLanes = [0, 4, 9];
    const riverLanes = [1, 2, 3];
    const roadLanes = [5, 6, 7, 8];
    const slowLanes = [2, 3, 5, 8];
    const fastLanes = [1, 6, 7];
    const leftLanes = [2, 5, 6];
    const rightLanes = [1, 3, 7, 8];

    const body = document.body;

    // create the start button and add node to body of html
    const startBtn = document.createElement("button");
    startBtn.setAttribute("id", "start-btn");
    startBtn.innerHTML = "Start";
    body.appendChild(startBtn);

    // create the replay button and make visibility hidden; add node to body of html
    const replayBtn = document.createElement("button");
    replayBtn.setAttribute("id", "replay-btn");
    replayBtn.innerHTML = "End Game";
    replayBtn.style.visibility = "hidden";
    body.appendChild(replayBtn);

    // add container (game-board) to body of html
    customElements.define("game-board", Grid, {extends: "div"});
    const container = document.createElement("div", {is: "game-board"});
    body.appendChild(container);
    container.setAttribute("id", "container");
    container.setAttribute("colCount", colCount.toString());
    container.setAttribute("rowCount", rowCount.toString());
    container.setAttribute("safeSqs", safeLanes.toString());
    container.setAttribute("roadSqs", roadLanes.toString());
    container.setAttribute("riverSqs", riverLanes.toString());
    container.setAttribute("slowSqs", slowLanes.toString());
    container.setAttribute("fastSqs", fastLanes.toString())
    container.setAttribute("leftSqs", leftLanes.toString());
    container.setAttribute("rightSqs", rightLanes.toString());

    // add event listener to start button that calls set up functions on click
    startBtn.addEventListener("click", () => {
        startBtn.style.visibility = "hidden";
        replayBtn.style.visibility = "visible";
        container.makeSqs();
        container.populateCars();
        container.populateLogs();
        loop();
    })

    // add event listener to replay button that reloads the page on click
    replayBtn.addEventListener("click", () => {
        location.reload();
    })
}

function loop() {
    setInterval(moveFastVehicles, 350);
    setInterval(moveSlowVehicles, 500);
    setInterval(moveFastLogs, 500);
    setInterval(moveSlowLogs, 500);
}

function moveFastVehicles() {
    const clist = document.getElementById("container").getCarList();
    const tlist = document.getElementById("container").getTruckList();
    clist.forEach(function (c) {
        if (c.front.classList.contains("fast")) {
            c.moveCar();
        }
    })
    tlist.forEach(function (t) {
        if (t.cabin.classList.contains("fast")) {
            t.moveTruck();
        }
    })
}

function moveSlowVehicles() {
    const clist = document.getElementById("container").getCarList();
    const tlist = document.getElementById("container").getTruckList();
    clist.forEach(function (c) {
        if (c.front.classList.contains("slow")) {
            c.moveCar();
        }
    })
    tlist.forEach(function (t) {
        if (t.cabin.classList.contains("slow")) {
            t.moveTruck();
        }
    })
}

function moveFastLogs() {
    const logList = document.getElementById("container").getLogList();
    logList.forEach(function (l) {
        if (l.front.classList.contains("fast")) {
            l.moveLog();
        }
    })
}

function moveSlowLogs() {
    const logList = document.getElementById("container").getLogList();
    logList.forEach(function (l) {
        if (l.front.classList.contains("slow")) {
            l.moveLog();
        }
    })
}