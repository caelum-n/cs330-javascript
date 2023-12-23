export default class GridSquare extends HTMLDivElement {

    constructor() {
        super();
    }

    getLocation() {
        return parseInt(this.id);
    }

    setLocation(loc) {
        this.id = loc;
    }

    riverCollision() {
        return this.classList.contains("river") && this.classList.contains("contains-frog");
    }

    carCollision() {
        const c = this.classList.contains("car-front") || this.classList.contains("car-back");
        const f = this.classList.contains("contains-frog")
        return c && f;
    }

    truckCollision() {
        const t = (this.classList.contains("truck-cabin")) || (this.classList.contains("truck-cargo"));
        const f = this.classList.contains("contains-frog")
        return t && f;
    }

    hasFrog() {
        return this.classList.contains("contains-frog");
    }

}
