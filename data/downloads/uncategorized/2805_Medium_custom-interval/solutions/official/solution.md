# Official Solution

**Link:** [https://leetcode.com/problems/custom-interval/solution/](https://leetcode.com/problems/custom-interval/solution/)

---

[TOC]

## Solution

--- 

### Overview

Our objective is to design two functions: `customInterval` and `customClearInterval`. These functions aim to mimic the behavior of JavaScript's native `setInterval` and `clearInterval` methods but with a modified timing mechanism.

### Use Cases of `setInterval`

1. **Continuous Data Polling**

   In web applications, it's common to periodically fetch data, such as checking for new messages or notifications. 

   > **Note:** While `setInterval` can be used to periodically send requests to an API endpoint and update the UI, for more efficient and real-time updates in production environments, technologies like WebSockets or Server-Sent Events (SSE) are preferable. Be aware that when a tab is not active (e.g., the user switches to a different tab), some browsers might throttle or even pause timers to conserve CPU and battery resources. The Page Visibility API can help detect when a tab becomes visible or hidden, allowing for adjustments to timers as needed.

    ```javascript
    let messageCount = 0;

    const fetchNewMessages = () => {
        // Assume this function sends an API request and updates the UI
        messageCount++;
        console.log(`You have ${messageCount} new messages!`);
    };

    const intervalID = setInterval(fetchNewMessages, 5000);  // Polls every 5 seconds
    ```

2. **Animations and Slideshows**

   Animations, especially slideshows or carousels, often require transitioning between frames or slides at regular intervals.

   > **Note:** While `setInterval` can be used, for smoother animations and better performance, especially in web browsers, it's advisable to use the `requestAnimationFrame` API instead.


3. **Background Jobs and Heartbeats**

   For long-running web applications, `setInterval` can be used to perform background tasks like saving drafts, sending heartbeats, or renewing tokens.

    ```javascript
    const saveDraft = () => {
        // Assume this function saves the current state as a draft
        console.log("Draft saved!");
    };

    const saveDraftInterval = setInterval(saveDraft, 60000);  // Saves draft every minute
    ```

Always remember to clear intervals using `clearInterval` when they are no longer needed to ensure resources are freed and unintended side effects are avoided.

### Approach 1: Recursive Execution with Time Adjustment

#### Intuition
The problem essentially requires us to mimic the behavior of the built-in `setInterval` with a dynamic adjustment to the execution interval. The interval of execution needs to be based on the formula `delay + period * count`. To achieve this, we employ a recursive approach where each scheduled function call, in turn, schedules the next one with an adjusted time delay.

#### Algorithm
1. **Initialization**:
    - Use a global map (`intervalMap`) to keep track of the timer IDs. This aids in managing and clearing the timer when required.
    - Use a global counter (`intervalIdCounter`) to assign a unique ID to each interval created. This ID will be returned to the user and will be used later to clear the interval. Note that in a Node.js environment, the `timerId` returned by `setTimeout` is an object, not a number. Hence, we use a custom counter to generate a unique numerical ID.

2. **Recursive Execution** (`dfs` function):
    - Schedule the function `fn` to be executed after a delay using `setTimeout`, where the delay is calculated based on the formula `delay + period * count`.
    - After executing `fn`, we recursively call the `dfs` function to schedule the next execution.
    - Increment the `count` to adjust the delay for the subsequent call.
    - Store the timer ID in `intervalMap` with the custom interval ID (`customId`) as the key. This ensures we always have a reference to the latest timer, which is crucial when we need to stop it later.

3. **Creating the Custom Interval** (`customInterval` function):
    - Initiate the process by calling the recursive function `dfs`.
    - Increment the global counter `intervalIdCounter` and return its value, providing the user with a unique ID for the custom interval.

4. **Clearing the Custom Interval** (`customClearInterval` function):
    - Use the provided `id` to retrieve the timer ID from `intervalMap`.
    - Call `clearTimeout` with the fetched timer ID to stop the interval.
    - Remove the corresponding entry from `intervalMap` to free up resources.


#### Implementations

##### Implementation 1

<iframe src="https://leetcode.com/playground/kRKXd4Wo/shared" frameBorder="0" width="100%" height="500" name="kRKXd4Wo"></iframe>

##### Implementation 2: Encapsulated and Production-Ready

For a more production-ready and encapsulated approach, we can bundle the custom interval logic inside a self-invoking function. This allows us to hide internal counter and map details from the global scope, exposing only the necessary interval functions to the user.

Note: Self-invoking functions are executed immediately after their creation which is also known as "Immediately Invoked Function Expression" or IIFE.

Syntax:
```javascript
(function() {
  // code to be executed immediately
})();
```
First, we declare a function then wrap that function in parentheses and turn it into an expression that can be immediately invoked. Following the function definition, there is a second pair of parentheses ( ). This set of parentheses immediately invokes the function. This setup helps to create a private scope for variables and functions, preventing them from interfering with the global scope.

<iframe src="https://leetcode.com/playground/7zGLMgw5/shared" frameBorder="0" width="100%" height="500" name="7zGLMgw5"></iframe>

#### Complexity Analysis

* **Time complexity**: The complexity for each call to `customInterval` is $O(N)$, where $N$ represents the number of recursive calls made (or intervals) until `customClearInterval` is called. This is due to the recursive nature of the `dfs` function, which sets up a new timer for each interval based on the `delay + period * count` formula.

* **Space complexity**: $O(N)$, where $N$ is the number of active timers you've set up. Each call to `customInterval` adds an entry to the `intervalMap`, leading to a linear space complexity with respect to the number of intervals.

## Interview Tips:

- **How does `setInterval` work in JavaScript?**
   - The `setInterval` function is a built-in method in JavaScript that repeatedly executes a specified function at fixed time intervals. It returns an interval ID that can be used with `clearInterval` to stop future executions.

- **Why would you want to create a custom version of a built-in function like `setInterval`?**
   - Crafting a custom version of a built-in function can serve various purposes:
      - Introducing additional features or custom behaviors tailored to specific use cases.
      - Optimizing performance for particular scenarios.
      - Enhancing the function to handle edge cases not covered by the original.

- **How would you handle multiple intervals using the same function?**
   - To manage multiple intervals, it's crucial to maintain a mapping between unique interval IDs and their corresponding timers. This approach ensures that even if multiple intervals use the same callback function, each interval can be managed and cleared independently.

- **Why might you choose a recursive approach for the custom interval function?**
   - A recursive approach is fitting for the custom interval function because it emulates the behavior of `setInterval`. With recursion, there's no need to know in advance how many times a function should run, as is required for traditional loops. Each execution schedules the next one, allowing for a dynamically adjusted and flexible repetition mechanism.

- **What considerations come into play when making a production-ready version of a function?**
   - When creating a production-ready function:
      - **Encapsulation**: Hide internal details and expose only the necessary functionality to prevent unintended misuse.
      - **Error Handling**: Ensure robust error handling mechanisms to deal with unexpected inputs or situations.
      - **Optimization**: Ensure the function is optimized for performance, especially if it's expected to handle large data or be called frequently.
      - **Test Coverage**: Write comprehensive tests to catch edge cases and ensure the function behaves as expected.
      - **Documentation**: Provide clear documentation on how to use the function, expected inputs, outputs, and any side effects.
      - **Compatibility**: Ensure the function is compatible with different environments or platforms, if applicable.

- **How does encapsulation benefit your custom function?**
   - Encapsulation ensures that the internal workings of the function are hidden, reducing the risk of unintended interference. It provides a clean and clear interface for users, promotes modular code, and makes maintenance and debugging easier.