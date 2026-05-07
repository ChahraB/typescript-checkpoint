"use strict";
class Voiture {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
const maVoiture = new Voiture("Toyota", "Corolla", 2023);
maVoiture.start();
