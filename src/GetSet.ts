class Getter{
    private name: string;
    constructor(name: string){
        this.name = name;
    }
    get getName():number{
        return this.name.length;
    }
}
const nameG = new Getter("Adnan");
console.log(nameG.getName);