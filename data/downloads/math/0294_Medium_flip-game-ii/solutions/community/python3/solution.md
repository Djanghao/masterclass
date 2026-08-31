# Python (Simple DP)

**Author:** rnotappl
**Votes:** 4
**Link:** [https://leetcode.com/problems/flip-game-ii/solutions/3389511/](https://leetcode.com/problems/flip-game-ii/solutions/3389511/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def canWin(self, currentState):
        @lru_cache(None)
        def dfs(s):
            if "++" not in s: return False
            for i in range(len(s)-1):
                if s[i:i+2] == "++" and not dfs(s[:i] + "--" + s[i+2:]):
                    return True

            return False

        return dfs(currentState)

        
        

        

            

        

        

        

        

        

```