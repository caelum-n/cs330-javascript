window.onload = function () {
    const rowCount = 10;
    const colCount = 45;

    const safeLanes = [0, 4, 9];
    const riverLanes = [1, 2, 3];
    const roadLanes = [5, 6, 7, 8];

    const body = document.body;

    const startBtn = document.createElement("button");
    const container = document.createElement("div");

    let frogLoc = ((rowCount - 1) * colCount + Math.floor(colCount / 2));

    startBtn.setAttribute("id", "button");
    startBtn.innerHTML = "Start";
    body.appendChild(startBtn);

    container.setAttribute("id", "container");
    body.appendChild(container);

    startBtn.addEventListener("click", () => {
        startBtn.style.visibility = "hidden";
        createRows();
        populateCars();
        populateLogs();
        //loop();
    })

    document.addEventListener("keydown", (ev) => {
        moveFrog(ev.code);
    })

    function loop() {
        setInterval(moveCars, 10);
        alert("check");
    }

    function createRows() {
        for (let i = 0; i < rowCount * colCount; i++) {
            container.innerHTML += "<div class='square'></div>";
        }

        const grid = container.children;
        grid[frogLoc].classList.add("contains-frog");

        for (let i = 0; i < colCount; i++) {
            for (let j = 0; j < rowCount; j++) {
                if (safeLanes.includes(j)) {
                    grid[(colCount * j) + i].classList.add("safe");
                } else if (riverLanes.includes(j)) {
                    grid[(colCount * j) + i].classList.add("river");
                } else if (roadLanes.includes(j)) {
                    grid[(colCount * j) + i].classList.add("road");
                }
            }
        }
    }

    function populateCars() {
        for (let i = 0; i < colCount; i++) {
            for (let j = 0; j < rowCount; j++) {
                switch (j) {
                    case 5:
                        if (i % 10 === 0 && i % 15 !== 0) {
                            addCar("left", (colCount * j) + i);
                        } else if (i % 5 === 0 && i % 15 !== 0) {
                            addTruck("left", (colCount * j) + i);
                        }
                        break;
                    case 6:
                        if (i % 6 === 0 && i % 12 !== 0) {
                            addCar("left", (colCount * j) + i);
                        } else if (i % 6 === 0 && i % 18 !== 0) {
                            addTruck("left", (colCount * j) + i);
                        }
                        break;
                    case 7:
                        if (i % 10 === 0 && i % 15 !== 0) {
                            addTruck("right", (colCount * j) + (i - 4));
                        } else if (i % 5 === 0 && i % 15 !== 0) {
                            addCar("right", (colCount * j) + (i - 3));
                        }
                        break;
                    case 8:
                        if (i % 6 === 0 && i % 12 !== 0) {
                            addCar("right", (colCount * j) + (i - 3));
                        } else if (i % 6 === 0 && i % 18 !== 0) {
                            addTruck("right", (colCount * j) + (i + 10))
                        }
                        break;
                }
            }
        }
    }

    function addCar(direction, frontLocation) {
        const grid = container.children;
        if (direction === "left") {
            grid[frontLocation].classList.remove("road");
            grid[frontLocation + 1].classList.remove("road");
            grid[frontLocation].classList.add("car-front-left");
            grid[frontLocation + 1].classList.add("car-back-left");
        } else if (direction === "right") {
            grid[frontLocation].classList.remove("road");
            grid[frontLocation - 1].classList.remove("road");
            grid[frontLocation].classList.add("car-front-right");
            grid[frontLocation - 1].classList.add("car-back-right");
        }
    }

    function moveCars() {
        const left = document.querySelectorAll(".car-front-left");
        const right = document.querySelectorAll(".car-front-right");
        left.forEach(c => updateCar("left", c))
        //right.forEach(c => updateCar("right", c))
    }

    function updateCar(direction, frontLocation) {
        alert(direction);
        const grid = container.children;
        //let loc = grid[frontLocation]
        if (direction === "left") {
            if (colCount % frontLocation === 0) {
                grid[(frontLocation - 1) + colCount].classList.remove("road");
                grid[frontLocation].classList.remove("car-front-left");
                grid[frontLocation + 1].classList.remove("car-back-left");
                grid[(frontLocation - 1) + colCount].classList.add("car-front-left");
                grid[frontLocation].classList.add("car-back-left");
                grid[frontLocation + 1].classList.remove("road");
            } else if (colCount % (frontLocation + 1) === 0) {
                grid[frontLocation - 1].classList.remove("road");
                grid[frontLocation].classList.remove("car-front-left");
                grid[(frontLocation + 1) - colCount].classList.remove("car-back-left");
                grid[frontLocation - 1].classList.add("car-front-left");
                grid[frontLocation].classList.add("car-back-left");
                grid[(frontLocation + 1) - colCount].classList.remove("road");
            } else {
                grid[frontLocation - 1].classList.remove("road");
                grid[frontLocation].classList.remove("car-front-left");
                grid[frontLocation + 1].classList.remove("car-back-left");
                grid[frontLocation - 1].classList.add("car-front-left");
                grid[frontLocation].classList.add("car-back-left");
                grid[frontLocation + 1].classList.add("road");
            }
        } else if (direction === "right") {
            grid[frontLocation + 1].classList.remove("road");
            grid[frontLocation].classList.remove("car-front-right");
            grid[frontLocation - 1].classList.remove("car-back-right");
            grid[frontLocation + 1].classList.add("car-front-right");
            grid[frontLocation].classList.add("car-back-right");
            grid[frontLocation - 1].classList.add("road");
        }
    }

    function addTruck(direction, frontLocation) {
        const grid = container.children;
        if (direction === "left") {
            grid[frontLocation].classList.remove("road");
            grid[frontLocation + 1].classList.remove("road");
            grid[frontLocation + 2].classList.remove("road");
            grid[frontLocation].classList.add("truck-cabin-left");
            grid[frontLocation + 1].classList.add("truck-cargo-left");
            grid[frontLocation + 2].classList.add("truck-cargo-left");
        } else if (direction === "right") {
            grid[frontLocation].classList.remove("road");
            grid[frontLocation - 1].classList.remove("road");
            grid[frontLocation - 2].classList.remove("road");
            grid[frontLocation].classList.add("truck-cabin-right");
            grid[frontLocation - 1].classList.add("truck-cargo-right");
            grid[frontLocation - 2].classList.add("truck-cargo-right");

        }
    }

    function updateTruck(direction, frontLocation) {
        const grid = container.children;
        if (direction === "left") {
            grid[frontLocation - 1].classList.remove("road");
            grid[frontLocation].classList.remove("truck-cabin-left");
            grid[frontLocation + 1].classList.remove("truck-cargo-left");
            grid[frontLocation + 2].classList.remove("truck-cargo-left");
            grid[frontLocation - 1].classList.add("truck-cabin-left");
            grid[frontLocation].classList.add("truck-cargo-left");
            grid[frontLocation + 1].classList.add("truck-cargo-left");
            grid[frontLocation + 2].classList.add("road");
        } else if (direction === "right") {
            grid[frontLocation + 1].classList.remove("road");
            grid[frontLocation].classList.remove("truck-cabin-left");
            grid[frontLocation - 1].classList.remove("truck-cargo-left");
            grid[frontLocation - 2].classList.remove("truck-cargo-left");
            grid[frontLocation + 1].classList.add("truck-cabin-left");
            grid[frontLocation].classList.add("truck-cargo-left");
            grid[frontLocation - 1].classList.add("truck-cargo-left");
            grid[frontLocation - 2].classList.add("road");
        }
    }

    function populateLogs() {
        for (let i = 0; i < colCount; i++) {
            for (let j = 0; j < rowCount; j++) {
                switch (j) {
                    case 1:
                        if (i % 10 === 0 && i % 15 !== 0) {
                            addLog("right", (colCount * j) + i);
                        } else if (i % 5 === 0 && i % 15 !== 0) {
                            addLongLog("right", (colCount * j) + i);
                        }
                        break;
                    case 2:
                        if (i % 6 === 0 && i % 12 !== 0) {
                            addLog("left", (colCount * j) + (i - 1));
                        } else if (i % 6 === 0 && i % 18 !== 0) {
                            addLog("left", (colCount * j) + i);
                        }
                        break;
                    case 3:
                        if (i % 10 === 0 && i % 15 !== 0) {
                            addLog("right", (colCount * j) + (i - 2));
                        } else if (i % 5 === 0 && i % 15 !== 0) {
                            addLongLog("right", (colCount * j) + (i - 2));
                        }
                        break;
                }
            }
        }
    }

    function addLog(direction, location) {
        const grid = container.children;
        if (direction === "left") {
            grid[location].classList.remove("river");
            grid[location + 1].classList.remove("river");
            grid[location + 2].classList.remove("river");
            grid[location].classList.add("log-left");
            grid[location + 1].classList.add("log-left");
            grid[location + 2].classList.add("log-left");
        } else if (direction === "right") {
            grid[location].classList.remove("river");
            grid[location - 1].classList.remove("river");
            grid[location - 2].classList.remove("river");
            grid[location].classList.add("log-right");
            grid[location - 1].classList.add("log-right");
            grid[location - 2].classList.add("log-right");
        }
    }

    function addLongLog(direction, location) {
        const grid = container.children;
        if (direction === "left") {
            grid[location].classList.remove("river");
            grid[location + 1].classList.remove("river");
            grid[location + 2].classList.remove("river");
            grid[location + 3].classList.remove("river");
            grid[location].classList.add("long-log-left");
            grid[location + 1].classList.add("long-log-left");
            grid[location + 2].classList.add("long-log-left");
            grid[location + 3].classList.add("long-log-left");
        } else if (direction === "right") {
            grid[location].classList.remove("river");
            grid[location - 1].classList.remove("river");
            grid[location - 2].classList.remove("river");
            grid[location - 3].classList.remove("river");
            grid[location].classList.add("long-log-left");
            grid[location - 1].classList.add("long-log-right");
            grid[location - 2].classList.add("long-log-right");
            grid[location - 3].classList.add("long-log-right");
        }
    }

    function removeClass(name) {
        const divs = document.querySelectorAll("div." + name);
        divs.forEach(div => {
            div.classList.remove(name);
        })
    }

    function moveFrog(e) {
        switch (e) {
            case "ArrowUp":
                if (Math.floor(frogLoc / colCount) !== 0) {
                    removeFrog(frogLoc);
                    frogLoc -= colCount;
                    updateFrog(frogLoc);
                }
                break;
            case "ArrowDown":
                if (Math.floor(frogLoc / colCount) !== rowCount - 1) {
                    removeFrog(frogLoc);
                    frogLoc += colCount;
                    updateFrog(frogLoc);
                }
                break;
            case "ArrowLeft":
                if (frogLoc % colCount !== 0) {
                    removeFrog(frogLoc);
                    frogLoc--;
                    updateFrog(frogLoc);
                }
                break;
            case "ArrowRight":
                if (frogLoc % colCount !== (colCount - 1)) {
                    removeFrog(frogLoc);
                    frogLoc++;
                    updateFrog(frogLoc);
                }
        }
    }

    function removeFrog(location) {
        let grid = container.children;
        grid[location].classList.remove("contains-frog");
    }

    function updateFrog(location) {
        let grid = container.children;
        if (!checkCollision(location)) {
            grid[location].classList.add("contains-frog");
        } else {
            lose();
        }
    }

    function checkCollision(location) {
        if (carCollision(location) || truckCollision(location) || riverCollision(location)) {
            lose();
        } else if (reachHome(location)) {
            win();
        } else return false;
    }

    function carCollision(location) {
        const grid = container.children;
        let loc = grid[location].classList;
        return (loc.contains("car-front-right") || loc.contains("car-back-right")) || (loc.contains("car-front-left") || loc.contains("car-back-left"));
    }

    function truckCollision(location) {
        const grid = container.children;
        let loc = grid[location].classList;
        return (loc.contains("truck-cabin-right") || loc.contains("truck-cargo-right")) || (loc.contains("truck-cabin-left") || loc.contains("truck-cargo-left"));
    }

    function riverCollision(location) {
        const grid = container.children;
        let loc = grid[location].classList;
        return loc.contains("river");
    }

    function reachHome(location) {
        return location < colCount;
    }

    function lose() {
        container.innerHTML = "<div class='message-text'>GAME OVER</div>";
        container.id = "lose";
    }

    function win() {
        container.innerHTML = "<div class='message-text'>YOU WIN</div>";
        container.id = "win";
    }
}