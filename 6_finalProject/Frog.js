export default class Frog {

    sq;
    cols;

    constructor(loc) {
        this.sq = document.getElementById("container").getSquare(loc);
        this.cols = parseInt(document.getElementById("container").colCount)
        // add event listener for arrow keys to move the frog
        document.addEventListener("keydown", (ev) => {
            this.moveFrog(ev.code);
        })
        this.showFrog();
    }

    hideFrog() {
        this.sq.classList.remove("contains-frog");
    }

    showFrog() {
        this.sq.classList.add("contains-frog");
    }

    moveFrog(e) {
        const rows = document.getElementById("container").rowCount;
        const loc = this.sq.getLocation();
        this.hideFrog();
        switch (e) {
            case "ArrowUp":
                if (Math.floor(loc / this.cols) !== 0) {
                    const newLoc = loc - this.cols;
                    this.sq = document.getElementById("container").getSquare(newLoc);
                }
                break;
            case "ArrowDown":
                if (Math.floor(loc / this.cols) !== rows - 1) {
                    const newLoc = loc + this.cols;
                    this.sq = document.getElementById("container").getSquare(newLoc);
                }
                break;
            case "ArrowLeft":
                if (loc % this.cols !== 0) {
                    const newLoc = loc - 1;
                    this.sq = document.getElementById("container").getSquare(newLoc);
                }
                break;
            case "ArrowRight":
                if (loc % this.cols !== (this.cols - 1)) {
                    const newLoc = loc + 1;
                    this.sq = document.getElementById("container").getSquare(newLoc);
                }
        }
        this.showFrog();
        if (this.sq.carCollision() || this.sq.truckCollision() || this.sq.riverCollision()) {
            document.getElementById("container").lose();
        } else if (this.reachHome()) {
            document.getElementById("container").win();
        }
    }

    autoMoveFrog() {
        const loc = this.sq.getLocation();
        this.hideFrog();
        if (this.sq.classList.contains("left")) {
            let newLoc = loc - 1;
            if ((loc + 1) % this.cols === 0) {
                document.getElementById("container").lose();
            }
            this.sq = document.getElementById("container").getSquare(newLoc);
        } else if (this.sq.classList.contains("right")) {
            let newLoc = loc + 1;
            if (loc % this.cols === 0) {
                document.getElementById("container").lose();
            }
            this.sq = document.getElementById("container").getSquare(newLoc);
        }
        this.showFrog();
    }

    reachHome() {
        return this.sq.getLocation() < this.cols;
    }
}