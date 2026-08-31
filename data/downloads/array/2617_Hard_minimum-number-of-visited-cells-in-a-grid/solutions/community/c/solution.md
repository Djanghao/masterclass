# BFS with Skip Ahead

**Author:** votrubac
**Votes:** 22
**Link:** [https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/solutions/3395695/](https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/solutions/3395695/)

---

Update. The original solution (see below) is not passing new test cases.

## Updated Solution
**C++**
```cpp
int minimumVisitedCells(vector<vector<int>>& g) {
    int m = g.size(), n = g[0].size(), steps = 0;
    vector<vector<int>> max_i(m, vector<int>(n)), max_j(m, vector<int>(n));
    vector<pair<int, int>> q{{0, 0}}, q1;
    while (!q.empty()) {
        ++steps;
        for (auto [i, j] : q) {
            if (i == m - 1 && j == n - 1)
                return steps;
            for (int k = i + 1; k < m && k - i <= g[i][j]; ++k) {
                if (max_i[k][j] == 0) {
                    q1.push_back({k, j});
                    max_i[k][j] = i + g[i][j];
                }
                else
                    k = max_i[k][j];
            }
            for (int k = j + 1; k < n && k - j <= g[i][j]; ++k) {
                if (max_j[i][k] == 0) {
                    q1.push_back({i, k});
                    max_j[i][k] = j + g[i][j];
                }
                else
                    k = max_j[i][k];
            }
        }
        swap(q, q1);
        q1.clear();
    }
    return -1;
}
```

## Original Solution

For each cell, we push "reachable" cells into the queue. 

As reachable cells are continuous, we do not need to process these cells again:
- g[i][k], where j < k <= grid[i][j] + j
- g[k][j], where i < k <= grid[i][j] + i

We use `max_i` and `max_j` to track the furthest `k` we have reached for a given column and row.

Next time we process that row or column, we skip ahead to the furthest `k`.

**C++**
```cpp
int minimumVisitedCells(vector<vector<int>>& g) {
    int m = g.size(), n = g[0].size(), steps = 0;
    vector<int> max_i(n), max_j(m);
    vector<pair<int, int>> q{{0, 0}}, q1;
    while (!q.empty()) {
        ++steps;
        for (auto [i, j] : q) {
            if (i == m - 1 && j == n - 1)
                return steps;
            for (int k = max(max_i[j], i) + 1; k < m && k - i <= g[i][j]; ++k)
                q1.push_back({k, j});
            for (int k = max(max_j[i], j) + 1; k < n && k - j <= g[i][j]; ++k)
                q1.push_back({i, k});
            max_i[j] = max(max_i[j], i + g[i][j]);
            max_j[i] = max(max_j[i], j + g[i][j]);
        }
        swap(q, q1);
        q1.clear();
    }
    return -1;
}
```