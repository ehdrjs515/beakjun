const fs = require("fs");

//입력 받기
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./tier_5/2588/input.txt").toString().trim().replace("\r","").split("\n");

const a = input[0];
const b = input[1];
let bb = b;
let result = 0;

for(i = 0; i < b.length; i++){
    console.log(a*(bb%10));
    bb = parseInt(bb/10);
}
console.log(a*b);




// 472
// 385

// 2360



// 10
// 350
// 2000


// //-----------------------------------------------------------------------
// let a_num = 0;
// let b_num = 0;
// let x = 1;
// let y = 1;
// let result = 0;
// let last = 0;

// for( i = 0; i < a.length; i++){
//     x = 1;
//     for(j = 0; b.length; j++){
//         a_num = a.substring(a.length-(j+1), a.length-j)
//         b_num = b.substring(b.length-(i+1), b.length-i)
        
//         result += (a_num * b_num) * x;
//         x *= 10;
//     }
//     console.log(result);
//     last += result * y;
//     y *= 10;
// }

// console.log(last);