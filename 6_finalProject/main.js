window.onload = function () {
    const rowCount = 10;
    const colCount = 45;
    const safeLanes = [0, 4, 9];
    const riverLanes = [1, 2, 3];
    const roadLanes = [5, 6, 7, 8];

    const body = document.body;

    const startBtn = document.createElement("button");
    const container = document.createElement("div");

    const frog = document.createElement("div");
    frog.setAttribute("id", "frog")
    const frogLoc = {x: (colCount - 1) / 2, y: rowCount - 1};

    const lanes = container.children;

    startBtn.setAttribute("id", "button");
    startBtn.innerHTML = "Start";
    body.appendChild(startBtn);

    container.setAttribute("id", "container");
    body.appendChild(container);

    startBtn.addEventListener("click", () => {
        startBtn.style.visibility = "hidden";
        initialLayout();
    })

    document.addEventListener("keydown", (ev) => {
        moveFrog(ev.code);
    })

    function initialLayout() {
        for (let i = 0; i < rowCount; i++) {
            const lane = document.createElement("div");
            if (safeLanes.includes(i)) {
                lane.setAttribute("class", "safe-lane");
            } else if (riverLanes.includes(i)) {
                lane.setAttribute("class", "river-lane");
            } else if (roadLanes.includes(i)) {
                lane.setAttribute("class", "road-lane");
            }
            container.appendChild(lane);
            for (let j = 0; j < colCount; j++) {
                const square = document.createElement("div");
                square.setAttribute("class", "square");
                lane.appendChild(square);
                if (i === frogLoc["y"] && j === frogLoc["x"]) {
                    square.appendChild(frog);
                }
                if (i === 6) {
                    if ((j) % 5 === 0 && (j) % 15 !== 0) {
                        const carFront = document.createElement("div");
                        carFront.setAttribute("class", "car-front-left");
                        square.appendChild(carFront);
                    } else if ((j - 1) % 5 === 0 && (j - 1) % 15 !== 0) {
                        const carBack = document.createElement("div");
                        carBack.setAttribute("class", "car-back-left");
                        square.appendChild(carBack);
                    }
                } else if (i === 8) {
                    if ((j) % 5 === 0 && (j) % 15 !== 0) {
                        const carFront = document.createElement("div");
                        carFront.setAttribute("class", "car-front-right");
                        square.appendChild(carFront);
                    } else if ((j + 1) % 5 === 0 && (j + 1) % 15 !== 0) {
                        const carBack = document.createElement("div");
                        carBack.setAttribute("class", "car-back-right");
                        square.appendChild(carBack);
                    }
                }
            }
        }
    }

    function moveFrog(e) {
        switch (e) {
            case "ArrowUp":
                if (frogLoc["y"] !== 0) {
                    frogLoc["y"] = frogLoc["y"] - 1;
                    updateFrog(frogLoc["x"], frogLoc["y"]);
                }
                break;
            case "ArrowDown":
                if (frogLoc["y"] !== rowCount - 1) {
                    frogLoc["y"] = frogLoc["y"] + 1;
                    updateFrog(frogLoc["x"], frogLoc["y"]);
                }
                break;
            case "ArrowLeft":
                if (frogLoc["x"] !== 0) {
                    frogLoc["x"] = frogLoc["x"] - 1;
                    updateFrog(frogLoc["x"], frogLoc["y"]);
                }
                break;
            case "ArrowRight":
                if (frogLoc["x"] !== colCount - 1) {
                    frogLoc["x"] = frogLoc["x"] + 1;
                    updateFrog(frogLoc["x"], frogLoc["y"]);
                }
        }
    }

    function removeFrog() {
        const frog = document.getElementById("frog");
        const fParent = frog.parentElement;
        fParent.removeChild(frog);
    }

    function updateFrog(x, y) {
        removeFrog();
        let sqs = lanes.item(y).children;
        sqs.item(x).appendChild(frog);
    }
}