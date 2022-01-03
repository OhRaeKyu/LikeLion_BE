const express = require("express");

const app = express();


app.get("/", (req, res, next) => {
    console.log("get으로 요청이 들어왔습니다.");
    res.send("<h1>hello world</h1>");
});

app.get("/blog", (req, res, next) => {
    console.log("get으로 요청이 들어왔습니다.");
    res.send("<h1>hello Blog</h1>");
});

app.listen(8080);