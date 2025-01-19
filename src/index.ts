let number :number = 2;
let course : string = 'TypeScript';
let isPublished : boolean = true;
let level;

function render(document:number){
    console.log(document)
}
// render(2);

let numbers :number[] =[1,2,3,4,5];

// casting
function casting(){
    let age = 20 as number
    age = 21
    console.log(age)
}
// casting()

//return type
function add(a:string,b:number):string{
    return a + b ;
}
console.log(add('2',2));

function retArr():number[]{
    return [1,2,3,4,5];
}