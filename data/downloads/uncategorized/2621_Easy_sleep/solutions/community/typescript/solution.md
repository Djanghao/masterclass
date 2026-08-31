# Promise? || Examples || Dry Run || Usecase || O(1) || JS & TS || Beginner Friendly || Day11

**Author:** Cosmic_Phantom
**Votes:** 93
**Link:** [https://leetcode.com/problems/sleep/solutions/3525419/](https://leetcode.com/problems/sleep/solutions/3525419/)

---

## Problem summary:
We need to write an `asynchronous` function that sleeps for the given number of `milliseconds` and then resolves any `value`.
***
## Examples:
```
sleep(2000) -> waits for 2 seconds and then resolves
sleep(500) -> waits for 0.5 seconds and then resolves
```
***
## Approach:
To implement the `sleep` function, we can use the `setTimeout` function which waits for a given number of `milliseconds` and then **executes a callback function**. We can then wrap this logic in a `Promise` and use `async/await` to wait for the `Promise` to resolve.
***
## Concepts:
* **Asynchronous functions:** The question specifies that the `sleep` function should be an `asynchronous` function. In simple terms, `Asynchronous` functions allow code to execute non-blocking `I/O` operations and other time-consuming tasks without blocking the main thread.
* **Promises:** `Asynchronous operations` typically return a `Promise` object. `Promises` are a way of handling asynchronous operations and specifying what should happen when the operation completes (either successfully or with an error).
* **setTimeout:** The `setTimeout` function is a built-in function that can be used to schedule a function to run after a certain amount of time has elapsed. In our question we will use `setTimeout` to implement the `sleep` function.
* **Error handling:** `Asynchronous` operations can fail for various reasons **(e.g. network errors, invalid input)**. `Error handling` is important as its like a fallback mechanism if the code doesn't work.
* **Async/await:** `Async/await` is a syntactic feature that makes it easier to write `asynchronous` code that looks like `synchronous` code. It allows us to write code that `"waits"` for a `Promise` to resolve before continuing execution.
***
## Solutions: 
***
1. **Javascript Solution without using error handling and Async/await:** 
```
/**
 * @param {number} millis
 */
async function sleep(millis) {
  return new Promise(delayresolve => setTimeout(delayresolve, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
```

2. **Typescript Solution without using error handling and uses async/await:**
```
async function sleep(millis: number): Promise<void> {
    return new Promise<void>(delayresolve => {
        setTimeout(delayresolve, millis);
    });
}
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
```
***
3. **Javascript solution using error handling and async/await:**
```
/**
 * @param {number} millis
 */
async function sleep(millis) {
  return new Promise((delayresolve, reject) => {
    if (typeof millis !== 'number' || isNaN(millis)) {
      reject(new Error('Invalid argument. Expected a number.'));
    } else {
      setTimeout(delayresolve, millis);
    }
  });
}
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
```

4. **Typescript solution using error handling and async/await:**
```
async function sleep(millis: number): Promise<void> {
  return new Promise<void>((delayresolve, reject) => {
    if (typeof millis !== 'number' || isNaN(millis)) {
      reject(new Error('Invalid argument. Expected a number.'));
    } else {
      setTimeout(delayresolve, millis);
    }
  });
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
```
***
## Dry Run:
For dry run lets take the above solution as a reference and call the `delay` function with the required arguments:
```
function delay(value, millis) {
  return new Promise((delayresolve) => {
    setTimeout(() => delayresolve(value), millis);
  });
}

delay('hello', 1000).then((result) => console.log(result));
```
This creates a `promise` that resolves to the value `'hello'` after a delay of `1000` milliseconds (`1` second). The `.then()` method is used for handling the resolved value.

***
**Time Complexity: O(1)
Space Complexity: O(1)**
***
