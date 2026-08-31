# 💥Beats 100% on runtime [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/stamping-the-grid/solutions/5977199/](https://leetcode.com/problems/stamping-the-grid/solutions/5977199/)

---

# Intuition
Determine if we can cover all occupied cells in a grid using rectangular stamps of varying sizes without overlapping any occupied cells. To achieve this, we need to check if each stamp can be placed in the grid at various positions and sizes while ensuring it does not overlap with cells that cannot be stamped.

# Approach
Check each grid cell to see if it can be covered by a stamp, attempt to place stamps of all possible sizes, recursively fill the grid, and backtrack if a configuration does not work.

# Complexity
- Time complexity:
O(n * m * sl * sh), where n is the number of rows, m is the number of columns, and sl and sh are the maximum dimensions of the stamp, because we might check every cell and every stamp size.

- Space complexity:
O(1) if we ignore the input size since we are using a constant amount of extra space for variables, but in terms of the recursion stack, it could go up to O(n * m) in the worst case due to recursive calls.

# Code
```csharp []
public class Solution
{
    // Checks if a stamp can be placed at position (i, j)
    private bool CanStamp(int i, int j, int[][] mat, int k, int l, int sl, int sh, int n, int m)
    {
        int start_i = i - k;
        int end_i = i + (sl - 1 - k);
        int start_j = j - l;
        int end_j = j + (sh - 1 - l);

        // Check for out of bounds
        if (start_i < 0 || start_j < 0 || end_i >= n || end_j >= m)
        {
            return false;
        }

        // Check if the stamp area overlaps with any occupied cells
        for (int d = start_i; d <= end_i; d++)
        {
            for (int e = start_j; e <= end_j; e++)
            {
                if (mat[d][e] == -1) // If it's occupied
                {
                    return false;
                }
            }
        }

        return true; // Can place the stamp
    }

    // Stamps the grid at position (i, j)
    private void Stamp(int i, int j, int[][] mat, int k, int l, int sl, int sh, int n, int m)
    {
        int start_i = i - k;
        int end_i = i + (sl - 1 - k);
        int start_j = j - l;
        int end_j = j + (sh - 1 - l);

        // Increment the values in the stamp area to mark it as covered
        for (int d = start_i; d <= end_i; d++)
        {
            for (int e = start_j; e <= end_j; e++)
            {
                mat[d][e]++;
            }
        }
    }

    // Removes the stamp from the grid at position (i, j)
    private void Unstamp(int i, int j, int[][] mat, int k, int l, int sl, int sh, int n, int m)
    {
        int start_i = i - k;
        int end_i = i + (sl - 1 - k);
        int start_j = j - l;
        int end_j = j + (sh - 1 - l);

        // Decrement the values in the stamp area to unmark it
        for (int d = start_i; d <= end_i; d++)
        {
            for (int e = start_j; e <= end_j; e++)
            {
                mat[d][e]--;
            }
        }
    }

    // Recursively fills the grid using stamps
    private bool FillTheMat(int i, int j, int[][] mat, int n, int m, int sl, int sh)
    {
        // If we have processed all rows
        if (i == n)
        {
            return true;
        }

        // Move to the next row if we reach the end of the current row
        if (j == m)
        {
            return FillTheMat(i + 1, 0, mat, n, m, sl, sh);
        }

        // If the current cell is already covered
        if (mat[i][j] != 0)
        {
            if (j == m - 1)
            {
                return FillTheMat(i + 1, 0, mat, n, m, sl, sh);
            }
            else
            {
                return FillTheMat(i, j + 1, mat, n, m, sl, sh);
            }
        }
        else
        {
            // Try every possible stamp size
            for (int k = 0; k < sl; k++)
            {
                for (int l = 0; l < sh; l++)
                {
                    if (CanStamp(i, j, mat, k, l, sl, sh, n, m))
                    {
                        Stamp(i, j, mat, k, l, sl, sh, n, m); // Place the stamp
                        // Recursively try to fill the next cell
                        bool canContinue = FillTheMat(i, j + 1, mat, n, m, sl, sh);
                        if (canContinue)
                        {
                            return true; // Successfully filled
                        }
                        Unstamp(i, j, mat, k, l, sl, sh, n, m); // Remove the stamp if it doesn't lead to a solution
                    }
                }
            }

            return false; // Could not fill the grid
        }
    }

    // Main function to determine if it's possible to stamp the grid
    public bool PossibleToStamp(int[][] mat, int sl, int sh)
    {
        int n = mat.Length;
        int m = mat[0].Length;

        // Convert occupied cells (1) to -1
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < m; j++)
            {
                if (mat[i][j] == 1)
                {
                    mat[i][j] = -1; // Mark occupied cells
                }
            }
        }

        // Start filling the matrix from the top-left corner
        return FillTheMat(0, 0, mat, n, m, sl, sh);
    }
}

```