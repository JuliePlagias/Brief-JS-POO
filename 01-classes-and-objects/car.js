class Car{
    make;
    model;
    year;
    color;

    constructor(make, model, year, color)
    {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    showDetails()
    {
        let str = `The car is a ${this.color} ${this.make} ${this.model} from ${this.year}`;
        console.log(str);
    }
}

const car = new Car("Corvette", "Z06", 2019, "red");
const car2 = new Car("Ford", "Raptor", 2000, "red");
car.showDetails();
car2.showDetails();