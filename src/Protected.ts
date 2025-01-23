class Chasse{
    protected number = 11221122;
}

class Details extends Chasse{
    public getNumber(){
        console.log(`chasses number is ${this.number}`);
    }
}

var car  = new Details();
car.getNumber(); // chasses number is