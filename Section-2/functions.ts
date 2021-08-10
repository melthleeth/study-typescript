function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
  return;
}

// cb: callback function
// void를 쓰면 return값은 무시됨
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

console.log(printResult(add(5, 12)));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
