# Official Solution

**Link:** [https://leetcode.com/problems/deep-object-filter/solution/](https://leetcode.com/problems/deep-object-filter/solution/)

---

[TOC]

## Solution

--- 

### Overview

Our objective is to implement a deep filtering operation on an object, `obj`, using the filtering function `fn`.

- **Primitive Values**: These values are directly passed to `fn`. If `fn` returns `false`, the value is discarded. For instance, with the object `{"a": 1, "b": "2"}`, the values `1` and `"2"` are passed to `fn` as `fn(1)` and `fn("2")`, and not as `fn({a:1})`.

- **Arrays**: Each element within the array undergoes recursive filtering. If an array becomes empty after filtering, it's removed.

- **Objects**: Each property value within the object is recursively filtered. If, post-filtering, an object has no properties left, it's discarded.

- If the main `obj` becomes empty after the filtering process, `undefined` is returned.

```javascript
let obj1 = [-5, -4, -3, -2, -1, 0, 1];
let fn1 = (x) => x > 0;
// Filters out all non-positive numbers. Only 1 remains.
deepFilter(obj1, fn1);  // Output: [1]

let obj2 = {"a": 1, "b": "2", "c": 3, "d": "4", "e": 5, "f": 6, "g": {"a": 1}};
let fn2 = (x) => typeof x === "string";
// Filters out all properties whose values aren't strings. Only "b" and "d" remain.
deepFilter(obj2, fn2);  // Output: {"b":"2","d":"4"}

let obj3 = [-1, [-1, -1, 5, -1, 10], -1, [-1], [-5]];
let fn3 = (x) => x > 0;
// Filters out all non-positive numbers and arrays that become empty after filtering.
deepFilter(obj3, fn3);  // Output: [[5,10]]

let obj4 = [[[[5]]]];
let fn4 = (x) => Array.isArray(x);
// As it recursively checks for arrays, all elements are filtered out until only the number 5 remains. Since 5 isn't an array, it gets filtered out as well.
deepFilter(obj4, fn4);  // Output: undefined

```

### Use Cases of Deep Filtering

1. **Data Validation and Cleansing**

   In the world of big data and analytics, datasets often come from various sources and can be riddled with noise or undesired data. Deep filtering can help cleanse these datasets by applying conditions to filter out irrelevant or noise data.

   > **Note:** Ensure to set the right conditions in the filtering function to avoid unintentionally filtering out relevant data.

    ```javascript
    const data = { 
      feedback: [
        {id: 1, rating: 2, comment: "Bad experience"}, 
        {id: 2, rating: 4, comment: "Good service"}
      ]
    };
    const isPositiveFeedback = (x) => (typeof x === "object" && x.rating) ? x.rating > 3 : true;
    const filteredData = deepFilter(data, isPositiveFeedback);
    console.log(filteredData);
    ```

2. **API Response Tailoring**

   In the realm of microservices, services often fetch comprehensive data from other services. However, not all this data may be relevant for the end consumer. Deep filtering can be used to prune the data, ensuring only the necessary data is passed along.

    ```javascript
    const userService = (userData) => {
        const filterSensitiveData = (x) => (typeof x === "string") ? x !== "password" : true;
        return deepFilter(userData, filterSensitiveData);
    };

    const user = {
        name: "Alice",
        age: 28,
        password: "secret123"
    };

    const apiResponse = userService(user);
    console.log(apiResponse);
    ```

### Approach 1: Depth-First Search (DFS) Traversal for Deep Filtering

#### Intuition
The given implementation uses a depth-first search (DFS) approach to traverse and filter the input object. The objective is to examine every node (whether a property or value) of the object, apply the filter function, and create a resulting structure that excludes values or properties rejected by the function. Importantly, a JSON object does not have `undefined` as a valid value. Therefore, we can return `undefined` to omit specific values and use it as the final return value if the entire input becomes empty.

#### Algorithm
1. Our primary function `deepFilter` uses a helper function `dfs` to traverse the object recursively.
2. Check if the node is `null`:
  - If `fn(node)` returns `true`, keep the node; otherwise, filter it out by returning `undefined`.
3. If the node is not an object (i.e., a primitive type like number, string, or boolean):
  - Apply the filter function `fn` directly. If it returns `true`, retain the node; otherwise, discard it by returning `undefined`.
4. If the node is an array:
  - Initialize an empty array, `newArr`.
  - Iterate through each element of the node array.
  - For each element, call the `dfs` function recursively and collect the result in `subRes`.
  - If `subRes` is not `undefined`, append it to `newArr`.
  - After iterating through all elements, if `newArr` is empty, return `undefined` to indicate that the entire array should be discarded; otherwise, return the filtered array.
5. If the node is an object (and not an array):
  - Initialize an empty object, `newObj`.
  - Iterate through each key-value pair of the node object.
  - For each value, call the `dfs` function recursively and collect the result in `subRes`.
  - If `subRes` is not `undefined`, add the key-value pair to `newObj`.
  - After iterating through all key-value pairs, if `newObj` has no keys (i.e., it's empty), return `undefined` to indicate that the entire object should be discarded; otherwise, return the filtered object.

#### Implementation

<iframe src="https://leetcode.com/playground/PVZvqT2o/shared" frameBorder="0" width="100%" height="500" name="PVZvqT2o"></iframe>


#### Complexity Analysis

**Time complexity**: $O(N)$, where $N$ is the total number of nodes (values or properties) in the input object `obj`. Each node in the object (or sub-objects and arrays) is visited and processed exactly once, making the time complexity linear with respect to the total number of nodes in the input.

**Space complexity**: $O(N + D)$, where $N$ is the total number of nodes in the input object and $D$ is the maximum depth of nesting in the object's structure. The filtered result (either a new object or array) will require space proportional to the number of nodes in the input object that satisfy the filter condition, contributing to the $O(N)$ term. The depth-first search approach, being recursive, can lead to a call stack depth proportional to the maximum depth of nesting in the object, contributing an $O(D)$ term.

Note: In deeply nested objects or arrays, the depth $D$ can become a significant factor. However, in many practical scenarios, $D$ is much smaller than $N$.

## Interview Tips:

* **Can you explain the structure of a JSON object or array?**
    * JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for both humans to read and write and for machines to parse and generate. JSON can represent objects (unordered collections of key-value pairs), arrays (ordered lists of values), numbers, strings, booleans (`true` or `false`), and `null`. Notably, it does not support the `undefined` value.

* **What challenges can arise when deep filtering an object or array?**
  * Deep filtering an object or array can be challenging due to the nested structures of objects and arrays. Care must be taken to handle the different data types correctly, maintain the hierarchy of nested structures, and manage potential edge cases.

* **How do you differentiate between different data types in an object or array, such as objects, arrays, numbers, and strings?**
  * Differentiating between data types in an object or array involves checking the type or structure of each value. Objects typically consist of key-value pairs, arrays are indexed collections, strings are sequences of characters, numbers can be integers or floating-point values, and booleans are represented by the values `true` or `false`.

* **Why might a recursive approach be suitable for this problem?**
  * Given that an object or array structure is inherently hierarchical with potential nested objects and arrays, a recursive approach is a natural fit for such structures. It allows for a straightforward approach to break down and process the nested components of the object or array.

* **How do you handle potential edge cases when filtering objects or arrays?**
  * Edge cases can include empty objects or arrays, objects with nested empty objects, or arrays with nested empty arrays. After filtering, it's essential to ensure that these empty structures are also removed. Proper error handling and checks can be put in place to handle such scenarios.