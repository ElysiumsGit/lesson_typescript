

// const User = {
//     name: "John Carlo",
//     email: "abierajc0707@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {
//     name: "Jc",
//     isPaid: false,
//     email: "jcaabiera07@gmail.com"
// }

// createUser(newUser);

// function createCourse():{name: string, price: number}{
//     return {
//         name: "reactjs",
//         price: 3888
//     }
// }

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean,
// }

// function createUser(user: User): User{

//     console.log(user.name);
//     console.log(user.email);
//     console.log(user.isActive);

//     return {
//         name: "",
//         email: "",
//         isActive: true
//     }
// }

// createUser({
//     name: "",
//     email: "",
//     isActive: true
// })

type User = {
    readonly _id: string 
    name: string
    email: string
    isActive: boolean
    credCardDetails?: cardDetails
}

let myUser: User = {
    _id: "12345",
    name: "H",
    email: "h@h.com",
    isActive: false,
}

type cardNumber = {
    cardnumber: string,
}

type cardDate = {
    cardDate: string,
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUser.email = "h@gmail.com"


export {}