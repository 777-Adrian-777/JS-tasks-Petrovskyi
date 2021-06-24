//Task 1

let mentor = { 
        course: "JS fundamental", 
        duration: 3,
        direction: "web-development"
};
function propsCount(currentObject) {
    let count=0;
   for (const i in currentObject) {
       ++count;
   }
    console.log(count);
}
propsCount(mentor);

//Task 2

let obj = {
        city1: "Lviv",
        city2: "Kyiv",
        city3: "Ternopil",
        city4: "Lutsk",
        city5: "Odesa"
    }

    function showProps(obj) {
        console.log(Object.values(obj));
        console.log(Object.keys(obj));
    }
    console.log(showProps(obj))

//Task 3

class Person {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
    

        showFullName(){
            return this.name +this.surname + " ";
        }
    }

    class Student extends Person {
        constructor(name,surname,year) {
            super(name,surname);
            this.year = year;
        }
    
        showFullName(middleName) {
            return super.showFullName() + " " + middleName;
        }
        showCourse() {
            let date = new Date();
            let currentDate = date.getFullYear();
            return currentDate - this.year;
        }
    }
    let student = new Student("Adrian", "Petrovskyi", 2020);
    console.log(student.showFullName("Tarasovych"));
    console.log(student.showCourse() + " course");

//Task 4

class Worker {

            #experience = 1.2;
            constructor(fullName, dayRate, workingDays) {
                this.fullName = fullName;
                this.dayRate = dayRate;
                this.workingDays = workingDays;
            }

            get experience() {
                return this.#experience;
            }

            set experience(experience) {
                this.#experience = experience;
            }

            showSalary() {
                return (this.dayRate * this.workingDays);
            }

            showSalaryWithExperience() {
                return (this.dayRate * this.workingDays * this.#experience);
            }
        };

let worker1 = new Worker("John Johnson", 20, 23);
let worker2 = new Worker("Tom Tomson", 48, 22);
let worker3 = new Worker("Andy Ander", 29, 23);

console.log("\n" + worker1.fullName);                 
console.log(worker1.fullName + " salary: " +  worker1.showSalary()); 
console.log("New experience: " + worker1.experience);
console.log(worker1.fullName + " salary: " +  worker1.showSalaryWithExperience());
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log(worker1.fullName + " salary: " +  worker1.showSalaryWithExperience());

console.log("\n" + worker2.fullName);                 
console.log(worker2.fullName + " salary: " +  worker2.showSalary()); 
console.log("New experience: " + worker2.experience);
console.log(worker2.fullName + " salary: " +  worker2.showSalaryWithExperience());
worker2.experience = 1.5;
console.log("New experience: " + worker2.experience);
console.log(worker2.fullName + " salary: " +  worker2.showSalaryWithExperience());

console.log("\n" + worker3.fullName);                 
console.log(worker3.fullName + " salary: " +  worker3.showSalary()); 
console.log("New experience: " + worker3.experience);
console.log(worker3.fullName + " salary: " +  worker3.showSalaryWithExperience());
worker3.experience = 1.5;
console.log("New experience: " + worker3.experience);
console.log(worker3.fullName + " salary: " +  worker3.showSalaryWithExperience());

let arr = [worker1, worker2, worker3];
console.log("\n" + "Sorted array: ");

arr.sort(function(a, b) {
    return a.showSalaryWithExperience() - b.showSalaryWithExperience();
})

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i].fullName + " salary: " + arr[i].showSalaryWithExperience());
}

//Task 5

class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  getArea() {
    return 0.5 * this.base * this.height;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Square extends GeometricFigure {
  constructor(side) {
    super();
    this.side = side;
  }
  getArea() {
    return this.side ** 2;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Circle extends GeometricFigure {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

function handleFigures(figures) {
  let totalArea = 0;
  for (let i = 0; i < figures.length; i++) {
    if (figures[i] instanceof GeometricFigure == true) {
      console.log(
        "Geometric figure: " +
          figures[i].toString() +
          " - area: " +
          figures[i].getArea()
      );
      totalArea += figures[i].getArea();
    }
  }
  console.log("\nTotal area: " + totalArea);
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
handleFigures(figures);

