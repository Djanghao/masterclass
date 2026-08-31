# [Python] Simple Solution - 2 Sum variant

**Author:** 101leetcode
**Votes:** 18
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/780954/](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/780954/)

---

```
class Solution:
    def maxNonOverlapping(self, nums: List[int], target: int) -> int:
        ## RC ##
        ## APPROACH : HASHMAP - 2 SUM VARIANT ##
        lookup = {0 : -1}
        running_sum  = 0
        count = 0
        for i in range(len(nums)):
            running_sum += nums[i]
            if running_sum - target in lookup:
                count += 1
                lookup = {} #reset the map
            lookup[running_sum] = i
        return count
                
```
PLEASE UPVOTE IF YOU LIKE MY SOLUTION.