# [Python3] Simple O(n) solution

**Author:** BLACK_GOOGLE
**Votes:** 36
**Link:** [https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/1071380/](https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/1071380/)

---

```
class Solution:
    def findBuildings(self, heights: List[int]) -> List[int]:
        res = [len(heights) - 1]
        for i in range(len(heights) - 2, -1, -1):
            if heights[i] > heights[res[-1]]:
                res.append(i)
        res.reverse()
        return res
```