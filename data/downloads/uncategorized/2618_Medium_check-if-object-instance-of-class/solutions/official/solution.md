# Official Solution

**Link:** [https://leetcode.com/problems/check-if-object-instance-of-class/solution/](https://leetcode.com/problems/check-if-object-instance-of-class/solution/)

---

[TOC]

## Solution

---

### Overview

Before diving into the main problem and its solution, it's crucial to understand how prototypal inheritance works in JavaScript. Unlike class-based languages such as Java or C++, JavaScript is a prototype-based language, which means it relies on objects and their prototypes rather than classes and inheritance.

Every object in JavaScript has a prototype, which is another object that the current object inherits properties and methods from. When you access a property or method on an object, JavaScript first checks if the object itself has the requested property. If it doesn't, the engine looks down the prototype chain, checking each prototype object until it finds the requested property or reaches the end of the chain.

To illustrate this, let's consider an example:

<iframe src="https://leetcode.com/playground/b2RtW4nW/shared" frameBorder="0" width="100%" height="242" name="b2RtW4nW"></iframe>

This prototype-based inheritance mechanism is at the core of JavaScript's object-oriented programming model, and understanding it is essential to working with instances, classes, and superclasses effectively."


A key aspect of object-oriented programming is understanding the relationship between objects and their classes or superclasses. One common task in this domain is determining whether a given object is an instance of a specific class or its superclass. This problem challenges you to create a function, `checkIfInstanceOf(obj, classFunction)`, that serves this purpose in a generic way.

The function accepts two arguments: an object and a class, and returns a boolean value indicating whether the object is an instance of the given class or its superclass. An object is considered an instance of a class if it can access the class's methods.

The challenge in this problem lies in accommodating various data types and handling cases where the `instanceof` keyword may not produce the expected result. For instance, the function should recognize that primitives have indirect access to methods and prototypes of their appropriate constructors.

In JavaScript, the concept of "instance of" is a bit different than other languages as JavaScript is a prototype-based language, rather than a class-based language like Java or C++. In JavaScript, an object is considered an instance of a constructor function (or class) if it has been created using the **`new`** keyword with that constructor function, or if it inherits from the prototype of the constructor function. In other words, an object is an instance of a constructor function if it is linked to the constructor's prototype in its prototype chain.

Now regarding test cases like **`checkIfInstance(5, Number)`** - in JavaScript, the value **`5`** is a primitive value of type **`number`**. It is not an instance of the **`Number`** object (which is a wrapper object for numeric values) in the sense that you might expect from object-oriented programming languages like Java or C++. However, that's where things get interesting. When you access a property or method on a primitive value, JavaScript temporarily coerces the primitive value into an object (a process called "[boxing](https://javascript.plainenglish.io/javascript-boxing-wrappers-5b5ff9e5f6ab)") so that you can access the property or method. 

The **`constructor`** property is one such property that is accessible on a **`number`** primitive. When you use **`(5).constructor`** (numbers need to be wrapped, as otherwise, javascript considers it's a decimal point, for strings you can use dot notation without any changes e.g. `“myString”.length`) or other other methods like **`Object.getPrototypeOf(5)`**, JavaScript coerces the **`number`** primitive **`5`** into a **`Number`** object, allowing you to access the **`constructor`** property, which points to the **`Number`** constructor function. Even though **`(5).constructor`** points to the **`Number`** constructor, it doesn't mean that **`5`** is an instance of **`Number`**, as you might expect from object-oriented languages. In JavaScript, **`5`** is still a primitive value and not an actual instance of the **`Number`** object. You can verify this by checking with the **`instanceof`** operator:

```
console.log(5 instanceof Number); // Output: false
```

And that's why **`instanceof`** behaves in that way, which is actually correct but in this particular problem we consider a value to be an instance of a given class when (as the prompt reads) the value "has access to that class's methods" and it's meant by the author that indirect access to class's methods through the boxing process described above to be also considered. Example 4 clarifies that and that's why using **`instanceof`** won't work as a solution to this problem. In contrast, if you create a **`Number`** object using the **`Number`** constructor, it will be an instance of **`Number`**:

```
const num = new Number(5);
console.log(num instanceof Number); // Output: true
```

By mastering this problem, you will gain a deeper understanding of object-oriented programming concepts in JavaScript and improve your ability to work with instances, classes, and superclasses.

---

### Approach 1: Iterating Through Prototype Chain

### Intuition

The problem requires checking if a given object is an instance of a specified class or one of its superclasses. The object is considered an instance of a class if it has access to that class's methods including indirect access through boxing as described in the overview section.

The provided solution focuses on traversing the prototype chain of the given object to determine if it's an instance of the specified class or one of its superclasses. By iterating through the prototype, we can identify if the object has access to the class's methods.

### Algorithm

The **`checkIfInstanceOf`** function accepts two parameters: **`obj`** (the object to check, possibly could be primitive value) and **`classFunction`** (the class to check against). The algorithm proceeds as follows:

1. If **`obj`** is null or undefined, or **`classFunction`** is not a function, return **`false`**. This step ensures that the input is valid before proceeding.
2. Initialize a variable **`currPotentialPrototype`** with the prototype of **`obj`**. The prototype is an object containing the methods and properties accessible by **`obj`**.
3. Use a while loop to iterate through the prototype chain of **`obj`**. For each iteration, perform the following steps:
    
    a. Check if **`currPotentialPrototype`** is equal to the prototype of **`classFunction`**. If so, **`obj`** is an instance of **`classFunction`**, and the function returns **`true`**.
    
    b. If the prototypes are not equal, move down the prototype chain by setting **`currPotentialPrototype`** to the prototype of its current value.
    
4. If the loop finishes without finding a matching prototype, return **`false`**, as **`obj`** is not an instance of **`classFunction`** or its superclasses in this case.

### Implementation

<iframe src="https://leetcode.com/playground/ZE8RsKYS/shared" frameBorder="0" width="100%" height="293" name="ZE8RsKYS"></iframe>

### Complexity Analysis

Let **`N`** be the depth of the prototype chain for the given object.

- Time complexity: $$O(N)$$. The algorithm iterates through the prototype chain, which takes time proportional to its depth.
- Space complexity: $$O(1)$$. The algorithm uses a constant amount of extra space to store the **`currPotentialPrototype`** variable.

---

### Approach 2: Built-in instanceof method

### Intuition

This alternative solution for this problem simplifies the process of checking if a given object is an instance of a specified class or one of its superclasses. Instead of manually traversing the prototype chain, this solution takes advantage of JavaScript's `instanceof` operator, which automatically checks the prototype chain to determine if the object is an instance of the specified class. We also need to account for primitives and their indirect access to appropriate prototypes (Example 4). It's worth noting that this solution might not be the one expected during an interview, as the interviewer might expect you not to use built-in methods. It's advisable to clarify this with the interviewer first.

### Algorithm

The **`checkIfInstanceOf`** function accepts two parameters: **`obj`** (the object to check) and **`classFunction`** (the class to check against). The algorithm proceeds as follows:

1. If **`obj`** is null or undefined, or **`classFunction`** is not a function, return **`false`**. This step ensures that the input is valid before proceeding.
2. Use the **`instanceof`** operator to check if **`obj`** is an instance of **`classFunction`**. The **`instanceof`** operator checks the prototype chain of **`obj`** for the presence of **`classFunction.prototype`**. If **`obj`** is an instance of **`classFunction`**, the function returns **`true`**. Otherwise, it returns **`false`**. Note that we need to account for primitives to be treated essentially as objects or as if they were coming from wrapper constructors due to primitives not having direct access to the prototype from their appropriate constructor as presented in the overview.

### Implementation

<iframe src="https://leetcode.com/playground/Cvhx8voA/shared" frameBorder="0" width="100%" height="225" name="Cvhx8voA"></iframe>

### Complexity Analysis

- Time complexity: $$O(N)$$. The **`instanceof`** operator checks the prototype chain, which takes time proportional to its depth (**`N`** being the depth of the prototype chain for the given object).
- Space complexity: $$O(1)$$. The algorithm uses a constant amount of extra space for the checks and the **`instanceof`** operation.

---

### Approach 3: Iterating Through Prototype Chain With Generator Function

### Intuition

Similar to Approach 1, this solution also checks if a given object is an instance of a specified class or one of its superclasses by traversing the prototype chain. The difference is that this approach uses a generator function. Generators are lazy in nature, which is especially beneficial when dealing with large data sets or long prototype chains.

### Algorithm

The **`checkIfInstanceOf`** function accepts two parameters: **`obj`** (the object to check) and **`classFunction`** (the class to check against). The algorithm proceeds as follows:

1. If **`obj`** is null or undefined, or **`classFunction`** is not a function, return **`false`**. This step ensures that the input is valid before proceeding.
2. Define a generator function **`prototypeGenerator`** that yields the prototypes of the given object, starting with its direct prototype and moving down the chain.
3. Use a for loop to iterate through the prototype chain of **`obj`** using the **`prototypeGenerator`** function. For each iteration, perform the following steps:
    
    a. Check if the current prototype is equal to the prototype of **`classFunction`**. If so, **`obj`** is an instance of **`classFunction`**, and the function returns **`true`**.
    
4. If the loop finishes without finding a matching prototype, return **`false`**, as **`obj`** is not an instance of **`classFunction`** or its superclasses.

### Implementation

<iframe src="https://leetcode.com/playground/gsjG9XGA/shared" frameBorder="0" width="100%" height="361" name="gsjG9XGA"></iframe>

### Complexity Analysis

Let **`N`** be the depth of the prototype chain for the given object.

- Time complexity: $$O(N)$$. The algorithm iterates through the prototype chain, which takes time proportional to its depth.
- Space complexity: $$O(1)$$. The algorithm uses a constant amount of extra space to store the **`prototypeGenerator`** state and the **`prototype`** variable.