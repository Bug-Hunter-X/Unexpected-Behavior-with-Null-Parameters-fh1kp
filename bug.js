function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This will cause unexpected results
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0 (incorrect if you intended 5)
console.log(foo(5, null)); // Output: 0 (incorrect if you intended 5)