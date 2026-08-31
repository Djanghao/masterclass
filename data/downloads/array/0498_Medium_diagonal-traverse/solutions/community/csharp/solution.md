# Super Easy and Understandable Solution in C#

**Author:** alexvenmil
**Votes:** 3
**Link:** [https://leetcode.com/problems/diagonal-traverse/solutions/4479083/](https://leetcode.com/problems/diagonal-traverse/solutions/4479083/)

---



# Code
```
public class Solution {
    public int[] FindDiagonalOrder(int[][] mat) 
    {
        if (mat == null || mat.Length == 0 || mat[0].Length == 0) 
        {
            return new int[0];
        }

        int m = mat.Length;
        int n = mat[0].Length;

        int[] result = new int[m * n];
        int index = 0;

        for (int sum = 0; sum <= m + n - 2; sum++) 
        {
            if (sum % 2 == 0) { // Even sum, go up
                for (int row = Math.Min(sum, m - 1); row >= 0 && sum - row < n; row--) 
                {
                    result[index++] = mat[row][sum - row];
                }
            } 
            else 
            { // Odd sum, go down
                for (int col = Math.Min(sum, n - 1); col >= 0 && sum - col < m; col--) 
                {
                    result[index++] = mat[sum - col][col];
                }
            }
        }

        return result;
    }
}
```