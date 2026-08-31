# [Java/C++/Python] DP Solution

**Author:** lee215
**Votes:** 210
**Link:** [https://leetcode.com/problems/longest-ideal-subsequence/solutions/2390512/](https://leetcode.com/problems/longest-ideal-subsequence/solutions/2390512/)

---

# **Explanation**
`dp[c]` means the length of the longest ideal subsequence
ending with character `c`.

Iterate the character `i` in string `s`,
`c` can be the next character for string ending from `i - k` to `i + k`.
So that `dp[i] = max(dp[i-k], dp[i-k+1] ... , dp[i+k]) + 1`.

return the `max(dp)` as result.
<br>

# **Complexity**
Time `O(n)`
Space `O(128)`
<br>

**Java**
```java
    public int longestIdealString(String s, int k) {
        int res = 0, n = s.length(), dp[] = new int[150];
        for (int ci = 0; ci < n; ++ci) {
            int i = s.charAt(ci);
            for (int j = i - k; j <= i + k; ++j)
                dp[i] = Math.max(dp[i], dp[j]);
            res = Math.max(res, ++dp[i]);
        }
        return res;
    }
```

**C++**
```cpp
    int longestIdealString(string s, int k) {
        int dp[150] = {}, res = 0;
        for (auto& i : s) {
            for (int j = i - k; j <= i + k; ++j)
                dp[i] = max(dp[i], dp[j]);
            res = max(res, ++dp[i]);
        }
        return res;
    }
```

**Python**
Can be improved to O(128) space.
```py
    def longestIdealString(self, s, k):
        dp = [0] * 128
        for c in s:
            i = ord(c)
            dp[i] = max(dp[i - k : i + k + 1]) + 1
        return max(dp)
```