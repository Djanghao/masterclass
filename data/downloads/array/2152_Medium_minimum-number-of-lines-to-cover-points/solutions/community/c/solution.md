# 0 ms

**Author:** votrubac
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-number-of-lines-to-cover-points/solutions/1832565/](https://leetcode.com/problems/minimum-number-of-lines-to-cover-points/solutions/1832565/)

---

It is a search problem - there isn't some smart way to join points.

However, we can be smart about the implementation to make it fast:
- For each point, we connect it to the remaining points, and group points on the same line by slope using a map.
- We represent points on the same line using a bit mask.

**C++**
I store the slope as pair of divident and divisor, normalized by GCD. Note that the divident carries the sign. We can use `double` instead - just need to watch for divison by zero.
```cpp
int dp[10][1024] = {};
map<pair<int, int>, int> slopes[10];
int dfs(int i, int mask) {
    if (i == 0)
        return mask;
    if ((mask & (1 << i)) == 0)
        return dfs(i - 1, mask);
    if (dp[i][mask] == 0)
        for (auto p: slopes[i])
            dp[i][mask] = min(dp[i][mask] ?: INT_MAX, 1 + dfs(i - 1, mask & (~p.second)));
    return dp[i][mask];
}
int minimumLines(vector<vector<int>>& ps) {
    auto slope = [](const auto &p1, const auto &p2) {
        int dx = p1[0] - p2[0], dy = p1[1] - p2[1], d = gcd(dy, dx);
        return pair<int, int>({(dx * dy >= 0 ? 1 : -1) * abs(dy) / d, abs(dx) / d});
    };
    for (int i = ps.size() - 1; i >= 0; --i)
        for (int j = 0; j < i; ++j)
            slopes[i][slope(ps[i], ps[j])] |= (1 << i) | (1 << j);
    return dfs(ps.size() - 1, (1 << ps.size()) - 1);        
}
```