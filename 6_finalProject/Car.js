export default class Car {

    front;
    back;
    cols;

    constructor(loc, cols) {
        this.cols = parseInt(cols);
        this.front = document.getElementById("container").getSquare(loc);
        this.findBack();
        this.showCar();
    }

    findBack() {
        const loc = this.front.getLocation();
        if (this.front.classList.contains("left")) {
            let b = loc + 1;
            if ((loc + 1) % this.cols === 0) {
                b -= this.cols;
            }
            this.back = document.getElementById("container").getSquare(b);
        } else if (this.front.classList.contains("right")) {
            let b = loc - 1;
            if (loc % this.cols === 0) {
                b += this.cols;
            }
            this.back = document.getElementById("container").getSquare(b);
        }
    }

    hideCar() {
        this.front.classList.remove("car-front");
        this.back.classList.remove("car-back");
    }

    showCar() {
        this.front.classList.add("car-front");
        this.back.classList.add("car-back");
    }

    moveCar() {
        const loc = this.front.getLocation();
        this.hideCar();
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
        this.showCar();
        if (this.front.carCollision() || this.back.carCollision()) {
            document.getElementById("container").lose();
        }
    }
}