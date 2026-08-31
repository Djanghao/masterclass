# O(m * n)

**Author:** votrubac
**Votes:** 21
**Link:** [https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/3571235/](https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/3571235/)

---

Brute-force is accepted, but where's the fun with that.

Here, we process each diagonal, and roll `tl` and `br` hash sets to compute the entire diagonal in two swipes.

**C++**
```cpp
vector<vector<int>> differenceOfDistinctValues(vector<vector<int>>& g) {
    int m = g.size(), n = g[0].size();
    vector<vector<int>> res(m, vector<int>(n));
    auto populateDiag = [&](int i, int j) {
        unordered_set<int> tl, br;
        for (int d = 0; i + d < m && j + d < n; ++d) {
            res[i + d][j + d] = tl.size();
            tl.insert(g[i + d][j + d]);
        }
        for (int d = min(m - i, n - j) - 1; d >= 0; --d) {
            res[i + d][j + d] = abs(res[i + d][j + d] - (int)br.size());
            br.insert(g[i + d][j + d]);            
        }
    };
    for (int j = 0; j < n; ++j)
        populateDiag(0, j);
    for (int i = 1; i < m; ++i)
        populateDiag(i, 0);
    return res;
}
```