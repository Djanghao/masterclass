# Bag of Tricks

**Author:** votrubac
**Votes:** 137
**Link:** [https://leetcode.com/problems/stamping-the-grid/solutions/1676509/](https://leetcode.com/problems/stamping-the-grid/solutions/1676509/)

---

The mechanics of this solution is based on [304. Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/). We will use `pref2d` and `sum2d` functions from there to precompute 2D prefix array, and get a sum of elements in the `m * n` area in O(1).

You can stamp a `m * n` area if the sum of all elements in that area is zero (no blocked cells). We calculate the prefix sum matrix `pref` for our grid, and use the range sum 2D approach to find all areas we can stamp.

We will mark **right bottom** corner of those areas in the `stamps` grid.

How do we know if a cell `[i][j]` is covered by some stamp? It is covered if there is a stamp with **right bottom** corner within `[i][j] - [i + h - 1][j + w - 1]`.

So, we just count stamps within that area. To do it in O(1), we create another prefix sum matrix `pref2` from the `stamps` grid.

**C++**
```cpp
vector<vector<int>> pref2d(vector<vector<int>> &v, int m, int n) {
    vector<vector<int>> p(m + 1, vector<int>(n + 1));
    for (int i = 0; i < m; ++i)
        for (int j = 0; j < n; ++j)
            p[i + 1][j + 1] = v[i][j] + p[i + 1][j] + p[i][j + 1] - p[i][j];
    return p;
}
int sum2d(vector<vector<int>> &p, int c1, int r1, int c2, int r2) {
    return p[c2 + 1][r2 + 1] + p[c1][r1] - p[c1][r2 + 1] - p[c2 + 1][r1];
}
bool possibleToStamp(vector<vector<int>>& g, int h, int w) {
    int m = g.size(), n = g[0].size();
    vector<vector<int>> stamp(m, vector<int>(n));
    auto pref = pref2d(g, m, n);
    for (int i = h - 1; i < m; ++i)
        for (int j = w - 1; j < n; ++j)
            stamp[i][j] = sum2d(pref, i - h + 1, j - w + 1, i, j) == 0;
    auto pref2 = pref2d(stamp, m, n);
    for (int i = 0; i < m; ++i)
        for (int j = 0; j < n; ++j)
            if (g[i][j] == 0 && sum2d(pref2, i, j, min(m - 1, i + h - 1), min(n - 1, j + w - 1)) == 0)
                return false;
    return true;
}
```