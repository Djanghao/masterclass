# [Python3] gcd

**Author:** ye15
**Votes:** 17
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/3445773/](https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/3445773/)

---


```
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        ones = nums.count(1)
        if ones: return len(nums)-ones
        diff = inf 
        for i in range(len(nums)): 
            g = nums[i]
            for j in range(i+1, len(nums)):
                g = gcd(g, nums[j])
                if g == 1: diff = min(diff, j-i)
        return -1 if diff == inf else diff + len(nums) - 1
```