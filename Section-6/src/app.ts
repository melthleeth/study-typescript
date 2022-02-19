type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {} // 이럴경우 위에도 type이 아니라 interface로 바꿔줘야함

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Meredith",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString;
  }
  return a + b;
}

const result = add("Meredith", "Lee");
result.split("");

const fetchedUserData = {
  id: "u1",
  name: "Meredith",
  job: { title: "staff", description: "junior FE engineer" },
};

console.log(fetchedUserData?.job.title);

const userInput = undefined;

const storedData = userInput ?? "DEFAULT";

console.log(storedData);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: "Luke", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) vehicle.loadCargo(1000);
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// type casting
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-output")!
// );
const userInputElement = document.getElementById(
  "user-output"
) as HTMLInputElement;

// ! 안붙일경우 (null이 아님을 보장할 수 없는 경우)
if (userInputElement)
  (userInputElement as HTMLInputElement).value = "Hi there!";

userInputElement.value = "Hi there!";

interface ErrorContainer {
  // {email: 'Not a valid email', username: 'Muset start with a character!'}
  // index properties
  [prop: string]: string; // string만 쓸것이다
}
const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Muset start with a character!",
};
