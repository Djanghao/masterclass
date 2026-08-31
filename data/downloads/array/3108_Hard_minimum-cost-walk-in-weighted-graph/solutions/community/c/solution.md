# Union-Find

**Author:** votrubac
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/solutions/4985568/](https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/solutions/4985568/)

---

Within a connected component of the graph, the minimum cost of traveling between any two nodes is bitwise AND of all included edges.

This is because we can traverse all edges of that component as we please.

So, we find connected components using union-find, tracking the minimum `cost`.

When processing queries, we have three cases:
- The nodes are the same: `0`.
- The nodes belong to the same component: `cost[parent]`.
- The nodes belong to different components: `-1`.

**C++**
```cpp
vector<int> ds, cost;
int find(int i) {
    return ds[i] < 0 ? i : ds[i] = find(ds[i]);
}
vector<int> minimumCost(int n, vector<vector<int>>& edges, vector<vector<int>>& query) {
    ds = cost = vector<int>(n, -1);
    for (auto &e : edges) {
        int p1 = find(e[0]), p2 = find(e[1]);
        if (p1 != p2) {
            cost[p1] &= cost[p2];
            ds[p2] = p1;
        }
        cost[p1] &= e[2];
    }
    vector<int> res;
    for (auto q : query) {
        if (q[0] == q[1])
            res.push_back(0);
        else if (int p1 = find(q[0]), p2 = find(q[1]); p1 != p2)
            res.push_back(-1);
        else
            res.push_back(cost[p1]);
    }
    return res;
}
```