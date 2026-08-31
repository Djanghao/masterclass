# Official Solution

**Link:** [https://leetcode.com/problems/make-object-immutable/solution/](https://leetcode.com/problems/make-object-immutable/solution/)

---

[TOC]

## Solution

--- 

### Overview

In this problem, you are tasked with creating a JavaScript function `makeImmutable`. This function should take either an object or an array and return an _immutable version_ of the input. Immutable objects or arrays cannot be modified, and an error message is thrown if any attempt to alter them is made.

Solving this problem requires a good understanding of JavaScript objects, arrays, and Proxies, as well as recursion. JavaScript Proxies provide a way to customize behavior for fundamental operations on objects, such as property lookups or assignments. The solution makes use of Proxies to detect and prevent modifications to the input object or array. It also employs recursion to traverse nested objects or arrays deeply, applying the Proxies at all levels. For a more in-depth understanding of Proxies, refer to the [Infinite method object](https://leetcode.com/problems/infinite-method-object/editorial/) editorial.

#### Use Cases of Making Objects/Arrays Immutable

1. **Maintaining Data Integrity**

   Immutable objects preserve data integrity by ensuring that the state of the object remains consistent even when it's passed around various parts of your application. For example, if you're developing a banking application, you might want to make certain objects, like transaction records, immutable to ensure that once they are created, they cannot be modified.

   > Note: While `Object.freeze()` can be used for creating shallow immutability, our problem solution employs JavaScript's `Proxy` for a more granular control.

    ```javascript
    const transactionRecord = makeImmutable({
        date: new Date(),
        amount: 100,
        type: 'deposit'
    });
   
    transactionRecord.amount = 200; // Throws an error
    ```

2. **Avoiding Unintentional Side Effects**

   Immutability can help prevent bugs that arise from unintentional side effects. As a developer, you may not always remember where a certain object has been referenced or modified in your codebase. By making an object immutable, you can be assured that it will not be inadvertently modified somewhere in the code, leading to difficult-to-track bugs.

    ```javascript
    const userSettings = makeImmutable({
        theme: 'dark',
        language: 'English'
    });
    // Some function deep in the codebase
    function updateUserPreferences(preferences) {
        preferences.theme = 'light'; // Throws an error
    }
    ```

---

### Approach 1: Using JavaScript Proxies to Make Objects and Arrays Immutable

#### Intuition
In this problem, we are tasked with making an object or array immutable. This means that once an object is created, it cannot be modified. A JavaScript Proxy is the perfect tool for the job. Proxies in JavaScript are objects that wrap another object or function and intercept the fundamental operations for the wrapped object or function.

#### Algorithm
1. If the input is not an object or an array, return the input as it is.
2. If the input is a function, return a Proxy that throws an error when certain methods ['pop', 'push', 'shift', 'unshift', 'splice', 'sort', 'reverse'] are invoked.
3. If the input is an array, return a Proxy that throws an error when a property is set and recursively apply the `dfs` function on the accessed property.
4. If the input is an object, return a Proxy that throws an error when a property is set and recursively apply the `dfs` function on the accessed property.

#### Implementation

<iframe src="https://leetcode.com/playground/WEc5mu2t/shared" frameBorder="0" width="100%" height="500" name="WEc5mu2t"></iframe>

#### Complexity Analysis

Time complexity: $O(D)$, where $D$ is the depth of the deepest nested structure within the input object or array. Each call to the Proxy's `get` trap runs in $O(1)$ time, but due to the recursive nature of the approach, we must consider the depth.

Space complexity: $O(D)$, where $D$ is the depth of the deepest nested structure within the input object or array. Each recursive call to the `get` trap requires a constant amount of space. However, due to the recursive nature of the approach, the space complexity is determined by the maximum depth of the recursion, i.e., the size of the call stack.

### Approach 2: Combined Conditions in Proxy Handler

#### Intuition
This approach provides a more compact version of making objects and arrays immutable using JavaScript Proxies. Like the first approach, it returns a Proxy object which throws an error if we try to modify any properties. However, this version combines all conditions within the proxy handler, making it significantly more concise. While this results in fewer lines of code and avoids creating a new Proxy for each nested object or array, it might be more challenging to reason about due to the amalgamation of different conditions.

#### Algorithm
1. Define a `Set` of array modifying methods such as 'pop', 'push', 'shift', 'unshift', 'splice', 'sort', 'reverse'.
2. Define a custom handler for our `Proxy` that includes:
    - The `set` trap: throws an error when we attempt to modify a property, indicating whether it's an array index or an object property that's being modified.
    - The `get` trap: checks the type of the property. If the property is not an object or a function, or if it's the object's `prototype`, `null` or if the property doesn't exist, it directly returns the property. Otherwise, it recursively wraps the property in a new Proxy with the same handler.
    - The `apply` trap: checks whether the function being called is one of the array's mutating methods. If so, it throws an error; otherwise, it applies the function with the provided arguments.
3. Return a new `Proxy` of the input object or array with the defined handler.

#### Implementation

<iframe src="https://leetcode.com/playground/Quk3Hzrw/shared" frameBorder="0" width="100%" height="500" name="Quk3Hzrw"></iframe>

#### Complexity Analysis
**Time complexity:** $O(D)$, where $D$ is the depth of the nested structures in the input object or array. Each traversal through the depth of the object or array in the `get` handler, results in the creation of a new Proxy for nested structures, making the time complexity proportional to the depth.

**Space complexity:** $O(D)$, where $D$ is the depth of the nested structures in the input object or array. The space complexity is dominated by the memory used for storing the created Proxy objects for nested structures. Each nested structure could potentially have a new Proxy object, making the space complexity proportional to the depth.

## Interview Tips:

* What are JavaScript Proxies and why would you use them?
    * JavaScript Proxies are a feature that allows developers to intercept and customize operations performed on objects. They can be used to implement validation, logging, property access control, and more. However, they come with a degree of complexity and should be used carefully to avoid making code more confusing.

* What is the relation between the Proxy 'get' trap and immutability?
    * The 'get' trap in a Proxy can be used to enforce immutability in JavaScript. By using this trap, we can return a new Proxy for every property accessed, allowing us to control and limit changes to the property. This is particularly useful when dealing with nested objects or arrays, as it allows us to enforce immutability at all levels of the object.

* Can you explain the 'set' and 'apply' traps in a JavaScript Proxy?
    * The 'set' trap in a JavaScript Proxy is triggered when a property on the target object is set or changed. We can leverage this trap to prevent modifications to the properties, thereby ensuring immutability. The 'apply' trap, on the other hand, is triggered when a function (that is a property of the target object) is invoked. By using this trap, we can prevent certain function invocations, for instance, those which could mutate an array.

* What are the benefits and potential pitfalls of using a JavaScript Proxy for enforcing immutability?
    * Using a JavaScript Proxy for enforcing immutability allows us to effectively control and limit changes to an object's properties. It's particularly useful when dealing with complex objects with nested properties. However, it can also introduce additional complexity, and debugging code involving Proxies can be challenging due to the indirect nature of the operations.