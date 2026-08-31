# Solution By Dare2Solve | Detailed Explanation | Clean Code

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5431786/](https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5431786/)

---

```Solution []
authorslog.vercel.app/blog/B7sGH3nZu6
```

# Code

```cpp []
class Solution {
public:
    int numberOfSubmatrices(vector<vector<char>>& grid) {
        int n = grid.size();
        int m = grid[0].size();
        int res = 0;
        
        vector<vector<int>> prefix(n + 1, vector<int>(m + 1, 0));
        vector<vector<bool>> hasX(n + 1, vector<bool>(m + 1, false));
        
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < m; ++j) {
                prefix[i + 1][j + 1] = prefix[i + 1][j] + prefix[i][j + 1] - prefix[i][j];
                hasX[i + 1][j + 1] = hasX[i + 1][j] || hasX[i][j + 1] || grid[i][j] == 'X';
                if (grid[i][j] == 'X') prefix[i + 1][j + 1]++;
                if (grid[i][j] == 'Y') prefix[i + 1][j + 1]--;
                if (prefix[i + 1][j + 1] == 0 && hasX[i + 1][j + 1]) ++res;
            }
        }
        
        return res;
    }
};
```

```python []
class Solution:
    def numberOfSubmatrices(self, grid: List[List[str]]) -> int:
        n = len(grid)
        m = len(grid[0])
        res = 0
        
        prefix = [[0] * (m + 1) for _ in range(n + 1)]
        hasX = [[False] * (m + 1) for _ in range(n + 1)]
        
        for i in range(n):
            for j in range(m):
                prefix[i + 1][j + 1] = prefix[i + 1][j] + prefix[i][j + 1] - prefix[i][j]
                hasX[i + 1][j + 1] = hasX[i + 1][j] or hasX[i][j + 1] or grid[i][j] == 'X'
                if grid[i][j] == 'X':
                    prefix[i + 1][j + 1] += 1
                if grid[i][j] == 'Y':
                    prefix[i + 1][j + 1] -= 1
                if prefix[i + 1][j + 1] == 0 and hasX[i + 1][j + 1]:
                    res += 1
        
        return res
```

```java []
class Solution {
    public int numberOfSubmatrices(char[][] grid) {
        int n = grid.length;
        int m = grid[0].length;
        int res = 0;
        
        int[][] prefix = new int[n + 1][m + 1];
        boolean[][] hasX = new boolean[n + 1][m + 1];
        
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < m; ++j) {
                prefix[i + 1][j + 1] = prefix[i + 1][j] + prefix[i][j + 1] - prefix[i][j];
                hasX[i + 1][j + 1] = hasX[i + 1][j] || hasX[i][j + 1] || grid[i][j] == 'X';
                if (grid[i][j] == 'X') prefix[i + 1][j + 1]++;
                if (grid[i][j] == 'Y') prefix[i + 1][j + 1]--;
                if (prefix[i + 1][j + 1] == 0 && hasX[i + 1][j + 1]) ++res;
            }
        }
        
        return res;
    }
}
```

```javascript []
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numberOfSubmatrices = function (grid) {
  var n = grid.length;
  var m = grid[0].length;
  var res = 0;
  var prefix = Array.from({ length: n + 1 }, () => new Int32Array(m + 1));
  var hasX = Array.from({ length: n + 1 }, () => new Uint8Array(m + 1));

  for (var i = 0; i < n; ++i) {
    for (var j = 0; j < m; ++j) {
      prefix[i + 1][j + 1] = prefix[i + 1][j] + prefix[i][j + 1] - prefix[i][j];
      hasX[i + 1][j + 1] = hasX[i + 1][j] || hasX[i][j + 1] || grid[i][j] === "X"
      if (grid[i][j] === "X") prefix[i + 1][j + 1]++;
      if (grid[i][j] === "Y") prefix[i + 1][j + 1]--;
      if (prefix[i + 1][j + 1] === 0 && hasX[i + 1][j + 1]) ++res;
    }
  }

  return res;
};
```