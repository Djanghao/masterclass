# Official Solution

**Link:** [https://leetcode.com/problems/apply-transform-over-each-element-in-array/solution/](https://leetcode.com/problems/apply-transform-over-each-element-in-array/solution/)

---

[TOC]

## Solution
---

### Overview

This question is intended as an introduction to ***callbacks***. A callback is defined as a function passed as an argument to another function. They are critical to understand as they are used frequently in almost any JavaScript codebase and are essential to writing reusable code.

#### Why Use Callbacks

The simple answer is they allow you to write code that can be reused across different use-cases. 

Imagine you created an algorithm that sorts an array of numbers. Then you encounter a situation where you want to sort an array of people by their age. One option is to re-write the algorithm to handle arrays of people. However, a far better way is to have this function accept a callback that is expected to return a number. Then you can keep the core algorithm the same, and the user of the function simply passes `person => person.age` as the 2nd parameter.

Just about any generic algorithm can benefit from accepting callbacks. The standard JavaScript library and many 3rd party packages rely heavily on them. This particular question asks to reimplement the `Array.map` method, which is one of the most heavily used array methods in JavaScript. However, there are four small differences.

1. `Array.map` is a method on the Array prototype. This implementation accepts the array as the 1st argument.
2. The callback provided to `Array.map` passes a reference to the original array as the 3rd argument. This implementation's callback only accepts two arguments.
3. `Array.map` optionally allows you pass a `thisArg` as the 2nd parameter. If provided, the passed callback will be bound to that context (assuming the callback isn't an arrow function as they can't be bound).
4. `Array.map` is required to handle sparse arrays. For example, if you write code `let arr = Array(100); arr[1] = 1;`, `Array.map` will only look at index 1.

#### Performance Benchmarks

The following approaches include approximate benchmark results. You can test the results for yourself on this [playground](https://leetcode.com/playground/hAzJ7xEF). Tests are done with a random array of 5 million integers and a callback that increments each number.

### Approach 1: Write Values onto Initially Empty Array

In JavaScript, you can read and write to indices that aren't in the range `[0, arr.length)`. Just like with normal objects, accessing an index that doesn't exist returns `undefined`. Writing to an index that doesn't exist is generally discouraged because, besides being confusing, it can result in slow and unpredictable performance.

This approach takes ~250ms for 5M elements.

**Implementation**

<iframe src="https://leetcode.com/playground/LnUXVnWC/shared" frameBorder="0" width="100%" height="174" name="LnUXVnWC"></iframe>

---

### Approach 2: For...in Loop

For...in loops are more commonly used to iterate over the keys on an object. However, they can also be used to iterate over the indices of an array. This approach is notable because it respects sparse arrays. For example, if you wrote `let arr = Array(100); arr[1] = 10;`, this approach would only transform the single element.

This approach takes ~1000ms for 5M elements. An interesting thing to note is that this is the most similar to how the built-in `Array.map` works. Because `Array.map` needs to handle sparse arrays, it is usually several times slower than an optimal custom implementation that assumes arrays aren't sparse.

**Implementation**

<iframe src="https://leetcode.com/playground/UXVG9WMm/shared" frameBorder="0" width="100%" height="174" name="UXVG9WMm"></iframe>

---

### Approach 3: Push Values onto Array

JavaScript arrays are confusingly named because traditionally arrays have a fixed sized. However in JavaScript arrays can have elements appended with an average $O(1)$ time. You can build up a transformed array by appending each element to the end one-by-one.

This approach takes ~200ms for 5M elements.

**Implementation**

<iframe src="https://leetcode.com/playground/KaLsffA7/shared" frameBorder="0" width="100%" height="174" name="KaLsffA7"></iframe>

---

### Approach 4: Preallocate Memory

You can create an empty array with some length using the `new Array(len)` constructor. Note that the memory is allocated but the array doesn't actually contain any elements. 

This technique is more performant than appending elements to the end of the array. This is because whenever you push a value to an array, the array may not have enough memory allocated to it and it will need to be resized. This is an expensive operation. Initializing the memory upfront can result in much better performance.

This approach takes ~40ms for 5M elements.

**Implementation**

<iframe src="https://leetcode.com/playground/UsgjknbU/shared" frameBorder="0" width="100%" height="174" name="UsgjknbU"></iframe>

---

### Approach 5: 32 Bit Integer Array

JavaScript allows you to use [typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays). These aren't like normal JavaScript arrays because they only allow specific data types and their size cannot be altered.

These are a useful tool when you want to store lots of data in a memory efficient way. Traditional arrays can take up significant amounts of memory because they are not fixed size and can store arbitrary data.

This approach takes ~20ms for 5M elements.

**Implementation**

<iframe src="https://leetcode.com/playground/V2LJHkcq/shared" frameBorder="0" width="100%" height="174" name="V2LJHkcq"></iframe>

---

### Approach 6: In-Memory Transformation

To achieve optimal performance, you can simply reuse the memory already allocated to the first array.

It's important to note that it is generally discouraged for a function to modify the values passed to it. It can lead to unexpected bugs where the user of the function was not expecting that as a side-effect. The built-in `Array.map` does not modify the original array.

This approach takes ~10ms for 5M elements.

**Implementation**

<iframe src="https://leetcode.com/playground/9qW76zqm/shared" frameBorder="0" width="100%" height="157" name="9qW76zqm"></iframe>

---

####  Complexity Analysis
The following analysis applies to all of the approaches.

Time complexity: $O(N)$ where $N$ is `arr.length`. 

Space complexity: $O(N)$ where $N$ is `arr.length`. The ***extra*** space is $O(1)$ for Approach 6.