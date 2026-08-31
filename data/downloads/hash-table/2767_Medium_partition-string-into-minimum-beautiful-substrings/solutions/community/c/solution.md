# [Java/C++/Python] DP

**Author:** lee215
**Votes:** 89
**Link:** [https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3737219/](https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3737219/)

---

# **Intuition**
Split an string/array into multiple sections,
can apply a `O(n^2)` dp,
`dp[i]` is the result for `i` first elements.
<br>

# **Explanation**
If `s[i], s[i+1]..s[j]` is pow of 5,
then `dp[j + 1] = min(dp[j + 1], dp[i] + 1)`
where `dp[j]` means the minimum partition for `j` first letters.

To check if `cur` value is pow of 5,
we can check if `15625 % cur == 0`,
where `15625` is the biggest pow of 5 with 15 bits.
<br>

# **Complexity**
Time `O(n^2)`
Space `O(n)`
<br>

**Java**
```java
    public int minimumBeautifulSubstrings(String s) {
        int n = s.length(), dp[] = new int[n + 1];
        Arrays.fill(dp, n + 1);
        dp[0] = 0;
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) == '0') continue;
            for (int j = i, cur = 0; j < n; j++) {
                cur = cur * 2 + s.charAt(j) - '0';
                if (15625 % cur == 0)
                    dp[j + 1] = Math.min(dp[j + 1], dp[i] + 1);
            }
        }
        return dp[n] > n ? -1 : dp[n];
    }
```

**C++**
```cpp
    int minimumBeautifulSubstrings(string s) {
        int n = s.length();
        vector<int> dp(n + 1, n + 1);
        dp[0] = 0;
        for (int i = 0; i < n; i++) {
            if (s[i] == '0') continue;
            for (int j = i, cur = 0; j < n; j++) {
                cur = cur * 2 + s[j] - '0';
                if (15625 % cur == 0)
                    dp[j + 1] = min(dp[j + 1], dp[i] + 1);
            }
        }
        return dp[n] > n ? -1 : dp[n];
    }
```

**Python**
```py
    def minimumBeautifulSubstrings(self, s: str) -> int:
        n = len(s)
        dp = [0] + [inf] * n
        for i in range(n):
            if s[i] == '1':
                cur = 0
                for j in range(i, n):
                    cur = cur * 2 + int(s[j])
                    if 15625 % cur == 0:
                        dp[j + 1] = min(dp[j + 1], dp[i] + 1)
        return dp[n] if dp[n] < inf else -1
```
