# C# Solution for Path With Maximum Gold Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/path-with-maximum-gold/solutions/5154747/](https://leetcode.com/problems/path-with-maximum-gold/solutions/5154747/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this solution remains the same: to explore all possible paths starting from each cell with gold and keeping track of the maximum gold collected.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Iterate through each cell with gold.
2.	For each such cell, perform depth-first search (DFS) to explore all possible paths while keeping track of the maximum gold collected.
3.	During DFS, explore adjacent cells (up, down, left, right) and recursively continue the exploration.
4.	Mark visited cells and backtrack when necessary.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Let  m  be the number of rows and  n  be the number of columns in the grid.
\u2022	Since there are at most  25  cells containing gold, the worst-case time complexity is  O(4^k) , where  k  is the number of cells with gold.
\u2022	However, since the grid dimensions are bounded by  15 x 15 , the maximum value of  k  is  225 , which results in a feasible time complexity.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	The space complexity is  O(m x n)  due to the recursive DFS call stack and the auxiliary space used for marking visited cells.
\u2022	Similar to the time complexity, the grid dimensions are bounded by  15 x 15 , resulting in a reasonable space complexity.

# Code
```
public class Solution {
    public int GetMaximumGold(int[][] grid) {
        int maxGold = 0;
        
        for (int i = 0; i < grid.Length; i++) {
            for (int j = 0; j < grid[0].Length; j++) {
                if (grid[i][j] != 0) {
                    maxGold = Math.Max(maxGold, DFS(grid, i, j));
                }
            }
        }
        
        return maxGold;
    }
    private int DFS(int[][] grid, int i, int j) {
        if (i < 0 || i >= grid.Length || j < 0 || j >= grid[0].Length || grid[i][j] == 0) {
            return 0;
        }
        
        int currentGold = grid[i][j];
        grid[i][j] = 0; // Mark as visited
        
        int maxGold = 0;
        
        maxGold = Math.Max(maxGold, currentGold + DFS(grid, i + 1, j));
        maxGold = Math.Max(maxGold, currentGold + DFS(grid, i - 1, j));
        maxGold = Math.Max(maxGold, currentGold + DFS(grid, i, j + 1));
        maxGold = Math.Max(maxGold, currentGold + DFS(grid, i, j - 1));
        
        grid[i][j] = currentGold; // Backtrack
        
        return maxGold;
    }
}
```