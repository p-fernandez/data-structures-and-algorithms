// Time complexity: O(n)
function fibonacciSlow(n){
  var f = [0, 1];
  
  if (n <= 2) return 1;

  for (var i = 2; i <=n; i++ ){
   f[i] = f[i-1]+f[i-2];
  }

 return f[n];
} 

// With recursion we can get
// Time complexity: O(2^n)
function fibonacci(n){
  return n <= 1 ? n : fibonacci(n-1) + fibonacci (n-2);  
}

module.exports = {
  fibonacci,
  fibonacciSlow
}
