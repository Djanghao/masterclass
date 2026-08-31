# [Java/C++/Python] Bottom Up DP

**Author:** lee215
**Votes:** 165
**Link:** [https://leetcode.com/problems/selling-pieces-of-wood/solutions/2168148/](https://leetcode.com/problems/selling-pieces-of-wood/solutions/2168148/)

---

# **Intuition**
Must cut across the **entire** height or width of the piece,
this leads up to the dp soluition.
<br>

# **Explanation**
For a piece of `w * h`,

we can make a vertical cut to split it into `a * h` and `(w - a) * h`
So we can update `dp[w][h] = max(dp[w][h], dp[a][h] + dp[w - a][h])`.

we can make a horizontal cut to split it into  `w * a` and `w * (h - a)`
So we can update `dp[w][h] = max(dp[w][h], dp[w][a] + dp[w][h - a])`.
<br>

# **Complexity**
Time `O(mmn + mnn)`
Space `O(mn)`
<br>

**Java**
```java
    public long sellingWood(int m, int n, int[][] prices) {
        long[][] dp = new long[m + 1][n + 1];
        for (int[] p : prices)
            dp[p[0]][p[1]] = p[2];
        for (int w = 1; w <= m; ++w) {
            for (int h = 1; h <= n; ++h) {
                for (int a = 1; a <= w / 2; ++a)
                    dp[w][h] = Math.max(dp[w][h], dp[a][h] + dp[w - a][h]);
                for (int a = 1; a <= h / 2; ++a)
                    dp[w][h] = Math.max(dp[w][h], dp[w][a] + dp[w][h - a]);
            }
        }
        return dp[m][n];
    }
```

**C++**
```cpp
    long long sellingWood(int m, int n, vector<vector<int>>& prices) {
        long long dp[201][201] = {};
        for (auto& p: prices)
            dp[p[0]][p[1]] = p[2];
        for (int w = 1; w <= m; ++w) {
            for (int h = 1; h <= n; ++h) {
                for (int a = 1; a <= w / 2; ++a)
                    dp[w][h] = max(dp[w][h], dp[a][h] + dp[w - a][h]);
                for (int a = 1; a <= h / 2; ++a)
                    dp[w][h] = max(dp[w][h], dp[w][a] + dp[w][h - a]);
            }
        }
        return dp[m][n];
    }
```

**Python**
```py
    def sellingWood(self, m, n, prices):
        dp = [[0] * (n + 1) for i in range(m+1)]
        for w, h, p in prices:
            dp[w][h] = p
        for w in range(1, m + 1):
            for h in range(1, n + 1):
                for a in range(1, w // 2 + 1):
                    dp[w][h] = max(dp[w][h], dp[a][h] + dp[w - a][h])
                for a in range(1, h // 2 + 1):
                    dp[w][h] = max(dp[w][h], dp[w][a] + dp[w][h - a])
        return dp[m][n]
```
