# Python Simple Solution Explained (video + code) Backtracking

**Author:** spec_he123
**Votes:** 32
**Link:** [https://leetcode.com/problems/combination-sum-iii/solutions/843394/](https://leetcode.com/problems/combination-sum-iii/solutions/843394/)

---

[](https://www.youtube.com/watch?v=J2hcPZRpbMk)
https://www.youtube.com/watch?v=J2hcPZRpbMk
```
class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        res = []
        
        def backtrack(num, stack, target):
            if len(stack) == k:
                if target == 0:
                    res.append(stack)
                return
            
            for x in range(num + 1, 10):
                if x <= target:
                    backtrack(x, stack + [x], target - x)
                else:
                    return
        
        backtrack(0, [], n)
        return res
```