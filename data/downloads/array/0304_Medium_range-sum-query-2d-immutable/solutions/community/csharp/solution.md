# C# Short answer Approach #3

**Author:** sree_lakshmi
**Votes:** 1
**Link:** [https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/4730627/](https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/4730627/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class NumMatrix {
    int[,] dp;

    public NumMatrix(int[][] matrix) {
        int m = matrix.Length;
        int n = matrix[0].Length;
        if(m == 0 || n == 0 ) return ;
        dp = new int[m+1, n+1];
        for(int i=1; i<=m ;i++){
            for(int j=1; j<=n; j++){
                dp[i,j] = dp[i-1,j] + dp[i,j-1] + matrix[i-1][j-1] - dp[i-1,j-1];
            }
        }
    }
    
    public int SumRegion(int row1, int col1, int row2, int col2) {
        return dp[row2+1, col2+1] - dp[row1, col2+1] - dp[row2+1, col1] + dp[row1,col1];
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix obj = new NumMatrix(matrix);
 * int param_1 = obj.SumRegion(row1,col1,row2,col2);
 */
```