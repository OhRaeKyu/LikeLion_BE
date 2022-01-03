const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    console.log("blog.js 파일에서 /blog 페이지를 처리합니다.");
    res.send("<h1>Hello Blog</h1>")
});

module.exports = router;