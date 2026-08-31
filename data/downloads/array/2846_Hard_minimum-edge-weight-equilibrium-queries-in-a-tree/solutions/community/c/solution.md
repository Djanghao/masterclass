# Euler Tour

**Author:** votrubac
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/solutions/3998961/](https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/solutions/3998961/)

---

This problem is a great brush-up on LCA.

We can use Tarjan's (since we know all queries in advance) or Binary Lifting, but for me, the Euler tour was the most intuitive approach.

The important constraint is that the weight is limited to 26. So, we can store the number of edges of each weight from a root (we can pick any node as a root) to each node.

In the `dfs` function, we do just that, plus we build the `euler` tour. Note that for the Euler tour, we track nodes along the tour, the node height, and a position (any position) of a node in the tour.

To find LCA for nodes `u` and `v`, we determine their positions in the Euler tour, and find a node with the lowest height between their positions. To do it efficiently (in log n), we use the segment tree.

> Note that the logic, as well as the `build`,  `query` and `lca` functions, are taken almost "as-is" from the cp-algorithms web site.

Once we find LCA, we can use the weight frequency to find the number of edges between `u` and `v`, and the weight that appears most frequently.

**C++**
```cpp
vector<array<int, 27>> freq;
vector<int> height, id, euler, segtree, res;
void dfs(int i, int p, vector<vector<pair<int, int>>> &al, array<int, 27> &f, int h = 0) {
    freq[i] = f;
    height[i] = h;
    id[i] = euler.size();
    euler.push_back(i);    
    for (auto [j, w] : al[i]) {
        if (j != p) {
            ++f[w];
            dfs(j, i, al, f, h + 1);
            euler.push_back(i);
            --f[w];
        }
    }
}
void build(int node, int b, int e) {
    if (b == e)
        segtree[node] = euler[b];
    else {
        int mid = (b + e) / 2;
        build(node << 1, b, mid);
        build(node << 1 | 1, mid + 1, e);
        int l = segtree[node << 1], r = segtree[node << 1 | 1];
        segtree[node] = (height[l] < height[r]) ? l : r;
    }
}
int query(int node, int b, int e, int L, int R) {
    if (b > R || e < L)
        return -1;
    if (b >= L && e <= R)
        return segtree[node];
    int mid = (b + e) >> 1;
    int left = query(node << 1, b, mid, L, R);
    int right = query(node << 1 | 1, mid + 1, e, L, R);
    return left == -1 ? right : right == -1 ? left :
        height[left] < height[right] ? left : right;
}
int lca(int u, int v) {
    return query(1, 0, euler.size() - 1, min(id[u], id[v]), max(id[u], id[v]));
}    
vector<int> minOperationsQueries(int n, vector<vector<int>>& edges, vector<vector<int>>& queries) {
    vector<vector<pair<int, int>>> al(n);
    height = id = vector<int>(n);
    freq = vector<array<int, 27>>(n);
    for (const auto &e : edges) {
        al[e[0]].push_back({e[1], e[2]});
        al[e[1]].push_back({e[0], e[2]});
    }
    dfs(0, -1, al, array<int, 27>() = {});    
    segtree.resize(euler.size() * 4);
    build(1, 0, euler.size() - 1);
    for (const auto &q : queries) {
        int u = q[0], v = q[1], a = lca(u, v);
        int total = 0, max_f = 0;
        for (int i = 1; i < 27; ++i) {
            total += freq[u][i] + freq[v][i] - 2 * freq[a][i];
            max_f = max(max_f, freq[u][i] + freq[v][i] - 2 * freq[a][i]);
        }
        res.push_back(total - max_f);
    }
    return res;
}
```