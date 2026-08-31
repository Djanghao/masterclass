# Official Solution

**Link:** [https://leetcode.com/problems/parallel-execution-of-promises-for-individual-results-retrieval/solution/](https://leetcode.com/problems/parallel-execution-of-promises-for-individual-results-retrieval/solution/)

---

[TOC]

## Solution

--- 

### Overview

In this problem, you are tasked with writing a JavaScript function that implements parallel execution of promises, tracking each promise's result independently. The function will take an array of functions, where each function returns a promise, and return a promise that resolves to an array of objects. These objects represent the resolution or rejection of each promise, mirroring the input order.

To achieve this, you will need a solid understanding of JavaScript Promises, asynchronous behavior, and error handling. You may also need to handle edge cases for different promise states and how they impact the final returned promise.

For a deeper dive into the concept of Promises and their behavior in JavaScript, you can refer to the [Sleep Promise](https://leetcode.com/problems/sleep/editorial/) editorial. Once you have successfully completed and understood this problem, you may want to tackle other Promise-related challenges such as [Promise Time Limit](https://leetcode.com/problems/promise-time-limit/) and [Promise Pool](https://leetcode.com/problems/promise-pool/).

#### Use Cases of Promise.allSettled()

You might notice that in this problem, we're essentially developing our custom version of the built-in JavaScript function `Promise.allSettled()`. This function is typically used to handle multiple promises concurrently and collect their results independently.

1. **Handling Multiple Asynchronous Operations**

   The `Promise.allSettled()` implementation is extremely useful when dealing with multiple asynchronous operations which are independent of each other. In scenarios where multiple API calls are made, it becomes important to know the final state of each individual call, whether they fulfilled or rejected.

   > Note: While `Promise.all()` can be used for handling multiple promises, it fails if any promise rejects. Our problem solution provides an implementation similar to `Promise.allSettled()` ensuring that we have a complete record of all promises' results.

    ```javascript
    const urls = [
        'https://api.github.com/users/github',
        'https://api.github.com/users/microsoft'
    ];

    const apiCalls = urls.map(url => fetch(url));
    const promise = Promise.allSettled(apiCalls);
               
    promise.then(results => {
        results.forEach((result, i) => {
            if (result.status === 'fulfilled') {
                console.log(`Response from ${urls[i]}:`, result.value);
            } else {
                console.error(`Error from ${urls[i]}:`, result.reason);
            }
        });
    });
    ```

2. **Managing Data Retrieval from Multiple Services**

   In modern application development, it's common to interact with various third-party services. Each service interaction is independent and can succeed or fail without affecting others. Using `Promise.allSettled()` style behavior is beneficial in such scenarios as it allows the application to proceed with operations on successful data and handle the failed operations gracefully.

    ```javascript
    const services = [
        getUserProfile(),
        getUserPosts(),
        getUserFriends()
    ];
    
    const promise = Promise.allSettled(services);
               
    promise.then(results => {
        results.forEach((result, i) => {
            if (result.status === 'fulfilled') {
                console.log(`Data from service ${i+1}:`, result.value);
            } else {
                console.error(`Error from service ${i+1}:`, result.reason);
            }
        });
    });
    ```
   
---

### Approach 1: Recreating the Built-in Promise.allSettled() Method

#### Intuition
In this problem, we are tasked with implementing our own version of the built-in JavaScript method, `Promise.allSettled()`. This method is a popular tool in JavaScript programming when we need to wait for multiple promises to settle (either fulfill or reject). When dealing with a number of asynchronous operations, it allows for better error handling as it ensures that we get the result of all promises, whether they fulfilled or rejected.

Our custom implementation will aim to provide the same functionality, that is, it should take an iterable of Promise objects and return a promise that resolves after all the given promises have either fulfilled or rejected, with an array of objects that each describe the outcome of each promise.

#### Algorithm
1. If the input array is empty, return a promise that resolves immediately with an empty array. There are no promises to wait for.
2. Initialize a results array `res` of size equal to the input array and fill it with null. This array will hold the outcome of each promise.
3. Initialize a counter `settledCounter` to track the number of promises that have settled (either fulfilled or rejected).
4. Iterate over the input array of functions. For each function:
    - Try to execute the function. Remember that these functions return promises.
    - If the function execution is successful (i.e., the promise is fulfilled and it does not throw any error), add an object to the corresponding index in the `res` array with `status: 'fulfilled'` and the `value` being the result of the function execution.
    - If the function execution fails (i.e., the promise is rejected and it throws an error), add an object to the corresponding index in the `res` array with `status: 'rejected'` and the `reason` being the error that caused the failure.
    - After attempting to handle the function execution (whether it is successful or fails), increment the `settledCounter`.
    - If `settledCounter` equals the length of the input array, resolve the main promise with the `res` array. This means all functions have settled (either fulfilled or rejected), and we are ready to return the final results.


#### Implementation

#### Implementation 1: Promise with async/await

<iframe src="https://leetcode.com/playground/FWC2S7JN/shared" frameBorder="0" width="100%" height="500" name="FWC2S7JN"></iframe>

#### Implementation 2: Using then/catch

<iframe src="https://leetcode.com/playground/XXV5jVe5/shared" frameBorder="0" width="100%" height="500" name="XXV5jVe5"></iframe>

#### Implementation 3: Using `.then()` with fulfillment and rejection handlers

This implementation utilises the second parameter of the `.then()` function, which is a rejection handler. This handler is executed when the Promise rejects. This way, both the resolve and reject logic are present in the same `.then()` function, which makes the code more concise.

<iframe src="https://leetcode.com/playground/6gxaAzxU/shared" frameBorder="0" width="100%" height="500" name="6gxaAzxU"></iframe>


#### Complexity Analysis

Time complexity: $O(N)$, where $N$ is the number of promises. Each promise is handled individually and independently of the others. Thus, the time complexity is linear, directly proportional to the number of promises.

Space complexity: $O(N)$, where $N$ is the number of promises. We are storing the result (either the resolved value or the error) of each promise in the `res` array. This occurs regardless of whether the promises are fulfilled or rejected. Therefore, the space complexity is linear.

## Interview Tips:

* What does it mean for a promise to be settled?
    * A promise is said to be settled if it has either been fulfilled or rejected. It essentially means that the promise operation has completed, regardless of the outcome.

* Can you explain the difference between `Promise.all()` and `Promise.allSettled()`?
    * `Promise.all()` and `Promise.allSettled()` are methods that deal with multiple promises simultaneously. `Promise.all()` returns a single promise that fulfills when all of the promises passed as an iterable have been fulfilled or when the iterable contains no promises. However, if any promise is rejected, `Promise.all()` immediately rejects with the reason of the first promise that was rejected. On the other hand, `Promise.allSettled()` returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

* Can you explain why using `async/await` might be preferred over traditional promise callbacks like `.then` and `.catch`?
    * The use of `async/await` can lead to more readable and cleaner code as it allows you to write asynchronous code in a way that looks synchronous. This can make it easier to understand, especially for more complex operations. On the other hand, using traditional promise callbacks like `.then` and `.catch` can lead to callback hell if not managed properly, especially when dealing with multiple nested promises.

* Can you discuss error handling when dealing with promises?
    * Error handling is crucial when dealing with promises. In an `async/await` context, errors can be handled using `try/catch` blocks. If an error occurs in the `try` block, execution immediately switches to the `catch` block. When using `.then/.catch`, any promise rejection will be caught by the nearest `.catch` handler. It's important to have a `.catch` at the end of your promise chain to catch any errors that were not caught in previous `.catch` handlers.