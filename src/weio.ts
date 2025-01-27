interface abc {
    name : string;
    age: number
}
function interfaceTest(obj:abc){
    console.log(obj.name);
    console.log(obj.age);
}
interfaceTest({name:"weio", age: 20});

