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

let fibonacci2 = function (n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    let s = fibonacci2(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
console.log(fibonacci2(5));

/////////////////another method ///////////////////
const fibonacci3 = function (num, counter = 1, arr = [0, 1]) {
  if (num === 0) {
    return [0];
  } else if (num === 1) {
    return arr;
  }

  arr.push(arr[counter - 1] + arr[counter]);
  counter++;
  if (counter >= num) {
    return arr;
  }
  return fibonacci3(num, counter, arr);
};

console.log(`+++++++++++++++++++++++`, fibonacci3(5));
console.log(`+++++++++++++++++++++++`, fibonacci3(8));

console.log(fibonacci(0)); // [0]
console.log(`----------------`);
console.log(fibonacci(1)); // [ 0, 1 ]
console.log(`----------------`);
console.log(fibonacci(3)); // [ 0, 1, 1, 2 ]
console.log(`----------------`);
console.log(fibonacci(8)); // [ 0, 1,  1,  2, 3, 5, 8, 13, 21]
