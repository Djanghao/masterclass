# [Java/C++/Python] DP Solution 🔥

**Author:** lee215
**Votes:** 166
**Link:** [https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/2648900/](https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/2648900/)

---

# **Explanation**
`lcs[i][j]` means the length of the longest common substring.
If `lcs[i][j] = k`,
then `s.substring(i, i + k) == s.substring(j, j + k)`
and `s.substring(i, i + k + 1) != s.substring(j, j + k + 1)`.
This can be done in `O(n^2)`.


`dp[i]` mean the the maximum number of operations to delete
the substring starting at `s[i]`.

If `lcs[i][j] >= j - i`,
`s.substring(i, j) == s.substring(j, j + j - i)`
this means we can delete the prefix `s.substring(i, j)` from `s.substring(i)`,
and it changes to `s.substring(j)`.
And we update `dp[i] = max(dp[i], dp[j] + 1)`
<br>

# **Complexity**
Time `O(n^2)`
Space `O(n^2)`
<br>

**Java**
```java
    public int deleteString(String s) {
        int n = s.length();
        int[][] lcs = new int[n + 1][n + 1];
        int[] dp = new int[n];
        for (int i = n - 1; i >= 0; --i) {
            lcs[i] = new int[n + 1];
            dp[i] = 1;
            for (int j = i + 1; j < n; ++j) {
                if (s.charAt(i) == s.charAt(j))
                    lcs[i][j] = lcs[i + 1][j + 1] + 1;
                if (lcs[i][j] >= j - i)
                    dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        return dp[0];
    }
```

**C++**
```cpp
    int deleteString(string s) {
        int n = s.size();
        vector<vector<int>> lcs(n + 1, vector<int>(n + 1, 0));
        vector<int> dp(n, 1);
        for (int i = n - 1; i >= 0; --i) {
            for (int j = i + 1; j < n; ++j) {
                if (s[i] == s[j])
                    lcs[i][j] = lcs[i + 1][j + 1] + 1;
                if (lcs[i][j] >= j - i)
                    dp[i] = max(dp[i], dp[j] + 1);
            }
        }
        return dp[0];
    }
```

**Python**
```py
    def deleteString(self, s):
        n = len(s)
		if (len(set(s)) == 1): return n
        lcs = [[0] * (n + 1) for i in range(n + 1)]
        dp = [1] * n
        for i in range(n-1, -1, -1):
            for j in range(i + 1, n):
                if s[i] == s[j]:
                    lcs[i][j] = lcs[i + 1][j + 1] + 1
                if lcs[i][j] >= j - i:
                    dp[i] = max(dp[i], dp[j] + 1)
        return dp[0]
```
