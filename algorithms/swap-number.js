function swapNumber(a, b) {
  console.log('before swap: ','a: ', a, 'b: ', b);
  b = b - a;
  a = a + b;
  b = a - b;
  console.log('after swap: ','a: ', a, 'b: ', b);  
}

function cleverSwapNumber(a, b) {
  console.log("a: " + a + " and b: " + b);
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log("a: " + a + " and b: " + b);
}

swapNumber(5,7);
cleverSwapNumber(8, 9);

module.exports = {
  cleverSwapNumber,
  swapNumber
}
