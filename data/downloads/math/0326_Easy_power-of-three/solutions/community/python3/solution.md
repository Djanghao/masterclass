# 326: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 26
**Link:** [https://leetcode.com/problems/power-of-three/solutions/3242355/](https://leetcode.com/problems/power-of-three/solutions/3242355/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
- The condition n > 0 is used to make sure that we only check for positive integers.
- We check if 3 raised to the power of 19 is divisible by n. Why 19? Because 3**19 is the largest power of 3 that can fit into the integer range (2^31 - 1).
- If n is a power of 3, then it must be a divisor of 3**19 and thus the remainder of 3**19 / n will be 0. If it's not a power of 3, then it won't be a divisor and the remainder will be non-zero.
- Therefore, we return True if n is greater than 0 and 3**19 % n is equal to 0, and False otherwise.
# Complexity
- Time complexity:
82.63%

- Space complexity:
51.99%

# Code
```
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        return n > 0 and 3**19 % n == 0
```