# Use kadane algorithm twice | solution based on hints | beats 71%

**Author:** rktayal
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/2976258/](https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/2976258/)

---

```
class Solution:
    def maximumAlternatingSubarraySum(self, nums: List[int]) -> int:
        """
        If you convert all the numbers at odd indices to the 
        negative version of that number, 
        the problem simplifies to finding the maximum subarray sum.

        However, this strategy needs you to start each subarray at an even index.

        Do the same except converting all the numbers at 
        even indices to the negative version of that number.
        """
        if len(nums) == 1:
            return nums[0]

        # making odd indices negative, so we can only start subarray from even indices
        incl, excl = nums[0], nums[0]
        for i, num in zip(range(1, len(nums)), nums[1:]):
            excl = max(excl, incl)
            if i % 2:
                num = -1 * num 
                incl = incl + num
            else:
                incl = max(num, incl + num)

        cand1 = max(incl, excl)
        # making even indices negative, so we can only start subarray from odd indices
        incl, excl = nums[1], nums[1]
        for i, num in zip(range(2, len(nums)), nums[2:]):
            excl = max(incl, excl)
            if i % 2 == 0:
                num = -1 * num
                incl = incl + num
            else:
                incl = max(incl+num, num)
        cand2 = max(incl, excl)
        return max(cand1, cand2)
```