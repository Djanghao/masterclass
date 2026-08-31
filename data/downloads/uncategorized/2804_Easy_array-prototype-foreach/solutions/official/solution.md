# Official Solution

**Link:** [https://leetcode.com/problems/array-prototype-foreach/solution/](https://leetcode.com/problems/array-prototype-foreach/solution/)

---

[TOC]


## Overview:
Our goal is to improve the built-in Array prototype so that we can call `array.forEach(callback, context)` on any array. The `forEach` function should execute the given `callback` on each element of the array, and the `context` parameter is used to set the value of `this` within the callback function. If the context parameter is not provided, the value of `this` within the callback function will be the global object (`window` in a browser or `global` in Node.js).

Before starting with the main task let's understand what is `forEach`:
The `forEach` loop is a higher-order function that is commonly used with arrays. It iterates over each element of the array and executes a provided `callback` function for each element.The callback function provided to `forEach` accepts three arguments: `currentValue`, `index`, and `array`. Where,
1. `currentValue`: The current element being processed in the array.
2. `index`: The index of the current element being processed.
3. `array`: The array on which the `forEach` loop is being applied.
The `forEach` loop performs the provided action or function for each element, executing it in the order of the elements. It does not return a new array; its main purpose is to perform a side effect for each element.

**For example:**
```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index, originalArray) {
    console.log(`Number: ${number}, Index: ${index}, Original Array: ${originalArray}`);
});
```

**Output:**
```javascript
Number: 1, Index: 0, Original Array: 1,2,3,4,5
Number: 2, Index: 1, Original Array: 1,2,3,4,5
Number: 3, Index: 2, Original Array: 1,2,3,4,5
Number: 4, Index: 3, Original Array: 1,2,3,4,5
Number: 5, Index: 4, Original Array: 1,2,3,4,5
```
 
---

## Approach 1: Using call
We can loop through the array using a loop and for each element we call the callback function using the `call()` method as it allows us to loop through the array and invoke the callback function while explicitly setting the value of `this` to the specified `context` and the rest args, the current element (`this[i]`), the current index (`i`), and the array itself (`this`).

### Implementation 1: Using call with for loop

<iframe src="https://leetcode.com/playground/DqDUrXEk/shared" frameBorder="0" width="100%" height="140" name="DqDUrXEk"></iframe>


### Implementation 2: Using call with while loop

<iframe src="https://leetcode.com/playground/Ad22SFKD/shared" frameBorder="0" width="100%" height="174" name="Ad22SFKD"></iframe>


### Complexity Analysis:

* **Time complexity:** $O(n)$, where `n` is the length of the array. The `forEach` function needs to iterate through all elements of the array once.

* **Space complexity:** $O(1)$, as the function uses a constant amount of extra space regardless of the array size.

---

## Approach 2: Recursive approach

### Intuition:
Since the main point is to iterate through array and execute the callback function we can also use recursion to do the same.Note that this recursive solution is more of an exercise than a practical solution.
 
### Algorithm:
1. Define a recursive function `forEachRecursive` that takes three parameters: `index`, `callback`, and `context`.
2. The base case is when `index` is equal to the array's length, indicating that all elements have been processed. In this case, the recursion stops.
3. In each recursive step, call the callback function with the appropriate arguments i.e., `self[index]`, `index`, and `this`.
4. Increment `index` and make a recursive call to `forEachRecursive` with the updated index.

### Implementation:

<iframe src="https://leetcode.com/playground/ABEiMHqY/shared" frameBorder="0" width="100%" height="276" name="ABEiMHqY"></iframe>


### Complexity Analysis:

* **Time complexity:** $O(n)$, where `n` is the length of the array. 

* **Space complexity:** $O(n)$, due to the recursive call stack.

---

## Interview Tips:

* How does the callback function's context influence the behavior of the custom `forEach` method?
    * The context passed to the custom `forEach` method determines the value of the `this` keyword within the callback function. By specifying a context, you can control what `this` refers to when the callback is executed, allowing you to access external variables or methods. However, note that if the callback is an arrow function, it won't bind its own `this`, so the context parameter won't have any effect.

* Could you provide an example use case for the context parameter in the custom `forEach` method?
    * Let's say you have an array of Task objects, and you want to update the status property of each task using a method from a TaskManager object. You could pass the TaskManager instance as the context to the `forEach` method. Inside the callback, you could call the TaskManager method to update the task's status. This ensures that the correct instance of TaskManager is used within the callback.

* How does the `forEach` method compare to other iteration methods like `map`, `filter`, and `reduce`?
    * The `forEach` method focuses on iteration and executing a callback without returning a new array or aggregated value. In contrast, `map` returns a new array by transforming each element, `filter` returns a new array based on a condition, and `reduce` aggregates values into a single result. Each method serves a different purpose based on the desired outcome.

---