# O(1)  JavaScript + Explanation

**Author:** AndriiShmerchuk
**Votes:** 8
**Link:** [https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/4147514/](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/4147514/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    x = Math.floor(n / m)   // Count of number are dividing 
    z = x * (x + 1) / 2     // Sum in range [1 - n]

    return ((n * (n + 1) / 2) - z * m) - (z * m)
};
```
![7abc56.jpg](./images/0.jpeg)