# Official Solution

**Link:** [https://leetcode.com/problems/create-object-from-two-arrays/solution/](https://leetcode.com/problems/create-object-from-two-arrays/solution/)

---

[TOC]


## Overview:
We are given with two arrays, `keysArr` and `valuesArr`. Our main task is to create a new object `obj` where each key-value pair in `obj` should be formed from the corresponding elements in `keysArr` and `valuesArr`. However, if a duplicate key has been encountered at a previous index, the key-value pair corresponding to that key should be excluded from `obj`.
For those new to JavaScript, this article might be useful to uderstand [Objects](https://leetcode.com/problems/differences-between-two-objects/editorial/).

---

## Approach 1: Using loop

### Intuition:
We can iterate through the `keysArr` and `valuesArr` arrays using a loop. For each key-value pair, we'll check whether the `key` already exists in the object `obj`. If it doesn't, we will add the `key` and its corresponding value to the object.

### Algorithm:
1. Initialize an empty object `obj`.
2. Loop through the `keysArr` and `valuesArr` arrays simultaneously using the forEach loop.
3. For each iteration:
    * Check if the `key` already exists in the `obj` using the key in `obj` condition.
    * If the `key` does not exist, add the key-value pair to the `obj`.
4. Finally return the `obj`.

> Note: For typescript we need to convert non-string keys to strings. As in javscript we don't check for a string type because keys are automatically converted into strings when using obj[key].

### Implementation:

<iframe src="https://leetcode.com/playground/PKkdrRvg/shared" frameBorder="0" width="100%" height="327" name="PKkdrRvg"></iframe>


### Complexity Analysis:

* **Time complexity:** The `forEach` loop iterates through each element in the `keysArr` and `valuesArr` arrays, resulting in a time complexity of $O(n)$, where `n` is the length of the arrays.

* **Space complexity:** The space complexity is $O(k)$, where `k` is the number of unique keys in the `keysArr` that are added to the `obj` object.

---

## Approach 2: Using built-in method hasOwnProperty() 

### Intuition:
We can use the `hasOwnProperty()` method to check whether an object `O` has a specific property `x`. This method returns true if the property exists directly on the object and is not inherited from the prototype chain.

### Algorithm:
1. Initialize an empty object `obj`.
2. Loop through the `keysArr`.
3. For each `key` in the `keysArr`, use the `hasOwnProperty()` method to check if the object `obj` has the key.
4. If the `key` is not present, add the key-value pair to the object `obj`.
5. Finally return the `obj`

### Implementation:

<iframe src="https://leetcode.com/playground/QuH7XVns/shared" frameBorder="0" width="100%" height="293" name="QuH7XVns"></iframe>


### Complexity Analysis:

* **Time complexity:** The loop iterates through each element in the `keysArr` and `valuesArr` arrays, resulting in a time complexity of $O(n)$, where `n` is the length of the arrays.

* **Space complexity:** The space complexity is $O(k)$, where `k` is the number of unique keys in the `keysArr` that are added to the object `obj`.

---

## Interview Tips:

* What are some pitfalls you might encounter when dealing with non-string keys in JavaScript objects?
    * Non-string keys might lead to unexpected behavior, especially when using the `hasOwnProperty()` method. JavaScript automatically converts non-string keys to strings when they are used as property names. This can lead to issues if you're not aware of the automatic conversion.

* Could you explain the difference between shallow and deep copying of objects in JavaScript?
    * Shallow copying creates a new object and copies the top-level properties from the original object. Deep copying, on the other hand, recursively copies all properties, including nested objects and arrays. In this problem, shallow copying is sufficient because keys and values are at the top level, but deep copying could be relevant if the values are complex data structures.

---