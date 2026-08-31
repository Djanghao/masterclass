# Fix one and count pairs

**Author:** theabbie
**Votes:** 3
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-ii/solutions/4276643/](https://leetcode.com/problems/distribute-candies-among-children-ii/solutions/4276643/)

---

```
class Solution:
    def distributeCandies(self, n: int, limit: int) -> int:
        res = 0
        for f in range(min(n, limit) + 1):
            rem = n - f
            a = max(rem - limit, 0)
            b = min(rem, limit)
            if a <= b:
                res += b - a + 1
        return res
```