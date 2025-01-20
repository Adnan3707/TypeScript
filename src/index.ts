class User{
    email:string 
    name:string
    readonly city: string
    private first:string = 'test'
    constructor(email: string,name:string,city:string){
        this.email = email ;
        this.name = name ;
        this.city = city
    }
}

const hitesh= new User('ad@gmail','2','sopore')

// Read only will not allow you to set outside

// hitesh.city = 'welocme'

class UserNew{
    protected _courseCount = 1
    readonly city:string = "jaipur"
    constructor( public email:string,public name:string ){

    }
    get getAppleEmail():string{
        return `apple ${this.email}`
    }
    get  courseCount():number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if(courseNum <= 1){
            throw new Error("Course count should me more than 1")
        }
        this._courseCount = courseNum
    }
    private delete(){
        console.log('delete')
    }

}

const Newhitesh = new UserNew('h@h.com','hitesh')

class SubUser extends UserNew {
    isFamily:boolean = true
    changeCourseCount(){
        this._courseCount = 4   
    }
}