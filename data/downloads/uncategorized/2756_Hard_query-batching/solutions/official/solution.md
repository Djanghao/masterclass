# Official Solution

**Link:** [https://leetcode.com/problems/query-batching/solution/](https://leetcode.com/problems/query-batching/solution/)

---

[TOC]

## Solution

--- 

### Overview

The problem requires us to design a system that optimizes query requests by grouping them together into a single consolidated request. This optimization is achieved through a class, `QueryBatcher`, designed to manage these queries.

- **Goal:**
    - Build a `QueryBatcher` class that can receive individual query requests, batch them according to a throttle time, and then invoke the provided `queryMultiple` function with these batched keys.

- **Key Behavior:**
    - On the initial call to `getValue`, `queryMultiple` is invoked immediately with that key.
    - Any subsequent calls to `getValue` within the throttle period are stashed and batched together.
    - Once the throttle time elapses, all stashed keys are processed together in a batch.

- **Example:**
    - If three separate calls to `getValue` are made within a throttle time of `100ms`, the first call immediately invokes `queryMultiple`, while the next two are batched together and processed after the throttle period.

For those aiming to understand the intricacies of time-based operations in JavaScript, it's recommended to review the following problems and their respective editorials:

- [Cache with Time Limit](https://leetcode.com/problems/cache-with-time-limit/)
- [Debounce](https://leetcode.com/problems/debounce/)
- [Throttle](https://leetcode.com/problems/throttle/)

### Use Cases of `QueryBatcher`

1. **Optimized Data Retrieval in Applications**

   When building applications that rely on multiple data points, it's common to initiate several small query requests. Using `QueryBatcher`, these requests can be optimized by grouping them, reducing the overhead and improving the application's performance.

    ```javascript
    const dataKeys = ['userProfile', 'userSettings', 'userNotifications'];
    const batcher = new QueryBatcher(queryFunction, 50);
    dataKeys.forEach(key => batcher.getValue(key).then(console.log)); // The last two keys might be batched together based on timings
    ```

2. **Load Management in Backend Systems**

   Backend systems often deal with burst traffic, leading to spikes in query requests. By implementing a query batcher mechanism, it's possible to distribute the load more evenly over time, ensuring system stability and preventing potential overloads.

   > **Note:** When implementing `QueryBatcher` in backend systems, always consider other factors like database locks, concurrent writes, and transactional integrity.

    ```javascript
    const incomingRequests = ['queryA', 'queryB', 'queryC'];
    const batcher = new QueryBatcher(databaseQueryFunction, 100);
    incomingRequests.forEach(req => batcher.getValue(req).then(console.log)); // Depending on the throttle time, some queries may be batched
    ```

### Approach 1: Batching Queries with Throttle Time

#### Intuition
The core challenge of this problem lies in optimizing query processing by intelligently grouping them based on a predefined time window (`t`). Instead of treating each query as an isolated request, we can batch them and process multiple queries that fall within the same window as a single request. To achieve this:
- **Promises** play a crucial role. They allow us to control the flow of asynchronous operations, hold off the resolution of certain queries until they're batched, and ensure that each query ultimately gets its result.
- **setTimeout** is another vital tool. It provides us with the ability to introduce deliberate delays in our code, simulating the throttle time. By combining this with our promise structure, we can create a mechanism that waits for the throttle time to batch queries and then processes them.
- The challenge is also to differentiate between a query that should be executed immediately versus one that should be batched. This differentiation is achieved through state management and tracking if we're currently within a throttle time or not.

#### Algorithm
1. **Initialize State**:
    - When the `QueryBatcher` is instantiated, initialize the necessary properties like `queryMultiple`, `t`, `isAvailable`, and the `stashed` array. The `stashed` array is used to keep track of queries that come in during the throttle time.

2. **Handle New Query** (`getValue` function):
    - On invoking `getValue`, check if the batcher is available (i.e., not in a throttle period).
        - If available, call the `queryMultiple` function immediately for the provided key and set the batcher to unavailable.
        - If not available, store the key in the `stashed` array for later processing.

3. **Cooldown and Batch Processing** (`cooldown` function):
    - Start the cooldown period (throttle time).
    - After the cooldown, check if there are stashed keys.
        - If there are, process them in a batch by calling `queryMultiple` with all the stashed keys.
        - Clear the stashed keys and start another cooldown period for the next batch.
    - If no stashed keys are found, set the batcher back to available.

4. **Return Results**:
    - Once the results for a query or batch of queries are available, return them to the respective callers using the stored `resolve` functions.

#### Implementations

##### Implementation 1: Using Promises and Recursion

<iframe src="https://leetcode.com/playground/8qmNwhBW/shared" frameBorder="0" width="100%" height="500" name="8qmNwhBW"></iframe>

#### Complexity Analysis

* **Time complexity**: The primary operations in `QueryBatcher` revolve around handling queries and processing them either immediately or after a delay. Due to the batching mechanism, multiple `getValue` calls can result in a single `queryMultiple` call. In the worst case, where maximum batching occurs, for $N$ keys, there might be far fewer calls to `queryMultiple` than $N$. However, the operations to manage and process the batches, combined with the operations to manage the stashed queries, still give a time complexity of $O(N)$.

* **Space complexity**: The `QueryBatcher` class primarily uses the `stashed` array to temporarily store queries that arrive during a cooldown. In the worst case, if all queries arrive during a cooldown, the `stashed` array would store all $N$ queries, leading to a space complexity of $O(N)$. Apart from this, there are constant space overheads for variables like `isAvailable`, `t`, and so on, but these do not scale with the input size.

## Interview Tips:

<details><summary><b>Why batch queries instead of sending them immediately?</b></summary>
<ul>
    <li>Batching can be useful to reduce the number of requests sent to a server, especially when there's a known rate limit or when trying to optimize network usage. By accumulating multiple queries into one request, we can reduce overhead and make more efficient use of available resources.</li>
</ul>
</details>

<details><summary><b>How do `setTimeout` and promises interact in JavaScript?</b></summary>
<ul>
    <li> `setTimeout` is a way to execute a piece of code after a delay. When used with promises, it can introduce a delay before a promise is resolved or rejected. In the context of this problem, `setTimeout` is used to introduce a cooldown period before sending the next batch of queries.</li>
</ul>
</details>

<details><summary><b>Why use a recursive cooldown mechanism?</b></summary>
<ul>
    <li>The recursive cooldown in this problem ensures that after each batch of queries is sent, the system waits for a specified cooldown time before sending the next batch. This approach ensures the system doesn't overwhelm the server or API it's querying.</li>
</ul>
</details>
<details><summary><b>How does the `isAvailable` flag work in this problem?</b></summary>
<ul>
    <li>The <code>isAvailable</code> flag indicates whether the system is in a cooldown period or not. If it's <code>true</code>, the system can send a query immediately. If it's <code>false</code>, the system is in a cooldown, and any new queries will be stashed until the cooldown is over.</li>
</ul>
</details>
<details><summary><b>Why might you opt for a stashing mechanism instead of dropping or immediately sending excess queries?</b></summary>
<ul>
    <li>Stashing is a way to ensure no queries are lost during a cooldown period. Dropping queries might result in lost data or missed actions, while immediately sending excess queries could overwhelm a server or API. Stashing allows the system to queue up excess queries and process them once the cooldown is over.</li>
</ul>
</details>
<details><summary><b>How would you handle errors in this system?</b></summary>
<ul>
    <li>Error handling can be introduced at various points:</li>
    <ul>
        <li><b>During Querying</b>: If <code>queryMultiple</code> fails, we would need a mechanism to retry the query or handle the failure gracefully.</li>
        <li><b>During Cooldown</b>: If there's an error during the cooldown (e.g., a system interruption), we might need to ensure the cooldown restarts or that stashed queries are processed.</li>
    </ul>
    <li>Additionally, ensuring that all promises either resolve or reject is essential to prevent potential unhandled promise rejections.</li>
</ul>
</details>
<details><summary><b>How would you optimize this system for high loads or large numbers of queries?</b></summary>
<ul>
    <li>Several optimizations can be considered:</li>
    <ul>
        <li><b>Dynamic Batching</b>: Adjust the batch size based on the system load or response times.</li>
        <li><b>Priority Queueing</b>: If some queries are more urgent than others, introduce a priority mechanism.</li>
        <li><b>Caching</b>: If the same queries are frequently sent, use caching to store and quickly retrieve recent results.</li>
        <li><b>Parallel Batching</b>: If the server or API can handle it, send multiple batches in parallel.</li>
    </ul>
</ul>
</details>