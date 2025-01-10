const fs = require("fs");

//입력 받기
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./tier_5/25314/input.txt").toString().trim();

let result = "";

for(i = 0; i < parseInt(input)/4; i++){
    result += "long ";
}

console.log(result+"int")

