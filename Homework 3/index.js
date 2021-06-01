//Task 1
//1
var Array = [2, 3, 4, 5];
var res=1;
for (let i = 0; i < Array.length; ++i) {
    res *= Array[i];
}
console.log(res);
//2
var array = [2, 3, 4, 5];
var i = array.length;
var res = 1;
while (i > 0){
  res *= array[--i];
}
console.log(res)

//Task 2

for(let count = 0; count <= 15; count++) {
if ( count >= 0 && (count % 2) == 0 ){
 console.log(count + ' is even');
}else{
 console.log(count + ' is odd');
}
}

//Task 3

let min = 1;
let max = 500;
let array = [];
function randArray(k) {
  for (let index = 0; index < k; index++) {
    array[index] = (function (x, y) {
      return Math.floor(Math.random() * x) + y;
    })(max, min);
  }
}
const size = prompt("Enter the array size");
randArray(size);
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

//Task 4 

function multiplication(a, b) {
let result = a ** b;
console.log(result)
} 
let a = prompt('Введіть число ');  a = Number(a);
let b = prompt('Введіть степінь ');  b = Number(b);
multiplication(a, b);
//raiseToDegree(3, 4); 81

//Task 5 
