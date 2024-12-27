class Vehicule{
    make;
    model;
    year;

    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year =year;
    }
}

class Voiture extends Vehicule{
    color;

    constructor(make, model, year,color){
        super(make, model, year);
        this.color = color;
    }

    showDetails()
    {
        let str = `The car is a ${this.color} ${this.make} ${this.model} from ${this.year}`;
        console.log(str);
    }
}

const car = new Voiture("Corvette", "Z06", 2019, "blue");
car.showDetails();
