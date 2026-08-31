# No Dijkstra, just BFS

**Author:** votrubac
**Votes:** 14
**Link:** [https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/3471042/](https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/3471042/)

---

We can go straing from start to finish with the cost of the Manhattan distance.

This is the shortest path, and we do not need to consider any positions in the grid. Except when we can take a special road.

For each special road, we track the minimum cost to reach its destination.

We run BFS from the starting position. 

> Note that we add a sentinel "road" to represetn the start position, and we use that road as the starting point.

The current position in BFS is the destination of `i` road. From that position, we consider taking **all** roads. 

If taking a road improves the minimal cost to reach its destination, we update the cost and the road into the queue.

I tried a priority queue, but the runtime is already 28 ms and priority queue did not improve it.

**C++**
```cpp
int minimumCost(vector<int>& s, vector<int>& t, vector<vector<int>>& rs) {
    int res = t[0] - s[0] + t[1] - s[1], sz = rs.size();
    rs.push_back({s[0], s[1], s[0], s[1], 0});
    vector<int> dp(sz + 1, INT_MAX);
    vector<array<int, 2>> q{{sz, 0}}, q1;
    while (!q.empty()) {
        q1.clear();
        for (auto [i, cost_i] : q) {
            if (cost_i <= dp[i]) {
                int x2i = rs[i][2], y2i = rs[i][3];
                for (int j = 0; j < sz; ++j) {
                    int x1j = rs[j][0], y1j = rs[j][1], x2j = rs[j][2], y2j = rs[j][3], cost_j = rs[j][4];
                    dp[j] = min(dp[j], cost_i + abs(x2j - x2i) + abs(y2j - y2i));
                    int take = cost_i + cost_j + abs(x1j - x2i) + abs(y1j - y2i);
                    if (take < dp[j]) {
                        dp[j] = take;
                        q1.push_back({j, take});
                        res = min(res, take + abs(x2j - t[0]) + abs(y2j - t[1]));
                    }   
                }
            }
        }
        swap(q, q1);
    }
    return res;
}
```