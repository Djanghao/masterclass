# Dijkstra's

**Author:** votrubac
**Votes:** 30
**Link:** [https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5786569/](https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5786569/)

---

I tried DFS but got TLE (I wrongly thought 50x50 is small enough). 

So, we need to approach this as the minimum distance problem, and use Dijkstra's.

> Note: a regular BFS also works as the input is not that large.
> Dijkstra's runtime is ~50 ms, and BFS is ~120 ms.
> 

We use `cnt` to track the largest health we can have when we reach cell `i, j`.

**C++**
```cpp
bool findSafeWalk(vector<vector<int>>& g, int health) {
    int m = g.size(), n = g[0].size(), cnt[51][51] = {};
    priority_queue<array<int, 3>> pq;
    pq.push({health - g[0][0], 0, 0});
    while (!pq.empty()) {
        auto [h, i, j] = pq.top(); pq.pop();
        if (i == m - 1 && j == n - 1)
            return true;
        for (auto [dx, dy] : vector<pair<int, int>>{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}) {
            int x = i + dx, y = j + dy;
            if (min(x, y) >= 0 && x < m && y < n && cnt[x][y] < h - g[x][y]) {
                cnt[x][y] = h - g[x][y];
                pq.push({h - g[x][y], x, y});
            }
        }
    }
    return false;
}
```