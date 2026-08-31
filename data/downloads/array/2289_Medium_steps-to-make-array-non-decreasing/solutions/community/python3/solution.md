# [Python3] Increasing Stack

**Author:** yuanzhi247012
**Votes:** 15
**Link:** [https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/2085666/](https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/2085666/)

---

Reverse scan from right to left, maintain an increasing stack.
For i<j and nums[i]>nums[j], the number of rounds for nums[i] to remove nums[j] is:
    1. If nums[j] takes 3 rounds to remove all smaller numbers on its right, then it will also take nums[i] same 3 rounds to remove nums[j], not 1 round. 
    2. If nums[j] has nothing to remove on its right side, then nums[i] will take at least 1 round to remove nums[j].

```
    def totalSteps(self, nums: List[int]) -> int:
        res,stack = 0, []
        for i in range(len(nums)-1,-1,-1):
            cur = 0
            while stack and nums[stack[-1][0]]<nums[i]:
                _,v = stack.pop()
                cur=max(cur+1,v)
            res = max(res,cur)
            stack.append([i,cur])
        return res
```