# 1 Liner in Dart

**Author:** CainTheMeister
**Votes:** 1
**Link:** [https://leetcode.com/problems/factorial-trailing-zeroes/solutions/3697703/](https://leetcode.com/problems/factorial-trailing-zeroes/solutions/3697703/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem aims to determine the number of trailing zeros in the factorial of a given number n. Trailing zeros are formed by the multiplication of 10, which is the product of 2 and 5. Since factors of 2 are more abundant than factors of 5 in any factorial, the number of trailing zeros depends on the count of factors of 5.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(log(n))$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(log(n))$
# Code
```
class Solution {
  int trailingZeroes(int n) => n < 5 ? 0 : n ~/ 5 + trailingZeroes(n ~/ 5);
  }
```