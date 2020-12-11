/*const byteArr = new ArrayBuffer(1);
const typedArr =new Uint8Array(byteArr);
typedArr[0] = 999;
console.log(typedArr);

typedArr[0] = 111;
console.log(typedArr);


const byteArr = new ArrayBuffer(1);
const typedArr = new Uint8Array(byteArr);
typedArr[1] = 111;
console.log(typedArr)

const byteArr = new ArrayBuffer(4);
const typedArr = new Uint16Array(byteArr); 
typedArr[0] = 99;
typedArr[1] = 111;
typedArr.reverse();
console.log(typedArr); 


const typedArr = Float32Array.of(1.61, 3.141592, 5.62);
console.log(typedArr);

const typedArr2 = Int32Array.of(-12, 4, 23, 95, 1, 99);
console.log(typedArr2.length);



const typedArr = Float32Array.of(1.61, 3.141592, 5.67);
console.log(typedArr.buffer);
console.log(typedArr.length); 
console.log(typedArr.byteLength); 


const byteArr = new ArrayBuffer(4);
const dataView = new DataView(byteArr);
dataView.setInt8(1, 37);
dataView.setInt16(2, 9999);

console.log(dataView.getInt8(1)); // 37
console.log(dataView.getInt16(2)); // 9999

console.log(dataView.getInt8(0)); // 0
console.log(dataView.getInt16(0)); // 37
console.log(dataView.getInt8(2)); // 39
console.log(dataView.getInt8(3)) //15

// 

*/
import {Source} from '/imex.js';
const a = new Source;