# Python solution solved in O(1) time and space complexity

**Author:** aniket_ai
**Votes:** 6
**Link:** [https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/4144035/](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/4144035/)

---

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def differenceOfSums(self, n: int, m: int) -> int:
        num1 = n * (n+1) / 2
        
        num2 = n // m
        num2 = m * num2 * (num2 + 1) / 2
        
        return int(num1 - 2 * num2)
        
        
```