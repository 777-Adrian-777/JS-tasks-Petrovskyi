//Task 2
alert('Adrian Petrovskyi');

//Task 3
let month = "July";
let date = 11;
console.log(month);
console.log(date);
month = date;
console.log(month);
console.log(date);

//Task 4
let name = "Adrian";
console.log(typeof name);
let age = 17;
console.log(typeof age);
let graduating = true;
console.log(typeof graduating);
let undefHobbies;
console.log(typeof undefHobbies);
let diploma = {degree:"bachelor", profile:"Computer Science"};
console.log(typeof diploma);

//Task 5 
let ageVerification = confirm("Please confirm that you are over 18 years old to enter this site.");
alert(ageVerification);
let isAdult = ageVerification;
console.log(isAdult);

// Task 7
let question1 = prompt("What`s your login?", "Your login");
let question2 = prompt("What`s your email?", "Your email");
let question3 = prompt("What`s your password?", "Your password");
alert("Dear User" + question1 + ",your email is " + question2 + ",your password is " + question3);

// Task 8
let hour = prompt("Time converter", "1 hour");
alert(60 * 60 + " seconds");
let day = prompt("Time converter", "1 day");
alert(60 * 60 * 24 + " seconds");
let month = prompt("Time converter", "1 month");
alert(60 * 60 * 31 + " seconds");
