# C# Greedy Dynamic Programming Approach

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/5661270/](https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/5661270/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve the problem of counting the number of submatrices with all ones in a binary matrix, we can use a combination of dynamic programming and a greedy approach. The key idea is to compute the number of valid submatrices that end at each cell (i, j) in the matrix.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Height calculation:
//  *The height[i, j] array stores the number of consecutive 1's in column j ending at row i.
//  *For each cell (i, j), if mat[i][j] is 1, the height is 1 + height[i-1, j]. If it's the first row, the 
//  height is simply 1.
//  Counting Submatricies:
//  *For each cell (i, j), we iterate over all columns k from j to 0 and calculate the minimum height 
//  encountered. This gives us the number of submatrices ending at (i, j) with width (j - k + 1) and height 
//  equal to the minimum height.
//  *We sum up these counts to get the total number of submatrices that end at (i, j).
//  Final Result: The total count of submatricies with all ones is obtained by summing up all the counts for
//  every cell in the matrix.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(m x n^2), where m is the number of rows and n is the number of columns.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(m x n).
___

# Code
```csharp []
public class Solution {
    public int NumSubmat(int[][] mat) {
        int m = mat.Length;
        int n = mat[0].Length;
        int[,] height = new int[m, n];

        // Calculate height of consecutive 1's for each column
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (mat[i][j] == 1) {
                    height[i, j] = (i == 0) ? 1 : height[i - 1, j] + 1;
                }
            }
        }

        int count = 0;

        // Calculate the number of submatricies that can be formed ending at each cell
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int minHeight = int.MaxValue;
                for (int k = j; k >= 0; k--) {
                    minHeight = Math.Min(minHeight, height[i, k]);
                    if (minHeight == 0) break;
                    count += minHeight;
                }
            }
        }

        return count;
    }
}
```