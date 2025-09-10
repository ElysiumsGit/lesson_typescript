// const user: (string | number)[] = ["hc", 1];
let tUser: [string, number, boolean];

tUser = ["hc", 123, true];

let rgb: [number, number, number] = [255, 123, 122];

type User = [number, string, boolean?];

const newUser: User = [111, "example@google.com"];

newUser[1] = "sample@example.com";
newUser[0] = 12323;
newUser.push(true);

export {}