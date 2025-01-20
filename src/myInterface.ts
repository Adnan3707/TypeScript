interface User{
    readonly dbId:number,
    email:string,
    userId:number
    startTrial():string
}

interface User{
    githubToken:number
}

interface Admin extends User {
 role:string
}

const hitesh:User = {dbId:111,email:'h@h.com',userId:2211,startTrial:()=>{return ''},
githubToken:122
}

const TestAdmin:Admin = {dbId:111,email:'h@h.com',userId:2211,startTrial:()=>{return ''},
githubToken:122,role:'Admin'
}
