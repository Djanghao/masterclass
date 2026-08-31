# [Python3] Kadane's algo

**Author:** ye15
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/1056653/](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/1056653/)

---

**Algo**
Extend Kadane's algo by keeping track of max and min of subarray sum respectively. 

**Implementation**
```
class Solution:
    def maxAbsoluteSum(self, nums: List[int]) -> int:
        ans = mx = mn = 0
        for x in nums: 
            mx = max(mx + x, 0)
            mn = min(mn + x, 0)
            ans = max(ans, mx, -mn)
        return ans 
```

**Analysis**
Time complexity `O(N)`
Space complexity `O(1)`