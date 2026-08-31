# easy understanding using toString() method js

**Author:** PradeepSaravanau
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/3314276/](https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/3314276/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
 convert the integer to binary and calc odd or even if bit value is 1. reverse
# Approach
<!-- Describe your approach to solving the problem. -->
track of odd and even indexes and loop over the binary indexes and check for the conditions
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
  let binaryN = n.toString(2).split("").reverse();
  let odd = 0;
  let even = 0;
  for (let i = 0; i < binaryN.length; i++) {
    if (binaryN[i] == 1) {
      if (i % 2 == 0) even++;
      else odd++;
    }
  }
  return [even, odd];
};
```