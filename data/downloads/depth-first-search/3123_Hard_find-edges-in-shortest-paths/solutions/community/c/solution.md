# Dijkstra + Backtracking

**Author:** votrubac
**Votes:** 39
**Link:** [https://leetcode.com/problems/find-edges-in-shortest-paths/solutions/5052500/](https://leetcode.com/problems/find-edges-in-shortest-paths/solutions/5052500/)

---


We first run Dijkstra to find the shortest path from node `0` to `n - 1`.

As a result, the `path[i]` contains the shortest path from node `0` to node `i`.
    
Then we backtrack to identify edges included into the shortest path:
- We start from node `n - 1`
- We backtrack from node `j` to node `i` if `path[i] == path[j] - wight_i_j`
  - This ensures that we backtrack along the shortest path.
  - We mark the edge between `i` and `j` as included.
    
**C++**
```cpp
vector<bool> findAnswer(int n, vector<vector<int>>& edges) {
    vector<bool> res(edges.size()), visited(n);
    vector<vector<array<int, 2>>> al(n);
    for (int i = 0; i < edges.size(); ++i) {
        al[edges[i][0]].push_back({edges[i][1], i}); // track edge index so we
        al[edges[i][1]].push_back({edges[i][0], i}); // we can update the result
    }
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq;
    vector<int> path(n, INT_MAX);
    pq.push({0, 0});
    path[0] = 0;
    while(!pq.empty()) {
        auto [len, i] = pq.top(); pq.pop();
        if (len == path[i])
            for (auto [j, e] : al[i])
                if (len + edges[e][2] < path[j]) {
                    path[j] = len + edges[e][2];
                    pq.push({path[j], j});
                }
    }
    pq.push({path[n - 1], n - 1}); // backtrack
    while (!pq.empty()) {
        auto [len, i] = pq.top(); pq.pop();
        for (auto [j, e] : al[i])
            if (len - edges[e][2] == path[j]) {
                if (!visited[j])
                    pq.push({path[j], j});
                res[e] = visited[j] = true;
            }
    }
    return res;
}
```