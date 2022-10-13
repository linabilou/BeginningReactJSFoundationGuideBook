//console.log(process.argv) 
// let sum = 0;
// let arr = process.argv
// for (let num = 2; num < arr.length; num++) {
//     sum += Number(arr[num]);    
// }
// console.log(sum);

'use strict'
    
let result = 0

for (let i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}

console.log(result)