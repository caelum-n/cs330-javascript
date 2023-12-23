export default class Truck {

    cabin;
    cargo1;
    cargo2;
    cols;

    constructor(loc, cols) {
        this.cols = parseInt(cols);
        this.cabin = document.getElementById("container").getSquare(loc);
        this.findBack();
        this.showTruck();
    }

    findBack() {
        const loc = this.cabin.getLocation();
        if (this.cabin.classList.contains("left")) {
            let c1 = loc + 1;
            let c2 = loc + 2;
            if ((loc + 1) % this.cols === 0) {
                c1 -= this.cols;
                c2 -= this.cols;
            } else if ((loc + 2) % this.cols === 0) {
                c2 -= this.cols;
            }
            this.cargo1 = document.getElementById("container").getSquare(c1);
            this.cargo2 = document.getElementById("container").getSquare(c2);
        } else if (this.cabin.classList.contains("right")) {
            let c1 = loc - 1;
            let c2 = loc - 2;
            if (loc % this.cols === 0) {
                c1 += this.cols;
                c2 += this.cols;
            } else if ((loc - 1) % this.cols === 0) {
                c2 += this.cols;
            }
            this.cargo1 = document.getElementById("container").getSquare(c1);
            this.cargo2 = document.getElementById("container").getSquare(c2);        }
    }

    hideTruck() {
        this.cabin.classList.remove("truck-cabin");
        this.cargo1.classList.remove("truck-cargo");
        this.cargo2.classList.remove("truck-cargo");

    }

    showTruck() {
        this.cabin.classList.add("truck-cabin");
        this.cargo1.classList.add("truck-cargo");
        this.cargo2.classList.add("truck-cargo");
    }

    moveTruck() {
        const loc = this.cabin.getLocation();
        this.hideTruck();
        if (this.cabin.classList.contains("left")) {
            let newLoc = loc - 1;
            if (loc % this.cols === 0) {
                newLoc += this.cols;
            }
            this.cabin = document.getElementById("container").getSquare(newLoc);
        } else if (this.cabin.classList.contains("right")) {
            let newLoc = loc + 1;
            if ((loc + 1) % this.cols === 0) {
                newLoc -= this.cols;
            }
            this.cabin = document.getElementById("container").getSquare(newLoc);
        }
        this.findBack();
        this.showTruck();
        if (this.cabin.truckCollision() || this.cargo1.truckCollision() || this.cargo2.truckCollision()) {
            document.getElementById("container").lose();
        }
    }

}