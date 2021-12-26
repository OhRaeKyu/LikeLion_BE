const fs = require("fs");
let userData = [];

fs.readFile("./username.csv", "utf8", (err, data) => {
    console.log(err);
    userData = data.split("\n").slice(1).map(val => val.split(", "));
    userData.forEach(val => {
        fs.mkdir(`./${val[0]}`, (err)=> {
            console.log(err);
        });
    });
    userData.forEach(val => {
        fs.writeFile(`./${val[0]}/userinfo.txt`, `Username : ${val[0]}\nIdentifier : ${val[1]}\njob : ${val[2]}`, (err) => {
            console.log(err);
        });
    })
});