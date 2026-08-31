# Solution

**Author:** deleted_user
**Votes:** 38
**Link:** [https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/2997533/](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/2997533/)

---

```C++ []
class Solution {
public:
    int m, n;
    short path[200][200];
    
    int longestIncreasingPath(vector<vector<int>>& matrix) {
        m = matrix.size();
        n = matrix[0].size();

        memset(path, 0, sizeof(path));
    
        int max_path = 1;
        for(int i = 0; i < m; i++)
            for(int j = 0; j < n; j++)
                max_path = max(max_path, dfs(i, j, matrix));

        return max_path;
    }

    int dfs(int i, int j, vector<vector<int>>& mat) {
        if(path[i][j] >   0) return path[i][j];
        if(path[i][j] == -1) return 0;
        int max_next = 0;
        path[i][j] = -1;
        if(i > 0   && mat[i][j] < mat[i-1][j]) max_next = max(max_next, dfs(i-1, j, mat));
        if(j > 0   && mat[i][j] < mat[i][j-1]) max_next = max(max_next, dfs(i, j-1, mat));
        if(i < m-1 && mat[i][j] < mat[i+1][j]) max_next = max(max_next, dfs(i+1, j, mat));
        if(j < n-1 && mat[i][j] < mat[i][j+1]) max_next = max(max_next, dfs(i, j+1, mat));
        return path[i][j] = 1 + max_next;
    }

public:
    Solution() {
        ios_base::sync_with_stdio(false);
        cin.tie(nullptr);
        wcin.tie(nullptr);
        cerr.tie(nullptr);
        wcerr.tie(nullptr);
        clog.tie(nullptr);
        wclog.tie(nullptr);
    }
};
```

```Python3 []
class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        if not matrix or not matrix[0]:
            return 0
        rows, cols = len(matrix), len(matrix[0])
        dp =[[0] * cols for i in range(rows)]
        def dfs(i, j):
            if not dp[i][j]:
                val = matrix[i][j]
                dp[i][j] = 1 + max(
                    dfs(i - 1, j) if i and val > matrix[i - 1][j] else 0,
                    dfs(i + 1, j) if i < rows - 1 and val > matrix[i + 1][j] else 0,
                    dfs(i, j - 1) if j and val > matrix[i][j - 1] else 0,
                    dfs(i, j + 1) if j < cols - 1 and val > matrix[i][j + 1] else 0)
            return dp[i][j]
        
        for r in range(rows):
            for c in range(cols):
                dfs(r,c)
        return max(max(x) for x in dp)
```

```Java []
class Solution {
    public int longestIncreasingPath(int[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;
        int[][] dp = new int[m][n];
        for (int d[] : dp) Arrays.fill(d, -1);
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (dp[i][j] == -1) dfs(matrix, dp, m, n, i, j, -1);
            }
        }
        int max = Integer.MIN_VALUE;
        for (int[] d : dp) {
            for (int i : d) max = Math.max(i, max);
        }
        return max;
    }

    public int dfs(
        int[][] matrix,
        int[][] dp,
        int m,
        int n,
        int i,
        int j,
        int parent
    ) {
        if (
            i >= m || j >= n || i < 0 || j < 0 || matrix[i][j] <= parent
        ) return 0;
        parent = matrix[i][j];
        if (dp[i][j] != -1) return dp[i][j];
        int left = dfs(matrix, dp, m, n, i, j - 1, parent);
        int right = dfs(matrix, dp, m, n, i, j + 1, parent);
        int bottom = dfs(matrix, dp, m, n, i + 1, j, parent);
        int top = dfs(matrix, dp, m, n, i - 1, j, parent);
        dp[i][j] = 1 + Math.max(Math.max(left, right), Math.max(top, bottom));
        return dp[i][j];
    }
}
```
