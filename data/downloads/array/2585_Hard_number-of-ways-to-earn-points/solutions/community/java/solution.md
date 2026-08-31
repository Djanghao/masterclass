# [Java/C++/Python] Knapsack DP

**Author:** lee215
**Votes:** 60
**Link:** [https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/3258120/](https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/3258120/)

---

# **Intuition**
Classical [Knapsack Problems](https://en.wikipedia.org/wiki/List_of_knapsack_problems)
<br>

# **Explanation**
`dp[i]` means the ways to reach `i` points.

Iterative each `[count, mark]` in question of all `types`.
we can do `1,2...,count` question right,
`dp[i]` can be reached from `dp[i - mark], dp[i - mark * 2] ... dp[i - mark * count]`.


Note that `dp[big]` depends on `dp[small]`,
if you change `dp[small]`first, we need to update `dp[big]` from old `dp[small]`.
So here I iterative from `dp[big]` to `dp[small]`.

We continuely do this and finally return `dp[target`.
<br>

# **Complexity**
Time `O(target * n * count)`
Space `O(target)`
<br>

**Java**
```java
    public int waysToReachTarget(int target, int[][] types) {
        int mod = (int)1e9 + 7, dp[] = new int[target + 1];
        dp[0] = 1;
        for (int[] t : types)
            for (int i = target; i > 0; --i)
                for (int k = 1; k <= t[0] && i - t[1] * k >= 0; ++k)
                    dp[i] = (dp[i] + dp[i - t[1] * k]) % mod;
        return dp[target];
    }
```

**C++**
```cpp
    int waysToReachTarget(int target, vector<vector<int>>& types) {
        vector<int> dp(target + 1);
        dp[0] = 1;
        int mod = 1e9 + 7;
        for (auto& t : types)
            for (int i = target; i > 0; --i)
                for (int k = 1; k <= t[0] && i - t[1] * k >= 0; ++k)
                    dp[i] = (dp[i] + dp[i - t[1] * k]) % mod;
        return dp[target];
    }
```

**Python**
```py
    def waysToReachTarget(self, target, types):
        dp = [1] + [0] * target
        mod = 10 ** 9 + 7
        for c,m in types:
            for i in range(target,-1,-1):
                for k in range(1, min(c, i // m) + 1):
                    dp[i] = (dp[i] + dp[i - m * k]) % mod
        return dp[-1]
```
