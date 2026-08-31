# Official Solution

**Link:** [https://leetcode.com/problems/deep-merge-of-two-objects/solution/](https://leetcode.com/problems/deep-merge-of-two-objects/solution/)

---

[TOC]

## Solution

--- 

### Overview

The problem requires us to design a function, `deepMerge`, that merges two given JSON values deeply, following specific merging rules.

- **Goal:**
    - Merge two values `obj1` and `obj2` deeply.
    - If both values are objects, the result should include all keys from both objects. For overlapping keys, their associated values should be deep merged. For unique keys, the key-value pair should be added to the resulting object.
    - If both values are arrays, the result should be an array with a length equal to the longer of the two arrays. For overlapping indices, their values should be deep merged. For unique indices, the value from the longer array should be taken.
    - For all other types of values, the result should be `obj2`.

- **Example:**
    - Given `obj1 = {"a": 1, "c": 3}` and `obj2 = {"a": 2, "b": 2}`, the result should be `{"a": 2, "c": 3, "b": 2}`.

For those looking to deepen their understanding of JSON, recursion, and important utilities in JavaScript, the following editorials and problems are recommended:

- [JSON Deep Equal](https://leetcode.com/problems/json-deep-equal)
- [Convert Object to JSON String](https://leetcode.com/problems/convert-object-to-json-string/)
- [Array of Objects to Matrix](https://leetcode.com/problems/array-of-objects-to-matrix/)

### Use Cases of `deepMerge`

1. **Merging Configuration Files**

   When dealing with multiple configuration files, there might be overlapping keys and nested structures. `deepMerge` can be used to merge these files and ensure a cohesive final configuration without losing any data.

    ```javascript
    const defaultConfig = {
        database: {
            user: 'default_user',
            password: 'password',
            settings: {
                retries: 3,
                timeout: 1000
            }
        },
        logging: true
    };

    const userConfig = {
        database: {
            user: 'custom_user',
            settings: {
                timeout: 2000
            }
        }
    };
    
    const finalConfig = deepMerge(defaultConfig, userConfig);  
    ```

2. **Combining Data from Multiple Sources**

   When collating data from multiple sources, it's common to have datasets with overlapping keys. `deepMerge` helps to combine these datasets in a way that the data integrity is maintained.

   > **Note:** Always validate the final data to ensure all necessary keys are present and have expected values. This validation is particularly crucial because, during the merging process, when two objects share the same key, one value will overwrite the other. This behavior might not be desirable in all cases, especially if data integrity is critical.

    ```javascript
    const dataFromSourceA = {
        user: {
            name: 'John',
            age: 25,
            preferences: {
                color: 'blue',
                food: 'pizza'
            }
        }
    };

    const dataFromSourceB = {
        user: {
            name: 'John Doe',
            address: '123 Main St',
            preferences: {
                food: 'burger'
            }
        }
    };
    
    const combinedData = deepMerge(dataFromSourceA, dataFromSourceB);  
    ```

3. **State Management in Frontend Applications**

   In frontend frameworks like React or Vue, the application state often needs to be updated based on incoming data. `deepMerge` can be used to merge the new state with the old state, ensuring that nested structures are handled correctly.

    ```javascript
    const oldState = {
        user: {
            id: 1,
            name: 'John',
            notifications: []
        },
        theme: 'light'
    };

    const newState = {
        user: {
            notifications: [{ id: 101, message: 'New message!' }]
        }
    };
    
    const updatedState = deepMerge(oldState, newState);  
    ```

### Approach 1: Depth First Search (DFS) for Deep Merging

#### Intuition
To achieve deep merging of two values, we must traverse both of them in a synchronized manner, ensuring that the merging is done in a depth-first fashion. Whenever we encounter nested objects or arrays, we recursively dive deeper, merging them as per the problem's requirements. When non-object or non-array values are found, we simply choose the value from the second object.

#### Algorithm
1. **Determine Value Types**:
    - Check the types of the current values from both objects. It's important to specifically check for `null` since in JavaScript, `null` is considered an object type. Depending on whether they are primitives, arrays, objects, or `null`, decide how to proceed with the merge.

2. **Merge Arrays**:
    - If both values are arrays, create a new array with the length of the longer array.
    - Iterate over the indices and recursively merge the values at each index.
    - If only one of the values exists, use it directly.

3. **Merge Objects**:
    - If both values are objects, iterate over the keys of both objects.
    - For each key, recursively merge the values associated with that key.
    - If a key only exists in one object, add it directly to the resulting object.

4. **Fallback**:
    - If neither of the above conditions is met, simply choose the value from the second object.


#### Implementations

##### Implementation 1

<iframe src="https://leetcode.com/playground/jpXAHTXc/shared" frameBorder="0" width="100%" height="500" name="jpXAHTXc"></iframe>

##### Implementation 2: Reusing the Original Object and Using `for...in` Loop for Both Arrays and Objects

This approach streamlines the deep merging process by employing a unified `for...in` loop to manage both arrays and objects, and by reusing `obj1` as the base for the merged result. The core principle is to assess the data types of `obj1` and `obj2` to determine the merging strategy. If the data types differ or if they aren't objects, the function promptly returns `obj2`. Otherwise, it merges the properties or elements of `obj2` into `obj1` recursively.

<iframe src="https://leetcode.com/playground/Ji5KRJzb/shared" frameBorder="0" width="100%" height="500" name="Ji5KRJzb"></iframe>

#### Complexity Analysis

* **Time complexity**: For Implementation 1, the primary operations involve traversing the keys or array elements of both `obj1` and `obj2`. If $M$ represents the total number of keys (or array elements) in `obj1` and $N$ represents the number of keys (or array elements) in `obj2`, the worst-case time complexity is $O(M + N)$.

For Implementation 2, we primarily traverse the keys of `obj2`. Only for keys that are common between `obj1` and `obj2` do we traverse `obj1`. Thus, if $C$ represents the number of common keys between `obj1` and `obj2`, the time complexity is $O(N + C)$, which in the worst case (when all keys are common) also becomes $O(M + N)$.

* **Space complexity**: The primary space overhead in `deepMerge` (for both implementations) comes from the recursive call stack. Considering the maximum depth of the nested structures as $D$, the space complexity related to the call stack is $O(D)$. Additionally, for Implementation 1, a new merged object or array is created, which can have a potential size of $M + N$, leading to a space complexity of $O(M + N + D)$. In contrast, Implementation 2 directly modifies the first object (`obj1`), which can be more space-efficient in scenarios where `obj1` has a structure similar to or larger than `obj2`, but the worst-case space complexity remains $O(M + N + D)`.

## Interview Tips:

<details><summary><b>What clarifying questions would you like to ask the interviewer?</b></summary>
<ul>
    <li><b>How should the function handle cyclic references in objects?</b></li>
        <ul>
            <li><i>Answer:</i> For the scope of this problem, we can assume that objects do not have cyclic references. However, in a real-world scenario, we might use a visited set or map to keep track of already seen objects and avoid endless recursion.</li>
        </ul>
    <li><b>Should the function handle non-JSON safe data structures, like functions or `undefined`?</b></li>
        <ul>
            <li><i>Answer:</i> Given the problem statement, we're only concerned with JSON safe data structures. Non-JSON safe values like functions, `undefined`, etc., are out of scope.</li>
        </ul>
    <li><b>How does the function prioritize when merging? For example, if both input objects have a certain property, which one takes precedence?</b></li>
        <ul>
            <li><i>Answer:</i> In the given problem, `obj2` takes precedence over `obj1`. If both objects have the same key and their value is not an array or object, then the value from `obj2` will overwrite the one from `obj1`.</li>
        </ul>
</ul>
</details>
<details><summary><b>Edge Cases to Consider</b></summary>
<ul>
    <li><b>Non-plain JavaScript Object Values</b>: Although <code>typeof null</code> in JavaScript returns "object", values like <code>null</code>, <code>Date</code>, and <code>Symbol</code> should be treated as non-objects. This is because they don't exhibit the same properties and behaviors as plain objects. In the context of merging, if <code>obj2</code> contains a <code>Date</code>, <code>Symbol</code>, or <code>null</code> value, it should overwrite the respective value in <code>obj1</code>, mirroring how primitives are handled. While these specific cases aren't directly relevant to the current problem due to its JSON-safe data constraints, they are vital to account for in real-world applications.</li>
</ul>
</details>
<details><summary><b>Why might a deep merge of objects be useful?</b></summary>
<ul>
    <li>Deep merging is often utilized in scenarios such as:</li>
    <ul>
        <li><b>Configuration Management</b>: When applying a series of configurations, each subsequent configuration might partially override the previous one without discarding all its properties.</li>
        <li><b>State Management</b>: In frameworks like Redux in React, a new state is generated based on the previous state and actions without mutating the original state.</li>
    </ul>
</ul>
</details>
<details><summary><b>How does your solution handle nested objects and arrays?</b></summary>
<ul>
    <li>The solution uses a recursive depth-first approach to tackle nested objects and arrays. It dives deep into each object or array until it hits a primitive value or a terminal condition, then merges as it unwinds the stack.</li>
</ul>
</details>
<details><summary><b>What are potential pitfalls when deeply merging objects?</b></summary>
<ul>
    <li><b>Infinite Recursion</b>: Without proper base cases, recursive functions might end up in endless loops.</li>
    <li><b>Overwriting Data</b>: Carelessness might lead to unintentional data overwriting from the original objects.</li>
    <li><b>Performance Concerns</b>: Deep merging can be computationally intensive, especially with large nested structures.</li>
</ul>
</details>
<details><summary><b>How would you adapt the solution to perform a shallow merge?</b></summary>
<ul>
    <li>For a shallow merge, only the top-level properties would be merged. Rather than diving deep with recursion, the direct properties of the provided objects would be simply merged.</li>
</ul>
</details>
<details><summary><b>What are the distinctions between deep and shallow copies/merges?</b></summary>
<ul>
    <li>A <b>deep copy/merge</b> ensures the resultant structure is entirely separate from the original objects. All nested objects and arrays are recreated instead of being referenced.</li>
    <li>A <b>shallow copy/merge</b> only duplicates the top-level structures. Nested objects or arrays would still reference the original objects, meaning changes to them would affect the original data.</li>
</ul>
</details>
<details><summary><b>When deep merging might be less appropriate compared to shallow merging?</b></summary>
<ul>
    <li>In some situations, shallow merging, which only merges top-level properties, may be more appropriate. For instance in a software application with plugin support, the application might have a default set of configurations, and plugins provide their own settings. Shallow merging can incorporate plugin configurations into the application's default settings without delving into deeply nested structures.</li>
</ul>
</details>
<details><summary><b>How does JavaScript manage object references and values?</b></summary>
<ul>
    <li>Primitive types like numbers, strings, and booleans are passed by value, while non-primitives like objects and arrays are passed by reference. This distinction is vital when merging objects to prevent unintended side effects on the original objects.</li>
</ul>
</details>
<details><summary><b>How would you ensure the original objects remain unchanged during the merge?</b></summary>
<ul>
    <li>Avoiding direct mutations is key. Instead of altering the original objects, always establish new structures (objects or arrays) and populate them with the merged data, ensuring the original data remains untouched.</li>
</ul>
</details>