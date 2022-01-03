const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    console.log("index.js 파일에서 / 페이지를 처리합니다.");
    res.send("<h1>페이지 /</h1>")
});

module.exports = router;