# Official Solution

**Link:** [https://leetcode.com/problems/delay-the-resolution-of-each-promise/solution/](https://leetcode.com/problems/delay-the-resolution-of-each-promise/solution/)

---

[TOC]

## Solution

--- 

### Overview

The problem requires us to design a function, `delayAll`, that delays the resolution of each promise in a given array of functions by a specified number of milliseconds (`ms`).

- **Goal:**
    - For each function in the input array, delay its promise's resolution by `ms` milliseconds, and return a new array of these delayed functions.

- **Example:**
    - Given functions that resolve in 30 ms and a delay of 50 ms, the new promise should resolve in 80 ms.

For those new to JavaScript promises and looking for a deeper understanding, it's recommended to review this editorial: [Sleep Editorial on LeetCode](https://leetcode.com/problems/sleep/editorial/).

### Use Cases of `delayAll`

1. **Batch Processing with Delays**

   When dealing with a sequence of tasks or operations, introducing pacing through `delayAll` can ensure tasks are processed at a manageable rate, preventing potential system overloads.

   > **Note:** For optimal performance, especially with large numbers of tasks, it's advisable to combine `delayAll` with other optimization techniques.

    ```javascript
    const tasks = [
        () => new Promise((resolve) => setTimeout(() => {console.log("Task 1 completed"); resolve();}, 100)),
        () => new Promise((resolve) => setTimeout(() => {console.log("Task 2 completed"); resolve();}, 150))
    ];
    const delayedTasks = delayAll(tasks, 50);  // Adds an additional 50ms delay to each task
    ```

2. **Controlled API Requests**

   To avoid hitting rate limits or overwhelming a server, introducing a controlled delay between a series of API requests can be beneficial. `delayAll` can ensure requests are sent at a more controlled rate.

   > **Note:** Always be aware of the specific rate limits set by the API provider and consider implementing retry mechanisms for better resilience.

    ```javascript
    const apiRequests = [
        () => fetch('/endpoint1').then(response => response.json()),
        () => fetch('/endpoint2').then(response => response.json())
    ];
    const pacedRequests = delayAll(apiRequests, 200);  // Introduces a 200ms delay between requests
    ```

### Approach 1: Introducing Delays with Asynchronous Execution

#### Intuition
To introduce an additional delay to each promise's resolution, we must craft new promises that incorporate the desired delay. By using `setTimeout`, we can set up a delay before executing the original promise, effectively adding the required pause. The idea is to encapsulate the original promise within a new one, which only resolves after the specified delay, ensuring the original promise's behavior remains unchanged but deferred.

#### Algorithm
1. **Iterate Through Functions**:
    - Traverse the array of functions (`functions`). For each function, create a new function that returns a promise with an additional delay.

2. **Delayed Execution** (`newFuncWithPromise` function):
    - Create a new promise that:
        - Introduces a delay of `ms` milliseconds using `setTimeout`.
        - After the delay, it invokes the original function and waits for its resolution using `async/await`.
        - Once resolved, the result is forwarded. In case of an error, the error is caught and rejected.

3. **Populate New Functions Array**:
    - As each delayed function is generated, push it to the `newFunctions` array, ensuring the order is maintained.

4. **Return Delayed Functions**:
    - Once all functions have been processed, return the `newFunctions` array.

#### Implementations

##### Implementation 1: Using async/await

<iframe src="https://leetcode.com/playground/L792KNd2/shared" frameBorder="0" width="100%" height="500" name="L792KNd2"></iframe>

##### Implementation 2: Using .then() and .catch()

<iframe src="https://leetcode.com/playground/KZPWzpwF/shared" frameBorder="0" width="100%" height="497" name="KZPWzpwF"></iframe>

#### Complexity Analysis

* **Time complexity**: The primary operations in `delayAll` involve iterating through the array of functions and creating new promises with added delays. Given that there are $N$ functions in the `functions` array, the time complexity is $O(N)$. Note that this doesn't include the time each function takes to execute its specific task.

* **Space complexity**: The space complexity is also  $O(N)$. For each function in the input array, a new delayed function is created and added to the `newFunctions` array. The size of this resultant array is directly proportional to the size of the input array.

## Interview Tips:
- **What's the primary use of promises in JavaScript?**
    - Promises in JavaScript provide a way to handle asynchronous operations, allowing developers to write clean asynchronous code. They represent a value which might be available now, or in the future, or never. Promises can be in one of three states: pending, resolved (fulfilled), or rejected. They offer methods like `.then()` and `.catch()` to handle the result or error respectively.

- **Why would you want to introduce a delay in the resolution of promises?**
    - Introducing a delay can serve various purposes:
        - **Controlled pacing**: Especially when dealing with APIs or databases, introducing delays can prevent overwhelming a system or triggering rate limits.
        - **Testing**: Delays can be useful in testing scenarios to simulate real-world conditions or to test timeout behaviors.

- **How do `async/await` and promises relate?**
    - `async/await` is syntactic sugar over the `.then()` and `.catch()` methods of promises. It was introduced to simplify asynchronous code and make it resemble synchronous code. An `async` function always returns a promise, and using `await` within such a function makes the JavaScript runtime wait until the promise is settled (either fulfilled or rejected) before continuing.

- **Why might you opt for `.then()` and `.catch()` over `async/await` or vice versa?**
    - The choice often comes down to readability, the specific use case, and modern best practices:
        - **`.then()` and `.catch()`**: These methods are more explicit, allowing for clear chaining of asynchronous operations. They might be preferred in scenarios where multiple operations need to be chained or combined.
        - **`async/await`**: A more modern approach introduced in ES2017, `async/await` offers a synchronous-looking code style, significantly improving readability. It's especially useful when there's a need to use conditional statements or loops with asynchronous operations. Given its clarity and ease of use, `async/await` is generally recommended for most new development.

- **How would you ensure that promises execute in a specific order?**
    - To ensure promises execute in a specific order, you can chain them using `.then()`. If using `async/await`, writing asynchronous calls sequentially and using `await` for each one will ensure they execute in order. While `Promise.all()` allows multiple promises to be handled simultaneously, it doesn't guarantee the order of execution; it just ensures all promises have settled.

* **When to use `await Promise.all()` for parallel execution and when to use sequential `await`?**
    - When we need to fetch data from multiple API endpoints simultaneously and combine the results, we can use `Promise.all()`, similarly we can use it for querying a database for multiple records that aren't dependent on each other. As discussed in the use cases be mindful when making API requests in parallel, and respect the rate limits imposed by the API provider to avoid being blocked.
    - We can use **sequential `await`** in scenarios where we have a series of asynchronous tasks and the order of execution matters, i.e., one task depends on the result of the previous one. A good example can be in scenarios where we need to authenticate a user before authorizing them for specific actions, the order of execution is crucial. The system wouldn't want authorization checks to occur before the user is properly authenticated.

- **What are potential pitfalls when working with asynchronous JavaScript, and how would you handle them?**
    - **Error Handling**: Asynchronous code can lead to unhandled promise rejections. It's crucial to always have error handling mechanisms, like `.catch()` or `try/catch` with `async/await`.
    - **Callback Hell**: Nested callbacks can make code hard to read and maintain. This can be alleviated with promises or `async/await`.
    - **Race Conditions**: When multiple asynchronous operations affect shared resources, their order of completion can cause unexpected results. Solutions include using locking mechanisms or ensuring a specific order of execution.
    - **Memory Leaks**: Continuously creating promises (e.g., in a loop) without resolution can lead to memory leaks. It's essential to ensure promises resolve or reject and to clean up any resources they use.