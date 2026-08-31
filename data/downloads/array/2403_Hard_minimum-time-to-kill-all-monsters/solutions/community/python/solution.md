# [Python 3]Bitmask + DP

**Author:** chestnut890123
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-time-to-kill-all-monsters/solutions/2557888/](https://leetcode.com/problems/minimum-time-to-kill-all-monsters/solutions/2557888/)

---

```
class Solution:
    def minimumTime(self, power: List[int]) -> int:
        
        n = len(power)
        power.sort()

        @cache
        def dp(mask, gain):
            if mask == (1 << n) - 1:
                return 0

            ans = float('inf')
            for i in range(n):
                if mask & (1 << i): continue
                ans = min(ans, math.ceil(power[i] / gain) + dp(mask | (1 << i), gain + 1))
            return ans

        return dp(0, 1)
```