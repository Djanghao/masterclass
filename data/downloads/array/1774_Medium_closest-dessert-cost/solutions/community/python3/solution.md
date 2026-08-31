# [Python3] top-down dp

**Author:** ye15
**Votes:** 26
**Link:** [https://leetcode.com/problems/closest-dessert-cost/solutions/1085820/](https://leetcode.com/problems/closest-dessert-cost/solutions/1085820/)

---


```
class Solution:
    def closestCost(self, baseCosts: List[int], toppingCosts: List[int], target: int) -> int:
        toppingCosts *= 2
        
        @cache
        def fn(i, x):
            """Return sum of subsequence of toppingCosts[i:] closest to x."""
            if x < 0 or i == len(toppingCosts): return 0
            return min(fn(i+1, x), toppingCosts[i] + fn(i+1, x-toppingCosts[i]), key=lambda y: (abs(y-x), y))
        
        ans = inf
        for bc in baseCosts: 
            ans = min(ans, bc + fn(0, target - bc), key=lambda x: (abs(x-target), x))
        return ans 
```
Time complexity `O(MNV)`

Edited on 2/28/2021

Adding the version by @lenchen1112
```
class Solution:
    def closestCost(self, baseCosts: List[int], toppingCosts: List[int], target: int) -> int:
        
        @cache
        def fn(i, cost):
            """Return sum of subsequence closest to target."""
            if cost >= target or i == len(toppingCosts): return cost
            return min(fn(i+1, cost), fn(i+1, cost+toppingCosts[i]), key=lambda x: (abs(x-target), x))
        
        ans = inf
        toppingCosts *= 2
        for cost in baseCosts: 
            ans = min(ans, fn(0, cost), key=lambda x: (abs(x-target), x))
        return ans 
```

Adding binary search implementation
```
class Solution:
    def closestCost(self, baseCosts: List[int], toppingCosts: List[int], target: int) -> int:
        top = {0}
        for x in toppingCosts*2: 
            top |= {x + xx for xx in top}
        top = sorted(top)
        
        ans = inf 
        for bc in baseCosts: 
            k = bisect_left(top, target - bc)
            if k < len(top): ans = min(ans, bc + top[k], key=lambda x: (abs(x-target), x))
            if k: ans = min(ans, bc + top[k-1], key=lambda x: (abs(x-target), x))
        return ans 
```
Time complexity `O(N*2^(2N) + MN)`