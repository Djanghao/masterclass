# Official Solution

**Link:** [https://leetcode.com/problems/array-wrapper/solution/](https://leetcode.com/problems/array-wrapper/solution/)

---

[TOC]

## Solution

--- 

### Overview

This problem introduces an intriguing aspect of JavaScript programming: altering the standard behavior of JavaScript's addition operator (`+`) and the `String()` function to mimic behaviors found in other programming languages. For example, in Python, it's possible to add arrays directly, a feature that JavaScript doesn't natively support. However, this feature can be replicated in JavaScript with the right logic, which is the crux of this problem. This challenge also affords us an opportunity to explore JavaScript's operator overloading capabilities and the process of converting data types into strings.

To understand the problem and its solutions, it's important to first comprehend the key concepts and techniques we're about to use in our JavaScript implementation. These include the use of functions, arrays, and the understanding of how operator overloading and conversion of data types work in JavaScript. Also, for a deeper dive into JavaScript classes, consider reading the [Event Emitter Editorial](https://leetcode.com/problems/event-emitter/editorial).

#### JavaScript Operator Overloading
Operator overloading is a feature in many programming languages that allows a single operator to have different behaviors depending on its operands. For instance, in Python or C++, you can directly define or modify how operators like `+` or `==` behave with custom objects to achieve functionalities such as vector addition with the `+` operator.

However, in JavaScript, this level of operator overloading is simply not possible. It's important to understand that there is no way to replicate behaviors like vector addition with the `+` operator in JavaScript in the same manner as in Python or C++.

Despite this, JavaScript does provide methods, specifically `valueOf()` and `toString()`, that influence how objects interact with operators. These methods are part of JavaScript's type-conversion mechanism and can be overridden in custom objects to achieve a certain degree of operator behavior modification.

An example demonstrating the use of these methods:
```javascript
let obj = {
  valueOf: function() {
    return 5;
  },
  toString: function() {
    return 'Hello';
  }
};

console.log(obj + 2); //  7 - due to obj.valueOf()
console.log(String(obj)); // 'Hello' - due to obj.toString()

```

These methods provide a mechanism to influence JavaScript's built-in type conversion, but they don't allow for full-fledged operator overloading as seen in languages such as Python or C++.

#### JavaScript `String()` Function
The `String()` function in JavaScript is a global object constructor that converts and returns the string representation of an object. It can be used to convert all types of JavaScript data types into a string. For example, `String(10)` would return '10', and `String(true)` would return 'true'.

An example of how the `String()` function can be used:
```javascript
let num = 10;
let bool = true;

console.log(String(num)); // '10'
console.log(String(bool)); // 'true'

```

In JavaScript, we can also modify the behavior of `String()` when called on our own custom objects by providing a custom `toString()` method in our object. This allows us to control how our objects are represented as strings.
However, while we can modify how the `+` operator and `String()` function behave to some extent using JavaScript's internal methods, creating our own mechanism that mimics array addition and string conversion (like in Python) in JavaScript requires some creative workarounds given the limitations of the language's design.

#### JavaScript toString() Method

In JavaScript, the `toString()` method returns a string representing the object. This method is automatically called by JavaScript whenever an object needs to be displayed as a string (like when you use a string concatenation operation).

You can also define your custom `toString()` method for your objects. This is often done for better readability and debug-friendly string output. A custom `toString()` method can be particularly useful when working with complex objects, as it allows you to control how the object is represented as a string.

```javascript
// Define a constructor function for a Person
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Add a toString method to the Person prototype
Person.prototype.toString = function() {
  return this.firstName + ' ' + this.lastName;
};

// Let's create an instance of Person
var personInstance = new Person('John', 'Doe');

console.log('Hello, ' + personInstance); // Will output "Hello, John Doe"

```

In this example, we first define a constructor function called Person which accepts two arguments: firstName and lastName. Then, we add a `toString()` method to the Person prototype which returns a string in the format "firstName lastName". When we create an instance of Person with the first name 'John' and last name 'Doe', and then concatenate this instance with a string using the `+` operator, JavaScript will automatically call the `toString()` method on the `personInstance`. As a result, `'Hello, ' + personInstance` will output "Hello, John Doe", as the custom `toString()` method controls how the Person object is represented as a string. This demonstrates how you can override the `toString()` method to determine how an object is represented in string contexts.

#### JavaScript valueOf() Method

The `valueOf()` method in JavaScript is an inbuilt function that returns the primitive value of a specified object. By default, the `valueOf()` method is inherited by every object descended from `Object`. This method can be used with `Number`, `Boolean`, `Object`, `String`, and `Date` objects.

When JavaScript tries to convert an object to a primitive value (e.g., during mathematical operations), it first calls the `valueOf()` method on the object. If `valueOf()` does not return a primitive value, JavaScript proceeds to call the `toString()` method. Therefore, by overwriting the `valueOf()` method, you can control how an object behaves in mathematical operations, thereby emulating operator overloading to a certain extent.

```javascript
// Define a constructor function for MyNumber
function MyNumber(number) {
  this.number = number;
}

// Adding a valueOf method to the MyNumber prototype
MyNumber.prototype.valueOf = function() {
  return this.number * 2;
};

// Let's create an instance of MyNumber
var myNumberInstance = new MyNumber(5);

console.log(myNumberInstance + 1); // Will output 11, not 6

```

In the code above, we define a constructor function called `MyNumber` and add a `valueOf()` method to the `MyNumber` prototype. This method will return twice the number. We then create an instance of `MyNumber` with a value of `5`. When we try to add `1` to this instance, JavaScript first calls the `valueOf()` method on `myNumberInstance`. Since we've overridden `valueOf()` to return twice the number, `myNumberInstance.valueOf()` is `10`. Therefore, `myNumberInstance + 1` equals `11`, not `6`. This demonstrates how you can override the `valueOf()` method to influence how an object behaves in mathematical operations. Even though this isn't true operator overloading (since we're not actually changing how the + operator works), it can emulate similar results in many scenarios.

#### JavaScript Prototypes

JavaScript is often described as a prototype-based language, which means that inheritance in JavaScript is implemented through a system of prototypes. Each JavaScript object has a link to another object: its prototype. When trying to access a property that does not exist in an object, JavaScript tries to find this property in the object's prototype, and if it still doesn't find it, it looks into the prototype's prototype, continuing until it reaches an object with a null prototype.

The prototype object itself also has a prototype, typically `Object.prototype` for most standard objects. However, there are exceptions such as plain old JavaScript objects ([POJO](https://masteringjs.io/tutorials/fundamentals/pojo)), particularly those created with `Object.create(null)`. This structure forms what is known as the prototype chain. When JavaScript tries to access a property of an object, it first checks the object itself. If it doesn't find the property there, it ascends the prototype chain. This process continues until it either locates the property or reaches an object with a null prototype.  You can learn more about this process in one of our other editorials: [Check If Object Instance of Class.](https://leetcode.com/problems/check-if-object-instance-of-class/editorial/)

An example of modifying of JavaScript prototype:
```javascript
function Vehicle(name) {
  this.name = name;
}

Vehicle.prototype.getName = function() {
  return this.name;
};

let vehicle = new Vehicle('Car');
console.log(vehicle.getName()); // 'Car'
```
The `getName` function is not a property of the vehicle object itself, but of its prototype. When we call `vehicle.getName()`, JavaScript first looks for `getName` on the vehicle object, and upon not finding it there, it moves down the prototype chain to `Vehicle.prototype`, where it finds and executes the function.

---

### Approach 1:  Implementing valueOf and toString methods in ArrayWrapper class

#### Intuition
We need to create a class `ArrayWrapper` which takes an array as its input and has two methods: `valueOf()` and `toString()`. The `valueOf()` method should return the sum of all the elements of the array and the `toString()` method should return a string representation of the array. This can be achieved by defining the required methods in the class. Inside the methods, `this.nums` would refer to the array that was passed to the class constructor.

#### Algorithm
1. Inside the class constructor, store the array passed as argument.
2. Define a `valueOf` method that calculates and returns the sum of all the array elements.
3. Define a `toString` method that returns a string representation of the array.

#### Implementation

This approach can be implemented in various ways.

##### Implementation 1: Using `reduce` in `valueOf()` method 

<iframe src="https://leetcode.com/playground/dGtZ4aSj/shared" frameBorder="0" width="100%" height="344" name="dGtZ4aSj"></iframe>

##### Implementation 2: Using `for` loop in `valueOf()` method

<iframe src="https://leetcode.com/playground/88otDms9/shared" frameBorder="0" width="100%" height="429" name="88otDms9"></iframe>

In this implementation, we replace the `reduce` method in `valueOf()` with a traditional `for` loop. This may be easier to understand for beginners, although it's a bit more verbose.

##### Implementation 3: Using `toString()` method in Array

<iframe src="https://leetcode.com/playground/7FgPDqZc/shared" frameBorder="0" width="100%" height="361" name="7FgPDqZc"></iframe>

We replace here the manual string construction in the `toString` method with JavaScript's built-in `toString()` method for arrays. This method automatically joins the elements with commas. 

##### Implementation 4: Using Template Literals in `toString()` Method

<iframe src="https://leetcode.com/playground/MfqVnudy/shared" frameBorder="0" width="100%" height="344" name="MfqVnudy"></iframe>

We replace the manual string construction in the `toString` method with JavaScript's built-in template literals. It allows for easier string formatting, and in this case, it embeds the nums array within square brackets.

##### Implementation 5: Using `JSON.stringify` in `toString()` Method

<iframe src="https://leetcode.com/playground/B5u2NGqM/shared" frameBorder="0" width="100%" height="361" name="B5u2NGqM"></iframe>

In this implementation, we use `JSON.stringify` to convert the nums array into a string. This method automatically adds square brackets around the array and separates elements with commas. It's a succinct way to convert an array into a string. However, `JSON.stringify` might not be the optimal choice for this specific task. It's designed to handle complex JSON objects, and thus, needs to check and process every part of the data structure it receives. When it's used on simpler data structures like arrays, these comprehensive checks and processing can make it slower than other methods specifically designed to handle such structures.

##### Implementation 6: ES6 class Syntax

<iframe src="https://leetcode.com/playground/E2cSK2aJ/shared" frameBorder="0" width="100%" height="310" name="E2cSK2aJ"></iframe>
ES6 classes offer a more straightforward syntax for creating classes, including simplified method definitions and constructor function handling.

#### Complexity Analysis

Time complexity of `valueOf`: $O(N)$ where `N` is the length of the array. This is because we iterate over all elements of the array to calculate the sum.
Time complexity of `toString`: $O(N)$ where `N` is the length of the array. This is because joining an array of strings involves iterating over all the strings.


Space complexity of both methods: $O(1)$. We only use a fixed amount of additional space to store the sum or the resulting string. The input array is not counted towards the space complexity, because it's not additional space that scales with the size of the input.

---