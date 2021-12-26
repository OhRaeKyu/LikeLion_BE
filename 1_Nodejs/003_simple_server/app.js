const http = require("http");   // 노드 내부 모듈 (http 등)
const fs = require("fs");
const app = http.createServer(function(request, response){
    let url = request.url;
    console.log("request :" + request);
    console.log("request.url :" + request.url);

    if (request.url == "/") {
        url = "/index.html";
    } else if (request.url == "/blog") {
        url = "/blog.html"
    } else if (request.url == "/favicon.ico") {
        return response.writeHead(404);
    } else {
        response.writeHead(404);
        response.end("Not Found");
    }

    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
    // console.log(__dirname + url);
});

app.listen(3000);