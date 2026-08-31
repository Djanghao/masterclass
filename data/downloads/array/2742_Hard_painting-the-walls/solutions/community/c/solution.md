# [Java/C++/Python] 7 lines, Knapsack DP

**Author:** lee215
**Votes:** 152
**Link:** [https://leetcode.com/problems/painting-the-walls/solutions/3650707/](https://leetcode.com/problems/painting-the-walls/solutions/3650707/)

---

# **Intuition**
There is a sense to use small `cost` to buy more `time`

So we can find that this is a Knapsack problem,
instead of value of items,
we calculate the minimum cost to buy enough time to finish `n` walls,
(time is also valuable)
<br>


# **Explanation**
With cost `cost[i]`,
we buy `time[i]`,
and we can additionally finish `time[i]` walls,
so actually can finish `time[i] + 1` walls.

So `cost[i]` to finish `time[i] + 1` walls,
we need the minimum total `cost` to finish `n` walls.


`dp[t] = c` means the minimum cost to finish `t` walls is `c`.

Initially `dp[0] = 0` and `dp[i > 0] = inf`

Iterate each `cost[i], time[i]`,
update `dp[j]` with this dp equation
`dp[j] = min(dp[j], dp[max(j - time[i] - 1, 0)] + cost[i])`


Finally return result `dp[n]`
<br>

# **Complexity**
Time `O(n^2)`
Space `O(n)`
<br>

**Java**
```java
    public int paintWalls(int[] cost, int[] time) {
        int n = cost.length, dp[] = new int[n + 1];
        Arrays.fill(dp, (int)1e9);
        dp[0] = 0;
        for (int i = 0; i < n; ++i)
            for (int j = n; j > 0; --j)
                dp[j] = Math.min(dp[j], dp[Math.max(j - time[i] - 1, 0)] + cost[i]);
        return dp[n];
    }
```

**C++**
```cpp
    int paintWalls(vector<int>& cost, vector<int>& time) {
        int n = cost.size();
        vector<int> dp(n + 1, 1e9);
        dp[0] = 0;
        for (int i = 0; i < n; ++i)
            for (int j = n; j > 0; --j)
                dp[j] = min(dp[j], dp[max(j - time[i] - 1, 0)] + cost[i]);
        return dp[n];
    }
```

**Python**
```py
    def paintWalls(self, cost: List[int], time: List[int]) -> int:
        n = len(cost)
        dp = [0] + [inf] * n
        for c, t in zip(cost, time):
            for j in range(n, 0, -1):
                dp[j] = min(dp[j], dp[max(j - t - 1, 0)] + c)
        return dp[n]
```
