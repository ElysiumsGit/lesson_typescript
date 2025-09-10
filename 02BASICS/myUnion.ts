let score: number | string = 33;

score = 44;
score = "55";


type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string; 
    id: number;
}

let jc: User | Admin = {
    name: "jc",
    id: 333,
}

jc = {
    username: "jccc",
    id: 333
}

function getDbId(id: number | string){
    if(typeof id === "string"){
        id.toLowerCase();
    }
    else{
        id + 2
    }
}

getDbId(3);
getDbId("3");

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: string[] | number[] = ["1", "2", "3"];
const data4: (string | number)[] = [1, "2", "3"];
const data5: any = [1, "2", "3", true];

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle";
// seatAllotment = "crew";