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

function findMin() {
let min = arguments[0];
for (let index = 0; index < arguments.length; index++) {
    if (min > arguments[index]) {
        min = arguments[index];
    }
}
return min;
}
console.log(findMin(12, 14, 4, -4, 0.2));

//Task  6

function findUnique(arr)
{   
    var n = arr.length;
    for (var i = 0; i < n-1; i++){
      for (var j = i+1; j < n; j++){
        if (arr[ i ] === arr[j]){
          return false;
        }
        }
     }
    return true;
}
//findUnique([1, 2, 3, 5, 3]);  // false
//findUnique([1, 2, 3, 5, 11]); // true 

//Task 7

function lastElem(arr, count){
    if (count == null){
        console.log(arr.pop());
    }else{
        console.log(arr.slice(-count));
    }
}
console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5], 2));

//Task 8

let str = "i love java script";

function changeReg(string) {
  const strArray = string.split(" ");
  const arr = [];
  for (let index = 0; index < strArray.length; index++) {
    arr[index] = strArray[index].charAt(0).toUpperCase() + strArray[index].slice(1);
  }
  let resStr = "";
  for (let index = 0; index < arr.length; index++) {
    resStr += arr[index] + " ";
  }
  return resStr;
}

console.log(changeReg(str));
