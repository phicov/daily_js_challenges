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
/*-----------------------------------------------------------------
Challenge: 16-findHighestPriced

Difficulty:  Intermediate  

Prompt:

- Write a function named findHighestPriced that accepts a single array of objects.
- The objects contained in the array are guaranteed to have a price property holding a numeric value.
- The function should return the object in the array that has the largest value held in the price property.
- If there's a tie between two or more objects, return the first of those objects in the array.
- Return the original object, not a copy.
- Do not mutate the array being passed in.

Examples:

findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 5 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
]);
//=> { sku: 'c3', price: 50 } 

findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 50 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
]);
//=> { sku: 'b2', price: 50 }
-----------------------------------------------------------------*/
// Your solution for 16-findHighestPriced here:
function findHighestPriced(arr) {
  arr = [
    { sku: "a1", price: 25 },
    { sku: "b2", price: 5 },
    { sku: "c3", price: 50 },
    { sku: "d4", price: 10 },
  ];
  let itemPrices = [];
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i].price);
    itemPrices.push(arr[i].price);
  }
  console.log(itemPrices);
  console.log("Highest Price: ", Math.max(...itemPrices));
  let mostExpensiveItem = null;
  for (i = 0; i < arr.length; i++) {
    if (Math.max(...itemPrices) === arr[i].price) {
      mostExpensiveItem = arr[i];
      console.log("Most expensive item: ", mostExpensiveItem);
    }
  }
  return mostExpensiveItem;
}
findHighestPriced();

/*-----------------------------------------------------------------
Challenge: 17-mapArray

Difficulty:  Intermediate

Prompt:

The goal is of this challenge is to write a function that performs the functionality of JavaScript's Array.prototype.map method.

- Write a function named mapArray that accepts two arguments: a single array and a callback function.
- The mapArray function should return a new array of the same length as the array argument.
- The mapArray function should iterate over each element in the array (first arg).  For each iteration, invoke the callback function (2nd arg), passing to it as arguments, the current element and its index.  Whatever is returned by the callback function should be included in the new array at the index of the current iteration.

Examples:

mapArray( [1, 2, 3], function(n) {
  return n * 2;
} );
//=> [2, 4, 6]  (a new array)

mapArray( ['rose', 'tulip', 'daisy'], function(f, i) {
  return `${i + 1} - ${f}`;
} );
//=> ["1 - rose", "2 - tulip", "3 - daisy"]
-----------------------------------------------------------------*/
// Your solution for 17-mapArray here:
let newArray = [1, 2, 3];

function mapArray(arr, cb) {
  let array = [];
  arr.forEach(function (element, index) {
    array.push(cb(element, index));
  });
  return array;
}
mapArray(newArray);
// /*----------------------------------------------------------------
