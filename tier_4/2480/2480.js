const fs = require("fs");

//입력 받기
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./tier_4/2480/input.txt").toString().trim().split(" ").map(Number);

const a = input[0]
const b = input[1]
const c = input[2]
const max = Math.max(...input);

if(a === b & a === c){
    console.log(10000 + (a*1000))
}else if(a === b || a === c || b === c){
    if(a === b || a === c){
        console.log(1000 + (a*100))
    }else{
        console.log(1000 + (b*100))
    }
}else{
    console.log(max*100)
}





























/////---------- 실패 : 시간 초과로 추측됨
// let num = 0;
// let cnt = 0;
// let max = 0;

// for(i in input){ 
//     if(i == 0){
//         max = input[i];
//         num = input[i];
//     }
//     else{
//         if(num == input[i]){
//             cnt++;
//             num = input[i]
//         }
//         if(max < input[i]){
//             max = input[i]
//         }
//     }
// }



// switch(cnt){
//     case 2:
//         console.log(10000 + (num*1000))
//         break;
//     case 1:
//         console.log(1000 + (num * 100))
//         break;
//     case 0:
//         console.log(max*100)
// }
