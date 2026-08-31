# [Java/C++/Python] DP, O(n + m)

**Author:** lee215
**Votes:** 83
**Link:** [https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/3934188/](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/3934188/)

---

# **Intuition**
Easier version of [1235. Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/discuss/409009/JavaC%2B%2BPython-DP-Solution),
we use dp to solve this problem.

`dp[i]` means the maximum golds for `i` first house,
Initially `dp[0] = 0`,
no house sold no money.

Since the `O(mlogm)` solution is detailed given in the link above,
not the scope for this post,
we will discuss `O(n + m)` solution here.
<br>

# **Explanation**
Firstlywe itearate `offers`,
and arange `offers` in a list `m`,
where `m[end]` is the list of offers ending at `end`.

Secondly we go through `end` from `1` to `n`,
For each `end`,
we initialize `dp[end] = dp[end - 1]`,
since we can remain the `end`th house.
Then we check each offer ending at `end`,
we update `dp[end] = max(dp[end], dp[start] + gold)`

Finally we return `dp[n]` as result.
<br>

# **Complexity**
Time `O(n + offers)`
Space `O(offers)`
<br>

**Java**
```java
    public int maximizeTheProfit(int n, List<List<Integer>> offers) {
        int[] dp = new int[n + 1];
        List<List<List<Integer>>> m = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            m.add(new ArrayList<List<Integer>>());
        }
        for (List<Integer> a : offers) {
            m.get(a.get(1)).add(a);
        }
        for (int e = 1; e <= n; e++) {
            dp[e] = dp[e - 1];
            for (List<Integer> a : m.get(e - 1)) {
                dp[e] = Math.max(dp[e], dp[a.get(0)] + a.get(2));
            }
        }
        return dp[n];
    }
```

**C++**
```cpp
    int maximizeTheProfit(int n, vector<vector<int>>& offers) {
        vector<int> dp(n + 1);
        vector<vector<vector<int>>> m(n);
        for (auto& a : offers) {
            m[a[1]].push_back(a);
        }
        for (int e = 1; e <= n; e++) {
            dp[e] = dp[e - 1];
            for (auto& a : m[e - 1]) {
                dp[e] = max(dp[e], dp[a[0]] + a[2]);
            }
        }
        return dp[n];
    }
```

**Python**
```py
    def maximizeTheProfit(self, n: int, offers: List[List[int]]) -> int:
        dp = [0] * (n + 1)
        m = [[] for _ in range(n)]
        for s,e,g in offers:
            m[e].append([s,g])
        for e in range(1, n + 1):
            dp[e] = dp[e - 1]
            for s, g in m[e - 1]:
                dp[e] = max(dp[e], dp[s] + g)
        return dp[-1]
```
<br>

# More DP problems
Here is small DP problem list.
Good luck and have fun.
- 2830. [Maximize the Profit as the Salesman](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/discuss/3934188/JavaC%2B%2BPython-DP)
- 2008. [Maximum Earnings From Taxi](https://leetcode.com/problems/maximum-earnings-from-taxi/discuss/1470941/JavaC%2B%2BPython-DP-solution)
- 1751. [Maximum Number of Events That Can Be Attended II](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/discuss/1052581/Python-DP)
- 1235. [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/discuss/409009/Python-DP-Solution)
<br>