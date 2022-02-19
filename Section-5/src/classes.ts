abstract class Department {
  static fiscalYear = 2020;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;
  // {
  //   console.log(`Department (${this.id}): ${this.name}`);
  // }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  // admins: string[];

  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;

    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error("Please pass in a valid value!");
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) return this.instance;
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Celine") return;

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// console.log(accounting);
// console.log(accounting.describe());

// const accountingCopy = { name: "DUMMY", describe: accounting.describe }; // this가 어딧는지 모름
// accountingCopy.describe();

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Celine"]);

it.addEmployee("Meredith");
it.addEmployee("Michael");
it.describe();
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.mostRecentReport = "Year end report";
console.log(accounting.mostRecentReport);

accounting.addReport("Something went wrong...");

accounting.addEmployee("Celine");
accounting.addEmployee("Richard");
accounting.describe();

accounting.printReports();
accounting.printEmployeeInformation();
