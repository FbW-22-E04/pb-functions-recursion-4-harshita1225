// Write your code here:
function fibonacci(nums) {
  let fib = [0, 1];
  let data = [];

  for (let i = 2; i <= nums; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    data.push(fib[i]);
  }

  return data;
}

console.log(fibonacci(0)); // [0]
console.log(`----------------`);
console.log(fibonacci(1)); // [ 0, 1 ]
console.log(`----------------`);
console.log(fibonacci(3)); // [ 0, 1, 1, 2 ]
console.log(`----------------`);
console.log(fibonacci(8)); // [ 0, 1,  1,  2, 3, 5, 8, 13, 21]
