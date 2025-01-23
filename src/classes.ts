// console.log(nameC.name);
class UserC{
    email: string;
    name: string;
    private readonly city:string = "Jaipur";
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }
    getDetails(){
        return `${this.name} ${this.email} ${this.city}`;
    }
}

const details = new UserC('Adnan@gmail.com', 'Adnan Farooq');
// TypeModifier readonly
class TypeModifier{
 readonly name: string;
 constructor(name: string){
     this.name = name;
 }
 getName(){
        return `${this.name}`;
    }
}
const nameR = new TypeModifier("Rahul");

// TypeModifier optional

class TypeModifierOptional{
    name?: string;
    constructor(name?: string){
        this.name = name;
    }
}
const nameCO = new TypeModifierOptional();

// TypeModifier Intersection

const DetailsandName = Object.assign({}, nameR, details) as UserC & TypeModifier;
console.log(DetailsandName.getDetails());