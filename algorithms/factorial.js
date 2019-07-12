function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

console.log(factorial(4));
console.log(factorial(10));

module.exports = factorial;
