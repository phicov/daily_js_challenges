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
// -----------------------------------------------------------------*/
// Challenge: 15-mergeObjects

// Difficulty:  Intermediate

// Prompt:

// - Write a function named mergeObjects that accepts at least two objects as arguments, merges the properties of the second through n objects into the first object, then finally returns the first object.
// - If any objects have the same property key, values from the object(s) later in the arguments list should overwrite earlier values.

// Examples:

// mergeObjects({}, {a: 1});  //=> {a: 1} (same object as first arg)
// mergeObjects({a: 1, b: 2, c: 3}, {d: 4});  //=> {a: 1, b: 2, c: 3, d: 4}
// mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44});  //=> {a: 1, b: 22, c: 3, d: 44}
// -----------------------------------------------------------------*/
// Your solution for 15-mergeObjects here:
function mergeObjects(obj1, obj2) {
  obj1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    ssn: "123-456-2356",
    jobTitle: "Fart sniffer",
  };

  obj2 = {
    jobTitle: "JavaScript Developer",
    country: "USA",
  };
  let resultObject = Object.assign(obj1, obj2);
  console.log(resultObject);
}
mergeObjects();
