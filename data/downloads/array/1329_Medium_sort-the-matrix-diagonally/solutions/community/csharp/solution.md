# C# Diagonal Traversal and Sort Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/5563573/](https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/5563573/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->o solve the problem of sorting each diagonal of a matrix in ascending order, we can follow these steps:

Identify all diagonals in the matrix.
Extract the elements of each diagonal.
Sort the elements of each diagonal.
Place the sorted elements back into the corresponding diagonal positions in the matrix.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  SortDiagonal Function: This helper function sorts a single diagonal starting from a given row and 
//  column. It:
//  *Extracts all the elements in the diagonal into a list.
//  *Sorts the list.
//  *Places the sorted elements back into the matrix.
//  Main Function:
//  *It iterates over all starting positions of diagonals that begin in the first column (row = 0 to m-1).
//  *It iterates over all starting positions of diagonals that begin in the first row (col = 1 to n-1), 
//  excluding the diagonal that starts at (0,0) because it was already handled.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O((m + n) x min(m,n) log(min(m,n))). This is because there are m + n - 1 diagonals and each diagonal can be sorted in O(min(m,n)log(min(m,n))) time.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(min(m,n)).
___

# Code
```
using System;
using System.Collections.Generic;

public class Solution {
    public int[][] DiagonalSort(int[][] mat) {
        int m = mat.Length;
        int n = mat[0].Length;

        // Function to sort a diagonal starting from (row, col)
        void SortDiagonal(int row, int col) {
            List<int> diagonal = new List<int>();

            int r = row, c = col;
            while (r < m && c < n) {
                diagonal.Add(mat[r][c]);
                r++;
                c++;
            }

            diagonal.Sort();

            r = row;
            c = col;
            foreach (int value in diagonal) {
                mat[r][c] = value;
                r++;
                c++;
            }
        }

        // Sort all diagonals starting from the first column
        for (int row = 0; row < m; row++) {
            SortDiagonal(row, 0);
        }

        // Sort all diagonals starting from the first row (excluding the first diagonal)
        for (int col = 1; col < n; col++) {
            SortDiagonal(0, col);
        }

        return mat;
    }
}
```