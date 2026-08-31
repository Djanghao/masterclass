# [Python3] dp

**Author:** ye15
**Votes:** 15
**Link:** [https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/solutions/1389260/](https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/solutions/1389260/)

---


```
class Solution:
    def minSpaceWastedKResizing(self, nums: List[int], k: int) -> int:
        
        @cache
        def fn(i, k): 
            """Return min waste from i with k ops."""
            if i == len(nums): return 0
            if k < 0: return inf 
            ans = inf
            rmx = rsm = 0
            for j in range(i, len(nums)): 
                rmx = max(rmx, nums[j])
                rsm += nums[j]
                ans = min(ans, rmx*(j-i+1) - rsm + fn(j+1, k-1))
            return ans 
        
        return fn(0, k)
```