# Official Solution

**Link:** [https://leetcode.com/problems/filter-elements-from-array/solution/](https://leetcode.com/problems/filter-elements-from-array/solution/)

---

[TOC]

## Solution
---

### Overview

This question asks you to write a function that filters elements from an array based on the output of a ***callback*** function. Alongside map and reduce, it is one of the most commonly used and important functions in JavaScript. 

It is recommended you first read the editorial for [map](https://leetcode.com/problems/apply-transform-over-each-element-in-array/editorial) as that editorial includes a discussion on callbacks not included here.

#### Truthy and Falsy

In this question, you are asked to remove all values from an array that aren't ***truthy*** (i.e. remove all ***falsy*** values). But what does that mean? JavaScript has true boolean values of `true` and `false`. But you are actually allowed to put any value inside an `if` statement. That value will be ***coerced*** into a boolean based on it's "truthiness".

All values are considered ***truthy*** except the following:

- `false`
- All forms of zero, meaning `0`, `-0` (output of `0/-1`), and `0n` (output of `BigInt(0)`)
- `NaN` ("Not a Number", one way to get it is with `0/0`)
- `""` (empty string)
- `null`
- `undefined`

##### Why does this language feature exist?

The short answer is it can be convenient. Imagine you have a textfield which edits a variable `userInput` which is initially null.

Rather than writing:

```js
if (userInput !== null && userInput !== "") {
  // uploadToDatabase(userInput)
}
```
You can shorten this to:
```js
if (userInput) {
  // uploadToDatabase(userInput)
}
```
However, it is easy to not think carefully about your code and create bugs by not being explicit about what values are valid. For example, zero or an empty string might be completely valid inputs and the above code will result in a bug.

##### Truthiness and Logical Operators

It is not uncommon to see code like this in a JavaScript codebase:

```js
const stringVal = textInput || "Default Value";
```

To an experienced JavaScript developer, this makes perfect sense. But developers from other backgrounds might find this very confusing. Why is a logical operator returning a string?

This is because, in JavaScript, logical operators don't return booleans; they return one of the two operands provided to them. At first this is confusing, but it is actually quite elegant and allows you to write very terse code.

- The ***OR*** operator `||` returns the first value if the first value is truthy (without evaluating the 2nd value). Otherwise it returns the second value.
- The ***AND*** operator `&&` returns the first value if the first value is falsy (without evaluating the 2nd value). Otherwise it returns the 2nd value.
- The ***Nullish Coalescing*** operator `??` is identical to `||` except it only treats `null` and `undefined` as falsy.

An easy way to remember this is by knowing the logical operator will return the ***last*** value it ***needed*** to evaluate. For example, ***OR*** is immediately true if the first value is true, thus it will return the first value iff it is truthy.

The reason this is elegant is because for true booleans, this algorithm actually works exactly as you would expect. Try it out for yourself! However you can also use them to write short code for non-boolean operations. And even if you don't use these operators for that purpose yourself, it's important to understand them for reading other's code.

A common use-case is for choosing the first truthy value from a list:

```
let val;
if (a) {
  val = a;
} else if (b) {
  val = b;
} else {
  val = c;
}
```

can be replaced with:

```js
const val = a || b || c;
```

You could also conditionally execute some code:

```js
if (a && b) {
  func();
}
```
can be replaced with:
```js
a && b && func();
```
---

### Built-in Array.filter

This question asks you to reimplement the `Array.filter` method, which is one of the most heavily used array methods in JavaScript. However there are four small differences between your implementation and the standard library.
- `Array.filter` is a method on the Array prototype. This implementation is a function that accepts the array as the 1st argument.
- The callback passed to `Array.filter` has a reference to the original array passed as the 3rd argument. This implementation's callback only accepts two arguments.
- `Array.filter` optionally allows you pass a `thisArg` as the 2nd parameter. If provided, the passed callback will be bound to that context (assuming the callback isn't an arrow function as they can't be bound).
- `Array.filter` handles sparse arrays. For example, if you write code `let arr = Array(100); arr[1] = 10;`, `Array.filter` will only look at index 1 and the empty indices will automatically be filtered out.

### Approach 1: Push Values onto New Array

You can create a new array and push all values where `fn(arr[i], i)` returns a truthy value. This is done by iterating over each element in the original array.

<iframe src="https://leetcode.com/playground/mJno8dQH/shared" frameBorder="0" width="100%" height="208" name="mJno8dQH"></iframe>

---

### Approach 2: For...in Loop

For...in loops are more commonly used to iterate over the keys on an object. However, they can also be used to iterate over the indices of an array. This approach is notable because it respects sparse arrays by omitting empty indices. For example, if you wrote `let arr = Array(100); arr[1] = 10;`, this approach would only apply a filter on the single element and it will automatically remove all the empty values.

An interesting thing to note is that this is the most similar to how the built-in `Array.filter` works. Because `Array.filter` needs to handle sparse arrays, it is usually slower than an optimal custom implementation that assumes arrays aren't sparse.

Another thing to note is that since for...in loops include keys on the object's prototype, it is often better to use `Object.keys()`.


<iframe src="https://leetcode.com/playground/GsafP7LW/shared" frameBorder="0" width="100%" height="225" name="GsafP7LW"></iframe>

---

### Approach 3: Preallocate Memory

Pushing elements onto an array can be a slow operation. This is because the array may not have space for the new element and will need to be resized. Initializing the array with `new Array(size)` can avoid these expensive resizing operations.

At the end, we will remove empty elements by popping them from the end of the array. Note that this algorithm will perform the fastest in the case where few elements are removed from the original array.

<iframe src="https://leetcode.com/playground/iEaMki6n/shared" frameBorder="0" width="100%" height="310" name="iEaMki6n"></iframe>

---

### Approach 4: Perform Operations In-Place

This approach is similar to Approach 3, but utilizes the memory of the input array, avoiding the cost of creating a new array.

Note that this solution is efficient, but it generally is not a good idea to mutate arguments passed into a function. This is because the user of the function may not expect their array to be modified and this could result in bugs. Note that the built-in `Array.filter` does not mutate the input array.

<iframe src="https://leetcode.com/playground/JbkEr6SA/shared" frameBorder="0" width="100%" height="293" name="JbkEr6SA"></iframe>
---

### Approach 5: Standard Library

You were asked not to use the built-in `Array.filter` method. This approach is mainly included for the performance benchmarks at the end.

<iframe src="https://leetcode.com/playground/Wr2THft6/shared" frameBorder="0" width="100%" height="106" name="Wr2THft6"></iframe>

#### Performance Analysis

The following chart is an informal analysis of these approaches. It was done by filtering arrays of 200,000 values from `Math.random()` 30 times. The fraction removed was varied by changing the callback. For example `x => x > 0.2` would result in 20% of the elements being removed.

![performance](../Figures/2634/performance.png)

Note that results will vary by array size, callback function, and the execution environment. But we can make a few reasonable conclusions.
 
- ***Approach 2*** (for..in) and ***Approach 5*** (built-in) are the slowest because they handle the case where arrays are sparse.
- ***Approach 1*** (push) is the fastest when most elements are removed. This is because the expensive push operation is done rarely in those cases.
- ***Approach 3*** (preallocate memory) and ***Approach 4*** (in-place) are the fastest when few elements are removed. This is because the pop operation is done rarely in those cases. Approach 4 is faster than Approach 3 because no initial array creation is required.

Note that even though you could optimize your code by picking the optimal filtering approach, you should probably just use the built-in `Array.filter` method for simplicity and readability. The exception is if you are writing a high-performance library or dealing with extremely large arrays where the performance gains become meaningful.

#### Complexity Analysis

The following analysis applies to all the approaches. Let $$N$$ be the length of the input array.

- Time complexity: $$O(N)$$. The algorithms iterate over all the elements.
- Space complexity: $$O(N)$$. The algorithms return an array which, in the worst case, has $$N$$ elements. The ***extra*** space for Approach 4 is $$O(1)$$.