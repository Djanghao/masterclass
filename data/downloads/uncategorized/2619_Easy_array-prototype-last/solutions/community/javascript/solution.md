# ✔️Array.prototype.last() ✔️Level up🚀your JavaScript skills with these intuitive implementations󠁓🚀

**Author:** Vikas-Pathak-123
**Votes:** 503
**Link:** [https://leetcode.com/problems/array-prototype-last/solutions/3421043/](https://leetcode.com/problems/array-prototype-last/solutions/3421043/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
#### The `Array.prototype.last()` method is designed to return the last element of an array, or -1 if the array is empty. This can be useful in scenarios where you want to quickly access the last element of an array without having to write additional code to handle empty arrays.

# Approach
<!-- Describe your approach to solving the problem. -->
## Implementation 1:
```JS []
Array.prototype.last = function() {
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};
```
```TS []
declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    } else {
        return this[this.length - 1];
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

```

>  In this implementation, we use a simple if/else statement to check if the length of the input array is zero. If it is, we return -1. If it is not zero, we return the last element of the array using the `[this.length - 1]` index. This approach is straightforward and easy to understand, but may be slightly less concise than other implementations

## Implementation 2:
```JS []
Array.prototype.last = function() {
  return this.length ? this[this.length - 1] : -1;
};
```
> In this implementation, we use a ternary operator to check if the length of the input array is truthy (non-zero). If it is, we return the last element of the array using the `[this.length - 1]` index. If it is not, we return -1. This approach is more concise than the previous implementation, and may be more readable for developers who are familiar with the ternary operator

## Implementation 3:
``` JS []
Array.prototype.last = function() {
  return this.length ? this.slice(-1)[0] : -1;
};

```
> In this implementation, we use the `Array.prototype.slice()` method to create a new array containing only the last element of the input array. We do this by passing a negative index of `-1` to the `slice()` method, which returns a new array containing only the last element. We then return the first (and only) element of this new array using the `[0]` index. If the length of the input array is zero, we return -1. This approach is more concise than the previous implementation and may be slightly more optimized, as it avoids direct indexing of the input array.

Overall, all three implementations achieve the same goal of returning the last element of an array or -1 if the array is empty, but use slightly different approaches to accomplish this. The
second and third implementations are more concise and may be slightly more optimized than the first implementation, but all three implementations are valid and function correctly


![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the `Array.prototype.last()` method is O(1), since all operations involved (checking the length of the array, slicing the array, and returning the first element) are constant-time operations that do not depend on the size of the input array

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of the `Array.prototype.last()` method is also O(1), since we are not creating any new arrays or variables that depend on the size of the input array. The only
variables used are `this` (the input array) and a constant integer value of `-1`. The `Array.prototype.slice()` method does create a new array containing only the last element of the input array, but since this new array contains only one element, its size is constant and does not depend on the size of the input array.


# Important topic to Learn
```
1. JavaScript syntax and data types
2. Functions and function expressions
3. Arrays and array methods such as `slice()`, `map()`, and `reduce()`
4. Prototype inheritance and the `prototype` property
5. The `this` keyword and how it is used in functions
6. Arrow functions and their differences from regular functions
7. Ternary operators and their syntax
8. JavaScript object-oriented programming (OOP) concepts such as classes and objects

```

# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```