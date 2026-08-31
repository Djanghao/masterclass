# [Python3] greedy

**Author:** ye15
**Votes:** 26
**Link:** [https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/1253889/](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/1253889/)

---


```
class Solution:
    def reductionOperations(self, nums: List[int]) -> int:
        ans = val = 0
        nums.sort()
        for i in range(1, len(nums)): 
            if nums[i-1] < nums[i]: val += 1
            ans += val
        return ans 
```