const ffi = require("ffi");
const path = require("path");

const lib = ffi.Library(path.join(__dirname, "./target/release/libfibonacci"), {
  fibonacci: ["int", ["int"]],
  hello: ["array", ["string"]]
});

function fibonacci(num) {
  if (num <= 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

const fibNum = 44;
const RUST = "rust";
const JS = "js";

lib.hello();

console.time(RUST);
lib.fibonacci(fibNum);
console.timeEnd(RUST);

console.time(JS);
fibonacci(fibNum);
console.timeEnd(JS);
