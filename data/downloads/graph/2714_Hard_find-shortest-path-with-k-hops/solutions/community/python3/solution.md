# Dijkstra using priority_queue C++, java & python

**Author:** cpcs
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-shortest-path-with-k-hops/solutions/3583596/](https://leetcode.com/problems/find-shortest-path-with-k-hops/solutions/3583596/)

---

# Intuition
It's just a shortest path problem.

# Approach
The state is (the_current_node x, the_number_of_edges_we_can_change to 0).
At each point, we can decide:
(1) Go to a normal edge.
(2) Change the edge we want to go's weight into the 0 (if the_number_of_edges_we_can_change > 0)

# Complexity
- Time complexity:
O(n * k + m * k * log(n * k)) where m is the number of edges.

- Space complexity:
O(n * k + m)

# Code

C++
```
class Solution {
public:
    int shortestPathWithHops(int n, vector<vector<int>>& edges, int s, int d, int k) {
        vector<vector<pair<int, int>>> con(n);
        for (const auto & e : edges) {
            con[e[0]].push_back({e[1], e[2]});
            con[e[1]].push_back({e[0], e[2]});
        }
        priority_queue<tuple<int, int, int>> q;
        q.push({0, k, s});
        vector<vector<int>> dist(n, vector<int>(k + 1, INT_MAX));
        vector<vector<bool>> mark(n, vector<bool>(k + 1));
        dist[s][k] = 0;
        while (!q.empty()) {
            const auto [t, m, x] = q.top();
            q.pop();
            if (mark[x][m]) {
                continue;
            }
            mark[x][m] = true;
            if (x == d) {
                return -t;
            }
            for (const auto& p : con[x]) {
                if (p.second - t < dist[p.first][m]) {
                    dist[p.first][m] = p.second - t;
                    q.push({-dist[p.first][m], m, p.first});
                }
                if (m && -t < dist[p.first][m - 1]) {
                    dist[p.first][m - 1] = -t;
                    q.push({-dist[p.first][m - 1], m - 1, p.first});
                }
            }
        }
        return -1;
    }
};
```

Java
```

class Solution {
    public int shortestPathWithHops(int n, int[][] edges, int s, int d, int k) {
        List<int[]>[] con = new ArrayList[n];
        for (int[] e : edges) {
            if (con[e[0]] == null) {
                con[e[0]] = new ArrayList<>();
            }
            if (con[e[1]] == null) {
                con[e[1]] = new ArrayList<>();
            }
            con[e[0]].add(new int[]{e[1], e[2]});
            con[e[1]].add(new int[]{e[0], e[2]});
        }
        PriorityQueue<int[]> q = new PriorityQueue((a, b) -> ((int[]) a)[0] - ((int[]) b)[0]);
        q.add(new int[]{0, k, s});
        int[][] dist = new int[n][k + 1];
        Arrays.stream(dist).forEach(a -> Arrays.fill(a, Integer.MAX_VALUE));
        boolean[][] mark = new boolean[n][k + 1];
        dist[s][k] = 0;
        while (!q.isEmpty()) {
            int[] temp = q.poll();
            if (mark[temp[2]][temp[1]]) {
                continue;
            }
            mark[temp[2]][temp[1]] = true;
            if (temp[2] == d) {
                return temp[0];
            }
            if (con[temp[2]] == null) {
                continue;
            }
            for (int[] p : con[temp[2]]) {
                if (p[1] + temp[0] < dist[p[0]][temp[1]]) {
                    dist[p[0]][temp[1]] = p[1] + temp[0];
                    q.add(new int[]{dist[p[0]][temp[1]], temp[1], p[0]});
                }
                if (temp[1] > 0 && temp[0] < dist[p[0]][temp[1] - 1]) {
                    dist[p[0]][temp[1] - 1] = temp[0];
                    q.add(new int[]{dist[p[0]][temp[1] - 1], temp[1] - 1, p[0]});
                }
            }
        }
        return -1;
    }
}

```

Python
```
class Solution:
    def shortestPathWithHops(self, n: int, edges: List[List[int]], s: int, d: int, k: int) -> int:
        con = [[] for _ in range(n)]
        for e in edges:
            con[e[0]].append((e[1], e[2]))
            con[e[1]].append((e[0], e[2]))
        dist = [[float('inf')] * (k + 1) for _ in range(n)]
        mark = [[False] * (k + 1) for _ in range(n)]
        q = [(0, k, s)]
        while q:
            t, m, x = heappop(q)
            if mark[x][m]:
                continue
            mark[x][m] = True
            if x == d:
                return t
            for y, w in con[x]:
                if w + t < dist[y][m]:
                    dist[y][m] = w + t
                    heappush(q, (dist[y][m], m, y))
                if m and t < dist[y][m - 1]:
                    dist[y][m - 1] = t
                    heappush(q, (dist[y][m - 1], m - 1, y))
        return -1
```
