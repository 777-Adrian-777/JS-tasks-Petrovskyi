//Task 1

let regExp = /^[A - Z]/;
str1 = "AbcdEf";
str2 = "aBcDef";
function upperCase(str) {
  if (regExp.test(str)) {
    alert("String's starts with uppercase character");
  } else {
    alert("String's not starts with uppercase character");
  }
}
upperCase(str1);
upperCase(str2);

//Task 2

str1 = "Qmail2gmail.com";
str2 = "Qmail2@gmail.com";
regExp1 = /@/;
regExp2 = /gmail/;
regExp3 = /\.com/;
function checkEmail(str) {
  alert(regExp1.test(str) && regExp2.test(str) && regExp3.test(str));
}
checkEmail(str1);
checkEmail(str2);

//Task 3

let str = "cdbBdbsbz";
let regExp1 = /db+d/gi;
let regExp2 = /db+/gi;
function findPattern(str) {
  let result1 = str.match(regExp1);
  let result2 = str.match(regExp2);
  console.log(result1);
  console.log(result2);
}
findPattern(str);

//Task 4

alert('Java Script'.split(' ').reverse().join(', '));

//Task 5

let card = "9999-9999-9999-9999";
let regExp1 = /\d{4}-/g;
let regExp2 = /-\d{4}/g;
let regExp3 = /[^\d-]/;

function checkCard(str) {
  if (regExp3.test(str)) {
    alert("The card's number is not correct");
    return;
  }

  let arr = str.match(regExp1);
  let size;
  if (arr == null) {
    size = 0;
  } else size = arr.length;

  let arr2 = str.match(regExp2);
  let size2;
  if (arr2 == null) {
    size2 = 0;
  } else size2 = arr2.length;

  if (size == 3 && size2 == 3) {
    alert("The card's number is correct");
  } else {
    alert("The card's number is not correct");
  }
}
checkCard(card);

//Task 6

let regExp1 = /[^\w@\.-]/g;
let regExp2 = /^-|^_/;
let regExp3 = /-/g;

function checkEmail(email) {
  let size;
  let array = email.match(regExp3);
  if (array == null) {
    size = 0;
  } else size = array.length;

  if (size > 1) {
    alert("Email isn`t correct!");
    return;
  }

  if (regExp1.test(email) || regExp2.test(email)) {
    alert("Email isn`t correct!");
  } else {
    alert("Email is correct!");
  }
}

checkEmail("my_mail@gmail.com");
checkEmail("#my_mail@gmail.com");

//Task 7

let regExp1 = /\d\.\d|\d+/g;
let regExp2 = /^\d/;
let regExp3 = /[^\w\.]/gi;
let regExp4 = /_/g;
function check(login) {
  if (
    login.length < 2 ||
    login.length > 10 ||
    regExp2.test(login) ||
    regExp3.test(login) ||
    regExp4.test(login)
  ) {
    console.log("false");
  } else {
    console.log("true");
  }
  console.log(login.match(regExp1));
}
check("ee1.1ret3");
check("ee1*1ret3");
