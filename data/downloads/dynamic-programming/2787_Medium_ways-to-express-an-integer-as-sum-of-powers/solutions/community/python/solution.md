# [Java/C++/Python] DP

**Author:** lee215
**Votes:** 25
**Link:** [https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/solutions/3801788/](https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/solutions/3801788/)

---

# **Intuition**
The number of ways probelm,
we can solve by dp approach.
<br>

# **Explanation**
`dp[i]` mean the ways to present `i`.
`dp[i] = dp[i] + dp[i - v]` where `v = a ^ x`.
<br>

# **Complexity**
Time `O(nlogn)`
Space `O(n)`
<br>

**Java**
```java
    public int numberOfWays(int n, int x) {
        int dp[] = new int[301],  mod = 1000000007, v;
        dp[0] = 1;
        for (int a = 1; (v = (int)Math.pow(a, x)) <= n; a++)
            for (int i = n; i >= v; i--)
                dp[i] = (dp[i] + dp[i - v]) % mod;
        return dp[n];
    }
```

**C++**
```cpp
    int numberOfWays(int n, int x) {
        int dp[301] = {1}, mod = 1e9 + 7, v;
        for (int a = 1; (v = pow(a, x)) <= n; ++a)
            for (int i = n; i >= v; i--)
                dp[i] = (dp[i] + dp[i - v]) % mod;
        return dp[n];
    }
```

**Python**
```py
    def numberOfWays(self, n: int, x: int) -> int:
        dp = [1] + [0] * n
        a = 1
        mod = 10**9 + 7
        while (v := pow(a, x)) <= n:
            for i in range(n, v - 1, -1):
                dp[i] = (dp[i] + dp[i - v]) % mod
            a += 1
        return dp[n]
```
