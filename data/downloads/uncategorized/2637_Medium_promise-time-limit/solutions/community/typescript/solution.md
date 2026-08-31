# Promise || Real Life Example || Dry Run || Usecase || O(1) || JS & TS || Beginner Friendly || Day12

**Author:** Cosmic_Phantom
**Votes:** 86
**Link:** [https://leetcode.com/problems/promise-time-limit/solutions/3529233/](https://leetcode.com/problems/promise-time-limit/solutions/3529233/)

---

#Note it will better if you read ***[this post](https://leetcode.com/problems/sleep/discuss/3525419/Promise-oror-Examples-oror-Dry-Run-oror-Usecase-oror-O(1)-oror-JS-and-TS-oror-Beginner-Friendly-oror-Day11)*** before reading this post as its a continuation type of post  
***
## Problem Summary:
* Given an `asynchronous` function fn and a time limit `t` in milliseconds, we need to create a new time-limited version of the input function. 
* The time-limited function should behave identically to the original function, except that if it takes longer than `t` milliseconds to fulfill, it should reject with the string` "Time Limit Exceeded"`.
***
## Intuition:
We can use a combination of `Promise`, `setTimeout`, and `async/await` to implement the time-limited function. By setting a timeout using `setTimeout`, we can enforce the time limit and reject the promise if it exceeds the specified duration.
***
## Approach:
* Create a wrapper function that takes the original function `fn` and the time limit `t` as parameters.
* Within the wrapper function, return an `async` function that accepts any number of arguments using the spread operator `...args`.
* Inside the `async` function, create a new `Promise` to handle the `asynchronous` execution.
* Use `setTimeout` to set a timer with the time limit `t`. If the timer expires before the promise is resolved, reject the `promise` with the string `"Time Limit Exceeded"`.
* Call the original function `fn` with the provided arguments `...args` and `await` its completion.
* If the function completes before the time limit, resolve the promise with the result.
* Return the promise from the `async` function.
***
## Concepts : 
### you can refer ***[this post](https://leetcode.com/problems/sleep/discuss/3525419/Promise-oror-Examples-oror-Dry-Run-oror-Usecase-oror-O(1)-oror-JS-and-TS-oror-Beginner-Friendly-oror-Day11)*** it has detailed explanation of these concepts
* Asynchronous functions
* Promises
* setTimeout
* async/await
***
## Solutions: 
**Javascript Solution:**
```
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
  return async function(...args) {
    return new Promise((delayresolve, reject) => {
      const timeoutId = setTimeout(() => {
        clearTimeout(timeoutId);
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((result) => {
          clearTimeout(timeoutId);
          delayresolve(result);
        })
        .catch((error) => {
          clearTimeout(timeoutId);
          reject(error);
        });
    });
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
```

**Typescript Solution:**
```
type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args: any[]) {
    return new Promise((delayresolve, reject) => {
      const timeoutId = setTimeout(() => {
        clearTimeout(timeoutId);
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((result) => {
          clearTimeout(timeoutId);
          delayresolve(result);
        })
        .catch((error) => {
          clearTimeout(timeoutId);
          reject(error);
        });
    });
  };
}
/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
```
***
**Time Complexity: O(fn)
Space Complexity: O(1)**
***
## Real life Example:
```
async function fetchData() {
  return new Promise((delayresolve) => {
    setTimeout(() => {
      delayresolve("Data fetched successfully!");
    }, 2000);
  });
}

const timeLimitedFetchData = timeLimit(fetchData, 1500);

timeLimitedFetchData().then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});
```
**Now Letsss discuss the flow of the code:** **Less go**
* We have an `asynchronous` function `fetchData` that simulates fetching data by returning a `promise` that `resolves` after a delay of `2000` milliseconds.
* We create a time-limited version of `fetchData` using `timeLimit` and provide the function and a time limit of `1500` milliseconds.
* We call the time-limited function `timeLimitedFetchData` without any arguments.
* Inside the time-limited function, a new `promise` is created to handle the `asynchronous` execution.
* A timer is set using `setTimeout` for `1500` milliseconds.
* The original `fetchData` function is called with no arguments and awaited for its completion.
* Since the original function takes `2000` milliseconds to complete, it exceeds the time limit of `1500` milliseconds.
* The timer expires, and the `promise` is rejected with the string `"Time Limit Exceeded"`.
* The rejection is caught in the catch block, and an error message is logged to the console. 
That's it you got it!!
***
