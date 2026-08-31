# [Python 3] - sorting - easy to understand

**Author:** dolong2110
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-maximal-uncovered-ranges/solutions/3484370/](https://leetcode.com/problems/find-maximal-uncovered-ranges/solutions/3484370/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def findMaximalUncoveredRanges(self, n: int, ranges: List[List[int]]) -> List[List[int]]:
        res, last= [], 0        
        for s, e in sorted(ranges) + [[n,n]]:
            if s > last:
                res.append([last, s - 1])
            last = max(last, e + 1)
        return res
```