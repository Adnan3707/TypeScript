function addTwo(num:number){
    return num + 2
}

function getUpper(val:string){
    return val.toUpperCase()
}

function signUpUser(name:string,email:string,isPaid:boolean){

}

let loginUser = (name:string,email:string,isPaid:boolean = false) =>{

}

signUpUser("adnan","adnan@gmail",true)

addTwo(5)
getUpper('4')

// function getValue(myVal:number):boolean{

// }

const getHello=(str:string):string =>{
    return 'hello'
}

const heros = ['thro','spiderman','ironman']
// const heros = [1,2,3]


heros.map((hero:string):string =>{
   return `hero is ${hero}`
//    return 1 ;
})

function consoleError(errmsg:string):void{
    console.log(errmsg)
}

function createCourse():{name:string,isPaid:boolean}{
    return {name:"reactJs",isPaid:true}
}

export {}