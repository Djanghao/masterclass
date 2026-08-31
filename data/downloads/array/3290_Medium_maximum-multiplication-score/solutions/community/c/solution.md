# Best Time to Buy and Sell Stock

**Author:** votrubac
**Votes:** 39
**Link:** [https://leetcode.com/problems/maximum-multiplication-score/solutions/5788355/](https://leetcode.com/problems/maximum-multiplication-score/solutions/5788355/)

---

This problem is a simpler version of [188. Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/).

We do not need to sell, just buy 4 times.

> You may want to look at the Top-Down solution first if the Tabulation one is unclear. 

We maximize the profit for transaction `i`, considering profits from transaction `i-1` and `b[j]`. \xA0

Note that the "profit" depends on the transaction number (`a[i] * b[j]`).

## Tabulation
**C++**
```cpp
    vector<long long> t(4, -4LL * 100000 * 100000);
    for (long long n : b) {
        t[3] = max(t[3], t[2] + n * a[3]);
        t[2] = max(t[2], t[1] + n * a[2]);
        t[1] = max(t[1], t[0] + n * a[1]);
        t[0] = max(t[0], n * a[0]);
    }
    return t[3];
}
```
**Complexity Analysis**
- Time: O(n)
- Memory: O(1)

## Top-Down
**C++**
```cpp
vector<vector<long long>> dp;
long long dfs(int i, int j, vector<int>& a, vector<int>& b) {
    if (i >= a.size() || j >= b.size())
        return i == a.size() ? 0 : -4LL * 100000 * 100000;
    if (dp[i][j] == INT_MIN)
        dp[i][j] = max(dfs(i, j + 1, a, b), 
                       (long long)a[i] * b[j] + dfs(i + 1, j + 1, a, b));
    return dp[i][j];
} 
long long maxScore(vector<int>& a, vector<int>& b) {
    dp = vector<vector<long long>>(4, vector<long long>(b.size(), INT_MIN));
    return dfs(0, 0, a, b);
}
```
**Complexity Analysis**
- Time: O(n)
- Memory: O(n)

