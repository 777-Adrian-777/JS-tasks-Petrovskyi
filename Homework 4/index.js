//Task 1 

function calcRectangleArea(width, height) {
  if (isNaN(width) || isNaN(height))  {
    throw "Please, write only numbers!"
}
  return width * height;
}

try {
  alert(calcRectangleArea(3, "a"));
}
catch(e) {
  console.log(e);
}

//Task 2 

function checkAge() {
  let age = prompt("Enter your age");
  if (age == "" || isNaN(age) == true || +age < 14) {
    throw new Error("Your age is not correct! Please enter your age");
  }
  document.write("You are allowed to watch this film:");
}

try {
  checkAge();
} catch (error) {
  alert(error.name + "! " + error.message);
}

//Task 3

class MonthException {
  monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  name;
  message;
  constructor(name, message) {
    this.name = name;
    this.message = message;
  }
}
function showMonthName(month) {
  let mException = new MonthException(
    "MonthException",
    "Incorrect month number"
  );

  if (month < 1 || month > 12) {
    throw mException;
  } else {
    return mException.monthArray[month - 1];
  }
}

try {
  console.log(showMonthName(5));
  console.log(showMonthName(14));
} catch (exception) {
  console.log(exception.name + " " + exception.message);
}

//Task 4

//showUsers(7, -12, 44, 22);

let user1 = {
  id: 7,
};

let user2 = {
  id: -12,
};

let user3 = {
  id: 44,
};

let user4 = {
  id: 22,
};

let arr = [user1, user2, user3, user4];

function showUser(id) {
  if (id < 0) {
    throw new Error("ID must not be negative: " + id);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      return arr[i];
    }
  }
}

function showUsers() {
  try {
    for (let i = 0; i < arguments.length; i++) {
      showUser(arguments[i]);
    }
  } catch (error) {
    console.log(error.message);
  }
  let idArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id >= 0) {
      idArr[i] = arr[i];
    }
  }
  console.log(idArr);
}



