// const userName = "Max";

// let age = 30;
// age = 29;

// var result;
// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }

// console.log(result);

// if (age > 20) {
//   let isOld = true;
// }

const add = (a: number, b: number = 1) => a + b;

console.log(add(2, 5));

const printOutput: (a: string | number) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(5));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);

const person = {
  firstName: "Max",
  age: 30,
};

const copiedPerson = { ...person }; // perfect copy

const add2 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add2(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;
console.log(userName, age);
