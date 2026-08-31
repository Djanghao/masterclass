# [Python3] string concatenation

**Author:** ye15
**Votes:** 5
**Link:** [https://leetcode.com/problems/optimal-division/solutions/1265206/](https://leetcode.com/problems/optimal-division/solutions/1265206/)

---

What a shitty problem! 
```
class Solution:
    def optimalDivision(self, nums: List[int]) -> str:
        if len(nums) <= 2: return "/".join(map(str, nums))
        return f'{nums[0]}/({"/".join(map(str, nums[1:]))})'
```

Alternative 1-line implementation 
```
class Solution:
    def optimalDivision(self, nums: List[int]) -> str:
        return "/".join(map(str, nums)) if len(nums) <= 2 else f'{nums[0]}/({"/".join(map(str, nums[1:]))})'
```

My first solution via dp 
```
class Solution:
    def optimalDivision(self, nums: List[int]) -> str:
        
        @cache
        def fn(lo, hi): 
            """Return max division of nums[lo:hi]."""
            if lo + 1 == hi: return str(nums[lo])
            ans = "-inf" 
            for mid in range(lo+1, hi): 
                cand = fn(lo, mid) + "/"
                if mid + 1 < hi: cand += "(" + gn(mid, hi) + ")"
                else: cand += gn(mid, hi)
                ans = max(ans, cand, key=eval)
            return ans 
        
        @cache
        def gn(lo, hi): 
            """Return min division of nums[lo:hi]."""
            if lo + 1 == hi: return str(nums[lo])
            ans = "inf"
            for mid in range(lo+1, hi):
                cand = gn(lo, mid) + "/"
                if mid + 1 < hi: cand += "(" + fn(mid, hi) + ")"
                else: cand += fn(mid, hi)
                ans = min(ans, cand, key=eval)
            return ans 
        
        return fn(0, len(nums))
```