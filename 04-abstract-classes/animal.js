class Animal{
    constructor(){
        if(this.constructor ===Animal)
            throw new Error("Animal is an abstract class");
    }

    makeNoise()
    {
        throw new Error("This method is from an abstract class, it needs to be redefined");
    }
}

class Dog extends Animal{
    constructor(){
        super();
    }

    makeNoise()
    {
        console.log("The dog barks");
    }
}

class Cat extends Animal{
    constructor(){
        super();
    }

    makeNoise()
    {
        console.log("The cat meows")
    }
}

const dog = new Dog();
const cat = new Cat();

dog.makeNoise();
cat.makeNoise();