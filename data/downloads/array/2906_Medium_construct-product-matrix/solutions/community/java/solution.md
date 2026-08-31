# [Java/C++/Python] Easy and Concise, O(1) Space

**Author:** lee215
**Votes:** 25
**Link:** [https://leetcode.com/problems/construct-product-matrix/solutions/4170783/](https://leetcode.com/problems/construct-product-matrix/solutions/4170783/)

---

# **Explanation**
`pre` is the prefix product from top-left to bottom-right.
`suf` is the suf product from bottom-right to top-left.
<br>

# **Complexity**
Time `O(n^2)`
Space `O(1)` except returned value.
<br>

**Java**
```java
    public int[][] constructProductMatrix(int[][] grid) {
        int n = grid.length, m = grid[0].length, A[][] = new int[n][m];
        long pre = 1, suf = 1, mod = 12345;
        for (int i = 0; i < n; i++) {
            if (i <= n - i - 1) {
                Arrays.fill(A[i], 1);
                Arrays.fill(A[n - i - 1], 1);
            }
            for (int j = 0; j < m; j++) {
                A[i][j] = (int)(pre * A[i][j] % mod);
                A[n - i - 1][m - j - 1] = (int)(suf * A[n - i - 1][m - j - 1] % mod);
                pre = pre * grid[i][j] % mod;
                suf = suf * grid[n - i - 1][m - j - 1] % mod;
            }
        }
        return A;
    }
```

**C++**
```cpp
    vector<vector<int>> constructProductMatrix(vector<vector<int>>& grid) {
        int n = grid.size(), m = grid[0].size();
        long pre = 1, suf = 1, mod = 12345;
        vector<vector<int>> A(n, vector<int>(m, 1));
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                A[i][j] = pre * A[i][j] % mod;
                A[n - i - 1][m - j - 1] = suf * A[n - i - 1][m - j - 1] % mod;
                pre = pre * grid[i][j] % mod;
                suf = suf * grid[n - i - 1][m - j - 1] % mod;
            }
        }
        return A;
    }
```

**Python**
```py
    def constructProductMatrix(self, grid: List[List[int]]) -> List[List[int]]:
        n, m = len(grid), len(grid[0])
        A = [[1] * m for r in grid]
        pre, suf, mod = 1, 1, 12345
        for i in range(n):
            for j in range(m):
                A[i][j] = A[i][j] * pre % mod
                A[~i][~j] = A[~i][~j] * suf % mod
                pre = pre * grid[i][j] % mod
                suf = suf * grid[~i][~j] % mod
        return A
```
