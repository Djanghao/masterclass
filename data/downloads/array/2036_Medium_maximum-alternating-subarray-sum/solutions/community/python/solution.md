# [PYTHON] | SIMPLEST SOLUTION | O(n) TIME | O(1) SPACE | OPTIMAL

**Author:** satyampd5340
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/2215419/](https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/2215419/)

---

```class Solution:
    def maximumAlternatingSubarraySum(self, nums: List[int]) -> int:
        
        # dp = [[0 for _ in range(2)] for _ in range(len(nums))]
        n = len(nums)
        
        prev0 = nums[0]
        prev1 = float("-inf")
        final = prev0
        for i in range(1,n):
            positive = max(nums[i],prev1+nums[i])
            negative = prev0-nums[i]
            final = max(final,max(positive,negative))
            prev0 = positive
            prev1 = negative
        return final
