# Official Solution

**Link:** [https://leetcode.com/problems/call-function-with-custom-context/solution/](https://leetcode.com/problems/call-function-with-custom-context/solution/)

---

[TOC]


## Overview:

The task is to enhance all functions to have a `callPolyfill` method. The `callPolyfill` method should accept an object `(obj)` as its first parameter and any number of additional arguments. The `obj` becomes the `this` context for the function, and the additional arguments are passed to the function.

---

### First let's delve into more details about Function.prototype.

* In JavaScript, every function is automatically associated with a property called `prototype`. The `prototype` property is an object that serves as a blueprint or template for creating new objects when the function is used as a constructor with the `new` keyword. 
* It allows us to define properties and methods that will be inherited by the instances created using the function.

To understand **`Function.prototype`**, let's consider an example:

* In this example, we define a constructor function `Person` that takes `name` and `age` as parameters. When used with the `new` keyword, this function is called with a newly created object as its `this` context, and assigns the provided `name` and `age` to `this` new object's properties. 
* We then add a method `greet()` to `Person.prototype`. This method can be accessed by instances of `Person`, as shown when we call `user.greet()`.

<iframe src="https://leetcode.com/playground/8q9kvBhU/shared" frameBorder="0" width="100%" height="242" name="8q9kvBhU"></iframe>

> It's important to note that modifying built-in prototypes like `Function.prototype` should be done with caution, as it can affect the behavior of all functions in the codebase. It's generally recommended to avoid modifying built-in prototypes in production code, but for learning purposes or in certain specific scenarios, it can be useful.

* The `Function.prototype` object, specifically, is the prototype for all function objects in JavaScript. Since functions are also objects in JavaScript, they have properties and methods accessible through their prototype.
* By extending `Function.prototype`, we can add custom methods that will be inherited by all functions. The benefits and reasons why JavaScript was designed with the capability of modifying the prototype revolve around efficiency in terms of memory and performance. This is particularly noticeable when compared to adding methods directly to objects. When a method is added to a prototype, it's stored in memory only once and shared among all instances of that object. Conversely, if you add a method directly to each object, a separate copy of the method is created for each instance, resulting in greater memory usage.
* In the case of the problem at hand, we add the `callPolyfill` method to `Function.prototype` so that it becomes accessible to all functions.

---

## Use Cases:

**Function Context Binding:**
* Sometimes, you may have a function that relies on a specific context or this value to work correctly. By using the `callPolyfill` method, you can explicitly set this context for the function. This can be handy in scenarios where you need to invoke a function with a specific object as the context.
* Example:
  * In an event handler, you can use `callPolyfill` to set the event target as the `this` context for the handler function, allowing you to access the target properties conveniently.

<iframe src="https://leetcode.com/playground/NTbCwirr/shared" frameBorder="0" width="100%" height="191" name="NTbCwirr"></iframe>

**Method Borrowing:**
* In JavaScript, objects can share methods by borrowing them from other objects. The `callPolyfill` method can facilitate method borrowing by setting the `this` context to the object you want to borrow the method from.
* Example:
  * If you have multiple objects with similar functionality and want to reuse a method from one object in another object, you can use `callPolyfill` to invoke the method with the desired object as the context.

<iframe src="https://leetcode.com/playground/igdgKNNd/shared" frameBorder="0" width="100%" height="293" name="igdgKNNd"></iframe>

---

## Approach 1: Using Object

### Intuition:

* We can use `Object.defineProperty` to define a non-enumerable property on the `context` object. This allows us to bind the function to the context object without affecting enumeration or interfering with existing properties.
* By invoking the function using `context.fn(...args)`, we ensure that the function is executed with the desired context and arguments.
> Note: Regular objects sometimes don't work in special edge cases like property shadowing. 

This implementation takes advantage of property descriptors to fine-tune the behavior of the bound function and provides more control over the properties added to the context object.

### Algorithm:

* Inside the `callPolyfill` method, `this` refers to the function that `callPolyfill` is being called on, which is the function object itself.
* The `context` parameter represents the desired context or object to be used as `this` within the function.
* The `...args` syntax allows any number of additional arguments to be passed to the function.
* `Object.defineProperty` is used to define a property named `'fn'` on the context object. The property descriptor object passed as the third argument has the following properties:
  * `value`: Set to `this`, which refers to the function object itself.
  * `enumerable`: Set to `false` to make the `'fn'` property non-enumerable. This means it won't be visible during enumeration (e.g. when using `for...in` loop).
    * Note: I have explicitly set `enumerable: false`. This is a default, therefore this property could be skipped also.
* By defining a non-enumerable property, we ensure that the `'fn'` property doesn't interfere with existing properties on the context object or affect its behavior during enumeration.
* The function is invoked using `context.fn(...args)`, where `context.fn` refers to the function bound to the context object.
* Then the result of the function invocation is returned by the `callPolyfill` method.

### Implementation:

<iframe src="https://leetcode.com/playground/duXsdRwZ/shared" frameBorder="0" width="100%" height="378" name="duXsdRwZ"></iframe>

### Complexity Analysis:

* **Time complexity:** $$O(1)$$
* **Space complexity:** $$O(1)$$

---

## Approach 2: Using Symbol

### Intuition:

* We can create a temporary property on the `context` object using a unique symbol. This allows us to temporarily `bind` the function to the `context` object. 
* By invoking the function using context `[symbol](...args)`, we ensure that the function is executed with the desired context and arguments. Finally, we remove the temporary property from the `context` object to clean up and avoid any unintended side effects.

This implementation provides an alternative approach to achieving the desired behavior of setting the this context and invoking the function, while also considering object integrity and avoiding conflicts with existing properties.

### Algorithm:

* We create a unique symbol using `Symbol()` and stored in the `uniqueSymbol` variable. Symbols are guaranteed to be unique and prevent potential clashes with other properties on the context object.
* The `uniqueSymbol` is used as a temporary property name on the `context` object to store the function. This allows us to `bind` the function to the `context` object without modifying the original object or creating conflicts with existing properties.
* The function is assigned to `context[uniqueSymbol]` by setting it as a property on the context object.
* The function is then invoked using `context[uniqueSymbol](...args)`. This ensures that the function is executed with the desired context and the provided arguments.
* After the function invocation, the temporary property `(context[uniqueSymbol])` is deleted from the context object to avoid any unintended side effects or memory leaks.
* The result of the function invocation is stored in the `result` variable.
* Then the result is returned by the `callPolyfill` method.

### Implementation:

<iframe src="https://leetcode.com/playground/Hq9cmhkU/shared" frameBorder="0" width="100%" height="361" name="Hq9cmhkU"></iframe>


### Complexity Analysis:

* **Time complexity:** $$O(1)$$
* **Space complexity:** $$O(n)$$, where `n` is the number of unique symbols created

---

## Approach 3: Using Bind

### Intuition:

* We can leverage the `bind` method to create a new function that has the desired `context` as its `this` value.
* The `bind` method is used to explicitly bind the `this` context, creating a new function that carries the binding information. The new function can then be immediately invoked with the provided arguments using the spread syntax `(...args)`.

### Implementation:
* The `bind` method is invoked on `this` (the function object) with the `context` as the argument. It creates a new function with the specified `context` as its `this` value.
* The returned value from `bind` is a new function with the `this` context set to `context`. This new function is immediately invoked with the spread syntax `(...args)`, which passes the provided `args` as arguments to the function.
* Then the result of the function invocation is returned by the `callPolyfill` method.

<iframe src="https://leetcode.com/playground/QC33r6NC/shared" frameBorder="0" width="100%" height="276" name="QC33r6NC"></iframe>


### Complexity Analysis:

* **Time complexity:** $$O(n)$$, where `n` is the number of arguments passed to the function
* **Space complexity:** $$O(1)$$

---

## Approach 4: Using apply

### Intuition:
* We can invoke `apply` with `this` as the function object and passing the desired `context` and `args` and thus we can achieve the goal of setting the `this` context and invoking the function accordingly.

This implementation provides a cleaner and more concise solution to the problem. It leverages the built-in `apply` method, which is specifically designed for invoking functions with a specified context and an array-like object of arguments.

### Algorithm:
* The `apply` method is invoked on `this`, which is the function object itself. It accepts two arguments:
  * The `context` argument, which is the object to be used as `this` within the function.
  * The `args` argument, which is an array-like object containing the additional arguments to be passed to the function.
* The `apply` method sets the `this` context of the function to the provided `context` and invokes the function with the args.
* Then the result of the function invocation is returned by the `callPolyfill` method.

### Implementation:


<iframe src="https://leetcode.com/playground/69fR4QUM/shared" frameBorder="0" width="100%" height="276" name="69fR4QUM"></iframe>


### Complexity Analysis:

* **Time complexity:** $$O(n)$$, where `n` is the number of arguments passed to the function
* **Space complexity:** $$O(1)$$

---

## Interview Tips:

* Explain the concept of context in JavaScript functions.
  * In JavaScript, the context of a function refers to the object on which the function is called or referenced. The context determines what this refers to inside the function and provides access to the properties and methods of the context object.

* Why would you want to change the context of a function using the callPolyfill method?
  * Changing the context of a function using callPolyfill allows you to explicitly specify this value inside the function. It is useful when you want to invoke a function within a different object's context and access its properties and methods.

* Why is it important to modify the Function.prototype carefully and with caution?
  * Modifying the Function.prototype should be done with caution because it affects all functions in the JavaScript environment. Careful consideration should be given to potential conflicts, unintended consequences, and the impact on other code in the application.

* Can you provide an example use case where the callPolyfill method would be beneficial?
  * One example use case is when working with object-oriented programming in JavaScript. You may have a method defined on a class that needs to be invoked with a specific instance as the context. The callPolyfill method can be used to achieve this by passing the instance as the first argument and any additional method arguments.

---