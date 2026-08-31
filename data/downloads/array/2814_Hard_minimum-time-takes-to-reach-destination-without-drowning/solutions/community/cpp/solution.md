# BFS + Dijkstra

**Author:** cpcs
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-time-takes-to-reach-destination-without-drowning/solutions/3887873/](https://leetcode.com/problems/minimum-time-takes-to-reach-destination-without-drowning/solutions/3887873/)

---

# Intuition
Use bfs to calculate the time each cell gets flooded. And run Dijkstra to calculate the minimum. time to reach each cell to see whether it's possible to reach each cell before it's flooded.

# Approach
BFS + Dijkstra

# Complexity
- Time complexity:
O(m * n * log(m * n))

- Space complexity:
O(m * n)

# Code
```
class Solution {
public:
    int minimumSeconds(vector<vector<string>>& land) {
        const int dx[] = {-1, 0, 1, 0}, dy[] = {0, 1, 0, -1};
        const int m = land.size(), n = land[0].size();
        vector<vector<int>> d(m, vector<int>(n, -1));
        queue<int> q;
        int sx = 0, sy = 0;
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (land[i][j][0] == '*') {
                    q.push((i << 10) | j);
                    d[i][j] = 0;
                } else if (land[i][j][0] == 'S') {
                    sx = i;
                    sy = j;
                }
            }
        }
        while (!q.empty()) {
            const int x = q.front() >> 10, y = q.front() & 1023;
            q.pop();
            for (int i = 0; i < 4; ++i) {
                const int xx = x + dx[i], yy = y + dy[i];
                if (xx >= 0 && xx < m && yy >= 0 && yy < n && land[xx][yy][0] != 'X' && land[xx][yy][0] !='D' && d[xx][yy] < 0) {
                    d[xx][yy] = d[x][y] + 1;
                    q.push((xx << 10) | yy);
                }

            }
        }
        priority_queue<pair<int, int>> pq;
        pq.push({0, (sx << 10) | sy});
        vector<vector<int>> r(m, vector<int>(n, -1));
        r[sx][sy] = 0;
        vector<vector<bool>> mark(m, vector<bool>(n));
        while (!pq.empty()) {
            const int x = pq.top().second >> 10, y = pq.top().second & 1023, t = r[x][y] + 1;
            pq.pop();
            if (land[x][y][0] == 'D') {
                return r[x][y];
            }
            if (mark[x][y]) {
                continue;
            }
            mark[x][y] = true;
            for (int i = 0; i < 4; ++i) {
                const int xx = x + dx[i], yy = y + dy[i];
                if (xx >= 0 && xx < m && yy >= 0 && yy < n && land[xx][yy][0] != 'X' && (d[xx][yy] < 0 || d[xx][yy] > t) && (r[xx][yy] < 0 || r[xx][yy] > t)) {
                    r[xx][yy] = t;
                    pq.push({-t, (xx << 10) | yy});
                }

            }
        }
        return -1;
    }
};
```