function addTwo(num: number): number{
    return num + 2
    // return "hello";
}

function getUppper(val: string){
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean){

}   

let loginUser = (name:string, email: string, isPaid:boolean = false) => {
    
}

let myValue = addTwo(5);
getUppper("built different");
signUpUser("Built Different", "abierajc0707@gmail.com", true);
loginUser("Elysium", "abierajc0707@gmail.com")

function getValue(myVal: number): boolean | string{
    if(myVal > 5){
        return true
    }
    return "200 ok"
}

const getHello = (s: string): string => {
    return "Hello"
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [2, 1, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
});

function consoleError(errorMsg: string): void{
    console.log(errorMsg);    
}

function handleError(errorMsg: string): never{
    throw new Error(errorMsg);
}
 


export {}