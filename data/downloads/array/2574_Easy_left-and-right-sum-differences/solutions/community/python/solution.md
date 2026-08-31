# Python | Easy Solution✅

**Author:** gmanayath
**Votes:** 20
**Link:** [https://leetcode.com/problems/left-and-right-sum-differences/solutions/3246853/](https://leetcode.com/problems/left-and-right-sum-differences/solutions/3246853/)

---

# Code
```
class Solution:
    def leftRigthDifference(self, nums: List[int]) -> List[int]:
        answer = []
        for i in range(len(nums)):
            answer.append(abs(sum(nums[:i]) - sum(nums[i+1:])))
        return answer
         
```