export default class Log {

    front;
    two;
    three;
    cols;

    constructor(loc, cols) {
        this.cols = parseInt(cols);
        this.front = document.getElementById("container").getSquare(loc);
        this.findBack();
        this.showLog();
    }

    findBack() {
        const loc = this.front.getLocation();
        if (this.front.classList.contains("left")) {
            let l1 = loc + 1;
            let l2 = loc + 2;
            if ((loc + 1) % this.cols === 0) {
                l1 -= this.cols;
                l2 -= this.cols;
            } else if ((loc + 2) % this.cols === 0) {
                l2 -= this.cols;
            }
            this.two = document.getElementById("container").getSquare(l1);
            this.three = document.getElementById("container").getSquare(l2);
        } else if (this.front.classList.contains("right")) {
            let l1 = loc - 1;
            let l2 = loc - 2;
            if (loc % this.cols === 0) {
                l1 += this.cols;
                l2 += this.cols;
            } else if ((loc - 1) % this.cols === 0) {
                l2 += this.cols;
            }
            this.two = document.getElementById("container").getSquare(l1);
            this.three = document.getElementById("container").getSquare(l2);        }
    }

    hideLog() {
        this.front.classList.replace("log", "river");
        this.two.classList.replace("log", "river");
        this.three.classList.replace("log", "river");

    }

    showLog() {
        this.front.classList.replace("river", "log");
        this.two.classList.replace("river", "log");
        this.three.classList.replace("river", "log");
    }

    moveLog() {
        const loc = this.front.getLocation();
        this.hideLog();
        if (this.front.hasFrog() || this.two.hasFrog() || this.three.hasFrog()) {
            const frog = document.getElementById("container").getFrog();
            frog.autoMoveFrog();
        }
        if (this.front.classList.contains("left")) {
            let newLoc = loc - 1;
            if (loc % this.cols === 0) {
                newLoc += this.cols;
            }
            this.front = document.getElementById("container").getSquare(newLoc);
        } else if (this.front.classList.contains("right")) {
            let newLoc = loc + 1;
            if ((loc + 1) % this.cols === 0) {
                newLoc -= this.cols;
            }
            this.front = document.getElementById("container").getSquare(newLoc);
        }
        this.findBack();
        this.showLog();
    }

}