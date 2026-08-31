# Official Solution

**Link:** [https://leetcode.com/problems/return-length-of-arguments-passed/solution/](https://leetcode.com/problems/return-length-of-arguments-passed/solution/)

---

[TOC]

## Overview:
We need to count the number of arguments passed to function `argumentsLength`. Here the arguments are passsed in the form of rest parameters. 

### Rest Parameter: 
In JavaScript, the rest parameter is a feature that allows a function to accept an indefinite number of arguments. It is denoted by three dots (`...`) followed by a parameter name. The rest parameter collects all the remaining arguments passed to a function into an array, even if the number of arguments is not known in advance. If no additional arguments are passed, the rest parameter will be an empty array.

1. **Syntax:** 
```js
function functionName(...args) {
  // Function body
}
```
The rest parameter (`args` in the above example) can have any valid identifier name, but it is conventionally named `args` or `rest` to indicate its purpose.
The rest parameter is placed as the last parameter in the function's parameter list.
You can have other parameters before the rest parameter, but the rest parameter must be the last one.

2. **Accessing Arguments:**
Inside the function, you can treat the rest parameter (`args`) as an ordinary array.
You can access the elements of the array using array indexing or array methods like `forEach()`, `map()`, `filter()`, etc.

3. **Example:**
```js
function sum(...args) {
  let total = 0;
  for (let number of args) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10, 15)); // Output: 30
console.log(sum()); // Output: 0 (no arguments passed)
```

The `sum()` function uses a rest parameter (args) to collect all the arguments passed to it. It then iterates over the args array and calculates the sum of all the elements. The rest parameter provides flexibility and eliminates the need to explicitly define a fixed number of parameters in the function declaration, making the code more concise and adaptable. It is important to note that the rest parameter only collects the additional arguments passed to the function and does not include arguments passed through named parameters or default parameter values.

### Spread Operator / Rest Parameter: 
After seeing the rest parameter you may feel that it is similar to spread operator but well it is not. The spread operator and the rest parameter both looks same because they both use the same syntax `(...)` in JavaScript, but they serve different purposes and are used in different contexts. 

**Let's explore the differences between the two:**

The spread operator is used to unpack elements from an array or an iterable object (like a string or a set) into individual elements. It spreads the elements out. It's commonly used in situations where you need to combine or clone arrays, pass individual elements of an array as arguments to a function, or convert an iterable into an array. While the rest parameter is useful when you want to write functions that can accept a variable number of arguments i.e., It allows you to handle a dynamic number of function arguments without explicitly defining individual parameters.

To conclude let's take a example for spread syntax:

**Example:** 
```js
const array = [1, 2, 3];
console.log([...array]); // Output: [1, 2, 3]

const string = "hello";
console.log([...string]); // Output: ['h', 'e', 'l', 'l', 'o']

const set = new Set([1, 2, 3]);
console.log([...set]); // Output: [1, 2, 3]
```

---

## Approach 1: Using argument object
To solve this problem, we can leverage the fact that JavaScript provides the arguments object, which is an array-like object that contains all the arguments passed to a function. We can simply retrieve the length of the arguments object and return it.

To be more specific, In JavaScript, arguments are passed as an array-like object. Because of this, you can use a lot of the same kind of functions on arguments as you can on arrays, including using `arguments.length`.
> **Note1:** The arguments object is automatically available inside functions and holds the arguments passed to the function. 
> **Note2:** Using `arguments.length` provides direct access to the length without creating an intermediate array (`args`), which may be beneficial in certain scenarios.

### Implementation:


<iframe src="https://leetcode.com/playground/RTzaCPnp/shared" frameBorder="0" width="100%" height="106" name="RTzaCPnp"></iframe>


### Complexity Analysis:

* **Time complexity:** $$O(1)$$

* **Space complexity:** $$O(1)$$

---

## Approach 2: Using rest parameter 
We can use the rest parameter syntax (`...args`) to gather all the arguments into an array called `args`.
The `args.length` expression is used to access the length property of the `args` array, which represents the number of arguments passed to the function.

### Implementation:


<iframe src="https://leetcode.com/playground/AerdEBNt/shared" frameBorder="0" width="100%" height="106" name="AerdEBNt"></iframe>


### Complexity Analysis:

* **Time complexity:** $$O(1)$$

* **Space complexity:** $$O(1)$$

---

The main difference between the above two code snippets lies in how they access the length of the arguments:

* The first code snippet (`arguments.length`) accesses the length property on the special arguments object itself, without explicitly converting it to an array.
* The second code snippet (`args.length`) accesses the length property directly on the array created by the rest parameter.

### Since the question was too simple, let us expand our understanding of arguments and arrays. 

Given that "arguments are passed as an array-like object" in the approach part, don't you believe javascript will include some methods or properties to cope with common capabilities for manipulating, transforming, querying, and iterating?. Yup, you got it right but does that mean that arguments and array are same? Nope. Let's discuss where the difference lies!!
 
The arguments object in JavaScript is a special object that is automatically available inside functions. It holds the arguments passed to the function when it is invoked. Although arguments can be accessed using index notation like an array, it is not a true JavaScript array. The main reasons are its type methods supporting, some difference in behavious when using the same property.

Here are some important distinctions between array-like objects, such as the arguments object in JavaScript, and actual arrays in more detail:

* **Type:** The arguments object is not an instance of the Array class. It is an array-like object, which means it has some array-like characteristics but lacks many of the built-in methods and properties that are available to arrays.
* **Array Methods:** Arrays in JavaScript have numerous built-in methods like `forEach()`, `map()`, `push()`, `pop()`, and more. However, the arguments object does not have these array methods available. It does not inherit the array methods from the `Array.prototype`.
* **Length:** Both arrays and the arguments object have a length property that indicates the number of elements. However, the length property of the arguments object is automatically updated to reflect the number of arguments passed to the function, whereas in arrays, the length property represents the number of elements in the array.
* **Modifiability:** Arrays can be modified using methods like `push()`, `pop()`, `splice()`, and more. In contrast, while the arguments object's entries can be modified in non-strict mode (a practice that is generally discouraged), you cannot change its length or use array methods like `push()`, `pop()`, and `splice()` on it. Also, in strict mode, the arguments object is effectively read-only.
* **Iteration:** Both arrays and the arguments object can be iterated using loops or iteration methods like `for...of`. However, when it comes to array-specific iteration methods like `forEach()` or `map()`, they can only be used directly with arrays and not with the arguments object.

Here is a specially compiled list of commonly used properties and methods in arrays that you will undoubtedly encounter during your career:)

* `length:` Returns the number of elements in an array.
* `constructor:` Specifies the function that creates an array's prototype.
* `prototype:` Allows you to add properties and methods to an array's prototype object.
* `Symbol.iterator:` Returns the iterator object for iterating over the elements of an array.
* `concat():` Joins two or more arrays and returns a new array.
* `join():` Joins all elements of an array into a string.
* `push():` Adds one or more elements to the end of an array and returns the new length of the array.
* `pop():` Removes the last element from an array and returns that element.
* `shift():` Removes the first element from an array and returns that element.
* `unshift():` Adds one or more elements to the beginning of an array and returns the new length of the array.
* `slice():` Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
* `splice():` Changes the contents of an array by removing, replacing, or adding elements at a specified index.
* `indexOf():` Returns the first index at which a given element can be found in the array, or -1 if it is not present.
* `lastIndexOf():` Returns the last index at which a given element can be found in the array, or -1 if it is not present.
* `forEach():` Executes a provided function once for each array element.
* `map():` Creates a new array with the results of calling a provided function on every element in the array.
* `filter():` Creates a new array with all elements that pass the test implemented by the provided function.
* `reduce():` Applies a function against an accumulator and each element in the array to reduce it to a single value.
* `reduceRight():` Applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value.
* `sort():` Sorts the elements of an array in place and returns the sorted array.
* `reverse():` Reverses the order of the elements in an array in place.
* `toString():` Returns a string representing the specified array and its elements.
* `toLocaleString():` Returns a localized string representing the elements of the array.
* `includes():` Determines whether an array includes a certain value.
* `some():` Checks if at least one element in the array satisfies a provided condition.
* `every():` Checks if all elements in the array satisfy a provided condition.
* `find():` Returns the first element in the array that satisfies a provided condition.
* `findIndex():` Returns the index of the first element in the array that satisfies a provided condition.
* `fill():` Fills all elements in an array with a static value from a start index to an end index.
* `copyWithin():` Copies a sequence of elements within the array to another position in the same array.
* `flat():` Creates a new array with all sub-array elements concatenated into it recursively up to a specified depth.
* `flatMap():` Maps each element using a mapping function and flattens the result into a new array.
* `from():` Creates a new, shallow-copied array from an iterable object or array-like object.
* `isArray():` Determines whether the passed value is an array.
* `of():` Creates a new array with a variable number of elements.
* `keys():` Returns a new array iterator that contains the keys of the array.
* `values():` Returns a new array iterator that contains the values of the array.
* `entries():` Returns a new array iterator that contains the key-value pairs of the array.

## Interview Tips:

* Can you explain what the arguments object is in JavaScript?
  * The arguments object is a special object available inside all JavaScript functions. It contains an array-like collection of the arguments passed to the function. It allows accessing the arguments even if they were not explicitly defined as function parameters.

* Can we modify the arguments object?
  * Yes, the arguments object can be modified by assigning new values to its elements directly. However, it's important to note that the arguments object is not a true JavaScript array, so it does not have the array methods like `push()`, `pop()`, etc. available to directly modify it. Instead, you can modify the elements using the index notation (`arguments[index] = value`).

* Can we use the rest parameter syntax to solve this problem?
  * Yes, starting from ECMAScript 6 (ES6), JavaScript introduced the rest parameter syntax, denoted by ...args, which allows gathering multiple function arguments into an array. We have used this syntax to solve the problem in approach 2.

* How will you convert arguments object into a regular array?
  * The most common way is using the spread operator `(...)` to unpack the elements of the arguments object into a new array. This method works well when you want a concise and readable way to convert the arguments object into an array.
```js
function convertToArray(...args) {
  return [...args];
}
```
  * Other way is by utilizing the `Array.from()` method to create a new array from an arguments object.

---