# Solution for Setting Matrix Zeroes. Simple and Readable code. Beats 94.8% of users in memory

**Author:** ahmadov_03
**Votes:** 4
**Link:** [https://leetcode.com/problems/set-matrix-zeroes/solutions/5194707/](https://leetcode.com/problems/set-matrix-zeroes/solutions/5194707/)

---

# Intuition
When encountering a zero in a matrix, the problem requires setting its entire row and column to zeros. The challenge is to do this efficiently without using extra space for another matrix.

# Approach
    1. Identify Zero Positions: Traverse the matrix to find the positions of all zeros.
    2. Mark Rows and Columns: Use two sets to keep track of rows and columns that need to be zeroed.
    3. Set Zeroes: Iterate through the matrix again and set the necessary rows and columns to zero based on the recorded positions.

# Code
```
public class Solution {
    public void SetZeroes(int[][] matrix)
    {
        GetDimensions(matrix, out int _row, out int _col);
        if (GetPositionsOfZero(matrix, _row, _col, out HashSet<int> _rowPos, out HashSet<int> _colPos))
            for (int i = 0; i < _row; i++)
                for (int j = 0; j < _col; j++)
                    if (matrix[i][j] != 0 && (_rowPos.Contains(i) || _colPos.Contains(j)))
                        matrix[i][j] = 0;
    }
    private bool GetPositionsOfZero(int[][] matrix, int row, int col, out HashSet<int> rowPos, out HashSet<int> colPos)
    {
        rowPos = new();
        colPos = new();

        for (int i = 0; i < row; i++)
            for (int j = 0; j < col; j++)
                if (matrix[i][j] == 0)
                {
                    if (!rowPos.Contains(i))
                        rowPos.Add(i);
                    if (!colPos.Contains(j))
                        colPos.Add(j);
                }
        return rowPos.Any() && colPos.Any();
    }
    private void GetDimensions(int[][] matrix, out int rowCount, out int colCount)
    {
        rowCount = matrix.Length;
        colCount = matrix[0].Length;
    }
}
```
![Screenshot 2024-05-25 163214.png](./images/0.png)


![sadHamster.jpg](./images/1.jpeg)

Upvote Please

