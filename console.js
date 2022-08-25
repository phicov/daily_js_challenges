// Challenge: 14-fromPairs

// Difficulty: Intermediate

// Prompt:

// - Write a function named fromPairs that creates an object from an array containing nested arrays.
// - Each nested array will have two elements representing key/value pairs used to create key/value pairs in an object to be returned by the function.
// - If a key appears in multiple pairs, the rightmost pair should overwrite the previous entry in the object.

// Examples:

// fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]) //=> { a: 1, b: 2, c: 3 }
// fromPairs([ ['name', 'Sam"], ['age', 24], ['name', 'Sally'] ]) //=> { name: "Sally", age: 24 }
// -----------------------------------------------------------------*/
// Your solution for 14-fromPairs here:
function fromPairs(arr) {
  arr = [
    ["movie", "Summer Wars"],
    ["director", "Mamoru Hosoda"],
    ["director", "Makoto Shinkai"],
  ];
  console.log(arr);
  let resultObject = Object.fromEntries(arr);
  console.log(resultObject);
}
fromPairs();
//use Object.fromEntries{} ??
