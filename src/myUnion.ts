let score : number | string = 33 

type User = {
    name: string,
    id: number
}
type Admin  ={
    username : string;
    id:number
}

let adnan:User | Admin = {username:"adnna",id:40}

function getDbId(id:number | string){
    if(typeof id == 'string'){
        id.toLowerCase()
    }
    console.log(`DB id is : ${id}`)
}
getDbId('E')
getDbId(3)


const data: number[] = [1,2,3]

const data3:(string | number | boolean)[] = ["1","2",3,true]

let pi:3.14 = 3.14

pi=3.14
// pi=3.145



