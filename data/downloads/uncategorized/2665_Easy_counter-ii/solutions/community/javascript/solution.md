# Day3=O(1)>Solving it in 3 different ways and which one is the best way??

**Author:** Cosmic_Phantom
**Votes:** 406
**Link:** [https://leetcode.com/problems/counter-ii/solutions/3494650/](https://leetcode.com/problems/counter-ii/solutions/3494650/)

---

From the question we can decipher that we need to have three functions `increment(), decrement() and reset()`. Now let's think which one will be appropriate method to solve this question.
***
## 1. Using Traditional Function
* A **traditional function** is defined using the `function` keyword. It can be a **named function** or an **anonymous function** assigned to a variable. 
* In the following code we have created three functions  `increment()`, `decrement()` and `reset()` using the `function` keyword. Inside this function we need to do the appropriate operation that was instructed in the question i.e. for `increment()` we need to return the `currentvalue+1`, similarly in `decrement()` we need to return the `currentvalue-1` and in `reset()` we need to assign `originalvalue` to the `currentvalue`.
```
var createCounter = function(init) {
  let presentCount = init;

  function increment() {
    return ++presentCount;
  }

  function decrement() {
      return --presentCount;
  }

  function reset() {
      return (presentCount = init);
  }

  return { increment, decrement, reset };
};
```
**Time and Space: O(1)**
***
## 2. Using Arrow Function
* An **arrow function** is a shorter syntax for defining functions, introduced in ES6. 
* It uses the **=> syntax** instead of the function keyword, and has some differences in behavior compared to traditional functions, such as **inheriting** the `this` value from the **surrounding context**
* For better understanding please read this posts : **Arrow function* **[arr](https://leetcode.com/problems/create-hello-world-function/discuss/3486895/DAY(O(1))-Why-you-should-prefer-arrow-function-syntax!)**

```
var createCounter = function(init) {
    let presentCount = init
    return {
        increment:()=> ++presentCount,
        decrement:()=> --presentCount,
        reset:()=> presentCount = init,
    }
};
```
**Time and Space: O(1)**
***
## 3. Using Class
* A **class** is a template for creating objects with a set of properties and methods.
* In `ES6`, `classes` were introduced as syntactic sugar over the prototype-based inheritance model but shortly after that It **provided a way to support inheritance and can have static methods and properties, getters and setters, and more**. Thus they provided a way to write object-oriented code in a more concise and organized way.

* In the following example the `Couter` is the name of the class.
	*  The constructor method is a special method that is called when an **object is created based on the class**.
	*  It initializes the object with properties `init` and `presentCount`. The `increment()`, `decrement()`and `reset()` method are regular methods that can be **called on an instance** of the `Counter` class to get the output
	* To create an object based on a class we use the `new` operator i.e. we create an object called `createCounter` based on the `Counter` class, passing in the `init` value as **arguments to the constructor**.

```
class Counter {
  constructor(init) {
    this.init = init;
    this.presentCount = init;
  }

  increment() {
    this.presentCount += 1;
    return this.presentCount;
  }

  decrement() {
    this.presentCount -= 1;
    return this.presentCount;
  }

  reset() {
    this.presentCount = this.init;
    return this.presentCount;
  }
}

var createCounter = function(init) {
  return new Counter(init);
};
```
**Time and Space: O(1)**
***
## In conclusion which one is the better way??
* **Classes** are useful for creating objects with shared behavior.
*  **Traditional functions** are useful for reusable chunks of code
*   **Arrow functions** are useful for short, concise functions or when preserving the value of `this` is important.
* Thus, I believe that classes are the best way to implement this types of problems in real life as they give flexibility of scaling with the shared behaviour properties. 

***