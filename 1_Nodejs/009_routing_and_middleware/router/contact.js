const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    console.log("contact.js 파일에서 /contact 페이지를 처리합니다.");
    res.send("<h1>Hello Contact</h1>")
});

module.exports = router;