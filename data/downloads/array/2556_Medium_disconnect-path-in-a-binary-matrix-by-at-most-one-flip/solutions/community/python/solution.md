# DFS | Python3 | O(m*n) Time | O(1) Space

**Author:** sineshashi
**Votes:** 6
**Link:** [https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/3141488/](https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/3141488/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If we need to disconnect them then we just need to block the node which we visit. If still we can reach the end node more than once, then we can not disconnect them in a single flip.

# Approach
<!-- Describe your approach to solving the problem. -->
Use DFS to traverse the graph and block the point once visited by setting it to zero.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n*m)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
class Solution:
    def isPossibleToCutPath(self, grid: List[List[int]]) -> bool:
        m, n = len(grid), len(grid[0])
        if m == 1 and n == 2:
            return False
        
        
        def dfs(i=0,j=0):
            if i == m-1 and j == n-1:
                return True
            
            if i >= m or j >= n or grid[i][j]==0:
                return False
            
            grid[i][j]=0 #Blocking the point. So we do not visit it later.
            
            if (i, j) != (0, 0):
                #If we are not at start, we need to only check that whether this path leads to the end or not. We do not need to check whether more than one path leads to the end or not because if we flip this point, all the paths will be blocked going through the point.
                if dfs(i+1, j):
                    return True
                return dfs(i, j+1)

            #In case of start, if only one path leads to end, we can flip that so to be impossible in one flip both the paths must go to the end.
            return not(dfs(i+1, j) and dfs(i, j+1))
            
        return dfs()
            
```