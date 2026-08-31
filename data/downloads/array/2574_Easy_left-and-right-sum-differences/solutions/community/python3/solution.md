# [Python3] prefix & suffix sum

**Author:** ye15
**Votes:** 66
**Link:** [https://leetcode.com/problems/left-and-right-sum-differences/solutions/3230880/](https://leetcode.com/problems/left-and-right-sum-differences/solutions/3230880/)

---


```
class Solution:
    def leftRigthDifference(self, nums: List[int]) -> List[int]:
        prefix = 0 
        suffix = sum(nums)
        ans = []
        for x in nums: 
            prefix += x
            ans.append(abs(prefix - suffix))
            suffix -= x
        return ans 
```