// Activity 1
function string() {
    console.log("Hello CodeNation")
}

string()

console.log("------")

let greet = "Hello CodeNation";

function make5(greet) {
    for (let i = 0; i < 5; i++) {
        console.log(greet);
    }
}
make5(greet);

// Activity 2
let num = [1, 2, 3, 4, 5];
console.log(num);

const multi3 = num.map((listInteger) => {
    return listInteger * 3
});

console.log(multi3)

// Activity 3
const add = (a, b) => {
    return a + b;
  };
  const subtract = (a, b) => {
    return a - b;
  };
  const multiply = (a, b) => {
    return a * b;
  };
  const divide = (a, b) => {
    return a / b;
  };
  const doMaths = (num1) => {
    return (num2, fn) => {
      return fn(num1, num2);
    };
  }

//   Checking all funtions work
console.log(add(2, 2));
console.log(subtract(2, 2));
console.log(multiply(2, 2));
console.log(divide(2, 2));
console.log(doMaths(2));
// --------------------------------
console.log(doMaths(6));
console.log(doMaths(6)(6, add));
console.log(doMaths(6)(6, divide));
console.log(doMaths(6)(6, multiply));
console.log(doMaths(6)(6, subtract));
