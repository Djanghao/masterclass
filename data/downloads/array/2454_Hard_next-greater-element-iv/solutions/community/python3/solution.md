# [Python3] intermediate stack

**Author:** ye15
**Votes:** 3
**Link:** [https://leetcode.com/problems/next-greater-element-iv/solutions/2757259/](https://leetcode.com/problems/next-greater-element-iv/solutions/2757259/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/a90ca3f9de0f99297262514c111f27700c24c04a) for solutions of biweekly 90. 

```
class Solution:
    def secondGreaterElement(self, nums: List[int]) -> List[int]:
        ans = [-1] * len(nums)
        s, ss = [], []
        for i, x in enumerate(nums): 
            while ss and nums[ss[-1]] < x: ans[ss.pop()] = x
            buff = []
            while s and nums[s[-1]] < x: buff.append(s.pop())
            while buff: ss.append(buff.pop())
            s.append(i)
        return ans 
```