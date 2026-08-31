# [Python3] dp (top-down)

**Author:** ye15
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-and-sum-of-array/solutions/1766984/](https://leetcode.com/problems/maximum-and-sum-of-array/solutions/1766984/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/2506277d2af78559a0e58d2130fdbe87beab42b5) for solutions of weekly 280. 

```
class Solution:
    def maximumANDSum(self, nums: List[int], numSlots: int) -> int:
        
        @cache
        def fn(k, m): 
            """Return max AND sum."""
            if k == len(nums): return 0 
            ans = 0 
            for i in range(numSlots): 
                if m & 1<<2*i == 0 or m & 1<<2*i+1 == 0: 
                    if m & 1<<2*i == 0: mm = m ^ 1<<2*i
                    else: mm = m ^ 1<<2*i+1
                    ans = max(ans, (nums[k] & i+1) + fn(k+1, mm))
            return ans 
        
        return fn(0, 0)
```