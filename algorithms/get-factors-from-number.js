function factors(n) {
  const numFactors = [];
 
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i += 1) {
    if (n % i === 0) {
      numFactors.push(i);
  
      if (n / i !== i) {
        numFactors.push(n / i);
      }
    }
  }

  numFactors.sort((x, y) => x - y);  // numeric sort

  return numFactors;
}

const es6Factors = number => Array.from(Array(number + 1), (_, i) => i)
  .filter(i => number % i === 0);

console.log(factors(15));  // [1,3,5,15] 
console.log(factors(16));  // [1,2,4,8,16] 
console.log(factors(17));  // [1,17]


console.log(es6Factors(15));  // [1,3,5,15] 
console.log(es6Factors(16));  // [1,2,4,8,16] 
console.log(es6Factors(17));  // [1,17]

module.exports = factors
