const fs = require("fs");

//입력 받기
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./tier_5/11382/input.txt").toString().trim().replace("\r","").split(" ");

let restult = 0;

for(i in input){
    restult += parseInt(input[i]);
}
console.log(restult);