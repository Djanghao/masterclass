# Python dfs solution.

**Author:** OldCodingFarmer
**Votes:** 613
**Link:** [https://leetcode.com/problems/combination-sum/solutions/16510/](https://leetcode.com/problems/combination-sum/solutions/16510/)

---

```
class Solution(object):
    def combinationSum(self, candidates, target):
        ret = []
        self.dfs(candidates, target, [], ret)
        return ret
    
    def dfs(self, nums, target, path, ret):
        if target < 0:
            return 
        if target == 0:
            ret.append(path)
            return 
        for i in range(len(nums)):
            self.dfs(nums[i:], target-nums[i], path+[nums[i]], ret)
```