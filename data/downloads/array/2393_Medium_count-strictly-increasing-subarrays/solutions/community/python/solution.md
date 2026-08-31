# Python O(N) Solution

**Author:** wjz8597
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/2624661/](https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/2624661/)

---

We extract each ascending sequence using a while loop. Each increasing sequence with length n could hold as many as n*(n+1)/2 increasing subarrays.
```
class Solution(object):
    def countSubarrays(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        ln = len(nums)
        left = 0
        right = 0
        summation = 0
        while right < ln:
            while right+1 < ln and nums[right+1] > nums[right]:
                right += 1
            interval = right-left+1
            summation += interval * (interval+1) / 2
            left = right + 1
            right = left
        return summation
```