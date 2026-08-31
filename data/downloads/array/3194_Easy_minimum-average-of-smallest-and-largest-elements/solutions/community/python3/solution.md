# Python 3 || 5 lines, fold nums over  || T/S: 82% / 87%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5355840/](https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5355840/)

---

```
class Solution:
    def minimumAverage(self, nums: List[int]) -> float:
        
        n, ans = len(nums), inf
        nums.sort()

        for left, rght in zip(nums[:n//2], nums[n-1: n//2-1: -1]):
            ans = min(ans, left + rght)
            
        return ans/2    
```