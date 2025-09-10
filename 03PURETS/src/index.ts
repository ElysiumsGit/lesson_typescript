// class User {
//     public email: string
//     private name: string
//     readonly city: string = "sample"
//     constructor(
//         email: string,
//         name: string,
//     ){
//         this.email = email;
//         this.name = name;
//     }
// }

// const jc = new User(
//     "h@example.com", 
//     "h"
// )

// console.log(jc.city)


class User {
    protected _courseCount = 1;
    readonly city: string = "sample";

    constructor(
        public email: string,
        public name: string,
        private userId?: string
    ){
    }

    private deleteToken(){
        console.log("Token Deleted");
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get userName(): string{
        return `The name of this user is ${this.name}`
    }

    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        } 
        this._courseCount = courseNum;
    }
}

class SubUser extends User {
    isFamily: boolean = true;
    changeCourseCount(){
        this._courseCount = 4
    }
}

const jc = new User(
    "h@example.com", 
    "Hello"
)

const myEmail = jc.getAppleEmail;
const myname = jc.userName;
console.log(myEmail);
console.log(myname);

// console.log(jc.city)