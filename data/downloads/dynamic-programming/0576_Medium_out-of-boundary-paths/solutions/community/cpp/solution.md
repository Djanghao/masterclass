# ✅☑Beats 99% Users || [C++/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 91
**Link:** [https://leetcode.com/problems/out-of-boundary-paths/solutions/4626756/](https://leetcode.com/problems/out-of-boundary-paths/solutions/4626756/)

---

# PLEASE UPVOTE IF IT HELPED\r
\r
---\r
![Screenshot 2024-01-24 053349.png](./images/0.png)\r
\r
---\r
# Approaches\r
(Also explained in the code)\r
\r
1. **Initialization:**\r
\r
    - Initialize a 2D vector `dp` of size m x n to represent the number of ways to reach each cell.\r
    - Set the starting cell `(x, y)` to 1, as there is one way to reach it initially.\r
1. **Counting Paths:**\r
\r
    - Use a nested loop to iterate over the number of moves from 1 to N.\r
    - For each cell `(i, j)` in the grid:\r
        - If `(i, j)` is on the boundary, increment the `count` by the value of `dp[i][j]`. This accounts for paths going out of the grid.\r
        - Update `temp[i][j]` based on the sum of the ways to reach the adjacent cells in the previous state (`dp`).\r
        - Use modulo M to avoid integer overflow.\r
1. **Updating State:**\r
\r
    - Update the `dp` vector with the values from the `temp` vector for the next iteration.\r
1. **Return Result:**\r
\r
    - Return the final count, representing the total number of paths that lead out of the grid after N moves.\r
\r
\r
# Complexity\r
- Time complexity:\r
   $$O(Nmn)$$\r
*(dp array with dimensions m\xD7nm \	imes nm\xD7n NNN times)*\r
\r
- Space complexity:\r
   $$O(mn)$$\r
*(dp and temptemptemp array of size m\xD7nm \	imes nm\xD7n are used.)*\r
    \r
\r
\r
# Code\r
```C++ []\r
\r
class Solution {\r
public:\r
    int findPaths(int m, int n, int N, int x, int y) {\r
        const int M = 1000000000 + 7;\r
        vector<vector<int>> dp(m, vector<int>(n, 0));\r
        dp[x][y] = 1;\r
        int count = 0;\r
\r
        for (int moves = 1; moves <= N; moves++) {\r
            vector<vector<int>> temp(m, vector<int>(n, 0));\r
\r
            for (int i = 0; i < m; i++) {\r
                for (int j = 0; j < n; j++) {\r
                    if (i == m - 1) count = (count + dp[i][j]) % M;\r
                    if (j == n - 1) count = (count + dp[i][j]) % M;\r
                    if (i == 0) count = (count + dp[i][j]) % M;\r
                    if (j == 0) count = (count + dp[i][j]) % M;\r
                    temp[i][j] = (\r
                        ((i > 0 ? dp[i - 1][j] : 0) + (i < m - 1 ? dp[i + 1][j] : 0)) % M +\r
                        ((j > 0 ? dp[i][j - 1] : 0) + (j < n - 1 ? dp[i][j + 1] : 0)) % M\r
                    ) % M;\r
                }\r
            }\r
            dp = temp;\r
        }\r
\r
        return count;\r
    }\r
};\r
\r
\r
\r
\r
```\r
```Java []\r
class Solution {\r
    public int findPaths(int m, int n, int N, int x, int y) {\r
        final int M = 1000000000 + 7;\r
        int[][] dp = new int[m][n];\r
        dp[x][y] = 1;\r
        int count = 0;\r
\r
        for (int moves = 1; moves <= N; moves++) {\r
            int[][] temp = new int[m][n];\r
\r
            for (int i = 0; i < m; i++) {\r
                for (int j = 0; j < n; j++) {\r
                    if (i == m - 1) count = (count + dp[i][j]) % M;\r
                    if (j == n - 1) count = (count + dp[i][j]) % M;\r
                    if (i == 0) count = (count + dp[i][j]) % M;\r
                    if (j == 0) count = (count + dp[i][j]) % M;\r
                    temp[i][j] = (\r
                            ((i > 0 ? dp[i - 1][j] : 0) + (i < m - 1 ? dp[i + 1][j] : 0)) % M +\r
                            ((j > 0 ? dp[i][j - 1] : 0) + (j < n - 1 ? dp[i][j + 1] : 0)) % M\r
                    ) % M;\r
                }\r
            }\r
            dp = temp;\r
        }\r
\r
        return count;\r
    }\r
}\r
\r
\r
\r
```\r
```python3 []\r
class Solution:\r
    def findPaths(self, m: int, n: int, N: int, x: int, y: int) -> int:\r
        M = 1000000000 + 7\r
        dp = [[0] * n for _ in range(m)]\r
        dp[x][y] = 1\r
        count = 0\r
\r
        for moves in range(1, N + 1):\r
            temp = [[0] * n for _ in range(m)]\r
\r
            for i in range(m):\r
                for j in range(n):\r
                    if i == m - 1:\r
                        count = (count + dp[i][j]) % M\r
                    if j == n - 1:\r
                        count = (count + dp[i][j]) % M\r
                    if i == 0:\r
                        count = (count + dp[i][j]) % M\r
                    if j == 0:\r
                        count = (count + dp[i][j]) % M\r
                    temp[i][j] = (\r
                        ((dp[i - 1][j] if i > 0 else 0) + (dp[i + 1][j] if i < m - 1 else 0)) % M +\r
                        ((dp[i][j - 1] if j > 0 else 0) + (dp[i][j + 1] if j < n - 1 else 0)) % M\r
                    ) % M\r
\r
            dp = temp\r
\r
        return count\r
\r
\r
\r
```\r
```javascript []\r
var findPaths = function(m, n, N, x, y) {\r
    const M = 1000000000 + 7;\r
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));\r
    dp[x][y] = 1;\r
    let count = 0;\r
\r
    for (let moves = 1; moves <= N; moves++) {\r
        let temp = new Array(m).fill(0).map(() => new Array(n).fill(0));\r
\r
        for (let i = 0; i < m; i++) {\r
            for (let j = 0; j < n; j++) {\r
                if (i === m - 1) count = (count + dp[i][j]) % M;\r
                if (j === n - 1) count = (count + dp[i][j]) % M;\r
                if (i === 0) count = (count + dp[i][j]) % M;\r
                if (j === 0) count = (count + dp[i][j]) % M;\r
                temp[i][j] = (\r
                    ((i > 0 ? dp[i - 1][j] : 0) + (i < m - 1 ? dp[i + 1][j] : 0)) % M +\r
                    ((j > 0 ? dp[i][j - 1] : 0) + (j < n - 1 ? dp[i][j + 1] : 0)) % M\r
                ) % M;\r
            }\r
        }\r
        dp = temp;\r
    }\r
\r
    return count;\r
};\r
\r
\r
\r
```\r
---\r
\r
\r
\r
# PLEASE UPVOTE IF IT HELPED\r
\r
---\r
---\r
\r
\r
---