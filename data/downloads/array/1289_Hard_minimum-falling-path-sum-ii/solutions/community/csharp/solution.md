# C# | Runtime beats 96.43% [EXPLAINED]

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-falling-path-sum-ii/solutions/5796739/](https://leetcode.com/problems/minimum-falling-path-sum-ii/solutions/5796739/)

---

# Intuition
Imagine you\u2019re trying to find the cheapest way down a matrix, but you can\u2019t pick the same column two rows in a row. You need to keep track of the smallest costs but avoid picking from the same column where the cost was the lowest last time.

# Approach
Track Minimum Costs: For each row, keep track of the minimum and second minimum values and their column indices.

Update Costs: For each cell, decide if you should add it to the path based on whether it\u2019s in the same column as the minimum from the previous row.

Calculate Minimum Path: Use these updates to find the smallest path cost from top to bottom.

# Complexity
- Time complexity:
 O(n^2). We loop through each cell in the matrix.

- Space complexity:
O(n). We use extra space to keep track of minimums for the rows.

# Code
```csharp []
public class Solution {
    public int MinFallingPathSum(int[][] grid) {
        int n = grid.Length;
        if (n == 1) return grid[0][0];

        // Track minimum and second minimum values in each row
        int[] minRow = new int[n];
        int[] secondMinRow = new int[n];
        int[] minCol = new int[n];
        int[] secondMinCol = new int[n];
        int minValue = int.MaxValue;
        int secondMinValue = int.MaxValue;
        
        // Initialize minRow and secondMinRow for the first row
        for (int j = 0; j < n; j++) {
            minRow[j] = grid[0][j];
        }

        // Find minimum and second minimum for the first row
        for (int j = 0; j < n; j++) {
            if (minRow[j] < minValue) {
                secondMinValue = minValue;
                minValue = minRow[j];
                minCol[j] = 1;
            } else if (minRow[j] < secondMinValue) {
                secondMinValue = minRow[j];
                secondMinCol[j] = 1;
            }
        }
        
        // Process each row
        for (int i = 1; i < n; i++) {
            int[] newMinRow = new int[n];
            int newMinValue = int.MaxValue;
            int newSecondMinValue = int.MaxValue;
            int[] newMinCol = new int[n];
            int[] newSecondMinCol = new int[n];

            // Calculate new minimum and second minimum for the current row
            for (int j = 0; j < n; j++) {
                if (minRow[j] == minValue) {
                    newMinRow[j] = secondMinValue + grid[i][j];
                } else {
                    newMinRow[j] = minValue + grid[i][j];
                }

                if (newMinRow[j] < newMinValue) {
                    newSecondMinValue = newMinValue;
                    newMinValue = newMinRow[j];
                    newMinCol[j] = 1;
                } else if (newMinRow[j] < newSecondMinValue) {
                    newSecondMinValue = newMinRow[j];
                    newSecondMinCol[j] = 1;
                }
            }

            // Update minRow, minCol, secondMinRow, and secondMinCol for the next iteration
            minRow = newMinRow;
            minValue = newMinValue;
            secondMinValue = newSecondMinValue;
            minCol = newMinCol;
            secondMinCol = newSecondMinCol;
        }

        // Find the minimum value in the last row
        int result = int.MaxValue;
        for (int j = 0; j < n; j++) {
            result = Math.Min(result, minRow[j]);
        }

        return result;
    }
}

```