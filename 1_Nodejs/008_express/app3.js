const express = require("express");

const app = express();

// 와일드 카드
app.get("/:blog/:id", (req, res, next) => {
    console.log("get으로 요청이 들어왔습니다.");
    console.log(req.params);
    console.log(req.params.blog);
    console.log(req.params.id);
    res.send("Hello world");
});

app.listen(8080);