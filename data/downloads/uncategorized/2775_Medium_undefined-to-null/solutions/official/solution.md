# Official Solution

**Link:** [https://leetcode.com/problems/undefined-to-null/solution/](https://leetcode.com/problems/undefined-to-null/solution/)

---

[TOC]

## Overview:
We need to implement a function `undefinedToNull` that takes an `obj` array as input and returns an `obj` array with any `undefined` values replaced by `null`.

- **Goal:**
    - To implement a function called `undefinedToNull` that replaces `undefined` values in a nested object or array with `null`.
    - Return a copy of the given object `obj` with all `undefined` values replaced by `null`.

- **Key Insight:** 
    - JavaScript treats `undefined` and `null` differently, especially when converting objects to JSON strings using `JSON.stringify()`.
    - Replacing `undefined` with `null` ensures clarity and consistency in data representation. This helps ensure consistent handling of `undefined` values during JSON serialization and prevents potential errors.
    - Using `null` to represent missing values explicitly signals intent and improves code readability. It makes it clear that a value is intentionally absent, rather than accidentally `undefined`.

 - **Example:**
    - When using `JSON.stringify()`, `undefined` values are omitted entirely from the resulting string. This can lead to missing data and potential inconsistencies in how data is represented.
    ```js
    const data = {
    key1: "value1",
    key2: {
        subkey1: undefined,
        subkey2: [1, 2, undefined, 4],
    },
    key3: null,
    };

    const cleanedData = undefinedToNull(data);
    console.log(cleanedData); 
    /*
    output: 
    {
        key1: 'value1',
        key2: { subkey1: null, subkey2: [ 1, 2, null, 4 ] },
        key3: null
    }
    */
    ```

---

**Key Concepts:**

1. Understanding the `undefined` and `null`:
    - In JS, `undefined` and `null` are two different values that are often confused with each other. `undefined` is a primitive value that represents an uninitialized variable or a variable that has not been declared. When a variable is initialized with no value, it will be `undefined`. For example:
    ```js
    let variable;
    console.log(variable); // logs 'undefined'
    ```
    - On the other hand, `null` is a primitive value representing the intentional absence of any object value. It is a valid value that can be assigned to a variable, passed as an argument to a function, or returned from a function. For example:
    ```js
    let variable = null;
    console.log(variable); // logs 'null'
    ```
    - Now, when it comes to working with JSON, `undefined` and `null` have different meanings. JSON does not have a concept of `undefined`, so when we convert a JS object to JSON, any `undefined` values will be omitted. For example, let's say we have the following object:
    ```js
    var profile = {
        name : "P192",
        age : undefined,
        country : "Atlantis"
    };
    ```
    - When we convert the profile to JSON using the `JSON.stringify()` method, the resulting JSON string will have lost the `age` property. This is because `age` is `undefined` in the object, and JSON does not have a concept of `undefined`, so it gets omitted.
    ```js 
    var string = JSON.stringify(profile); 
    // logs {"name":"P192","country":"Atlantis"}
    ```
2. So why do we need to convert `undefined` to `null` when working with JSON? 
    - The main reason is that some JSON parsers may not handle `undefined` values properly. If we have a JSON string with an `undefined` value, some parsers may throw an error or return an incorrect value when trying to parse it or omit that important piece of information as well in some cases. By converting `undefined` values to `null`, we ensure that the JSON string is valid and can be parsed correctly by any JSON parser. `Undefined` can also be coerced to `false` in boolean contexts, leading to unexpected logic errors. `Null` avoids such coercion. Converting ensures compatibility.
    - Here's a common real-world use case to solidify the importance of converting `undefined` to `null`: Suppose we have a web application that allows users to create profiles. The profile data is stored in a JSON object, and we want to display the user's age on their profile page. However, not all users have entered their age, so we need to handle this case. If we don't convert `undefined` to `null`, we may end up with a JSON object that has an age property set to `undefined`. When we try to display the user's age on their profile page, we may get an error if the JSON parser doesn't handle `undefined` values properly. On the other hand, if we convert `undefined` to `null`, we can ensure that the JSON object has an age property set to `null`, which means the user hasn't entered their age. We can then display a message on the profile page saying "Age not available" or something similar.

---

## Approach 1: Iterative Approach

### Intuition:
To solve this iteratively, we can use a stack to keep track of the nested objects or arrays and replace undefined values with null. The stack acts as temporary storage to monitor objects that require further inspection.

We can start by pushing the input object onto the stack. Then, repetitively pop the top object from the stack, check if it's an array or an object, and process its elements or properties accordingly. If the popped object is an array, iterate over its elements and replace any undefined values with null. If the popped object is an object, iterate over its properties and do the same. If the popped object has nested objects, push them onto the stack for later processing.

We will continue this process until the stack is empty. At that point, the function returns the input object with all undefined values replaced with null. This stack-based approach allows the function to efficiently handle nested objects without recursive calls, making it more memory-efficient and easier to understand.

By avoiding recursion overhead, this approach can be more efficient, especially for deeply nested data structures. It ensures stable performance even with large or deeply nested objects.

### Algorithm:
- Create a stack and push the input object onto it.
- While the stack is not empty, do the following:
  - Pop the top element from the stack and assign it to the variable `current`.
  - If `current` is an array, iterate over its elements:
    - If an element is `undefined`, replace it with `null`.
    - If an element is an object, push it onto the stack.
  - If `current` is an object (and not `null`), iterate over its properties:
    - If a property value is `undefined`, replace it with `null`.
    - If a property value is an object, push it onto the stack.
- Return the modified object.

### Implementation:

<iframe src="https://leetcode.com/playground/e2X7zcvX/shared" frameBorder="0" width="100%" height="500" name="e2X7zcvX"></iframe>


### Complexity Analysis:

* **Time complexity:** $O(n)$, where `n` is the total number of properties across all objects and arrays in the input. The while loop iterates through each object or array. Nested objects or arrays are added to the stack, but each property or element is processed only once, resulting in linear time complexity.

* **Space complexity:** In the worst-case scenario of a deeply nested structure, the stack could grow to hold a size proportional to the number of properties, leading to $O(n)$ space complexity.

---

## Approach 2: Recursive Approach

### Intuition:
Instead of using an iterative approach, we can achieve the same result through recursion, resulting in shorter, more readable code. If a property in the object `Obj` is found to be undefined, we substitute it with `null`. Similarly, if a property in `Obj` is identified as another object, we recursively apply the same function to that particular sub-object.

> Note: Recursion can lead to stack overflow errors in cases of very deep recursion.

### Algorithm:
- First, check if the input `obj` is not an object or is `null`. If so, return the input `obj` if it is not `undefined`, otherwise return `null`.
- If the input `obj` is an array, recursively call itself on each item in the array using the `map` method and return the resulting array with `undefined` values replaced by `null`.
- If the input object is an object, create a new empty object called `newObj`. Then iterates over each key in the input object using a `for...in` loop.
  - For each key, assign the value of the key in the input object to the corresponding key in `newObj`, but with the value recursively processed by calling `undefinedToNull`.
- Finally, return the `newObj` with all undefined values replaced by `null`.
 
### Implementation:

<iframe src="https://leetcode.com/playground/NYdy5etd/shared" frameBorder="0" width="100%" height="446" name="NYdy5etd"></iframe>


### Complexity Analysis:

* **Time complexity:** $O(n)$, where `n` is the total number of properties across all objects and arrays in the input. The outer `for...in` loop iterates through each property of the object. For each object or array encountered, the function calls itself recursively. While this introduces some overhead, it ensures that each property is processed only once, contributing to the overall linear time complexity.

* **Space complexity:** In the worst-case scenario of a deeply nested structure, the recursive calls could grow the stack to a size proportional to the number of properties, resulting in $O(n)$ space complexity.

---

## Interview Tips:

<details><summary><b>Why is it important to handle <code>undefined</code> values differently than <code>null</code> values in JSON serialization?</b></summary>
    <ul>
        <li><code>JSON.stringify</code> treats <code>undefined</code> values differently from <code>null</code> values. If <code>undefined</code> values are present in an object, <code>JSON.stringify</code> will omit them, potentially leading to unexpected behavior when deserializing. Replacing <code>undefined</code> with <code>null</code> ensures consistent representation in the serialized data.</li>
    </ul>
</details>
<details><summary><b>Can you explain the difference between iterating over an array and iterating over an object?</b></summary>
    <ul>
        <li>Iterating over an array involves accessing elements by index while iterating over an object involves accessing properties using keys. Arrays are ordered collections, and objects are key-value pairs.</li>
    </ul>
</details>
<details><summary><b>Explain the potential performance implications of using recursion for deeply nested structures. Are there alternative approaches to address these concerns?</b></summary>
    <ul>
        <li>Recursion is often chosen for its simplicity and readability when dealing with nested structures. Recursion can lead to a large number of function calls, potentially causing a stack overflow for very deep structures. Iterative approaches are preferred in scenarios where performance is a critical consideration, especially for very deep structures.</li>
    </ul>
</details>
<details><summary><b>How does the function handle circular references in objects, and how would you modify the function to handle circular references?</b></summary>
    <ul>
        <li>The function does not explicitly handle circular references. If the input object contains circular references, the function may result in infinite recursion, leading to a "Maximum Call Stack Size Exceeded" error.</li>
        <li>Handling circular references requires keeping track of visited objects to avoid revisiting them. One approach involves using a Set or an array to store visited objects and checking before processing each object to see if it has been visited before.</li>
    </ul>
</details>
<details><summary><b>What are some scenarios where this function might be useful in a real-world application?</b></summary>
    <ul>
        <li>The function is beneficial when working with data serialization, especially in scenarios where <code>undefined</code> values need to be explicitly represented as <code>null</code> to maintain consistency in serialized data.</li>
    </ul>
</details>

---