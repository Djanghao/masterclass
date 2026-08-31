# Official Solution

**Link:** [https://leetcode.com/problems/array-reduce-transformation/solution/](https://leetcode.com/problems/array-reduce-transformation/solution/)

---

[TOC]

## Solution
---

### Overview

This question asks you to write a function that performs a reduction transformation based on the output of a ***callback*** function. Alongside map and filter, it is one of the most commonly used and important functions in JavaScript. 

It is recommended you first read the editorial for [map](https://leetcode.com/problems/apply-transform-over-each-element-in-array/editorial) and [filter](https://leetcode.com/problems/filter-elements-from-array/) as those editorials contain relevant discussions not included here.

#### Use-cases of Reduce

Reduce iterates over each value in an array and merges each value into an ***accumulator*** variable in some way. The first argument is a callback that takes in the current `accumulator` value and each array element and returns a new `accumulator` value. The 2nd argument is the value the `accumulator` is initialized as. The final value of `accumulator` after looping over the entire array is returned.

This is a simple operation but it is very versatile in the types of transformations it can perform. Some JavaScript developers use it for almost all array iterations when `Array.map` and `Array.filter` don't solve the problem.

The fllowing examples use the built-in `Array.reduce` method.

##### Sum Values in Array

The classic use-case of reduce is summing up all the values in an array.

```js
const nums = [1, 2, 3];
const sum = nums.reduce((accumulator, val) => accumulator + val, 0);
console.log(sum); // 6
```

And you can sum values based on some property with a minor modification.

```js
const nums = [{x: 1}, {x: 2}, {x: 3}];
const sum = nums.reduce((accumulator, val) => accumulator + val.x, 0);
console.log(sum); // 6
```

##### Index Array by Key

An extremely common task in programming is taking a list of data and indexing each piece of data by some key. That way, the data is accessible by it's key in $O(1)$ time.

```js
const groceries = [
  { id: 173, name: "Soup" }, 
  { id: 964, name: "Apple" },
  { id: 535, name: "Cheese" }
];

const indexedGroceries = groceries.reduce((accumulator, val) => {
  accumulator[val.id] = val;
  return accumulator;
}, {});

console.log(indexedGroceries);
/**
 * {
 *   "173": { id: 173, name: "Soup" },
 *   "964": { id: 964, name: "Apple" },
 *   "535": { id: 535, name: "Cheese" },
 * }
 */
```

Note that a common performance mistake that developers make is to create a clone of the accumulator for each array iteration. i.e. `return { ...accumulator, [val.id]: val };`. This results in an $$O(n^2)$$ algorithm.

##### Combine Filter and Map

It is not uncommon to need to chain `.filter().map()` together to both remove elements from an array and transform it. The problem is this approach is less efficient because these array methods create new arrays. Two arrays are created when only one is necessary. You can combine the filter and the map into a single reduce for improved performance.

```js
const groceries = [
  { id: 173, name: "Soup" }, 
  { id: 964, name: "Apple" },
  { id: 535, name: "Cheese" }
];

/** With filter and map */
var names = groceries
  .filter(item => item.id > 500)
  .map(item => item.name)

/** With reduce */
var names = groceries.reduce((accumulator, val) => {
  if (val.id > 500) {
    accumulator.push(val.name);
  }
  return accumulator;
}, []);

console.log(names); // ["Apple", "Cheese"]
```
### Built-in Array.reduce

This question asks you to reimplement the `Array.reduce` method, which is one of the most heavily used array methods in JavaScript. However, there are four small differences between your implementation and the standard library.
- `Array.reduce` is a method on the Array prototype. This implementation is a function that accepts the array as the 1st argument.
- The callback passed to `Array.reduce` accepts an additional two arguments. The 3rd argument is the `currentIndex` of the array. The 4th argument is a reference to the original array.
- `Array.reduce` optionally allows you to NOT pass an `initialValue` as the 2nd parameter. If there are no elements in the array, an error would be thrown. Otherwise, the `initialValue` is treated as the first element in the array and iteration starts at index 1.
- `Array.reduce` handles sparse arrays. For example, if you write code `let arr = Array(100); arr[1] = 10;`, `Array.reduce` will only look at index 1 and the empty indices will be ignored. This is equivalent to filtering out all empty values before calling reduce().

### Approach 1: For...of Loop

Javascript has simple syntax that allows you to loop over each element on an ***iterable*** object. Sets, Maps, and Strings are other examples of iterables.

<iframe src="https://leetcode.com/playground/8BPJzt9f/shared" frameBorder="0" width="100%" height="208" name="8BPJzt9f"></iframe>

---

### Approach 2: Array.forEach Loop

Javascript arrays have a built-in method for iterating over each element. The main reason it is often preferred over normal for loops is that it provides the actual value as the first argument to the callback (possibly saving a line of code).

<iframe src="https://leetcode.com/playground/3KowPBLA/shared" frameBorder="0" width="100%" height="208" name="3KowPBLA"></iframe>

---

### Approach 3: For...in Loop

For...in loops are more commonly used to iterate over the keys on an object. However, they can also be used to iterate over the indices of an array. This approach is notable because it respects sparse arrays by ignoring empty indices. For example, if you wrote `let arr = Array(100); arr[1] = 10;`, this approach would treat the array as if it only had one element.

<iframe src="https://leetcode.com/playground/ivLXkbBH/shared" frameBorder="0" width="100%" height="208" name="ivLXkbBH"></iframe>

---

#### Complexity Analysis

The following analysis applies to all the approaches. Let $$N$$ be the length of the input array.

- Time complexity: $$O(N)$$. The algorithms iterate over all the elements.
- Space complexity depends on the provided callback. For example, summing elements in an array is $O(1)$ extra space. Whereas filtering an array is $$O(N)$$ in the worst case.