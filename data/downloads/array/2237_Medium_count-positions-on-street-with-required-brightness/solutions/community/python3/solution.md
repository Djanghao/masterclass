# [Python 3] Difference Array + Sweep Line - Clean code

**Author:** dolong2110
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-positions-on-street-with-required-brightness/solutions/3490397/](https://leetcode.com/problems/count-positions-on-street-with-required-brightness/solutions/3490397/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
if we solve this one in brute-force way, for each light we have iterate the range and update. This will cost $$O(n^2)$$ in term of time complexity. Is there any better way to update by range -> **difference array** will help to update the range with $$O(1)$$ only.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def meetRequirement(self, n: int, lights: List[List[int]], requirement: List[int]) -> int:
        diff = [0 for _ in range(n + 1)]
        for i, (p, r) in enumerate(lights):
            diff[max(0, p - r)] += 1
            diff[min(n - 1, p + r) + 1] -= 1
        cnt = int(diff[0] >= requirement[0])
        for i in range(1, n):
            diff[i] += diff[i - 1]
            cnt += diff[i] >= requirement[i]
        return cnt
```