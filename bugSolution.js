function foo(a, b) {
  if (a === null) {
    a = 0;
  }
  if (b === null) {
    b = 0;
  }
  return a + b; // Now handles null values gracefully
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(null, null)); // Output: 0