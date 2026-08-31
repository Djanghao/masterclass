# [Java/C++/Python] DP Solution

**Author:** lee215
**Votes:** 91
**Link:** [https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/2807169/](https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/2807169/)

---

# **Explanation**
`dp[i] = dp[i - zero] + dp[i - one]`
<br>

# **Complexity**
Time `O(high)`
Space `O(high)`
<br>

**Java**
```java
    public int countGoodStrings(int low, int high, int zero, int one) {
        int dp[] = new int[high + 1], res = 0, mod = 1000000007;
        dp[0] = 1;
        for (int i = 1; i <= high; ++i) {
            if (i >= zero) dp[i] = (dp[i] + dp[i - zero]) % mod;
            if (i >= one) dp[i] = (dp[i] + dp[i - one]) % mod;
            if (i >= low) res = (res + dp[i]) % mod;
        }
        return res;
    }
```

**C++**
```cpp
    int countGoodStrings(int low, int high, int zero, int one) {
        vector<int> dp(high + 1);
        dp[0] = 1;
        int res = 0, mod = 1e9 + 7;
        for (int i = 1; i <= high; ++i) {
            if (i >= zero) dp[i] = (dp[i] + dp[i - zero]) % mod;
            if (i >= one) dp[i] = (dp[i] + dp[i - one]) % mod;
            if (i >= low) res = (res + dp[i]) % mod;
        }
        return res;
    }
```

**Python**
```py
    def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
        dp = Counter({0: 1})
        mod = 10 ** 9 + 7
        for i in range(1, high + 1):
            dp[i] = (dp[i - zero] + dp[i - one]) % mod
        return sum(dp[i] for i in range(low, high + 1)) % mod
```
