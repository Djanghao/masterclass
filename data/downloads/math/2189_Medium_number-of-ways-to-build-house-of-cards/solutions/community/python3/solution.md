# [Python 3] Bottom-up DP

**Author:** chestnut890123
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-ways-to-build-house-of-cards/solutions/1892561/](https://leetcode.com/problems/number-of-ways-to-build-house-of-cards/solutions/1892561/)

---

- Each row takes `3*n-1` cards (n is number of traingles)
- Bottom up (number of traingles must be less than its adjacent down row)
- Base conditions
	- 0 or 2 cards remaining, count as one valid way to build
	- previous down row has only 2 triangles and left more than 2 cards, no way to build

```
class Solution:
    def houseOfCards(self, n: int) -> int:
        
        @lru_cache(None)
        def dp(n, prev):
            if n <= 2:
                return int(n != 1)
            if prev < 2:
                return 0
            
            ans = 0
            for i in range(2, min(prev, (n+1)//3+1)):
                ans += dp(n - 3*i + 1, i)
            return ans
        
        
        return dp(n, 10**5)