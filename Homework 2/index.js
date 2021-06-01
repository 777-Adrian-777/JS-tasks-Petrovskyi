//Task 1

let x = 1;
let y = 2;

let res1 = '12';
console.log(res1); 
console.log(typeof res1);

let res2 = '12';
console.log(res2); 
console.log(typeof res2); 

let res3 = 12;
console.log(res3); 
console.log(typeof res3); 

let res4 = '12' * 2;
console.log(res4);
console.log(typeof res4);

//Task 2

let x = prompt('Enter x = '); 
if ( x > 0 && (x % 2) == 0 ){
  console.log('Число є парним додатним')}

let x = prompt('Enter the number '); 
if(x % 7){
  console.log('Число не є кратним 7')
}else{
  console.log('Число є кратним 7')}

//Task 3

const arr = [7, "Adrian", true , null]; 
console.log(arr);
let x = prompt('Enter '); 
arr[4] = x; 
console.log(arr);
arr.shift();
console.log(arr);

//Task 4 

const elements = ['Rome', 'Lviv', 'Warsaw'];
console.log(elements.join('*'));

//Task 5

let x = prompt('Are you an adult?'); 
if ( x > 0 && x < 10){
  console.log('Ви ще надто молоді')
  }else if(x > 18){
  console.log('Ви досягли повнолітнього віку')
  }else{
  console.log('Помилка')
  } 

//Task 6

let side1 = prompt("Enter side 1");
let side2 = prompt("Enter side 2");
let side3 = prompt("Enter side 3");

let sideA = Number(side1);
let sideB = Number(side2);
let sideC = Number(side3);

if (sideA < 0 || sideB < 0 || sideC < 0) {
  console.log("Incorrect data");
} else {
  let halfPerimeter = (sideA + sideB + sideC) / 2;
  let square = Math.sqrt(
    halfPerimeter *
      (halfPerimeter - sideA) *
      (halfPerimeter - sideB) *
      (halfPerimeter - sideC)
  );
  console.log("The square is:" + square.toFixed(3));

  if (
    sideA ** 2 == sideB ** 2 + sideC ** 2 ||
    sideB ** 2 == sideC ** 2 + sideA ** 2 ||
    sideC ** 2 == sideB ** 2 + sideA ** 2
  ) {
    console.log("The triangle is right");
  } else {
    console.log("The triangle is not right");
  }
}

//Task 7

let date = new Date();
let hours = date.getHours();
if (hours >= 5 && hours < 11){
  alert ('Доброго ранку')
}else if(hours >= 11 && hours < 17){
  alert ('Доброго дня')
}else if(hours >= 17 && hours < 23){
  alert ('Доброго вечора')
}else if(hours >= 23 && hours < 24 || hours >= 0 && hours < 5 ){
  alert ('Доброго ночі')
}else{
  alert ('Помилка')
}
