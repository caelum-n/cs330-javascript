import GridSquare from "./GridSquare.js";
import Car from "./Car.js";
import Truck from "./Truck.js";
import Frog from "./Frog.js";
import Log from "./Log.js";

export default class Grid extends HTMLDivElement {
    // dimensions of game board
    colCount;
    rowCount;
    // num arrays of which rows are river/road/safe
    safeSqs;
    riverSqs;
    roadSqs;
    // num arrays of which rows are fast/slow
    slowSqs;
    fastSqs;
    // num arrays of which rows are left/right
    leftSqs;
    rightSqs;

    cList;
    tList;
    logList;

    frog;

    constructor() {
        super();
    }

    connectedCallback() {
        this.cList = [];
        this.tList = [];
        this.logList = [];
    }

    setAttribute(name, val) {
        switch (name) {
            case "id":
                this.id = val;
                break;
            case "colCount":
                this.colCount = val;
                break;
            case "rowCount":
                this.rowCount = val;
                break;
            case "safeSqs":
                this.safeSqs = val;
                break;
            case "riverSqs":
                this.riverSqs = val;
                break;
            case "roadSqs":
                this.roadSqs = val;
                break;
            case "slowSqs":
                this.slowSqs = val;
                break;
            case "fastSqs":
                this.fastSqs = val;
                break;
            case "leftSqs":
                this.leftSqs = val;
                break;
            case "rightSqs":
                this.rightSqs = val;
                break;
        }
    }

    // draws the game board by creating new grid squares and adding labels to them
    makeSqs() {
        customElements.define("grid-square", GridSquare, {extends: "div"});
        const fl = ((this.rowCount - 1) * this.colCount + Math.floor(this.colCount / 2));
        // label the squares as road/river/safe
        for (let i = 0; i < this.rowCount; i++) {
            for (let j = 0; j < this.colCount; j++) {
                const loc = (this.colCount * i) + j;
                const sq = document.createElement("div", {is: "grid-square"});
                sq.setLocation(loc);
                if (this.safeSqs.includes(i)) {
                    sq.classList.add("safe");
                } else if (this.riverSqs.includes(i)) {
                    sq.classList.add("river");
                } else if (this.roadSqs.includes(i)) {
                    sq.classList.add("road");
                }
                if (this.slowSqs.includes(i)) {
                    sq.classList.add("slow");
                } else if (this.fastSqs.includes(i)) {
                    sq.classList.add("fast");
                }
                if (this.leftSqs.includes(i)) {
                    sq.classList.add("left");
                } else if (this.rightSqs.includes(i)) {
                    sq.classList.add("right");
                }
                this.appendChild(sq);
                if (loc === fl) {
                    this.frog = new Frog(loc);
                }
            }
        }
    }

    // draws the cars/trucks on the game board
    populateCars() {
        for (let i = 0; i < this.rowCount; i++) {
            for (let j = 0; j < this.colCount; j++) {
                if (this.roadSqs.includes(i) && this.leftSqs.includes(i) && this.slowSqs.includes(i)) {
                    if (j % 10 === 0 && j % 15 !== 0) {
                        this.cList.push(new Car((this.colCount * i) + j, this.colCount));
                    } else if (j % 5 === 0 && j % 15 !== 0) {
                        this.tList.push(new Truck((this.colCount * i) + j, this.colCount));
                    }
                } else if (this.roadSqs.includes(i) && this.leftSqs.includes(i) && this.fastSqs.includes(i)) {
                    if (j % 6 === 0 && j % 12 !== 0) {
                        this.cList.push(new Car((this.colCount * i) + j, this.colCount));
                    } else if (j % 6 === 0 && j % 18 !== 0) {
                        this.tList.push(new Truck((this.colCount * i) + j, this.colCount));
                    }
                } else if (this.roadSqs.includes(i) && this.rightSqs.includes(i) && this.fastSqs.includes(i)) {
                    if (j % 10 === 0 && j % 15 !== 0) {
                        this.tList.push(new Truck((this.colCount * i) + (j - 4), this.colCount));
                    } else if (j % 5 === 0 && j % 15 !== 0) {
                        this.cList.push(new Car((this.colCount * i) + (j - 3), this.colCount));
                    }
                } else if (this.roadSqs.includes(i) && this.rightSqs.includes(i) && this.slowSqs.includes(i)) {
                    if (j % 6 === 0 && j % 12 !== 0) {
                        this.cList.push(new Car((this.colCount * i) + (j - 3), this.colCount));
                    } else if (j % 6 === 0 && j % 18 !== 0) {
                        this.tList.push(new Truck((this.colCount * i) + (j + 10), this.colCount));
                    }
                }
            }
        }
    }

    // draws the cars/trucks on the game board
    populateLogs() {
        for (let i = 0; i < this.rowCount; i++) {
            for (let j = 0; j < this.colCount; j++) {
                if (this.riverSqs.includes(i) && this.leftSqs.includes(i)) {
                    if (j % 6 === 0 && j % 12 !== 0) {
                        this.logList.push(new Log((this.colCount * i) + j, this.colCount));
                    } else if (j % 6 === 0 && j % 18 !== 0) {
                        this.logList.push(new Log((this.colCount * i + 2) + (j), this.colCount));
                    }
                } else if (this.riverSqs.includes(i) && this.rightSqs.includes(i) && this.fastSqs.includes(i)) {
                    if (j % 6 === 0 && j % 12 !== 0) {
                        this.logList.push(new Log((this.colCount * i) + j, this.colCount));
                    }
                } else if (this.riverSqs.includes(i) && this.rightSqs.includes(i) && this.slowSqs.includes(i)) {
                    if (j % 10 === 0 && j % 15 !== 0) {
                        this.logList.push(new Log((this.colCount * i) + j, this.colCount));
                    } else if (j % 5 === 0 && j % 15 !== 0) {
                        this.logList.push(new Log((this.colCount * i) + j, this.colCount));
                    }
                }
            }
        }
    }

    getSquare(loc) {
        return this.children.item(loc);
    }

    getFrog() {
        return this.frog;
    }

    getCarList() {
        return this.cList;
    }

    getTruckList() {
        return this.tList;
    }

    getLogList() {
        return this.logList;
    }

    // shows game over
    lose() {
        this.parentElement.removeChild(this);
        const l = document.createElement("div");
        l.id = "lose";
        document.body.appendChild(l);
        const m = document.createElement("div");
        m.innerHTML = "GAME OVER"
        m.classList.add("message-text");
        l.appendChild(m);
    }

    // shows you win
    win() {
        this.parentElement.removeChild(this);
        const w = document.createElement("div");
        w.id = "win";
        document.body.appendChild(w);
        const m = document.createElement("div");
        m.innerHTML = "YOU WIN"
        m.classList.add("message-text");
        w.appendChild(m);
    }
}