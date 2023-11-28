window.onload = function () {
    const rowCount = 9;
    const colCount = 45;
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
            if (i === 0 || i === 4 || i === 8) {
                lane.setAttribute("class", "safe-lane");
            } else if (i === 1 || i === 2 || i === 3) {
                lane.setAttribute("class", "river-lane");
            } else if (i === 5 || i === 6 || i === 7) {
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