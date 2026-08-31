# Java DP Solution with Videos Explained

**Author:** strong_painkiller
**Votes:** 18
**Link:** [https://leetcode.com/problems/largest-1-bordered-square/solutions/345574/](https://leetcode.com/problems/largest-1-bordered-square/solutions/345574/)

---

# English
<iframe width="560" height="315" src="https://www.youtube.com/embed/MC41ZqLqhWU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Chinese
<iframe width="560" height="315" src="https://www.youtube.com/embed/7IkOZOwc-Mc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Code
```java
class Solution {
    public int largest1BorderedSquare(int[][] grid) {
        if (grid == null || grid.length == 0) return 0;
        int m = grid.length, n = grid[0].length;
        int[][][] dp = new int[m + 1][n + 1][2];
        int max = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    dp[i + 1][j + 1][0] = dp[i][j + 1][0] + 1;
                    dp[i + 1][j + 1][1] = dp[i + 1][j][1] + 1;

                    int len = Math.min(dp[i + 1][j + 1][0], dp[i + 1][j + 1][1]);
                    for (int k = len; k > max; k--) {
                        int len1 = Math.min(dp[i + 1 - k + 1][j + 1][1], dp[i + 1][j + 1 - k + 1][0]);
                        if (len1 >= k) {
                            max = Math.max(max, k);
                        }
                    }
                } else {
                    dp[i + 1][j + 1][0] = 0;
                    dp[i + 1][j + 1][1] = 0;
                }
            }
        }

        return max * max;
    }
}
```