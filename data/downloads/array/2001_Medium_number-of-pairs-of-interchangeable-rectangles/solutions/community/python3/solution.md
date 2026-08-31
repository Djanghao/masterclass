# [Python3] Math GCD + Hash Table - Concise and Simple

**Author:** dolong2110
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/3723514/](https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/3723514/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def interchangeableRectangles(self, rectangles: List[List[int]]) -> int:
        c = collections.Counter()
        for x, y in rectangles:
            gcd = math.gcd(x, y)
            c[(x // gcd, y // gcd)] += 1
        
        res = 0
        for k, v in c.items():
            res += v * (v - 1) // 2
        return res
```