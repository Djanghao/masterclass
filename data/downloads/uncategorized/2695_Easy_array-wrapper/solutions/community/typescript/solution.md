# ✅✅ Easy JS Implementation || Beats 100% || Constructor building [JS, 40 MB]

**Author:** 2uringTested
**Votes:** 19
**Link:** [https://leetcode.com/problems/array-wrapper/solutions/3550702/](https://leetcode.com/problems/array-wrapper/solutions/3550702/)

---

# Code
```
/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
  this.array = nums;
};

ArrayWrapper.prototype.valueOf = function() {
  return this.array.reduce((sum, num) => sum + num, 0);
};

ArrayWrapper.prototype.toString = function() {
  return "[" + this.array.join(",") + "]";
};



```

# Overview

1. The `ArrayWrapper` function is defined with `nums` as a parameter. This function serves as the constructor for the `ArrayWrapper` class.

2. Inside the `ArrayWrapper` constructor, `this.array = nums` assigns the `nums` array passed to the constructor to the `array` property of the instance. This ensures that each instance of `ArrayWrapper` has its own array.

3. The `valueOf` method is added to the `ArrayWrapper.prototype`. This method is used to override the default behavior of the `valueOf` function and define how the instance should be evaluated in a numeric context.

4. Inside the `valueOf` method, the `reduce` function is used on `this.array` to calculate the sum of all the numbers in the array. The initial value of the sum is set to `0`. The `reduce` function iterates over each element of the array, adding it to the running sum.

5. The `toString` method is added to the `ArrayWrapper.prototype`. This method is used to override the default behavior of the `toString` function and define how the instance should be represented as a string.

6. Inside the `toString` method, the `join` function is used on `this.array` to concatenate all the elements of the array into a single string, separated by commas. The resulting string is then enclosed in square brackets to match the desired format.

# Approach

The approach for solving this problem is as follows:

1. Create an instance of `ArrayWrapper` using the `new` keyword and pass an array of numbers to the constructor.
   ```javascript
   const obj1 = new ArrayWrapper([1, 2]);

2. When you use the `+` operator between two `ArrayWrapper` instances (`obj1 + obj2`), JavaScript implicitly calls the `valueOf` method for both instances.
   - In the `valueOf` method, the `reduce` function sums all the elements in the `array` property of the instance.
   - The sum of the elements is then returned.

3. The result of `obj1 + obj2` will be the sum of all the elements in both `obj1.array` and `obj2.array`.

4. When you call `String(obj1)` or `obj1.toString()`, JavaScript implicitly calls the `toString` method for the `ArrayWrapper` instance.
   - In the `toString` method, the `join` function is used to concatenate all the elements in the `array` property of the instance with commas.
   - The resulting string is returned, enclosed in square brackets.

5. The output of `String(obj1)` will be the string representation of the `obj1.array` enclosed in square brackets.

The code provides a convenient way to handle the sum of arrays and obtain their string representation in a specific format using the `ArrayWrapper` class.

# PLEASE UPVOTE IF THIS HELPED YOU IN ANY MANNER \u2705
![image.png](./images/0.png)



