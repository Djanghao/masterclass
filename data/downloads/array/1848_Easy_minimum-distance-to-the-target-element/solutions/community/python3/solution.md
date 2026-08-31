# [Python3] linear sweep

**Author:** ye15
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/1186862/](https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/1186862/)

---


```
class Solution:
    def getMinDistance(self, nums: List[int], target: int, start: int) -> int:
        ans = inf
        for i, x in enumerate(nums): 
            if x == target: 
                ans = min(ans, abs(i - start))
        return ans 
```