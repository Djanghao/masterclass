# Solution

**Author:** fiqbal997
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/2330458/](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/2330458/)

---

```
class Solution:
    def minSubsequence(self, nums: List[int]) -> List[int]:
        if (len(nums) == 1):
            return nums
        nums.sort()
        count = 0
        num = []
        l = len(nums)
        for i in range(1,l+1):
            count += nums[-i]
            num.append(nums[-i])
            if count > sum(nums[:l-i]):
                return (num)
            
```