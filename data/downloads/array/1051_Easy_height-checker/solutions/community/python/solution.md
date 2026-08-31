# Python 1-liner

**Author:** cenkay
**Votes:** 83
**Link:** [https://leetcode.com/problems/height-checker/solutions/299194/](https://leetcode.com/problems/height-checker/solutions/299194/)

---

```
class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        return sum(h1 != h2 for h1, h2 in zip(heights, sorted(heights)))
```