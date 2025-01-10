const fs = require("fs");

//입력 받기
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./tier_4/25304/input.txt").toString().trim().replaceAll("\r","").split("\n");

let total = parseInt(input[0]);
let result = 0;
let itemCnt = parseInt(input[1]);

if(itemCnt === input.length-2){
    for(i = 2; i < input.length; i++){
        let item = input[i].split(" ").map(Number)
        result += item[0] * item[1]
    }

    let prt = total === result ? "Yes" : "No"

    console.log(prt)
}





