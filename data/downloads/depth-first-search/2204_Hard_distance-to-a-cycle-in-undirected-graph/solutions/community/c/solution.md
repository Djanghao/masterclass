# Outside In and Inside Out

**Author:** votrubac
**Votes:** 24
**Link:** [https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/solutions/1894719/](https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/solutions/1894719/)

---

This should work even if we have multiple cycles. Here, we do two BFS - starting from leaves (outside in) to detect loops, and then starting from loop nodes (inside out) to compute distances.

#### Outside In
We start from leaves (nodes with just one edge). Then, we "remove" (using a counter `cnt`) those edges. Nodes that, after removal, have just one edge are new leaves. We continue till there are no more leaves - and remaining nodes must be the part of a loop.

In a way, we are doing BFS outside in, until we reach nodes that are part of a loop. 

#### Inside Out
Now, we start from nodes that are part of the loop. We do BFS inside out, assigning the distance to nodes that are not in the loop.

**C++**
```cpp
vector<int> distanceToCycle(int n, vector<vector<int>>& edges) {
    vector<vector<int>> al(n);
    vector<int> res(n, 0), cnt(n);
    queue<int> q;
    for (auto &e : edges) {
        al[e[0]].push_back(e[1]);
        al[e[1]].push_back(e[0]);
    }
    for (int i = 0; i < n; ++i) {
        cnt[i] = al[i].size();
        if (cnt[i] == 1)
            q.push(i);        
    }
    while (!q.empty()) {
        int i = q.front(); q.pop();
        res[i] = INT_MAX;
        for (int j : al[i])
            if (cnt[j] > 1 && --cnt[j] == 1)
                q.push(j);
    }
    for (int i = 0; i < n; ++i)
        if (cnt[i] > 1)
            q.push(i);
    while(!q.empty()) {
        int i = q.front(); q.pop();
        for (int j : al[i])
            if (res[j] > res[i] + 1) {
                res[j] = res[i] + 1;
                q.push(j);
            }
    }
    return res;
}
```