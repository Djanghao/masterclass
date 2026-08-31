# Official Solution

**Link:** [https://leetcode.com/problems/differences-between-two-objects/solution/](https://leetcode.com/problems/differences-between-two-objects/solution/)

---

[TOC]

## Solution
---

### Overview

This question asks you to find the differences between two deeply nested objects. The output should also be a deeply nested object where each leaf node is an array of differences `[val1, val2]`. This differencing algorithm should only include differences, not additions or deletions of keys.

To give a concrete example of the expected output of the differencing algorithm:

```js
const object1 = {
  "x": 5,
  "y": 6,
  "array": [1, 2, 3, 4]
}
const object2 = {
  "x": 6,
  "z": 7,
  "array": [1, 2, {}]
}
const diff = objDiff(object1, object2);
console.log(diff);
/*
{
  "x": [5, 6],
  "array": {
    "2": [3, {}]
  }
}
*/
```

A few things of note about the solution:
- `"x"` was changed from `5` to `6`.
- `"y"` does not exist in the solution because the key does not exist in `object2`.
- `"z"` does not exist in the solution because the key does not exist in `object1`.
- `array[0]` and `array[1]` do not exist in the solution because they were unchanged.
- `array[2]` was modified from `3` to `{}`. Note that the result contains an object with the index `"2"`, rather than an array. This is to allow the efficient representation of small differences in large arrays.
- A 4th index does not exist in `object2.array` so it is not part of the result.

### Use-cases for Finding Differences Between Objects

#### Visualizations

Imagine you had a large object representing the state of all or part of your application, and you are trying to better understand the code by seeing what parts of state are effected by different actions a user performs.

Rather than manually explore the two JSON files before and after the user action, it would be better to have an algorithm display exactly what the changes are and nothing else. 

Redux is a popular state management library based off the core principle of actions effecting a large, immutable state object. One reason it is popular is the transparency it provides into what exactly is effected by a given action. And [Redux DevTools](https://github.com/reduxjs/redux-devtools) is a popular tool for visualizing this, and it provides a JSON difference tool as a core feature.

#### Efficiently Storing Past Versions of a File.

Suppose you wanted to implement persistent autosave feature in some app which, at its core, modifies a large JavaScript object. The simplest way would be to store a copy of each object in a file, every time a user performs an action. Then, when the user wants to revert to an earlier version, they simply select the file and load it. However, this is inefficient. A huge amount of data is just copied from one file to the next. A solution which would take up less storage is to only store differences between files. It would require some processing to create the desired file by applying the updates, but it would take up considerably less storage.

---

### Approach: Recursive Solution

We first need to consider the ***base cases*** of a recursive solution. There are a few to consider.
1. If `obj1 === obj2`, there is no difference. Let's represent the lack of a difference with an empty object `{}`. Why this representation is convenient will be explained later. All code from now on can assume the two values do not `===` each other.
2. If either value is `null`, return `[obj1, obj2]`. This is an important check because `typeof null` is `"object"`. It is simplest to rule out that edge case immediately.
3. If `typeof` either value is not an `"object"`, return `[obj1, obj2]`. Note that both arrays and objects are of type `"object"`.
4. If one value is an array and one value is an object, return `[obj1, obj2]`. Checking this condition can be achieved with the code `Array.isArray(obj1) !== Array.isArray(obj2)`. This condition is necessary because the problem treats arrays as being incomparable to objects.

With the base cases out of the way, we can proceed assuming that we have two comparable objects.

The next step is two iterate over the keys that exist on ***both*** objects. This is most easily achieved with a `for...in` loop and an if statement checking that the key also belongs to the other object. Note that when applying a `for...in` loop to an array, it will yield the indices of the array.

For each of these keys, let's calculate the difference between the two child objects with a recursive call. But crucially, we should only append this difference to the resulting object if the difference is NOT an `{}`. Based on the problem requirements, we want to exclude `{}` because that is unnecessary information. Note that we chose to represent identical primitives as an `{}` in the base case because that representation matches the output of identical objects/arrays, making them easy to filter out with a single condition. 

A simple way to check if an object is empty is if `Object.keys(obj).length === 0`. Also note that `Object.keys()` of a difference array is always `["0", "1"]`. Because the length is `2`, these difference arrays will correctly not be filtered out.

<iframe src="https://leetcode.com/playground/gdni8fTr/shared" frameBorder="0" width="100%" height="344" name="gdni8fTr"></iframe>

### Complexity Analysis:

**Time Complexity:** 
* Given `N` represents the sum of the keys in both objects, the time complexity is `O(N)`.
* Each key is traversed once.

**Space Complexity:** 
* The extra space complexity is `O(D)`, where `D` is the maximum recursion depth.
* Including the space of the returned object, the space complexity is `O(N + D)`.
---