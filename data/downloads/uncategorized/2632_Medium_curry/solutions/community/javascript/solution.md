# Currying? || Use Case || Dry Run || Beginner Friendly || O(fn) || JS & TS || Day10

**Author:** Cosmic_Phantom
**Votes:** 48
**Link:** [https://leetcode.com/problems/curry/solutions/3522579/](https://leetcode.com/problems/curry/solutions/3522579/)

---

# What is Currying?
* **Currying** is transforming a function that **takes multiple argument**s into a sequence of functions that **each take a single argument**.
* It allows for partial application of functions, meaning some of the **arguments can be supplied in advance**, leaving the rest to be supplied later.
* **Now Imagine**, You have a toy box with many different toys in it. You can take out one toy at a time and play with it, or you can take out multiple toys at once and play with them together.
* Currying is like **taking out one toy at a time**. You can call a function and **give it one number or one string at a time** instead of giving it all the numbers or strings at once.
* **For example**, if you have a function that adds two numbers, instead of giving it both numbers at once, you can **give it the first numbe**r and it will **give you back another function** that's waiting for the **second number**. Then you give it the second number and it will give you back the **result of adding the two numbers together**. 
* It's like taking out one toy (or one number) at a time.
***
## Problem Summary: 
We need to create a `curried` version of a given function that accepts fewer or equal parameters than the original function and returns either another `curried` function or the same value as the original function.
***
## **Approach:** 
* Create a function that accepts the `original` function as its **argument**.
* Define an **inner function** that will be returned by the **outer function**. This **inner function** will accept the arguments that will be used to call the **original function**.
* Inside the **inner function**, check if the number of arguments provided is less than the number of arguments required by the original function.
	*  If so, return a new `curried function` that will accept the **remaining arguments**.
* If the number of arguments provided is **equal to or greater than the number** required by the original function, **call the original function** with the provided arguments.
* Return the result of the original function call.
***
### Javascript Solution: 
```
/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
 return function curried(...args) {
    if (args.length < fn.length) {
      return function(...args2) {
        return curried(...args, ...args2);
      }
    }
    return fn(...args);
  };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */

```
### Typescript Solution: 
```
function curry(fn: Function): Function {
  return function curried(...args: any[]) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...innerArgs: any[]) {
      return curried.apply(this, args.concat(innerArgs));
    };
  };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
```
***
**Time Complexity: O(n)
Space Complexity: O(n)**
***
## Use Case:
* Creating **reusable functions** with default configurations or optional arguments
* Simplifying the process of **applying functions with multiple arguments**
* **Partial function application:** Creating new functions that are specific to a certain subset of the original function's arguments
* **Memoization**
***
