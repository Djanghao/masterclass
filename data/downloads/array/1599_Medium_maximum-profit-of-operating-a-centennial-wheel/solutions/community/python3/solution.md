# [Python3] simulation

**Author:** ye15
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/solutions/866356/](https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/solutions/866356/)

---


```
class Solution:
    def minOperationsMaxProfit(self, customers: List[int], boardingCost: int, runningCost: int) -> int:
        ans = -1
        most = pnl = waiting = 0
        for i, x in enumerate(customers): 
            waiting += x # more people waiting in line 
            waiting -= (chg := min(4, waiting)) # boarding 
            pnl += chg * boardingCost - runningCost 
            if most < pnl: ans, most = i+1, pnl
        q, r = divmod(waiting, 4)
        if 4*boardingCost > runningCost: ans += q
        if r*boardingCost > runningCost: ans += 1
        return ans 
```