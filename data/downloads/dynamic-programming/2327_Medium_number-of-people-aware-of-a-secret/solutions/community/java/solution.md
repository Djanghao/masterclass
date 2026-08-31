# [Java/C++/Python] Sliding window, O(n) Time O(forget) Space

**Author:** lee215
**Votes:** 211
**Link:** [https://leetcode.com/problems/number-of-people-aware-of-a-secret/solutions/2229982/](https://leetcode.com/problems/number-of-people-aware-of-a-secret/solutions/2229982/)

---

# **Intuition**
Sliding window, calculatint the number of people who will share the secrets.
<br>

# **Explanation**
`dp[i]` means the number of people who found the secret on `i`th day.
`share` is the number of people who are going to share the secrets.
On the `i`th day,
`dp[i - delay]` people found the secret `delay` days before,
starting to share the secret.
so `share += dp[i - delay]`

`dp[i - forget]` people found the secret `forget` days before,
and forgot the secret today.
so `share -= dp[i - forget]`
and we assign `dp[i] = share`.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public int peopleAwareOfSecret(int n, int delay, int forget) {
        long dp[] = new long[n + 1], mod = (long)1e9 + 7, share = 0, res = 0;
        dp[1] = 1;
        for (int i = 2; i <= n; ++i)
            dp[i] = share = (share + dp[Math.max(i - delay, 0)] - dp[Math.max(i - forget, 0)] + mod) % mod;
        for (int i = n - forget + 1; i <= n; ++i)
            res = (res + dp[i]) % mod;
        return (int)res;
    }
```

**C++**
```cpp
    int peopleAwareOfSecret(int n, int delay, int forget) {
        vector<long> dp(n + 1);
        dp[1] = 1;
        int share = 0, mod = 1e9 + 7, res = 0 ;
        for (int i = 2; i <= n; ++i)
            dp[i] = share = (share + dp[max(i - delay, 0)] - dp[max(i - forget, 0)] + mod) % mod;
        for (int i = n - forget + 1; i <= n; ++i)
            res = (res + dp[i]) % mod;
        return res;
    }
```

**Python**
```py
    def peopleAwareOfSecret(self, n, delay, forget):
        dp = [1] + [0] * (n - 1)
        mod = 10 ** 9 + 7
        share = 0
        for i in range(1, n):
            dp[i] = share = (share + dp[i - delay] - dp[i - forget]) % mod
        return sum(dp[-forget:]) % mod
```
<br>

## **Solution2**
Time `O(n)`
Space `O(forget)`

**C++**
```cpp
    int peopleAwareOfSecret(int n, int delay, int forget) {
        vector<long> dp(forget);
        dp[0] = 1;
        long mod = 1e9 + 7, share = 0;
        for (int i = 1; i < n; ++i)
            dp[i % forget] = share = (share + dp[(i - delay + forget) % forget] - dp[i % forget] + mod) % mod;
        return accumulate(dp.begin(), dp.end(), 0L) % mod;
    }
```

**Python**
```py
    def peopleAwareOfSecret(self, n, delay, forget):
        dp = [1] + [0] * forget
        mod = 10 ** 9 + 7
        share = 0
        for i in range(1, n):
            dp[i % forget] = share = (share + dp[(i - delay) % forget] - dp[i % forget]) % mod
        return sum(dp) % mod
```
