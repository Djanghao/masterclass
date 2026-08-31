# One By One

**Author:** votrubac
**Votes:** 20
**Link:** [https://leetcode.com/problems/modify-graph-edge-weights/solutions/3557844/](https://leetcode.com/problems/modify-graph-edge-weights/solutions/3557844/)

---

This problem could be difficult to understand and has tons of edge cases.

I wrote like 3 different solutions (WA) before I got what needs to be done.

This solution is a bit different than suggested by hints.

In a way, it solves a more difficult problem: the sum of modified weights is a necessary minimum.

1. We run the Dijkstra algorithm while ignoring modifiable edges.
	- If the shortest distance is already less than the target, we return an empty list ("impossible").
2. We run the Dijkstra algorithm again, assuming the minimum (`1`) weight for modifiable edges.
	- If the shortest distance is greater than the target, we return an empty list ("impossible").
3. We also track a modifiable edge (any edge) that is a part of the shortest distance path.
4. If the shortest path distance is less than the target, we set the weight of the modifiable edge to `target - dist + 1`.
5. We repeat steps 2-4 until the shortest path distance is equal to the target.
6. We assign the minimum weight (`1`) to remaining modifiable edges.

**C++**
```cpp
array<int, 2> bfs(vector<vector<array<int, 2>>> &al, vector<vector<int>> &edges, int source, int dest, int target, bool modify) {
    priority_queue<array<int, 2>, vector<array<int, 2>>, greater<>> q;
    vector<int> dist(al.size(), INT_MAX), mod_id(al.size(), INT_MAX);
    q.push({0, source});
    dist[source] = 0;
    while (!q.empty() && q.top()[1] != dest) {
        auto [d, i] = q.top(); q.pop();
        if (d != dist[i])
            continue;        
        for (auto [j, edge_id] : al[i]) {
            int w = edges[edge_id][2];
            if (modify || w != -1) {
                if (dist[j] > d + max(1, w)) {
                    mod_id[j] = w == -1 ? edge_id : mod_id[i];
                    dist[j] = d + max(1, w);
                    q.push({d + max(1, w), j});                    
                }
            }
        }
    }
    return {dist[dest], mod_id[dest]};
}
vector<vector<int>> modifiedGraphEdges(int n, vector<vector<int>>& edges, int source, int dest, int target) {
    vector<vector<array<int, 2>>> al(n);
    for (int i = 0; i < edges.size(); ++i) {
        al[edges[i][0]].push_back({edges[i][1], i});
        al[edges[i][1]].push_back({edges[i][0], i});
    }
    auto [dist, _] = bfs(al, edges, source, dest, target, false);
    if (dist < target)
        return {};  
    while (true) {
        auto [dist, mod_id] = bfs(al, edges, source, dest, target, true);
        if (dist > target)
            return {};
        if (dist == target)
            break;
        edges[mod_id][2] = 1 + target - dist;
    }
    for (auto &e : edges)
        e[2] = e[2] == -1 ? 1 : e[2];
    return edges;
}
```