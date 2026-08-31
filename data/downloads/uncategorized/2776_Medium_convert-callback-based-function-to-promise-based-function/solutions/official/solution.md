# Official Solution

**Link:** [https://leetcode.com/problems/convert-callback-based-function-to-promise-based-function/solution/](https://leetcode.com/problems/convert-callback-based-function-to-promise-based-function/solution/)

---

[TOC]

## Solution

---

### Overview

The problem involves designing a function named `promisify`, which converts a callback-based function into a promise-based function.

- **Goal:**
    - Given a function `fn` that accepts a callback as its first argument, and possibly additional arguments, the `promisify` function should return a new function. This new function, when invoked, should return a promise. The promise should resolve with the result when the original function's callback is called with a successful response, and reject when the callback is called with an error.

- **Key Insight:**
    - It's imperative to closely observe and understand what the callback function does. Our solution hinges on recreating that function, allowing us to intercept it and inject our promise's resolve and reject mechanisms.

- **Examples:**
    1. For a function `fn` defined as:
    ```javascript
    fn = (callback, a, b, c) => {
        callback(a * b * c);
    }
    ```
  and when `fn` is called with arguments `[1, 2, 3]`, the promise should resolve with a value of `6`.

    2. For another function `fn` defined as:
    ```javascript
    fn = (callback, a, b, c) => {
        callback(a * b * c, "Promise Rejected");
    }
    ```
  and when `fn` is called with arguments `[4, 5, 6]`, the promise should be rejected with the error message `"Promise Rejected"`.

For a deeper understanding of promises in particular, it's recommended to review this editorial: [Sleep Editorial](https://leetcode.com/problems/sleep/editorial/). Other Promise-related problems, such as [Promise Time Limit](https://leetcode.com/problems/promise-time-limit/), [Promise Pool](https://leetcode.com/problems/promise-pool/), and [Add Two Promises](https://leetcode.com/problems/add-two-promises/) may be of interest if you need additional practice with promises.

### Use Cases of `promisify`

1. **Transitioning from Callback to Promise-Based APIs**

   As the JavaScript ecosystem has evolved, promises have become a more preferred way to handle asynchronous operations over traditional callbacks. Using `promisify`, developers can smoothly transition legacy code or third-party libraries that use callbacks to a more modern promise-based approach without having to rewrite the entire logic.

   > **Note:** This transition not only improves code readability but also allows for better error handling and chaining of asynchronous operations.

    ```javascript
    function legacyFunction(callback, data) {
        // Simulated asynchronous operation
        setTimeout(() => callback(data), 100);
    }

    const promiseFunction = promisify(legacyFunction);
    promiseFunction("Hello World").then(console.log);  // Outputs: "Hello World"
    ```

2. **Interacting with Node.js Core Modules**

   Many Node.js core modules, like the `fs` (File System) module, primarily use callback-based APIs. `promisify` can be a game-changer in converting these callback-based functions to promise-based ones, allowing for a cleaner and more intuitive async/await syntax.

   > **Note:** While newer versions of Node.js have started introducing promise-based versions for some modules, there's still a vast amount of callback-based APIs.

    ```javascript
    const fs = require('fs');
    const promisifiedReadFile = promisify(fs.readFile);

    promisifiedReadFile('path/to/file.txt', 'utf8').then(data => {
        console.log(data);
    });
    ```

3. **Improving Error Handling**

   Callback-based functions usually handle errors by passing them as the first argument to the callback. With promises, errors can be caught more systematically using `.catch()` or `try/catch` with async/await, providing a clearer structure for error management.

   > **Note:** This systematic approach to error handling prevents "callback hell" scenarios, where nested callbacks make it challenging to manage and propagate errors effectively.

    ```javascript
    function mightFail(callback) {
        const error = new Error("Something went wrong");
        callback(undefined, error);
    }

    const promiseMightFail = promisify(mightFail);
    promiseMightFail().catch(err => {
        console.error("Caught error:", err.message);
    });
    ```

### Approach 1: Transforming Callbacks to Promises

#### Intuition
The essence of the `promisify` function lies in its ability to "hijack" or "intercept" the callback mechanism of the original function. The goal is to inject our own callback in place of the expected one. This custom callback, when invoked, would use the `resolve` and `reject` functionalities of promises, enabling us to transform the callback-based asynchronous operation into a promise-based one. In essence, we're wrapping the callback behavior within a promise, and using the callback's outcomes (be it successful completion or error) to dictate the behavior of this promise.

#### Algorithm

1. **Wrap Original Function with Promise**:
    - When the returned function of `promisify` is called, it should immediately return a new promise. The resolution or rejection of this promise is governed by the callback function within the original `fn`.

2. **Define the Custom Callback** (`callback` function):
    - Design a custom callback function that receives two arguments: `result` and `error`. The order in which these arguments are provided is crucial, as the first argument represents the successful result, while the second indicates an error.
        - If `error` is provided, it indicates a failure, and the promise should be rejected with this error.
        - Otherwise, the promise should be resolved with the `result`.

3. **Invoke the Original Function**:
    - Call the original `fn` with the custom-designed callback and any additional arguments. This ensures that the original functionality of `fn` is preserved, but its outcome (success or error) is now channeled through the promise mechanism.

#### Implementations

##### Implementation 1

<iframe src="https://leetcode.com/playground/jNikNcsa/shared" frameBorder="0" width="100%" height="497" name="jNikNcsa"></iframe>

##### Implementation 2: Compact Promisify

This version provides a concise implementation of the one above, designed especially for developers well-versed in ES6+ features who appreciate succinctness.

<iframe src="https://leetcode.com/playground/BGVPtJVh/shared" frameBorder="0" width="100%" height="140" name="BGVPtJVh"></iframe>

#### Complexity Analysis

* **Time complexity**: The `promisify` function's primary task is to create and return a new function that wraps the original function inside a promise. The creation of this wrapping function and promise is constant time, making the time complexity $O(1)$. However, the actual time complexity when calling the resulting promise-based function would depend on the original function `fn` being wrapped.

* **Space complexity**: The space overhead introduced by `promisify` is constant since it's only creating a new function and promise. Hence, the space complexity is $O(1)$. Again, the actual space usage when executing the promise-based function would be determined by the original function `fn` and any additional data structures or recursive calls it might utilize.

## Interview Tips:

- **Why would one need to convert callback-based functions to promises?**
    - Callbacks were traditionally used in JavaScript for handling asynchronous operations. However, as applications grew complex, the infamous "Callback Hell" or "Pyramid of Doom" problem emerged due to deeply nested callbacks. Promises offer a cleaner way to handle asynchronous operations, providing better error handling, improved readability, and more straightforward chaining of asynchronous operations.

- **How does `promisify` address the callback vs. promise paradigm?**
    - The `promisify` function serves as a bridge between the older callback-based approach and the modern promise-based paradigm. By wrapping a callback-based function within a promise, `promisify` allows developers to integrate older callback-based APIs or libraries into modern asynchronous workflows seamlessly.

- **Are there situations where you might prefer callbacks over promises or vice versa?**
    - **Callbacks**: Could be preferred for simpler tasks or when working with older libraries/APIs that don't support promises. They offer more direct control over asynchronous flow but can lead to more complex and less readable code structures when operations are deeply nested.
    - **Promises**: Generally preferred for modern development due to their cleaner syntax, better error handling, and ease of chaining asynchronous operations. They are especially powerful when combined with `async/await`, providing a near-synchronous code style.

- **How does `async/await` play into the `promisify` utility?**
    - Once a function is transformed using `promisify`, it returns a promise. This means the resulting function can be used with `async/await`, further simplifying asynchronous operations. The `promisify` utility, in essence, paves the way for integrating callback-based functions into `async/await` workflows.

- **How would you handle functions with multiple callback arguments in `promisify`?**
    - The provided `promisify` function assumes a specific format for the callback (first argument for data, second for errors). If a function uses a different callback format or has multiple callbacks, the `promisify` function would need to be adapted. Recognizing and handling different callback signatures is a challenge and might require custom implementations of `promisify` for specific use cases.

- **How does the `promisify` utility handle the 'this' keyword?**
    - In the provided `promisify` implementation, while the traditional `function` keyword was used, the context in which the wrapped function (`fn`) is called is within the Promise's executor function. Therefore, any `this` value that `fn` might have relied on from its original context will not be preserved. If the original function being promisified relies on a specific `this` context, then you'd need to ensure that context is explicitly set when the function is called through the `promisify` utility. This can be achieved using methods like `.call()` or `.apply()` to ensure the correct `this` binding. If you're looking to delve deeper into the intricacies of the `this` keyword, it's highly recommended to review the editorial on [Array Prototype Last Editorial](https://leetcode.com/problems/array-prototype-last/editorial/). It provides comprehensive insights into understanding and manipulating the context in JavaScript functions.

- **How would you modify `promisify` to handle Node.js style error-first callbacks?**
    - Node.js often uses an error-first callback style, where the first argument to the callback is an error object, and the subsequent arguments represent results. The current implementation of `promisify` assumes a result-first style. To adapt it for error-first style, you'd simply need to swap the order in which the `data` and `err` arguments are handled within the custom callback.

- **Why are error-first callbacks prevalent in Node.js?**
    - The error-first callback pattern, also known as "Nodeback", ensures that errors are always processed first and are not overlooked. By forcing developers to handle errors as the first argument, it makes error handling more explicit and reduces the chance of silently failing or unhandled errors.