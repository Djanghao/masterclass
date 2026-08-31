# Python 3 || 8 lines, iteration  || T/S: 74% / 93%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/4989205/](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/4989205/)

---

```
class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:

        incr, decr, ans = 1, 1,1
        prev = nums.pop(0)

        for num in nums:

            incr = incr * (num > prev) + 1
            decr = decr * (num < prev) + 1
            prev = num

            ans = max(ans, incr, decr)
            
        return ans
```
[https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/submissions/1226001047/](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/submissions/1226001047/)



I could be wrong, but I think that the time complexity is *O*(*N*)) and the space complexity is *O*(1), in which *N* ~ `len(nums)`.