# O(n * n + m * n)

**Author:** votrubac
**Votes:** 21
**Link:** [https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/2061284/](https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/2061284/)

---

We are shooting for a simple solution here. We use an adjacency list `al` to track neighbors. We also use an adjacency matrix `am`.

After we populate `al`, we use dfs to fill `am` with the shortest distance from a given node to all other nodes. This takes O(n * n) time.

Then, for each query, we use `am` to go straight for `start` to `end` - with each step, we pick one node that is closer to `end`.

As we ride along the way, we track the closest node to a target.

**C++**
```cpp
void dfs(int i, int start, int dist, vector<vector<int>> &al, vector<vector<int>> &am) {
    am[start][i] = dist;
    for (auto j : al[i])
        if (am[start][j] == -1)
            dfs(j, start, dist + 1, al, am);
}
int dfs_closest(int i, int end, int node, int res, vector<vector<int>> &al, vector<vector<int>> &am) {
    for (auto j : al[i])
        if (am[i][end] > am[j][end])
            return dfs_closest(j, end, node, am[res][node] < am[j][node] ? res : j, al, am);
    return res;
}    
vector<int> closestNode(int n, vector<vector<int>>& edges, vector<vector<int>>& queries) {
    vector<int> res;
    vector<vector<int>> al(n), am(n, vector<int>(n, -1));
    for (auto &e : edges) {
        al[e[0]].push_back(e[1]);
        al[e[1]].push_back(e[0]);
    }
    for (int i = 0; i < n; ++i)
        dfs(i, i, 0, al, am);
    for (auto &q : queries)
        res.push_back(dfs_closest(q[0], q[1], q[2], q[0], al, am));
    return res;
}
```