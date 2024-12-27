class Voiture{
    #make;
    #model;
    #year;
    #color;

    constructor(make, model, year, color)
    {
        this.#make = make;
        this.#model = model;
        this.#year = year;
        this.#color = color;
    }

    get Make(){
        return this.#make;
    }
    
    set Make(newMake){
        this.#make = newMake;
    }

    get Model(){
        return this.#model;
    }

    set Model(newModel){
        this.#model = newModel;
    }

    get Year(){
        return this.#year;
    }

    set Year(newYear){
        this.#year = newYear;
    }

    get Color(){
        return this.#color;
    }

    set Color(newColor){
        this.#color = newColor;
    }

    showDetails()
    {
        let str = `The car is a ${this.#color} ${this.#make} ${this.#model} from ${this.#year}`;
        console.log(str);
    }
}

const car = new Voiture("Corvette", "Z06", 2019, "red");
car.showDetails();

car.Color = "black";
car.showDetails();