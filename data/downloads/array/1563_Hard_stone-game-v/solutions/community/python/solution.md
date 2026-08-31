# Python, elegant memoization

**Author:** warmr0bot
**Votes:** 2
**Link:** [https://leetcode.com/problems/stone-game-v/solutions/806764/](https://leetcode.com/problems/stone-game-v/solutions/806764/)

---

```
from functools import lru_cache
class Solution:
    def stoneGameV(self, stoneValue: List[int]) -> int:
        prefix = [0]
        for i in range(len(stoneValue)):
            prefix += [prefix[-1] + stoneValue[i]]
        print(prefix)
        
        @lru_cache(None)
        def dfs(left=0, right=len(prefix)-1):
            if right - left == 1: return 0
            
            maxval = -1
            for i in range(left+1, right):
                leftsum = prefix[i] - prefix[left]
                rightsum = prefix[right] - prefix[i]
                
                if leftsum > rightsum:
                    maxval = max(maxval, rightsum + dfs(i, right))
                elif rightsum > leftsum:
                    maxval = max(maxval, leftsum + dfs(left, i))
                else:
                    maxval = leftsum + max(dfs(left, i), dfs(i, right))
            
            return maxval
           
        return dfs()
```