# [Python3] Greedy + Math - Simple

**Author:** dolong2110
**Votes:** 5
**Link:** [https://leetcode.com/problems/smallest-number-with-given-digit-product/solutions/4012009/](https://leetcode.com/problems/smallest-number-with-given-digit-product/solutions/4012009/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(sqrt(N))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(sqrt(N))$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def smallestNumber(self, n: int) -> str:
        if n == 1: return "1"
        digits = []
        for i in range(9, 1, -1):
            while n and n % i == 0:
                digits.append(str(i))
                n //= i
        if n > 1: return "-1"
        return "".join(digits[::-1])
```