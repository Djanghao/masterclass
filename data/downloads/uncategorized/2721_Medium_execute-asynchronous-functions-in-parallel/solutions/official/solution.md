# Official Solution

**Link:** [https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/solution/](https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/solution/)

---

[TOC]

## Solution

--- 

### Overview

In this problem, you are tasked with creating a JavaScript function named `promiseAll`, which simulates the behavior of JavaScript's built-in `Promise.all()` method without using it. The function takes an array of asynchronous functions as input, each returning a promise, and should return a new promise.

The returned promise resolves if and only if all the promises returned by the input functions resolve. In this case, the promise's resolved value should be an array containing the resolved values of all the promises in the same order as their corresponding functions in the input array. However, if any promise returned by an input function gets rejected, the returned promise should reject immediately, carrying the reason for the first promise rejection.

The problem description provides three key examples to illustrate the expected functionality. In the first example, there's a single function that resolves after a certain delay. The promise returned by our function should resolve with an array containing the value from this function. In the second example, one function rejects its promise before the other function has a chance to resolve. Consequently, the promise returned by our function should reject with the same reason as the first promise rejection. In the last example, all functions successfully resolve their promises, so the promise returned by our function should resolve with an array containing all resolved values, maintaining their original order.

Effectively solving this problem requires a good understanding of JavaScript promises and asynchronous programming. You should be familiar with how promises work, how to create new promises, and how to handle the resolution and rejection of promises.

For a comprehensive understanding of JavaScript's asynchronous programming, promises, async/await, and the event loop, we recommend checking out our [Sleep](https://leetcode.com/problems/sleep/editorial/) editorial. If you're new to JavaScript promises, you may also find the [MDN guide on using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) helpful.

#### Working with Promises in JavaScript

In our problem, we're dealing extensively with JavaScript Promises, a concept fundamental to asynchronous programming. A Promise in JavaScript represents a value that may not be immediately available but will be available in the future, or it will never be available due to an error. A Promise can be in one of three states: **Pending**, **Fulfilled**, or **Rejected**.

In the context of our problem, understanding these states is crucial. We're dealing with a series of functions that each return a promise. We always create a new promise, and the state of this new promise depends on the states of the promises in the input array. If all promises from the array are fulfilled, our new promise resolves with all their values. If any promise from the array is rejected, our new promise rejects with the reason of the first rejected promise.

To refresh your memory or for those who are new to JavaScript Promises, we recommend checking out the editorial [Add two promises](https://leetcode.com/problems/add-two-promises/editorial/), part of the 30-day JavaScript plan. This tutorial provides a comprehensive explanation of Promises, their states, and their use in asynchronous JavaScript programming.

#### Promise.all()

`Promise.all()` is a built-in JavaScript method that takes an iterable of promises and returns a new promise that only fulfills when all the promises in the iterable have been fulfilled, or rejects as soon as one of the promises in the iterable rejects. The value of the `Promise.all()` promise is an array of the fulfilled values of the promises in the iterable, in the same order as the promises in the iterable.

```javascript
let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, "foo"]
});

```

As you can see, `Promise.all()` is perfect when you want to run multiple promises in parallel and wait for all of them to finish. It's a great way to group promises together and only deal with their results when all of them are ready.

However, the problem at hand asks to solve it without using `Promise.all()`. This pushes us to understand the inner workings of `Promise.all()` and emulate its behavior by manually handling promises, monitoring their state, and resolving or rejecting the final promise accordingly.

It's also worth mentioning that there is a potential pitfall with `Promise.all()` to be aware of: if any of the promises passed to it reject, `Promise.all()` will immediately reject with that reason, discarding all the other promises, even if they were about to fulfill. In other words, it's an "all or nothing" approach. This behavior is, in fact, what our problem expects us to emulate. For more detailed understanding, you can refer to the [MDN documentation on Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).

#### Use Cases of Promise.all() in JavaScript
1. Aggregating API Data

In a real-world application, you might need to fetch data from several different API endpoints before you can render a page or calculate some result. Rather than waiting for each request to complete before starting the next, `Promise.all()` allows you to make all the requests at once and then wait for all of them to complete.

```javascript
let urls = [
  'https://api.github.com/users/github',
  'https://api.github.com/users/microsoft',
  'https://api.github.com/users/apple'
];

Promise.all(urls.map(url =>
        fetch(url).then(user => user.json())
)).then(users => {
  console.log(users.length); // 3
  console.log(users[0]); // {login: "github", ...}
});

```

In this example, we use `Promise.all()` to fetch user data from multiple GitHub accounts. This speeds up the data fetching process as all requests are made concurrently.

2. Database Transactions

In a database operation, you may need to perform multiple actions that should either all succeed or all fail. `Promise.all()` allows you to model this as a single promise that either fulfills when all the actions succeed or rejects as soon as one action fails.

```javascript
let transaction = [
  UserModel.create({ name: 'Alice' }),
  AccountModel.create({ userId: 'Alice', balance: 100 })
];

Promise.all(transaction)
  .then(() => console.log('Transaction successful'))
  .catch(() => console.log('Transaction failed'));
```

In this example, we use `Promise.all()` to perform a transaction that involves creating a user and creating an account for the user. If any of these operations fail, `Promise.all()` will immediately reject, allowing us to easily roll back the transaction.


3. Running Tasks with Interdependencies

There may be scenarios where you have multiple async tasks that depend on each other. `Promise.all()` can be handy in such situations. You can start all tasks at once and then use the results array to access the results of each task in the correct order.

```javascript
let task1 = fetch('/api/task1');
let task2 = fetch('/api/task2');

Promise.all([task1, task2])
        .then(results => {
          let result1 = results[0];
          let result2 = results[1];

          // do something with the results
        });
```

In this example, two network requests are made simultaneously using fetch. Once both complete, `Promise.all()` resolves with an array containing the results of both tasks in the order they were added. This can be very useful in situations where tasks have interdependencies, but can still be run concurrently.

---

### Approach 1: Emulate the behavior of Promise.all()

#### Intuition
The aim is to replicate the functionality of JavaScript's built-in `Promise.all()` method. Specifically, we need to manage an array of promise-returning functions and return a promise that resolves to an array of results, retaining the order of the original array. We will handle the resolutions of the promises ourselves, using either the modern `async/await` syntax or the classic `then/catch` syntax.

#### Algorithm
1. Return a new promise from the `promiseAll` function.
2. If the input array is empty, immediately resolve it with an empty array and return.
3. Initialize an array `res` to hold the results, initially filled with `null`.
4. Initialize a `resolvedCount` variable to track the number of promises that have been resolved.
5. Iterate over the array of promise-returning functions. For each promise-returning function:
  * In the `async/await` version, await the promise. Upon resolution, place the result in the corresponding position in the `res` array and increment the `resolvedCount`. If an error is thrown, immediately reject the promise with the error.
  * In the `then/catch` version, attach a then clause and a catch clause. Upon resolution, the then clause places the result in the `res` array and increments `resolvedCount`. The catch clause rejects the promise with the error.

If all promises have resolved (i.e., `resolvedCount` equals the length of the function array), it resolves the `promiseAll()` promise with the `res` array.

The main difference between the `async/await` and `then/catch` versions lies in the syntax and the way the promises are awaited/handled, but the overall approach remains the same. Both implementations ensure that all promises are started concurrently (as opposed to sequentially), and the returned promise resolves with an array of their results, maintaining the original order.

#### Implementation

##### Implementation 1: Using async/await Syntax

<iframe src="https://leetcode.com/playground/WP7PrRCX/shared" frameBorder="0" width="100%" height="497" name="WP7PrRCX"></iframe>

This code uses the `async/await syntax`, which is more modern and often easier to read than traditional promise syntax. It initializes an array of `null` values of the same length as the input array. It then iterates over the input array with `forEach`, running each function and replacing the corresponding `null` value in the results array with the function's return value once it resolves. If all functions resolve successfully, the promise returned by `promiseAll()` resolves with the results array. If any function rejects, the promise returned by `promiseAll()` immediately rejects with the reason provided by the first function that rejected.

##### Implementation 2: Using then/catch Syntax

<iframe src="https://leetcode.com/playground/3v2kRkwW/shared" frameBorder="0" width="100%" height="480" name="3v2kRkwW"></iframe>

This code is very similar to the first implementation, but uses traditional promise syntax with `then` and `catch` instead of `async/await`. Each function in the input array is run, and its `then` method is called to handle its resolution or its catch method to handle its rejection. If all functions resolve successfully, the promise returned by `promiseAll()` resolves with the results array. If any function rejects, the promise returned by `promiseAll()` immediately rejects with the reason provided by the first function that rejected.

#### Complexity Analysis

Time complexity: $O(N)$, where $N$ is the number of functions passed into `promiseAll()`. This is because `promiseAll()` is essentially waiting for all $N$ promises to resolve or reject, so the time complexity is linear in the number of promises. Please note that this doesn't account for the time complexity of the individual functions being run as promises - it focuses on the operation of `promiseAll()` itself.

Space complexity: $O(N)$, where $N$ is the number of functions passed into `promiseAll()`. The space is primarily used to store the promise results. Just like the time complexity, the space complexity scales linearly with the number of promises.

## Interview Tips:

* What does `Promise.all()` do, and how does it work?
    * `Promise.all()` is a utility function in JavaScript that aggregates multiple promises into a single promise that resolves when all of the input promises have resolved, or rejects as soon as any one of the input promises rejects. It's often used when multiple asynchronous operations need to be performed concurrently, and further computation depends on the completion of all of these operations.

* What happens if one of the promises passed into `Promise.all()` rejects?
    * If any of the promises passed into `Promise.all()` rejects, the promise returned by `Promise.all()` immediately rejects with the reason of the first promise that rejected. This behavior is sometimes called "fail-fast".

* How can you handle individual promise rejections in `Promise.all()`?
    * To handle individual promise rejections in `Promise.all()`, you could catch errors in individual promises and transform them into a resolution with an error value. This allows `Promise.all()` to always resolve, and error handling can then be performed on the resulting array of values. However, starting with ECMAScript 2020, a better alternative would be to use `Promise.allSettled()`.

* What is the difference between `Promise.all()` and `Promise.allSettled()`?
    * The `Promise.allSettled()` method is similar to `Promise.all()`, but with a key difference. While `Promise.all()` rejects as soon as one of the promises rejects, `Promise.allSettled()` always resolves after all the promises have settled, i.e., either fulfilled or rejected. The resolved value of `Promise.allSettled()` is an array of objects that each describe the outcome of each promise.