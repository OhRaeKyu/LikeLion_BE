// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
const fs = require("fs");
// fs 메서드 - rename, readFile, writeFile, appendFile, copyFile, mkdir

// 1번
// let variable = "오래규"; // 사용자 이름
// let today = new Date();
// fs.rename("./test.txt", `./${variable}${today.getMilliseconds()}.txt`, (err) => {
//     console.log(err);
// });

// 2번
// fs.readFile("./test.txt", "utf8", (err, data) => {
//     console.log(err);
//     console.log(data);
// })

// 3번
// fs.readdir("./", (err, data) => {
//     console.log(err);
//     console.log(data);
// })

// 4번
// fs.writeFile("./test2.txt", "hello world 2", (err) => {
//     console.log(err)
// });

// 5번
// fs.appendFile("./test2.txt", "\nhello world 3", (err) => {
//     console.log(err)
// });

// 6번
// fs.copyFile("./test2.txt", "./test3.txt", (err) => {
//     console.log(err)
// });

// 7번
fs.mkdir("./testDir", (err)=>{
    console.log(err)
});