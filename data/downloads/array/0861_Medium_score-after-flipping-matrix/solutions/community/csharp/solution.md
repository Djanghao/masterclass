# C# Solution for Score After Flipping Matrix Problem

**Author:** Aman_Raj_Sinha
**Votes:** 5
**Link:** [https://leetcode.com/problems/score-after-flipping-matrix/solutions/5150222/](https://leetcode.com/problems/score-after-flipping-matrix/solutions/5150222/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the solution is to maximize the score by toggling rows and columns strategically.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Toggle rows to start with 1: Initially, we iterate through each row to ensure that the leftmost bit in each row is 1, maximizing its value.
2.	Maximize column scores: Then, we iterate through each column (except the first one) to maximize its score. We toggle a column if the number of 1s in that column is less than the number of 0s.
3.	Calculate the score: Finally, we interpret each row as a binary number and sum them up to get the total score.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	The toggling of rows and columns takes O(mn) time.
\u2022	Calculating the score takes O(mn) time as well.
\u2022	Thus, the overall time complexity is O(mn).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1) as we\u2019re modifying the input grid in place without using any additional data structures of significant size.

# Code
```
public class Solution {
    public int MatrixScore(int[][] grid) {
        int m = grid.Length;
        int n = grid[0].Length;
        
        // First, toggle rows to ensure the leftmost bit in each row is 1
        for (int i = 0; i < m; i++) {
            if (grid[i][0] == 0) {
                ToggleRow(grid, i);
            }
        }
        
        // Next, toggle columns to maximize each column's score
        for (int j = 1; j < n; j++) {
            int countOnes = 0;
            for (int i = 0; i < m; i++) {
                countOnes += grid[i][j];
            }
            if (countOnes < m - countOnes) {
                ToggleColumn(grid, j);
            }
        }
        
        // Calculate the score
        int score = 0;
        foreach (var row in grid) {
            int rowScore = 0;
            foreach (var bit in row) {
                rowScore = (rowScore << 1) + bit;
            }
            score += rowScore;
        }
        return score;
    }
    private void ToggleRow(int[][] grid, int row) {
        for (int j = 0; j < grid[row].Length; j++) {
            grid[row][j] = 1 - grid[row][j];
        }
    }
    
    private void ToggleColumn(int[][] grid, int col) {
        for (int i = 0; i < grid.Length; i++) {
            grid[i][col] = 1 - grid[i][col];
        }
    }
}
```