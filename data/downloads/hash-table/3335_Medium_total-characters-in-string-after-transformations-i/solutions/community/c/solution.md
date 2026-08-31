# [Java/C++/Python] DP

**Author:** lee215
**Votes:** 21
**Link:** [https://leetcode.com/problems/total-characters-in-string-after-transformations-i/solutions/5973021/](https://leetcode.com/problems/total-characters-in-string-after-transformations-i/solutions/5973021/)

---

# **Intuition**
Transform characters `a,b,c..` to `0,1,2..` first.

# **Explanation**
`dp[i]` is the length of character `a` transformed `i` times

if `i >= 26`
`dp[i] = (dp[i - 26] + dp[i - 26 + 1]) % mod`

# **Complexity**
Init
Time `O(t)`
Space `O(t)`

solution
Time `O(n)`
Space `O(1)`

```java
    private int mod = 1000000007;
    private int[] dp = new int[100100];

    public Solution() {
        for (int i = 0; i < 26; ++i)
            dp[i] = 1;
        for (int i = 26; i < 100100; ++i)
            dp[i] = (dp[i - 26] + dp[i - 26 + 1]) % mod;
    }

    public int lengthAfterTransformations(String s, int t) {
        int res = 0, n = s.length();
        for (int i = 0; i < n; ++i)
            res = (res + dp[s.charAt(i) - 'a' + t]) % mod;
        return res;
    }
```

```C++ [C++]
    int mod = 1e9 + 7, dp[100100];
    Solution() {
        for (int i = 0; i < 26; ++i)
            dp[i] = 1;
        for (int i = 26; i < 100100; ++i)
            dp[i] = (dp[i - 26] + dp[i - 26 + 1]) % mod;
    }

    int lengthAfterTransformations(string s, int t) {
        int res = 0;
        for (char c : s) {
            res = (res + dp[c - 'a' + t]) % mod;
        }
        return res;
    }
```

```py [Python3]
mod = 10 ** 9 + 7
dp = [1] * 26 + [0] * 100100
for i in range(26, 100100):
    dp[i] = (dp[i - 26] + dp[i - 26 + 1]) % mod

class Solution:
    def lengthAfterTransformations(self, s: str, t: int) -> int:
        return sum(dp[ord(c) - ord('a') + t] for c in s) % mod
```

# **More**
Also check `O(log(t))` solution [here](https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/solutions/5972988/Python-Fast-Pow-O(log(t))/)
