# Official Solution

**Link:** [https://leetcode.com/problems/json-deep-equal/solution/](https://leetcode.com/problems/json-deep-equal/solution/)

---

[TOC]

## Overview
The task is to determine whether two given objects, `o1` and `o2`, are deeply equal. 
Two objects are considered deeply equal if they have the same keys and the associated values are deeply equal, or if they pass the strict equality check `(===)`.

let us see when to use Strict Equality`(===)`, Loose Equality`(==)` and `Object.is` :

1. Behavior of Strict Equality`(===)`, Loose Equality`(==)` and `Object.is` when the **operands are of different types**:
   * Strict Equality `(===)`: If the operands are of different types, they are considered not equal.
   * Loose Equality `(==)`: The loose equality operator performs type coercion before comparison. If the operands are of different types, it attempts to convert them to a common type.
   * `Object.is` Method: Similar to strict equality ('==='), if the operands are of different types, they are considered not equal.
2. Behavior of Strict Equality`(===)`, Loose Equality`(==)` and `Object.is` for **primitive types**:
   * Strict Equality `(===)`: For primitive types (numbers, strings, booleans), strict equality compares their values. If the values are the same, they are considered equal; otherwise, they are considered not equal. 
   * Loose Equality `(==)`: The loose equality operator performs type coercion before comparison. For primitive types, it behaves similarly to strict equality. 
   * `Object.is` Method: `Object.is` compares values using the `SameValueZero` algorithm. It treats positive and negative zeros as not equal and treats NaN as equal to NaN. For primitive types, it compares their values.
3. Behavior of Strict Equality`(===)`, Loose Equality`(==)` and `Object.is` for **objects and arrays**:
   * Strict Equality `(===)`: For objects and arrays, strict equality compares their references. They are considered equal only if they refer to the same object/array in memory.
   * Loose Equality `(==)`: For objects and arrays, it also performs reference comparison and checks if they refer to the same object/array in memory.
   * `Object.is` Method: For objects and arrays, it compares their references.


In summary, strict equality ('===') compares values for primitive types and references for objects and arrays. Loose equality ('==') performs type coercion and compares values for primitive types and references for objects and arrays. `Object.is` compares values using the SameValueZero algorithm and treats certain cases differently, such as positive and negative zeros and NaN.

**Some examples to understand Strict Equality`(===)`, Loose Equality`(==)` and `Object.is`:** 
```js
console.log(5 === 5);                     // true (both operands are numbers with the same value)
console.log(5 === '5');                   // false (operands are of different types: number vs string)
console.log(true === true);               // true (both operands are booleans with the same value)
console.log(null === null);               // true (both operands are null)
console.log(undefined === undefined);     // true (both operands are undefined)

console.log(5 == 5);                      // true (both operands are numbers with the same value)
console.log(5 == '5');                    // true (loose equality performs type coercion, '5' is coerced to a number 5)
console.log(true == true);                // true (both operands are booleans with the same value)
console.log(null == null);                // true (both operands are null)
console.log(undefined == undefined);      // true (both operands are undefined)

const obj1 = { name: 'I_Am_Batman' };
const obj2 = { name: 'I_Am_Batman' };
const obj3 = obj1;

console.log(obj1 === obj2);               // false (objects have different references in memory)
console.log(obj1 === obj3);               // true (both variables reference the same object)

console.log(Object.is(5, 5));             // true (both operands are numbers with the same value)
console.log(Object.is(5, '5'));           // false (operands are of different types: number vs string)
console.log(Object.is(true, true));       // true (both operands are booleans with the same value)
console.log(Object.is(null, null));       // true (both operands are null)
console.log(Object.is(undefined, undefined)); // true (both operands are undefined)
console.log(Object.is(obj1, obj2));       // false (objects have different references in memory)
console.log(Object.is(obj1, obj3));       // true (both variables reference the same object)

```

> Note: In the problem statement it is mentioned that objects are the output of `JSON.parse`. 
Basically `JSON.parse()` is a built-in function that parses a `JSON` string and returns a JavaScript object. i.e.,
>* If the JSON string represents an object, it will be converted into a JavaScript object.
>* If the JSON string represents an array, it will be converted into a JavaScript array.
>* If the JSON string represents a string, number, boolean, or null value, it will be converted into the corresponding JavaScript string, number, boolean, or null value.
>* Also `JSON.parse()` will never yield an object with cyclic references, non-enumerable properties, or properties keyed by symbols. It also exclusively generates a plain object, devoid of any additional property descriptors. Therefore, we can confidently assume that these specific scenarios don't require special handling.
>* When using `JSON.stringify` on an object that contains properties with the value of `undefined`, those properties will be excluded from the resulting JSON string. So the input will never look like this: `{ foo: undefined, baz: "baz" }, { bar: "bar", baz: "baz" }`, due to the way it handles `undefined`, therefore, we don't need to handle certain cases like the below one.<br/>
`JSON.stringify({"foo":undefined,"baz": "baz"}) // O/P:'{"baz":"baz"}'`

***

## Use Cases:
> **Caching and Memoization:** When using caching or memoization techniques, you should check to see if the current function arguments or input objects are the same as previously cached ones. Deep equality checks can aid in determining whether or not the input has changed, allowing you to reuse previously cached results or initiate a fresh calculation.
> * For example, let's say we have a function `calculateExpensiveValue` that performs some computationally expensive calculations based on an input object. The function `memoizedCalculation` acts as a wrapper that checks if the input object has been previously processed and cached. If the object is found in the cache, it returns the cached result. Otherwise, it performs the calculation and caches the result for future use.
>* The `areDeeplyEqual` function is used to compare the current input object with the cached input object. If the objects are deeply equal, indicating that they have the same properties and values, the function knows that the cached result is still valid and can be reused. If the objects are not deeply equal, it indicates that the input has changed, and a fresh calculation is required.
>* Without deep equality checks, the cache would not work correctly, and passing seemingly identical objects would result in cache misses. Deep equality ensures that the cache operates based on the actual content and structure of the input objects, rather than their references or surface-level comparison.
```js
function calculateExpensiveValue(obj) {
  // Perform expensive calculations here
  // ...
  return result;
}

function memoizedCalculation(obj) {
  if (memoizedCalculation.cache && areDeeplyEqual(obj, memoizedCalculation.cache.input)) {
    // Cache hit! Return the previously calculated result
    return memoizedCalculation.cache.result;
  } else {
    // Cache miss! Perform the calculation and store the result
    const result = calculateExpensiveValue(obj);
    memoizedCalculation.cache = {
      input: obj,
      result: result
    };
    return result;
  }
}
```

> **State Comparison in UI Frameworks:** UI frameworks like React and Angular frequently need to compare the prior state with the new state to detect if any changes have happened and to update the user interface accordingly. Deep equality checks are used here to efficiently identify changes by comparing complicated objects representing the state.
>* Note: React.js uses `Object.is()` instead of `===` for comparing props and states in its reconciliation process.

> **Testing and assertions:** When developing unit tests, you may need to compare the expected output of a function or module to the actual output. Deep equality checks can aid in validating that two objects or data structures are the same, ensuring that the code works as intended.
For example: 
```js
function sortArray(arr) {
  return [...arr].sort((a, b) => a - b);
}

const input = [3, 1, 2];
const expectedOutput = [1, 2, 3];
const actualOutput = sortArray(input);

console.log(areDeeplyEqual(actualOutput, expectedOutput)); // true
```

> **Data Synchronization:** Deep equality checks can assist in uncovering variations in data structures and decide if synchronization is necessary for data synchronization scenarios such as comparing two versions of a database record or synchronizing data between several systems.
>* For example, if you have two versions of a user profile object from different systems, you can use `areDeeplyEqual` to compare the objects and identify if any properties or nested data have changed. Based on the comparison result, you can determine if synchronization is required to update one system's data with the changes from the other.

> **JSON Diffing:** Deep equality checks in JSON diffing methods can be used to compare two JSON items and determine the particular changes between them. This is important in situations such as version control systems and data migration operations.It
***

## Approach 1: Comparative Recursion:
**Intuition**
* The intuition behind this approach is that the string representation of an object contains all the information about its keys and values.
* By converting the objects to strings, we can compare the strings directly using the strict equality check `(===)`.
* If the strings are equal, it implies that the objects have the same keys and values, making them deeply equal.
* But when you solve with this approach you will see it will be giving a wrong output. The reason behind this is that it has limitations when it comes to comparing objects with different key orders, as the test case given in the problem. 
  ```
  Input:
  {"y":2,"x":1}
  {"x":1,"y":2}
  Output:
  false
  Expected:
  true
  ```
  * To handle this type of test cases, maybe we can do something like **comparing it recursively!**.

**Algorithm**
* Check if `o1` and `o2` are strictly equal `(===)`. If they are, return `true` since they are deeply equal.
* Check if either `o1` or `o2` is not an object. If one of them is not an object while the other is, they are different values, so return `false`.
* If the types of `o1` and `o2` are different (checked using `String(o1) !== String(o2)`), they are not equal, and false is returned.
* If `o1` and `o2` are arrays, they are compared element by element:
  * If the lengths of the arrays are different, they are not equal, and `false` is returned.
  * Each element is recursively compared using a recursive call to `areDeeplyEqual`.
  * If any pair of corresponding elements are not equal, `false` is returned.
  * If all elements are equal, `true` is returned.
* If `o1` and `o2` are objects, they are compared based on their properties:
  * If the number of keys (properties) in o1 and o2 is different, they are not equal, and false is returned.
  * Each property is recursively compared using a recursive call to `areDeeplyEqual`.
  * If any pair of corresponding properties are not equal, false is returned.
  * If all properties are equal, true is returned.
* If none of the previous conditions match, `false` is returned as a fallback mechanism.

**Implementation:**

<iframe src="https://leetcode.com/playground/M7qTUCDD/shared" frameBorder="0" width="100%" height="500" name="M7qTUCDD"></iframe>

### Complexity Analysis:
**Time Complexity:** `O(N)`, where `N` is the total number of values in the objects being compared recursively.     
**Space Complexity:** `O(D)`, where `D` is the maximum depth of recursion.
***

## Approach 2: Iterative Solution:
**Intuition:**
* In **approach 1**, we highlighted why the iterative method will not work, namely because the keys for the objects in `o1` and `o2` are not in the same order.
  * But what if we use a **stack** by explicitly tracking and processing nested objects iteratively, which eliminates the need for recursive function calls.
> Note: Anything that can be solved with recursion can also be solved with a stack! 
> * Reason is that recursion relies on the call stack to manage function calls and handle the recursive process. On the other hand, a stack data structure can mimic the behavior of the call stack, allowing us to implement the same logic iteratively. This equivalence is based on the fact that both approaches follow the same depth-first traversal pattern

**Algorithm:**
* Check if `o1` and `o2` are strictly equal `(===)`. If they are, return `true` since they are deeply equal.
* Check if either `o1` or `o2` is not an object. If one of them is not an object while the other is, they are different values, so return `false`.
* Initialize a stack called `objs` with an array containing the initial objects `o1` and `o2`. The stack will store pairs of objects to be compared.
* Create a while loop that continues until the `objs` stack becomes empty. Inside the loop, it pops the top pair of objects `o1` and `o2` from the stack.
* If `o1` and `o2` have the same reference (strict equality check with ===), it means they are equal, so the code continues to the next iteration of the loop.
* If either `o1` or `o2` is not an object (typeof check), it means they are different types and not equal, so the function returns `false`.
* If `o1` and `o2` have different types (Array.isArray check), it means one is an array and the other is not, so they are not equal, and the function returns `false`.
* Then we can retrieve the keys of `o1` and `o2` using `Object.keys()` and stores them in `keys1` and `keys2` variables .
* If the lengths of `keys1` and `keys2` are different, it means the objects have a different number of properties, so they are not equal, and the function returns `false`.
* Now create a for loop that iterates over each key in `keys1`. For each key, it checks if the same key exists in `o2` using the `in` operator.
  * If the key does not exist in `o2`, it means the objects have different keys, so they are not equal, and the function returns `false`.
  * If the key exists in both `o1` and `o2`, the corresponding values are pushed as a pair into the `objs` stack for further comparison.
* In the end if the loop completes without returning `false`, it means all the keys and values of `o1` and `o2` have been compared and found to be equal thus we can return `true`.

**Implementation:**

<iframe src="https://leetcode.com/playground/NiKED86E/shared" frameBorder="0" width="100%" height="500" name="NiKED86E"></iframe>

### Complexity Analysis:
**Time Complexity:** 
`O(N)`, where `N` is the total number of elements in the input objects. This is because the function iterates over the objects and performs comparisons for each element.

**Space Complexity:** `O(D)`, where `D` is the maximum depth of the nested objects. This is because the function uses a stack `objs` to keep track of the objects to compare.

***
## Approach 3: Using JSON.stringify and Sorting:
**Intuition:**
* In **approach 2**, we highlighted why the iterative method can work, because of the stack and recursion relation. 
  * But, if, instead of using a stack, we build a `helper` function that sorts all the keys in both objects, we can easily handle the issue of keys in `o1` and `o2` not being in the same order.

**Algorithm:**
* We can create a `helper` function that takes two parameters: `key` and `value`. It is invoked for each property during the stringification process of `JSON.stringify`.
* Inside the `helper` function, we check if the value is an object and not an array using `typeof` and `Array.isArray` checks.
  * If the value is indeed an object and not an array, it proceeds to sort the properties of the object.
  * It does this by converting the object to an array of key-value pairs using `Object.entries`. 
  * For example:
    ```js
    const obj = { name: 'Cosmic', age: 20 };
    const entries = Object.entries(obj);
    console.log(entries);
    // Output: [['name', 'Cosmic'], ['age', 20]]
    ```
  * Now when `.sort()` is called on an array of arrays, it uses the default comparison behavior, which converts the elements of the array to strings and sorts them. In the case of arrays containing key-value pairs, the string representation of each key-value pair is used for comparison during the sorting process.
  * So, even though `.sort()` is being called on an array of arrays, it works because the default comparison behavior converts the inner arrays (key-value pairs) to strings and sorts them accordingly.
* Finally, the sorted key-value pairs are converted back to an object using `Object.fromEntries`(example code given below) and returned as the `result`.
  ```js
  const entries = [['name', 'Cosmic'], ['age', 20]];
  const obj = Object.fromEntries(entries);
  console.log(obj);
  // Output: { name: 'Cosmic', age: 20 }
  ```

**Implementation:**

<iframe src="https://leetcode.com/playground/oWpV6LSQ/shared" frameBorder="0" width="100%" height="361" name="oWpV6LSQ"></iframe>

### Complexity Analysis:
**Time Complexity:** 
Here `N` is the total number of values in the input objects.
* **`Object.entries()`**: `O(N)` - Returns an array of [key, value] pairs, iterating through all enumerable properties once.
* **`Array.prototype.sort()`**: `O(NlogN)` - Sorts elements in place using an efficient sorting algorithm like QuickSort or MergeSort.
* **`Object.fromEntries()`**: `O(N)` - Transforms key-value pairs into an object by iterating through the entries once.
* **`JSON.stringify()`**: `O(N)` - Converts a JavaScript value to a JSON string by visiting each node in the object tree.
* **`===`**: `O(N)` - The equality operator in JavaScript has a linear time complexity for strings, comparing each character if needed.

Now considering that the helper function is invoked for each key-value pair in the input objects, and `Object.entries(value).sort()` has a time complexity of `O(NlogN)` each time it is called, where `n` is the number of properties in the object, the overall time complexity of the approach would be `O(MNlogN)`, where `M` represents the total number of key-value pairs across all input objects (including nested ones).

**Space Complexity:** `O(N)` where `N` is the total number of values in the input objects. 
* The reason behind `O(N)` is due to storing the stringified representations of the objects.

***

## Interview Tips:
* What is the difference between shallow equality and deep equality?
  * Shallow equality compares the references of objects, whereas deep equality compares both the references and the values of objects. Shallow equality checks whether two objects refer to the same memory location, while deep equality checks the values of nested properties.
  * For example: 
    ```js
    let obj1 = { a: 1, b: { c: 1 }};
    let obj2 = { a: 1, b: { c: 1 }};
    let obj3 = obj1;

    // Shallow check: 
    console.log(obj1 === obj3); // 'true' — obj1 and obj3 are the same because they share the same reference
    console.log(obj1 === obj2); // 'false' — obj1 and obj2 may look alike, but they aren't the same due to different references

    // Deep check:
    console.log(areDeeplyEqual(obj1, obj2)); // 'true' — obj1 and obj2 have the exact same values and structure
    console.log(areDeeplyEqual(obj1, obj3)); // 'true' — they are still the same
    ```

* Why is the strict equality check `(===)` used in addition to deep equality?
  * The strict equality check `(===)` is used in JavaScript to quickly compare simple data types (like numbers, strings, and booleans) and to check if two objects or arrays reference exactly the same memory location. Deep equality is used for objects to ensure that all nested properties are also deeply equal. The strict equality check ensures that non-object values, such as numbers, strings, and booleans, are also equal.

* What `JSON.parse` does and when you would want to use it?
  * The `JSON.parse()` function is used to parse a JSON string and convert it into a JavaScript object. It takes a JSON-formatted string as input and returns a corresponding JavaScript object.
  * When working with web APIs or receiving JSON data from external sources, such as server responses, you often receive JSON data as a string. In such cases, you can use `JSON.parse()` to convert the JSON string into a JavaScript object, allowing you to access and manipulate the data within your application.
***