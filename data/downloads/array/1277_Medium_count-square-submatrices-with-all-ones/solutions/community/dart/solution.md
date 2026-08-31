# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-square-submatrices-with-all-ones/solutions/5973553/](https://leetcode.com/problems/count-square-submatrices-with-all-ones/solutions/5973553/)

---

![image.png](./images/0.png)

---

# Intuition
The goal is to count the number of square submatrices with all `1`s in a binary matrix. For each cell containing `1`, we want to determine the largest square that can end at that cell by looking at its neighboring cells in the row above, column to the left, and top-left diagonal.

# Approach
1. Use a dynamic programming (DP) approach where `dp[i][j]` represents the largest square of `1`s with its bottom-right corner at cell `(i, j)`.
2. If `matrix[i][j]` is `1`, update `dp[i][j]` as the minimum of the squares that can be formed by the three neighboring cells: above `(i-1, j)`, left `(i, j-1)`, and diagonal `(i-1, j-1)`, plus one.
3. Sum all values in the DP array to get the total count of squares.

# Complexity
- **Time Complexity**: \\(O(m \	imes n)\\), where `m` is the number of rows and `n` is the number of columns.
- **Space Complexity**: \\(O(m \	imes n)\\), as we store the DP array.

---

# Code

```dart []
import 'dart:math';

class Solution {
  int countSquares(List<List<int>> matrix) {
    int m = matrix.length;
    int n = matrix[0].length;
    List<List<int>> dp = List.generate(m, (_) => List.filled(n, 0));
    int totalSquares = 0;

    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
        if (matrix[i][j] == 1) {
          if (i == 0 || j == 0) {
            dp[i][j] = 1;
          } else {
            dp[i][j] = 1 + min(dp[i - 1][j], min(dp[i][j - 1], dp[i - 1][j - 1]));
          }
          totalSquares += dp[i][j];
        }
      }
    }
    return totalSquares;
  }
}
```

```java []
class Solution {
    public int countSquares(int[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;
        int[][] dp = new int[m][n];
        int totalSquares = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == 1) {
                    if (i == 0 || j == 0) {
                        dp[i][j] = 1;
                    } else {
                        dp[i][j] = 1 + Math.min(dp[i - 1][j], Math.min(dp[i][j - 1], dp[i - 1][j - 1]));
                    }
                    totalSquares += dp[i][j];
                }
            }
        }
        return totalSquares;
    }
}
```

```javascript []
var countSquares = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let dp = Array.from({ length: m }, () => Array(n).fill(0));
    let totalSquares = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 1) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
                }
                totalSquares += dp[i][j];
            }
        }
    }
    return totalSquares;
};
```

```python []
class Solution:
    def countSquares(self, matrix):
        m, n = len(matrix), len(matrix[0])
        dp = [[0] * n for _ in range(m)]
        total_squares = 0

        for i in range(m):
            for j in range(n):
                if matrix[i][j] == 1:
                    if i == 0 or j == 0:
                        dp[i][j] = 1
                    else:
                        dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
                    total_squares += dp[i][j]
        return total_squares
```

```cpp []
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int countSquares(vector<vector<int>>& matrix) {
        int m = matrix.size();
        int n = matrix[0].size();
        vector<vector<int>> dp(m, vector<int>(n, 0));
        int totalSquares = 0;

        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (matrix[i][j] == 1) {
                    if (i == 0 || j == 0) {
                        dp[i][j] = 1;
                    } else {
                        dp[i][j] = 1 + min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]});
                    }
                    totalSquares += dp[i][j];
                }
            }
        }
        return totalSquares;
    }
};
```

```go []
package main

import "math"

func countSquares(matrix [][]int) int {
    m := len(matrix)
    n := len(matrix[0])
    dp := make([][]int, m)
    for i := range dp {
        dp[i] = make([]int, n)
    }
    totalSquares := 0

    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if matrix[i][j] == 1 {
                if i == 0 || j == 0 {
                    dp[i][j] = 1
                } else {
                    dp[i][j] = 1 + int(math.Min(math.Min(float64(dp[i-1][j]), float64(dp[i][j-1])), float64(dp[i-1][j-1])))
                }
                totalSquares += dp[i][j]
            }
        }
    }
    return totalSquares
}
```

Each implementation efficiently computes the count of all possible squares with `1`s in the input matrix, following the DP approach.



---

![image.png](./images/1.png) {:style='width:250px'}

