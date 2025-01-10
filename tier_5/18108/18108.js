const fs = require("fs");

//입력 받기
// const input = fs.readFileSync("./tier_5/input.txt").toString().trim().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const year = parseInt(input[0]);

console.log(year - 543);
