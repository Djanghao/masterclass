# Traveling Salesman

**Author:** votrubac
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/solutions/1968727/](https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/solutions/1968727/)

---

This is a traveling salesman problem, so we have to do the full search. We need to memoise for the current city, and cities we have visited. For later, we can use a bit mask.

Note that we do not need to memoise for `k` - since it can be inferred from the bit mask.

> My code was originally accepted without memoisation with 4 ms runtime. Test cases seems weak; I got TLE for 16 nodes, 50 edges, and `k == 17`, 

We can also realize that `k` cannot be larger than `n - 1` - since we cannot visit a city more than once. So we can exit early if `k` is too large.

**C++**
```cpp
int dp[16][65536] = {};
int dfs(int i, vector<vector<array<int, 2>>> &al, int mask, int k) {
    if (k == 0)
        return 0;
    if (dp[i][mask] == 0) {
        dp[i][mask] = INT_MIN;
        for (auto [j, cost] : al[i])
            if (((1 << j) & mask) == 0)
                dp[i][mask] = max(dp[i][mask], cost + dfs(j, al, mask + (1 << j), k - 1));
    }
    return dp[i][mask];
}
int maximumCost(int n, vector<vector<int>>& highways, int k) {
    if (k > n - 1)
        return -1;
    vector<vector<array<int, 2>>> al(n);
    for (auto &h : highways) {
        al[h[0]].push_back({h[1], h[2]});
        al[h[1]].push_back({h[0], h[2]});
    }
    int res = INT_MIN;
    for (int i = 0; i < n; ++i)
        res = max(res, dfs(i, al, (1 << i), k));
    return res < 0 ? -1 : res;
}
```