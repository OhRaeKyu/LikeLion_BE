const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());

app.get("/", (req, res, next) => {
    res.send("Hello World");
});

app.listen(8080);