# Official Solution

**Link:** [https://leetcode.com/problems/calculator-with-method-chaining/solution/](https://leetcode.com/problems/calculator-with-method-chaining/solution/)

---

[TOC]

## Solution

--- 

### Overview

In this problem, you are tasked to design a JavaScript class named `Calculator`. This class should perform basic mathematical operations such as addition, subtraction, multiplication, division, and exponentiation. Notably, the class should facilitate method chaining, allowing for consecutive operations to be executed seamlessly. The `Calculator` class constructor should take a number that serves as the initial result value.

The `Calculator` class should provide the following methods: `add`, `subtract`, `multiply`, `divide`, `power`, and `getResult`. Each of these methods (except `getResult`) performs the corresponding mathematical operation on the result and returns the updated `Calculator` instance, thus enabling method chaining. The `divide` method should also handle the edge case of division by zero and throw an error in such cases. The `getResult` method returns the current result.

Three examples are provided in the problem description, demonstrating various combinations of method chaining. The examples range from simple addition and subtraction to complex cases involving multiplication, exponentiation, and even division by zero.

#### Method Chaining

In JavaScript, method chaining is a technique that involves calling multiple methods in a single statement. This is possible when each method returns an object, allowing the calls to be chained together. The fundamental principle behind method chaining is that each method returns an object, and then another method is called on that object.

For instance, consider a hypothetical `Car` class in JavaScript that has methods to set various properties:

```javascript
class Car {
    setMake(make) {
        this.make = make;
        return this;
    }

    setModel(model) {
        this.model = model;
        return this;
    }

    setColor(color) {
        this.color = color;
        return this;
    }
}

const car = new Car().setMake('Toyota').setModel('Corolla').setColor('Blue');

```

In this example, we are able to chain the calls to `setMake`, `setModel`, and `setColor` because each of these methods returns `this`, which is the instance of the `Car` class.

#### Exception Handling

JavaScript provides a `throw` statement that allows you to create errors. Here's an example:

```javascript
function divide(a, b) {
    if(b === 0) {
        throw 'Division by zero is not allowed';
    }

    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log(error);  // Prints: Division by zero is not allowed
}

```

In this example, the function divide throws an exception when trying to divide by zero. `The try/catch` block catches this exception and handles it by printing the error message.

#### Use Cases of Method Chaining

The concept of method chaining can be a powerful tool in JavaScript applications for producing clean, concise, and readable code. It helps in creating a flow of operations which simplifies debugging and makes the code more understandable. Here are some general areas where method chaining might be useful:

1. **Mathematical Operations:** Method chaining is beneficial in performing multiple mathematical operations in sequence. For instance, using our `Calculator` class, we can perform a series of operations on a number like `new Calculator(10).add(5).subtract(7).multiply(2).getResult()`, which is much cleaner and easier to understand than performing each operation separately.

2. **Data Processing:** When working with data manipulation libraries such as Lodash or jQuery, method chaining is frequently used to perform a sequence of operations on data collections. For example, you can filter an array, map the filtered result to a new array, sort the mapped array, and then get the first item, all in a single chained expression.

3. **DOM Manipulation:** In front-end JavaScript development, method chaining is commonly used with the Document Object Model (DOM). Libraries like jQuery heavily utilize method chaining for tasks like selecting multiple elements and applying a series of modifications or event handlers to them.

4. **Object Configuration:** In object-oriented JavaScript, method chaining is often used to set properties of an object in a fluent interface style. This is common in JavaScript libraries and frameworks. For instance, in Three.js (a 3D library), you can set multiple properties of a 3D object in one line using method chaining.

5. **Promise Handling:** In modern asynchronous JavaScript, Promises and the Fetch API utilize method chaining for handling asynchronous operations and their responses. For instance, to make a network request, parse the response as JSON, and then use the data, we often chain `.then()` methods.


Here is an example:

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

Remember, while method chaining can make your code more readable and elegant, overuse can lead to long, complex chains that can be difficult to debug and understand. It's essential to find a balance and use method chaining judiciously based on your specific use case.

---

### Approach 1: Method Chaining

#### Intuition
In this approach, we leverage the concept of method chaining. The main idea is to create a class with methods that can be chained together and perform mathematical operations on a given number.

#### Algorithm
1. Constructor: Create a constructor for the `Calculator` class that takes an initial value and assigns it to the class's property (`result`).
2. Addition, Subtraction, Multiplication, Division, and Power Methods: For each of these methods, create a function that performs the corresponding operation on the class's property (result). Each function should return the class's instance (`this`) to allow for method chaining.
3. GetResult Method: Create a function that returns the current value of the result.
4. Error Handling: In the division method, include a check for division by zero and throw an error if the denominator is zero.


#### Implementation

<iframe src="https://leetcode.com/playground/ZGhqMYR7/shared" frameBorder="0" width="100%" height="500" name="ZGhqMYR7"></iframe>

In this implementation, we design a `Calculator` class that provides the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. We allow consecutive operations to be performed using method chaining by returning this in each method. In the divide method, we include a check for division by zero and throw an error if that's the case.

#### Complexity Analysis

Time complexity: $O(1)$, where each operation (addition, subtraction, multiplication, division, power) are all constant-time operations.

Space complexity: $O(1)$, as the space required does not increase with the size of the input. We only maintain a single variable result irrespective of the number of operations performed.

## Interview Tips:

* **How does JavaScript's handling of floating point arithmetic affect the implementation of the Calculator class?**
  * JavaScript uses IEEE-754 standard for floating point arithmetic. This means that certain operations may not yield exact results due to the binary representation of decimal fractions. For instance, an operation like `0.1 + 0.2` yields `0.30000000000000004` instead of `0.3`. In the `Calculator` class, this means that some calculations may return results with more decimal places than expected. It's important to be aware of this while designing calculations or comparisons in JavaScript.

* **Why is method chaining used in the Calculator class and what are its benefits in the context of JavaScript?**
  * Method chaining in JavaScript allows you to call multiple methods on the same object in a single line, making the code more readable and easier to maintain. In this problem, method chaining allows operations to be applied on the calculator object in a sequential manner. This is particularly useful in JavaScript, as it allows developers to write more concise and expressive code, leading to better readability and maintainability.

* **How does error handling apply in this Calculator class problem, and why is it important in JavaScript applications?**
  * In this problem, error handling comes into play when dealing with division by zero, which is undefined in mathematics. If a user tries to perform division by zero, the Calculator class throws an error, preventing the operation. In JavaScript applications, good error handling is essential to ensure that the program doesn't crash and can handle exceptions gracefully. It provides a way to respond to exceptional circumstances (like runtime errors) in program flow. It can allow the application to display helpful error messages, keep executing in spite of non-fatal errors, or even correct the errors on the fly. In the `Calculator` class, this means handling mathematical errors and providing useful feedback to the user, enhancing the user experience and the robustness of the code.

* **Why do we use `this` keyword in all the Calculator class methods and what does it represent?**
  * In JavaScript, `this` is a special keyword that refers to the context in which a function is called. In the case of a method being called on an object (like our `Calculator` class methods), `this` refers to the object itself. This allows the methods to access and modify the object's properties. In the `Calculator` class, using `this` in the `add`, `subtract`, `multiply`, `divide`, and `power` methods allows us to maintain and manipulate the `result` property. For a deeper understanding of how `this` works in JavaScript, you can refer to [this editorial](https://leetcode.com/problems/array-prototype-last/editorial).

* **In the context of front-end development, where can a class like Calculator be used?**
  * The `Calculator` class can be utilized in a variety of front-end applications. For instance, it could be used in a web-based calculator app, a finance or accounting app that requires various calculations, in games for score computations, or in any application that requires mathematical computations. The use of classes like `Calculator` helps encapsulate related functionality in a single unit, promoting code reuse and modularity.