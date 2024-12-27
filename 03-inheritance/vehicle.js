class Vehicle{
    make;
    model;
    year;

    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year =year;
    }
}

class Car extends Vehicle{
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

const car = new Car("Corvette", "Z06", 2019, "blue");
car.showDetails();
