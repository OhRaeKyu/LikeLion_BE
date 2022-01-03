const express = require("express");
const indexRouter = require("./router/index.js");
const blogRouter = require("./router/app2blog.js");

const app = express();

app.use("/", indexRouter);
app.use("/blog", blogRouter);

app.use((req, res, next) => {
    res.status(404).send("<h1>못찾음</h1>");
});

app.use((err, req, res, next) => {
    console.log("에러발생");
    console.log(err);
});

app.listen(8080);