# C# Explanation with comments | DP, Bottom-Up

**Author:** parthbadani
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximal-square/solutions/5047359/](https://leetcode.com/problems/maximal-square/solutions/5047359/)

---

# Intuition
There can be multiple possibilities. In order to figure out the max area, we need to didvide the problem into multiple subproblems.
Then, find the largest possible area.
So, DP!

# Approach
Square is formed with all 4 cells having value of 1. Thus, inorder to check if a particular cell will form a square, we need to check if its bottom, left and left-bottom cells are 1.

We create a separate dpGrid matrix (with an additional row and column with default value to handle first iteration).
The value of cell in dpGrid corresponding to matrix cell 1, will be determined by min(bottom, left, left-bottom) + 1.
This value will determine the side of square we will have at that cell.
For eg: dpGrid[i][j] = 3, it means we have a square of side 3 at that cell.

Algorithm:
- Create dpGrid array.
- Iterate through all rows and cols of the org matrix.
- If the cell value is 1, update dpGrid according to: min(bottom, left, left-bottom) + 1.
Also, update max value accordingly.
- Return max * max as the area.

# Complexity
- Time complexity:
O(M.N) -- 2 for loops.

- Space complexity:
O(M.N) -- 2D array.

# Code
```
public class Solution {
    public int MaximalSquare(char[][] matrix) {
        // 1 extra row and col for padding default values
        int[,] dpGrid = new int[matrix.Length + 1, matrix[0].Length + 1];

        int max = 0;
        for(int i = 1; i <= matrix.Length; i++)
        {
            for(int j = 1; j <= matrix[0].Length; j++)
            {
                if(matrix[i - 1][j - 1] == '1')
                    dpGrid[i, j] = Math.Min(Math.Min(dpGrid[i - 1, j], dpGrid[i, j - 1]), dpGrid[i - 1, j- 1]) + 1;
                max = Math.Max(max, dpGrid[i, j]);
            }
        }

        return max*max; // return area
    }
}
```