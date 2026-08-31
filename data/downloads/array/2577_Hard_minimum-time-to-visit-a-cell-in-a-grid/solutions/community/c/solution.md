# Back 'n' Forth Dijkstra

**Author:** votrubac
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/solutions/3231527/](https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/solutions/3231527/)

---

Good ol' Dijkstra once you work out the details.

First of all, if the required time for both `g[0][1]` and `g[1][0]` is greater than one, we cannot move (return `-1`).

Otherwise, we can always reach the bottom-right cell. If the current time (plus 1) is less than required, we can "wait" till the required time.

> We do not wait, of course - instead, we put the required time into the priority queue. 

Note that we may need to add `1` to the required time, as we advance the current time in the increments of `2` seconds (by going back and forth). 

> For example, if the current time is `3`, and the required time is 9, we can get back to the current cell at `5`, `7`, and `9` seconds, so arrive at the adjacent cell at tenth second.

Finally, we need to use "visited" matrix (`vis`) to track the shortest time to arrive at each cell.

**C++**
```cpp
int dir[5] = {0, 1, 0, -1, 0};
int minimumTime(vector<vector<int>>& g) {
    int m = g.size(), n = g[0].size();
    if (min(g[0][1], g[1][0]) > 1)
        return -1;
    vector<vector<int>> vis(m, vector<int>(n, INT_MAX));
    priority_queue<array<int, 3>> pq;
    pq.push({0, 0, 0});
    while(!pq.empty()) {
        auto [neg_sec, i, j] = pq.top(); pq.pop();
        if (i == m - 1 && j == n - 1)
            break;
        for (int d = 0; d < 4; ++d) {
            int x = i + dir[d], y = j + dir[d + 1];
            if (min(x, y) >= 0 && x < m && y < n) {
                int sec = -neg_sec + 1;
                if (sec < g[x][y])
                    sec = g[x][y] + (g[x][y] - sec) % 2;
                if (sec < vis[x][y]) {
                    vis[x][y] = sec;
                    pq.push({-sec, x, y});
                }
            }
        }
    }
    return vis.back().back();
}
```