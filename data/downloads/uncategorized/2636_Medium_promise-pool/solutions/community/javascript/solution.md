# Promises || Example || Dry Run || Usecase || O(fn) || JS & TS || Beginner Friendly || Day13

**Author:** Cosmic_Phantom
**Votes:** 30
**Link:** [https://leetcode.com/problems/promise-pool/solutions/3532745/](https://leetcode.com/problems/promise-pool/solutions/3532745/)

---

## Problem Summary:
* We need to implement the function `promisePool` that takes an array of `asynchronous functions` functions and a pool limit `n`. 
* Our main goal is to execute the functions in the array with a maximum concurrency of `n` and return a `promise` that resolves when all the input functions have resolved.
***
## Intuition:
* We need to execute `asynchronous` functions in a controlled manner, considering the pool limit. 
* Also we need to ensure that a maximum of `'n'` functions are executed simultaneously, and when any of the functions complete, a new function should be started if available.
***
## Example Dry Run:
Let's consider an example to illustrate the behavior of `promisePool`:
```
functions = [asyncFn1, asyncFn2, asyncFn3, asyncFn4, asyncFn5]
n = 2
```
```
Execute asyncFn1 and asyncFn2 concurrently.
When either asyncFn1 or asyncFn2 resolves, execute asyncFn3.
When either asyncFn1 or asyncFn2 resolves again, execute asyncFn4.
Finally, when either asyncFn1 or asyncFn2 resolves, execute asyncFn5.
```
***
## Approach:
* We initialize an empty `results` array to store the results of the executed functions and an empty `inProgress` array to track the promises currently in progress.
* We use a while loop to iterate through the `functions` array and start executing the functions with a maximum concurrency of `n`.
* Inside the loop, we check if the number of functions in progress is less than `n` and there are remaining functions to execute. If `true`, we execute the next function and add its promise to the `inProgress` array.
* We use the `then` method to capture the result of each promise and **store it in the corresponding index** of the `results` array. We also remove the completed promise from the `inProgress` array.
* After starting the execution of functions, we await the `Promise.race` of the `inProgress array`, which resolves when any of the promises in the array resolves.
* We **repeat the loop** until all functions have been executed and **all promises have resolved**.
* Finally, we return the `results` array containing the resolved values of all executed functions.
***
## Concepts:&:Usecase
**Asynchronous programming:**
* `Asynchronous` operations allow **non-blocking execution**, enabling other tasks to continue while waiting for an operation to complete.

**Promises and async/await:**
* `Promises` provide a way to handle `asynchronous` operations and their results. They represent the eventual completion or failure of an `asynchronous` operation and allow chaining multiple `asynchronous` operations together. 
* The `async/await` syntax simplifies working with promises, making asynchronous code appear more synchronous and easier to read.

**Concurrency control using pool limit:** 
* Controlling the `concurrency` ensures that only a specified number of functions execute simultaneously while others wait for their turn. 
* It is useful in scenarios where **resource limitations, such as network bandwidth or system load, need to be considered**.
***
## Solution:
**Javscript Solution:** 
```
/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
  const results = [];
  const inProgress = [];
  let i = 0;

  while (i < functions.length || inProgress.length > 0) {
    while (inProgress.length < n && i < functions.length) {
      const promise = functions[i]();
      const index = i;
      const resultPromise = promise.then((result) => {
        results[index] = result;
        inProgress.splice(inProgress.indexOf(resultPromise), 1);
      });
      inProgress.push(resultPromise);
      i++;
    }

    await Promise.race(inProgress);
  }

  return results;
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
```

**Typescript Solution:** 
```
type F = () => Promise<any>;

async function promisePool(functions: F[], n: number): Promise<any[]> {
  const results: any[] = [];
  const inProgress: Promise<any>[] = [];
  let i = 0;

  while (i < functions.length || inProgress.length > 0) {
    while (inProgress.length < n && i < functions.length) {
      const promise = functions[i]();
      const index = i;
      const resultPromise = promise.then((result) => {
        results[index] = result;
        inProgress.splice(inProgress.indexOf(resultPromise), 1);
      });
      inProgress.push(resultPromise);
      i++;
    }

    await Promise.race(inProgress);
  }

  return results;
}
/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
```
***
**Time Complexity:** `O(n + k), where n is the number of functions and k is the length of the longest running promise.`
**Space Complexity:** `O(n), where n is the pool limit.`
***
