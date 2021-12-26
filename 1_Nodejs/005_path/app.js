// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/path.html
const path = require("path");

console.log(`구분자 : ${path.sep}`);    // 구분자는 OS 마다 다르기 때문에 알아야한다.
console.log(`디렉토리 : ${path.dirname(__filename)}`);  // 파일 위치
console.log(`파일이름 : ${path.basename(__filename)}`); // 파일 명
console.log(`확장자 : ${path.extname(__filename)}`);    // 파일 확장자 명

console.log(__filename);    // 파일 위치(파일 명 까지 포함)
console.log(__dirname);     // 파일 위치
console.table(path.parse(__filename));
console.log(path.join(__dirname, "source"));    // 경로 붙이기
console.log(path.join(__dirname, "app.js"));