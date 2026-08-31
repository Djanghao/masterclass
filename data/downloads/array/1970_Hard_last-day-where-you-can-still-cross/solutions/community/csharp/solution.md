# C# Solution for Last Day where You can still Cross Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3698667/](https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3698667/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the solution is to use a binary search approach to find the last day where it is possible to cross from the top to the bottom by only walking on land cells. We start with the assumption that we can cross on the last day and perform a binary search to validate this assumption.

# Approach
<!-- Describe your approach to solving the problem. -->
The approach involves simulating the flooding process day by day and checking if it is still possible to traverse from the top row to the bottom row using only land cells. For each day, we update the grid by marking the flooded cells as 1.

To determine if it is possible to cross on a particular day, we perform a Depth-First Search (DFS) starting from any land cell in the top row and recursively explore neighboring land cells until either reaching the bottom row or finding a blocked path. If we can reach the bottom row, it means it is still possible to cross on that day.

The binary search is performed between the minimum and maximum possible days, narrowing down the search range until finding the last possible day.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the solution is O(log(N * M) * (N * M)), where N is the number of rows and M is the number of columns. The binary search has a time complexity of O(log(N * M)), and for each binary search iteration, we perform a DFS, which has a time complexity of O(N * M) in the worst case.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->The space complexity is O(N * M) to store the grid matrix, where N is the number of rows and M is the number of columns.

# Code
```
public class Solution {
    private int[][] directions = new int[][] { new int[] { 1, 0 }, new int[] { -1, 0 }, new int[] { 0, 1 }, new int[] { 0, -1 } };
    
    public bool CanCross(int row, int col, int[][] cells, int day) {
        int[][] grid = new int[row][];
        for (int i = 0; i < row; i++) {
            grid[i] = new int[col];
        }
        
        for (int i = 0; i < day; i++) {
            int r = cells[i][0] - 1;
            int c = cells[i][1] - 1;
            grid[r][c] = 1;
        }
        
        for (int i = 0; i < col; i++) {
            if (grid[0][i] == 0 && DFS(grid, 0, i, row, col)) {
                return true;
            }
        }
        
        return false;
    }

    private bool DFS(int[][] grid, int r, int c, int row, int col) {
        if (r < 0 || r >= row || c < 0 || c >= col || grid[r][c] != 0) {
            return false;
        }
        
        if (r == row - 1) {
            return true;
        }
        
        grid[r][c] = -1;
        
        foreach (int[] dir in directions) {
            int newR = r + dir[0];
            int newC = c + dir[1];
            if (DFS(grid, newR, newC, row, col)) {
                return true;
            }
        }
        
        return false;
    }

    public int LatestDayToCross(int row, int col, int[][] cells) {
        int left = 1;
        int right = row * col;
        
        while (left < right) {
            int mid = right - (right - left) / 2;
            if (CanCross(row, col, cells, mid)) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        
        return left;
    }
}

```