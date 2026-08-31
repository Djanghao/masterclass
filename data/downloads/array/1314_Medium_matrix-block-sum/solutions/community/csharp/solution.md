# C# Prefix Sum Matrix

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-block-sum/solutions/5559427/](https://leetcode.com/problems/matrix-block-sum/solutions/5559427/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve this problem, we need to compute the sum of all elements within a k-radius block for each element in the matrix. A brute force approach would involve iterating over the possible ranges for each element, but this would be inefficient for large matrices. Instead, we can use a prefix sum matrix to optimize the calculation of the block sums.
___

# Approach
<!-- Describe your approach to solving the problem. -->
//  Prefix Sum Calculation:
//  *We create a prefix sum matrix prefix of size (m+1) x (n+1) to avoid boundary issues.
//  *Each element prefix[i][j] is computed as the sum of the element in the original matrix plus the sums 
//  from the previous row and column minus the overlap (which is added twice).
//  Block Sum Calculation:
//  *For each element in the matrix, we determine the boundaries of the k-radius block.
//  *Using the prefix sum matrix, we efficiently compute the sum of the elements within the defined block.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(m x n).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O( m x n).
___

# Code
```
public class Solution {
    public int[][] MatrixBlockSum(int[][] mat, int k) {
        int m = mat.Length;
        int n = mat[0].Length;
        
        int[][] prefix = new int[m + 1][];
        for (int i = 0; i <= m; i++) {
            prefix[i] = new int[n + 1];
        }
        
        // Compute prefix sum matrix
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                prefix[i][j] = mat[i - 1][j - 1] 
                             + prefix[i - 1][j] 
                             + prefix[i][j - 1] 
                             - prefix[i - 1][j - 1];
            }
        }
        
        int[][] result = new int[m][];
        for (int i = 0; i < m; i++) {
            result[i] = new int[n];
        }
        
        // Compute block sum for each element
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int r1 = Math.Max(0, i - k);
                int c1 = Math.Max(0, j - k);
                int r2 = Math.Min(m - 1, i + k);
                int c2 = Math.Min(n - 1, j + k);
                
                result[i][j] = prefix[r2 + 1][c2 + 1] 
                             - prefix[r1][c2 + 1] 
                             - prefix[r2 + 1][c1] 
                             + prefix[r1][c1];
            }
        }
        
        return result;
    }
}

```