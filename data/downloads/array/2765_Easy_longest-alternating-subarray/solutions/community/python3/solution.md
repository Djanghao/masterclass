# O(N2) Accepted Solution -- Beginner Approach ✅✅

**Author:** Lil_ToeTurtle
**Votes:** 4
**Link:** [https://leetcode.com/problems/longest-alternating-subarray/solutions/3740022/](https://leetcode.com/problems/longest-alternating-subarray/solutions/3740022/)

---

# Code
```
class Solution(object):
    def alternatingSubarray(self, nums):
        res=-1
        for i in range(len(nums)):            
            for j in range(i+1,len(nums)):
                if nums[j-1]!=nums[j]+(-1)**(j-i):
                    break
                res=max(res, j-i+1)
        return res
```

Checking if the range from i to j is an alternating sequence everytime.