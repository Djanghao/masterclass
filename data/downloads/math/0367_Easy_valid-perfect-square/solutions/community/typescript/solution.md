# TypeScript/JavaScript O(1) one line simple solution

**Author:** XSkylinex
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-perfect-square/solutions/4753887/](https://leetcode.com/problems/valid-perfect-square/solutions/4753887/)

---

# Intuition
The code aims to check if the square root of the given number is an integer, which indicates whether the number is a perfect square or not.

# Approach
1. Calculate the square root of the given number using the exponentiation operator `(**)`.
2. Convert the square root to a string using `String()`.
3. Check if the string representation contains a decimal point ('.'). If it does not contain a decimal point, it means the square root is an integer, indicating that the number is a perfect square.

# Complexity
- Time complexity: O(1). Calculating the square root of a number is typically done in constant time.

- Space complexity: O(1). The function uses a constant amount of additional space regardless of the input size.

# Code - TypeScript
```
function isPerfectSquare(num: number): boolean {
    return !String(num ** 0.5).includes(".");
};
```

# Code - JavaScript
```
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    return !String(num ** 0.5).includes(".");
};
```


# Code Explanation
* The `isPerfectSquare` function takes an integer `num` as input.
* It calculates the square root of `num` using the exponentiation operator num ** 0.5.
* It converts the square root to a string using `String()` and checks if it contains a decimal point using the `includes` method.
* If the string representation does not contain a decimal point, it returns `true`, indicating that the number is a perfect square. Otherwise, it returns `false`.