# 🤓5 Diff Method | Solution in TypeScript and JS | Learn JS with Question ✅ | Day-6 ✊🏃

**Author:** vermaamanmr
**Votes:** 289
**Link:** [https://leetcode.com/problems/array-reduce-transformation/solutions/3506475/](https://leetcode.com/problems/array-reduce-transformation/solutions/3506475/)

---

# Intuition
The` reduce function `is a higher-order function that takes an array, a reducer function, and an initial value, and returns a single accumulated value by applying the reducer function to each element of the array.

# Approach
To implement the `reduce function`, we can iterate over each element of the array, apply the reducer function to the current value and the current element, and update the accumulated value. We can use a for loop, forEach method, or a for...of loop to perform the iteration.

# Complexity
- Time complexity:
The time complexity of the reduce function implementation is O(n), where n is the length of the array, because the function iterates over each element of the array exactly once. 

- Space complexity:
O(1), as it only uses a single variable to store the accumulated value.

# What We Learn 
By implementing the reduce function, we learn how to use higher-order functions to transform and reduce data in an array. We also learn how to use different approaches, such as for loops, forEach method, or for...of loops, to iterate over arrays.

# Additional information:
The `fn parameter `is a function that takes two arguments: the accumulated value and the current element of the` array.` The purpose of the fn function is to perform a specific operation on these two values and return the result.

# Code In JavaScript
```
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};
```

# Code In TypeScript 
```
type Reducer<T, U> = (acc: T, curr: U) => T;

function reduce<T, U>(nums: U[], fn: Reducer<T, U>, init: T): T {
  let val: T = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
}

```
# Using forEach loop
```
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  let val = init;
  nums.forEach(num => {
    val = fn(val, num);
  });
  return val;
};

```

# Using reduceRight

```
function reduceArray(nums, fn, init) {
  return nums.reverse().reduceRight((val, num) => fn(val, num), init);
}

```

# Using recursion
```
function reduceArray(nums, fn, init) {
  if (nums.length === 0) {
    return init;
  } else {
    const head = nums[0];
    const tail = nums.slice(1);
    const val = fn(init, head);
    return reduceArray4(tail, fn, val);
  }
}

```

# Using for...of loop
```
function reduceArray(nums, fn, init) {
  let val = init;
  for (const num of nums) {
    val = fn(val, num);
  }
  return val;
}

```

![upvote-1.png](./images/0.png)

