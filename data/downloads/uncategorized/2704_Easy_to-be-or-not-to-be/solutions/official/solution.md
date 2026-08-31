# Official Solution

**Link:** [https://leetcode.com/problems/to-be-or-not-to-be/solution/](https://leetcode.com/problems/to-be-or-not-to-be/solution/)

---

[TOC]

## Solution

--- 

### Overview

This problem requires you to create a JavaScript function called `expect` that aids developers in testing their code. The function `expect` takes any value as its argument and returns an object consisting of two methods: `toBe(val)` and `notToBe(val)`. 

The `toBe(val)` method accepts another value and returns `true` if the two values are strictly equal (`===`), but throws an error stating "Not Equal" if they are not. Conversely, the `notToBe(val)` method accepts another value and returns `true` if the two values are not strictly equal (`!==`), but throws an error stating "Equal" if they are.

To effectively tackle this problem, a strong grasp of JavaScript concepts such as objects, functions, and the strict equality and inequality operators (`===` and `!==`) is crucial. Additionally, it's vital to understand JavaScript's error handling mechanisms, especially the `throw` statement. The `expect` function is widely used in various testing frameworks to ascertain that specific code segments behave as intended. It can help verify that a particular function yields the correct value for a given input, or that an object's state alters as predicted when a specific method is invoked. To enhance your understanding, we recommend reviewing resources on JavaScript's [Strict Equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) and [Strict Inequality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality) operators, as well as the [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) statement. If you're new to JavaScript functions, consider checking out the [Create Hello World Function](https://leetcode.com/problems/create-hello-world-function/editorial/) editorial. For an in-depth guide on comparing values in JavaScript, the [2628. JSON Deep Equal](https://leetcode.com/problems/json-deep-equal/editorial/) editorial comes highly recommended.


#### JavaScript Objects and Function Returns
In JavaScript, functions can return objects, which are collections of related data and functions, often known as properties and methods.

Here's an example of a function that returns an object:

```javascript
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  };
}

let person = createPerson("Alice", 25);
person.greet(); // "Hello, my name is Alice and I'm 25 years old."
```

A fundamental concept in JavaScript, particularly when dealing with objects, is the use of the `this` keyword. For a deep dive into this crucial aspect of JavaScript, we highly recommend our [Array Prototype Last](https://leetcode.com/problems/array-prototype-last/editorial/) editorial.

#### JavaScript Objects and Limited Method Chaining
JavaScript objects serve as vital constructs that group related data and functions together. They can hold various data types, including functions, which are considered methods of the object when they reside within it.

In the problem at hand, the `expect` function returns an object. This object includes the `toBe` and `notToBe` methods. Although these methods can be invoked sequentially in a chain-like manner, this represents a restricted form of method chaining as they do not return the original object for further chaining, which is a key characteristic of method chaining in JavaScript programming.

Full method chaining is a common pattern in JavaScript that permits multiple methods to be invoked in a single statement. This pattern is implemented when each method returns an object, which could be the original object (for mutable objects) or a new object (for immutable objects). Full method chaining enhances readability and conciseness of the code and is a preferred pattern in many JavaScript libraries.

Here's an example of full method chaining:
```javascript
let arr = [5, 2, 8, 1];

let result = arr.sort().reverse().join("-");

console.log(result); // "8-5-2-1"

```

In this example, the `sort()` method sorts the array, the `reverse()` method subsequently reverses the sorted array, and finally, the `join("-")` method joins the elements into a string with "-" as a separator. Each of these methods returns an array, allowing the next method to be directly invoked on the result.

Within the context of the `expect` function, a restricted form of method chaining enables developers to seamlessly use the `toBe` and `notToBe` methods in a single line, as shown below:

```javascript
expect(5).toBe(5); // Returns true or throws an error
expect(5).notToBe(3); // Returns true or throws an error
```

The `expect` function returns an object containing the `toBe` and `notToBe` methods. These methods do not return the original object; instead, they either return `true` or throw an error. As such, the `expect` function provides a limited form of method chaining which, nonetheless, proves useful in numerous scenarios.

#### JavaScript Error Handling
Error handling in JavaScript is primarily accomplished through the use of `throw` statements and `try...catch` blocks. The `throw` statement allows you to create custom error messages, which can be very useful for debugging your code. There are different ways to use the `throw` statement based on what you want to achieve.

##### Throwing a string:

You can throw a string in JavaScript. It will be caught as an error message in the `catch` block.

```javascript
function checkName(name) {
  if (name === '') {
    throw "Name can't be empty!";
  }
  return name;
}

try {
  console.log(checkName(''));
} catch (error) {
  console.error(error); // "Name can't be empty!"
}
```

##### Throwing an Error instance:
A more common and recommended approach is to throw an `Error` instance. This allows additional metadata like a stack trace to be included with the error, aiding in debugging.

```javascript
function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return numerator / denominator;
}

try {
  console.log(divide(5, 0));
} catch (error) {
  console.error(error.message); // "Cannot divide by zero!"
}

```

##### Throwing an Aggregated Error:
There are times when you might want to throw multiple errors at once. This is particularly useful when dealing with Promises. JavaScript has an in-built `AggregateError` object that can be used in these scenarios. The `AggregateError` object takes an iterable of error objects and an optional message as parameters.

```javascript
let error1 = new Error("First Error");
let error2 = new Error("Second Error");

try {
  throw new AggregateError([error1, error2], "Two errors occurred.");
} catch (error) {
  if (error instanceof AggregateError) {
    console.error(error.message); // "Two errors occurred."
    for (let e of error.errors) {
      console.error(e.message); // logs "First Error" then "Second Error"
    }
  }
}

```

---

### Approach 1: Object Factory

#### Intuition
In this problem, we are asked to implement a function called `expect` that is used to perform some basic tests on code. The function should take in any value and return an object with two methods: `toBe` and `notToBe`.

The `toBe` method should take in another value and return `true` if the two values are strictly equal to each other (`===`). If they are not equal, it should throw an error with the message "Not Equal".

Similarly, the `notToBe` method should take in another value and return `true` if the two values are not strictly equal to each other (`!==`). If they are equal, it should throw an error with the message "Equal".

#### Algorithm
1. Return an object from `expect` that contains the methods `toBe` and `notToBe`.
2. In the `toBe` method, compare the input value with the value passed into `expect`. If they are equal, return `true`. If not, throw an error with the message "Not Equal".
3. Similarly, in the `notToBe` method, compare the input value with the value passed into `expect`. If they are not equal, return `true`. If they are, throw an error with the message "Equal".

#### Implementation
This solution can be realized either through the given function expression or by constructing an additional ES6 class.

##### Implementation 1: Function expression

<iframe src="https://leetcode.com/playground/5eCoK5QS/shared" frameBorder="0" width="100%" height="361" name="5eCoK5QS"></iframe>

In this implementation, the `expect` function acts as a factory function, creating an object with two methods: `toBe` and `notToBe`. Each of these methods uses the strict equality (`===`) or inequality (`!==`) operator to compare `val` with the value passed in, returning `true` or throwing an error based on the comparison's outcome.

##### Implementation 2: Using ES6 Classes

<iframe src="https://leetcode.com/playground/LZn866ji/shared" frameBorder="0" width="100%" height="497" name="LZn866ji"></iframe>

In this code, `expect` is a function that returns a new instance of the `Expect` class. This instance retains the value passed into `expect` and uses it for its `toBe` and `notToBe` methods.

#### Complexity Analysis

Time complexity: $O(1)$, the function only creates an object with two methods and does not perform any iterative or recursive operations.

Space complexity: $O(1)$, the function always creates an object with exactly two methods, regardless of the size or complexity of the input value. Therefore, the amount of memory required by the function does not scale with the input size, resulting in constant space complexity.

## Interview Tips:

* What does it mean when functions return objects or other functions in JavaScript?
    * When a function returns an object or another function, it's making use of higher-order functions and factory functions. Higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them. Factory functions, on the other hand, are functions that return object instances. This concept is crucial in functional programming and provides a way to encapsulate and reuse code.

* How does method chaining work in JavaScript, and when would it be beneficial to use?
    * Method chaining is a common pattern in JavaScript where multiple methods are called in a single statement. This is possible when each method returns an object, which may be the original object (for mutable objects) or a new object (for immutable objects). Method chaining makes the code more readable and concise and is especially beneficial when performing multiple transformations or operations on an object.

* What is the difference between `==` and `===` in JavaScript?
    * The `==` operator is the abstract equality operator and will attempt to perform type coercion if the types of the two variables being compared are different. On the other hand, the `===` operator, known as the strict equality operator, does not perform type coercion, and it will only return `true` if both the value and the type of the two variables are the same.

* How would you handle errors in JavaScript functions??
    * Errors in JavaScript functions can be handled using `try...catch...finally` blocks. The `try` block contains the code that may potentially throw an error, the `catch` block is executed if an error occurs in the `try` block, and the `finally` block is executed after the `try` and `catch` blocks, regardless of the outcome. Another way to handle errors is by using error-first callbacks, which is a common pattern in Node.js where the first argument of the callback function is reserved for an error object.

* Why would we want to throw an error instead of just returning false in the `toBe` and `notToBe` methods?
    * Throwing an error provides more information about what went wrong and allows you to catch the error at a higher level in your code with a `try...catch` statement. In contrast, simply returning `false` would only inform you that the values were not equal, without giving any further context or information.