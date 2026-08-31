# [Python3] Merge intervals between left and right || 34ms || beats 99%

**Author:** yourick
**Votes:** 11
**Link:** [https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/4501666/](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/4501666/)

---

```python3 []
class Solution:
    def isCovered(self, ranges: List[List[int]], left: int, right: int) -> bool:
        ranges.sort()
        for start, end in ranges:
            if end < left: continue # skip all intervals < left
            if start > left: return False # don't cover diapason [left:start-1]
            if end >= right: return True # diapason from left to right is covered fully
            left = end + 1

        return False
```
![Screenshot 2024-01-08 at 22.17.59.png](./images/0.png)



