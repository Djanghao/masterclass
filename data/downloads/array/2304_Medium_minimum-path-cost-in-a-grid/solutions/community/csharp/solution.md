# C# Solution | DFS | Memorization | O(mn)

**Author:** anshulgarg904
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/4792858/](https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/4792858/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$ O(mn) $$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$ O(mn) $$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    int[][] dp;
    int lastRow;

    public int MinPathCost(int[][] grid, int[][] moveCost) {
        int m = grid.Length, n = grid[0].Length;
        lastRow = m - 1;
        dp = new int[m][];

        for(int i=0; i<m; i++){
            dp[i] = new int[n];
            Array.Fill(dp[i], int.MaxValue);
        }

        int res = int.MaxValue;

        for(int i=0; i<n; i++){
            res = Math.Min(res, DFS(grid, moveCost, 0, i));
        }
        
        return res;
    }

    private int DFS(int[][] grid, int[][] moveCost, int i, int j){
        if(i >= lastRow){
            return grid[i][j];
        }

        if(dp[i][j] != int.MaxValue){
            return dp[i][j];
        }

        int curr = grid[i][j], nextRow = i+1;

        for(int k=0; k<grid[0].Length; k++){
            dp[i][j] = Math.Min(dp[i][j], curr + moveCost[curr][k] + DFS(grid, moveCost, nextRow, k));
        }

        return dp[i][j];
    }
}
```