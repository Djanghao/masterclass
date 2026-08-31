# Official Solution

**Link:** [https://leetcode.com/problems/add-two-promises/solution/](https://leetcode.com/problems/add-two-promises/solution/)

---

[TOC]

## Overview:
The problem requires creating a new promise that resolves with the sum of two numbers obtained from two given promises, `promise1` and `promise2`.

> [This editorial will serve as an excellent prerequisite.](https://leetcode.com/problems/sleep/editorial/)

---

### Promises:
In Javascript promises represent the eventual completion (or failure) of an asynchronous operation and allow us to work with the results when they become available. They are a way to handle asynchronous code in a more organized and structured manner. Promises have three states: **`pending`**, **`fulfilled`**, or **`rejected`**.
1. **Pending:** The initial state of a promise. It represents that the asynchronous operation is still ongoing and hasn't completed yet.
2. **Fulfilled:** The state of a promise when the asynchronous operation is successfully completed. It means that the promised result or value is available.
3. **Rejected:** The state of a promise when the asynchronous operation encounters an error or fails. It means that the promised result cannot be obtained.
Promises provide methods like `.then()` and `.catch()` to handle the resolved values or errors.

Whenever we use promises we usually come accross `async/await` keywords. Let's discuss those keywords also:
The `async` and `await` keywords are used to simplify working with promises and make asynchronous code appear more like synchronous code.
1. **async:** `async` is used to define an asynchronous function. It ensures that the function always returns a promise. When the `async` keyword is used before a function declaration or function expression, it becomes an asynchronous function.
> Note: Non-promises returned from async functions are [automatically wrapped in promises.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#description)
2. **await:** `await` is used to pause the execution of an asynchronous function until a promise is resolved. It can only be used inside an `async` function. When `await` is used before a promise, it waits for the promise to be resolved or rejected. If resolved it proceeds to the next line of code and if the awaited promise is rejected, an exception is thrown.
Using `await` within an `async` function allows you to write asynchronous code in a more sequential and readable manner, without the need for explicit promise chaining using `.then()`.

When a scenerio arises where you need to perform multiple asynchronous operations concurrently and wait for all of them to complete before proceeding. This is where the `Promise.all()` method is used prominently. Let's deep dive into it.
* The `Promise.all()` method is used to handle multiple promises concurrently. It takes an array (or an iterable) of promises as input and returns a new promise that resolves when all the promises in the input array have resolved.
> Note: `Promise.all()` not necessarily only takes promises as input, it can also take just array of numbers and it'll resolve it - for example: 
```js
 await Promise.all([1,2,Promise.resolve(3), Promise.resolve(4)]).then((value) => {
    console.log(value)
  }, (error) => {
    console.log(error)
  })
```
* The `Promise.all()` method waits for all the promises to settle (either `fulfilled` or `rejected`).
* If all the promises are `fulfilled`, the returned promise is `fulfilled`, and the resolved values of the input promises are available as an array in the same order as the input promises.
* If any of the promises are `rejected`, the returned promise is `rejected` with the reason of the first `rejected` promise. For example the below code will resolve with 'error', even though 3 other items resolved correctly.
```js
await Promise.all([1, 2, Promise.resolve(3), Promise.reject('error')]).then(
  value => {
    console.log(value);
  },
  error => {
    console.log(error);
  }
);
```
* Using `Promise.all()` allows for efficient parallel execution of multiple asynchronous operations and enables us to work with the combined results once they are all available.
* For example when an application needs to fetch data from multiple APIs simultaneously, `Promise.all()` can be used to initiate all the requests in parallel and wait for all the responses to arrive. Once all the promises are fulfilled, the application can process the combined data.

---

## Approach 1: Using Promise.all

### Intuition:
We can use `Promise.all()` to create a new promise that resolves when both `promise1` and `promise2` are resolved.

### Algorithm:
* Inside the function, we use `Promise.all()` to create a new promise that resolves when both `promise1` and `promise2` are resolved. `Promise.all()` takes an array containing the promises as its argument.
* With `Promise.all()` we will use `await` keyword to pause the execution of the function until the promise returned by `Promise.all()` is resolved. It waits for both `promise1` and `promise2` to fulfill.
* Once the promise returned by `Promise.all()` is fulfilled, the resolved values of `promise1` and `promise2` are available in an array. Using destructuring assignment, the values are assigned to `res1` and `res2` variables, respectively.
* Finally, we return the sum of `res1` and `res2`. Also we can put this entire logic in try{} catch{} block.

### Implementation:


<iframe src="https://leetcode.com/playground/jMC3G7uo/shared" frameBorder="0" width="100%" height="293" name="jMC3G7uo"></iframe>


### Complexity Analysis:

The time complexity is determined based on the time of the promise that takes more time to resolve. That's because we have to wait for both of the promises to be fulfilled before returning the answer. Also, we don't need any extra space aside from the results, which should be returned and isn't counted in space complexity.

* **Time complexity:** $$O(max(promise1, promise2))$$

* **Space complexity:** $$O(1)$$

---

## Approach 2: Using Only Await

### Intuition:
The `addTwoPromises` function is defined as an async function, allowing us to use `await` inside it. The intuition behind this approach is to `await` the resolutions of `promise1` and `promise2` and then calculate the sum of their resolved values i.e., we can directly use `await` on the promises and return the sum.
> Note: Use of await directly on `promise1` and `promise2` is not as concurrent as using `Promise.all()`. As awaiting promises one after the other will result in a longer total time for resolution compared to awaiting them concurrently with `Promise.all()`.

### Algorithm:

* The function `addTwoPromises` is defined as an asynchronous function using the `async` keyword. This allows us to use `await` within the function to pause the execution until promises are resolved.
* Inside the function, the `await` keyword is used directly on `promise1` and `promise2`. This pauses the execution of the function until the promises are resolved and the values are available.
* Once the promises are resolved, we get their respective resolved values. Then the `await` keyword allows us to retrieve the resolved value of the promises.
* Now the resolved values of `promise1` and `promise2` are added together using the `+` operator.
* Finally, we can return a new promise that will be resolved with the sum of the resolved values of `promise1` and `promise2`.

### Implementation:


<iframe src="https://leetcode.com/playground/2bgPq3Bi/shared" frameBorder="0" width="100%" height="276" name="2bgPq3Bi"></iframe>


### Complexity Analysis:

* **Time complexity:** $$O(max(promise1, promise2))$$

* **Space complexity:** $$O(1)$$

---

## Approach 3: Using Promise.then()

### Intuition:
We can use `.then()` to chain promises together and perform the addition of their resolved values i.e., first we can resolve `promise1` and then `promise2`. 

### Algorithm:
* We use the `.then()` method on `promise1`. This allows us to chain the resolution of `promise2` after `promise1` is fulfilled.
* Within the `.then()` method's callback, the resolved value of `promise1` is represented as `val`. We will use another `.then()` method on `promise2` to access its resolved value, represented as `val2`.
* Inside the second `.then()` callback, the values of `val` and `val2` are added together using the `+` operator. We can also use `.catch()` for error handling if any of the promises are rejected.
* Finally, we return the result of the addition, which is implicitly wrapped in a promise due to the use of the `async` keyword.

### Implementation:


<iframe src="https://leetcode.com/playground/jkcJuaqP/shared" frameBorder="0" width="100%" height="276" name="jkcJuaqP"></iframe>


### Complexity Analysis:

* **Time complexity:** $$O(max(promise1, promise2))$$

* **Space complexity:** $$O(1)$$

---

## Approach 4: Count promises 

### Intuition:
We can handle the resolution of `promise1` and `promise2` in parallel and accumulate the results i.e., we can use a counter to keep track of the number of promises resolved, and once all promises are resolved, it resolves the new promise with the accumulated result.

### Algorithm:
* Create two variables, `count` and `res`, to keep track of the number of promises resolved and the accumulated result, respectively.
* A `forEach` loop to iterate over an array containing `promise1` and `promise2`.
* For each promise in the loop, an async function is defined to handle the resolution.
* Inside the async function, the await keyword is used to pause the execution until the promise is resolved.
* If the promise is resolved successfully, the resolved value is stored in `subRes`. The `res` variable is then updated by adding `subRes` to it, and the `count` variable is decremented by `1`.
* After updating the variables, we check if the `count` variable is equal to `0`, indicating that both promises have been resolved. If `count` is `0`, it means all promises are resolved, and the new promise is resolved with the accumulated result (`res`) using the resolve function.
* If any promise is rejected, an error is caught, and the new promise is immediately rejected by calling the reject function.

### Implementation:


<iframe src="https://leetcode.com/playground/jWxx3TCB/shared" frameBorder="0" width="100%" height="480" name="jWxx3TCB"></iframe>


### Complexity Analysis:

* **Time complexity:** $$O(promise1 + promise2)$$

* **Space complexity:** $$O(1)$$

---

## Interview Tips:

* What is the purpose of the `Promise.all()` method?
  * The `Promise.all()` method is used to handle multiple promises concurrently. It takes an array of promises as input and returns a new promise. This new promise resolves when all the promises in the input array have resolved. The resolved values of the promises are available in the `.then()` block as an array in the same order as the input promises.

* How do you handle errors in promises?
  * Errors in promises can be handled by using `try{} catch(err){} finally` block to the promise chain.

* What is the difference between synchronous and asynchronous operations?
  * Synchronous operations block the execution of the program until the operation is complete. They are executed one after the other in a sequential manner. Asynchronous operations, on the other hand, do not block the execution of the program. They allow the program to continue executing other tasks while waiting for the operation to complete. Asynchronous operations are typically used for tasks that may take longer to complete, such as network requests or file operations, to avoid blocking the main execution thread.

* What are the differences between callbacks and promises in JavaScript? When would you prefer using promises over callbacks? Also what is callback hell and how to alleviate it?
  * Callbacks are a traditional way to handle asynchronous operations in JavaScript. They are functions passed as arguments to other functions and get invoked once the asynchronous operation completes. Promises, on the other hand, are objects that represent the eventual completion (or failure) of an asynchronous operation. Promises provide more structured and readable code compared to callbacks. In general promises are generally preferred over callbacks when dealing with complex asynchronous operations, error handling, and code readability.
  * In callback hell, the code structure becomes deeply nested, with each callback being passed as an argument to another callback. This nesting can quickly become complex and make the code hard to follow, leading to issues such as code duplication, error handling problems, and difficulties in maintaining and debugging the code. To alleviate callback hell, several approaches can be used, such as using named functions, utilizing control flow libraries (e.g., async.js or Promises), or utilizing modern JavaScript features like async/await. These approaches help flatten the code structure and make it more readable and maintainable by avoiding excessive nesting of callbacks.

* Explain the purpose of the `.catch()` method in promises. How does it differ from the `.then()` method?
  * The `.catch()` method in promises is used for error handling. It allows you to specify a callback function that will be invoked when a promise is rejected or encounters an error during its execution while on the other side `.then()` is used to handle fulfilled promises and successful outcomes.

* What is the difference between `Promise.resolve()` and `Promise.reject()`?
  * **Promise.resolve():** It returns a promise that is resolved with a given value. If the provided value is already a promise, it is returned as is. If the value is not a promise, `Promise.resolve()` creates a new promise that is immediately resolved with the provided value. For example:
  * **Promise.reject():** It returns a promise that is rejected with a given reason or error. The provided reason or error is treated as the rejection reason for the promise. 
  * For example:
```js
const rejectedPromise = Promise.reject(new Error('Something went wrong'));
```
  * In general `Promise.resolve()` is often used when you want to create a promise that immediately resolves with a specific value while `Promise.reject()` is used when you want to create a promise that immediately rejects with a specific error or reason. 


---