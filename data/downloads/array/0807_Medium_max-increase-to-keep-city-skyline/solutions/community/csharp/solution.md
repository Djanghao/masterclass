# Easy and Fast Solution ✅ || 0ms - 100% beats ✅ || Fully Explained ✅

**Author:** akobirswe
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/3726051/](https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/3726051/)

---

# Approach
1. Initialize two arrays, `rowMax` and `colMax`, of size `n` to store the maximum height in each row and column, respectively.
2. Traverse the grid and update the `rowMax` array by finding the maximum height in each row.
3. Traverse the grid again, but this time update the `colMax` array by finding the maximum height in each column.
4. Initialize a variable `totalIncrease` to track the maximum total sum that the height of the buildings can be increased by without changing the skyline.
5. Traverse the grid once more, and for each building at coordinates `(r, c)`, calculate the maximum height that can be increased without affecting the skylines. This can be determined by taking the minimum value between `rowMax[r]` and `colMax[c]`.
6. Subtract the original height `grid[r][c]` from the calculated maximum height, and add it to `totalIncrease`.
7. Finally, return the value of `totalIncrease`, which represents the maximum total sum of increased building heights while preserving the skylines.

This approach ensures that the skylines from all cardinal directions remain unchanged while maximizing the increase in building heights.

# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {
    public int maxIncreaseKeepingSkyline(int[][] grid) {
        int n = grid.length;
        int[] rowMax = new int[n];
        int[] colMax = new int[n];
        
        // Find the maximum height in each row
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                rowMax[i] = Math.max(rowMax[i], grid[i][j]);
            }
        }
        
        // Find the maximum height in each column
        for (int j = 0; j < n; j++) {
            for (int i = 0; i < n; i++) {
                colMax[j] = Math.max(colMax[j], grid[i][j]);
            }
        }
        
        int totalIncrease = 0;
        
        // Calculate the maximum increase in building heights without changing the skylines
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int maxAllowedHeight = Math.min(rowMax[i], colMax[j]);
                totalIncrease += maxAllowedHeight - grid[i][j];
            }
        }
        
        return totalIncrease;
    }
}
```