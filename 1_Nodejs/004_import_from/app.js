// import {name, age, plusAge, getAge} from "./two.js";
// const myProfile = require("./two");

// console.log(name);
// console.log(age);
// plusAge();
// plusAge();
// console.log(age);
// console.log(getAge());

import * as myProfile from "./two.js";

console.log(myProfile.name);
console.log(myProfile.age);
myProfile.plusAge();
myProfile.plusAge();
console.log(myProfile.age);
console.log(myProfile.getAge());