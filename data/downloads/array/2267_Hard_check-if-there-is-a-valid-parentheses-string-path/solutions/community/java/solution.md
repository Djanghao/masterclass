# [Java/C++/Python] DP Solution

**Author:** lee215
**Votes:** 38
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/solutions/2017872/](https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/solutions/2017872/)

---

# **Explanation**
For each ceel `A[i][j]`
we count the number of open parenthese for the path reaching `A[i][j]`.
If it's negative, it's not valid already.
Finally we check if there is a path to `A[m-1][n-1]` that has no open parenthese,
that means a valid parentheses string path reaching `A[m-1][n-1]`.
<br>

# **Optimisation**
I usually don't handle edge cases specially,
since they can be correctly handled by itself.
And usually the short cut only improve edge case, not general case,

Here are 3 quick fail case:
If `(n + m) % 2 == 0`, the length of path to `A[m-1][n-1]` is odd, can return false.
If `A[-1][-1] == '('`, no valid start can return false.
If `A[0][0] == ')'`, no valid end, can return false.
<br>

# **Complexity**
Time `O(mn(m+n))`
Space `O(mn(m+n))`
<br>

**Java**
Edited from @arignote solution.

Trick 1: 
A[i][j][0] for the path count -1,
A[i][j][1] for the path count 0, etc.
No need to handle negative specially.

Trick 2: 
Use something like `A[i+1] += A[i]` instead of `A[i] = A[i-1]`
No need to handle `i == 0` and `j == 0` specially.

Trick 3: 
`dp[m][n - 1]` and `dp[m - 1][n]` are from `dp[m - 1][n - 1]`,
return `dp[m][n - 1][1]` for the result.

```java
    public boolean hasValidPath(char[][] A) {
        int m = A.length, n = A[0].length;
        boolean[][][] dp = new boolean[m + 1][n + 1][103];
        dp[0][0][1] = true;
        for (int i = 0; i < m; ++i)
            for (int j = 0; j < n; ++j)
                for (int k = 1; k <= 101; ++k) {
                    dp[i][j + 1][k] |= dp[i][j][k + (A[i][j] == '(' ? -1 : 1)];
                    dp[i + 1][j][k] |= dp[i][j][k + (A[i][j] == '(' ? -1 : 1)];
                }
        return dp[m][n - 1][1];
    }
```
**C++**
Edited from @agrinote, explained above.
```cpp
    bool hasValidPath(vector<vector<char>>& A) {
        int m = A.size(), n = A[0].size(), maxk = (m + n + 1) / 2;
        vector<vector<vector<int>>> dp(m + 1, vector<vector<int>>(n + 1, vector<int>(maxk + 10)));
        dp[0][0][1] = 1;
        for (int i = 0; i < m; ++i)
            for (int j = 0; j < n; ++j)
                for (int k = 1; k <= maxk; ++k) {
                    dp[i][j + 1][k] |= dp[i][j][k + (A[i][j] == '(' ? -1 : 1)];
                    dp[i + 1][j][k] |= dp[i][j][k + (A[i][j] == '(' ? -1 : 1)];
                }
        return dp[m][n - 1][1];        
    }
```

**Python**
Using `set` are faster, since most path are not valid.
```py
    def hasValidPath(self, A):
        m, n = len(A), len(A[0])
        dp = defaultdict(set)
        dp[0, -1] = dp[-1, 0] = {0}
        for i in range(m):
            for j in range(n):
                d = 1 if A[i][j] == '(' else -1
                dp[i,j] |= {a + d for a in dp[i-1,j] | dp[i,j-1] if a + d >= 0}
        return 0 in dp[m - 1, n - 1]
```