# Python3 simple solution beats 90% users

**Author:** EklavyaJoshi
**Votes:** 15
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/1178397/](https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/1178397/)

---

```
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        count = 0
        for i in range(1,len(nums)):
            if nums[i] <= nums[i-1]:
                x = nums[i]
                nums[i] += (nums[i-1] - nums[i]) + 1
                count += nums[i] - x
        return count
```
**If you like this solution, please upvote for this**