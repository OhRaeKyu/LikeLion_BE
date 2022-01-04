const nunjucks = require("nunjucks");
const express = require("express");
const path = require("path");

const app = express();
app.set("view engine", "html");

nunjucks.configure("template", {
    autoescape: true,
    express: app,
    watch: true
});

app.get("/", (req, res, next) => {
    res.render("test1.html", {
        name: "raekyu",
        age: 26
    })
});

app.listen(8080);