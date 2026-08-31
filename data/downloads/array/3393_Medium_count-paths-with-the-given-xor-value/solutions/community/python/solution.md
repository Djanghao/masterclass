# DP solution | Python

**Author:** wxy0925
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-paths-with-the-given-xor-value/solutions/6175645/](https://leetcode.com/problems/count-paths-with-the-given-xor-value/solutions/6175645/)

---

```
"""
Dynamic Programming



Ex-1
[0,0, 2]: 1
[0, 1, 3]: 1
[0, 2, 6]: 1;  3 ^ 5 = 011 ^ 101 = 110 = 6
[1, 0, 2 ^ 7]: 1
[2, 0, 2 ^7 ^ 12]: 1

[i, j, s] :=  number of valid paths, 0 <= s < 16 


return [m-1, n-1, k]


One option is to use a 3D array to do dp. 

More conveniently, we can use dictionary to do DP; 
caution: pay attention to the return format.

"""

class Solution:
    def countPathsWithXorValue(self, grid: List[List[int]], k: int) -> int:
        
        m, n = len(grid), len(grid[0])
        
        dp = collections.defaultdict(lambda: 0) # (i, j, s): n_paths
        
        
        # move to the right
        cur = 0
        for j in range(n):
            cur ^= grid[0][j]
            dp[0, j, cur] = 1
            
        # move down
        cur = grid[0][0]
        for i in range(1, m):
            cur ^= grid[i][0]
            dp[i, 0, cur] = 1
        
        # general dp update rule
        # to arrive at (i, j) <= (i-1, j) or (i, j-1)
        for i in range(1, m):
            for j in range(1, n):
                for s in range(16):
                    dp[i, j, s ^ grid[i][j]] += dp[i-1, j, s] + dp[i, j-1, s]
                    
        # dp[-1, -1, k] %  (10 ** 9 + 7); not proper here
        return dp[m-1, n-1, k] % (10 ** 9 + 7)
```