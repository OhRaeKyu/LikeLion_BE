const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    console.log("b.js 파일에서 /b 페이지를 처리합니다.");
    res.send("<h1>페이지 /b</h1>")
});

module.exports = router;