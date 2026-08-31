# Python - one line

**Author:** Ante_
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6126609/](https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6126609/)

---

- Time complexity:
$$O(n!)$$

```python3 []
class Solution:
    def findMinimumTime(self, s, k):
        return min(sum(ceil(v/(1 + i*k)) for i, v in enumerate(p)) for p in permutations(s))
```