# DFS vs. BFS

**Author:** votrubac
**Votes:** 14
**Link:** [https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3083389/](https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3083389/)

---

A path with maximum cost will always span leaf-to-leaf.

The cost will be the prices of all nodes in the path, minus the smaller price of two leaves.

#### DFS
We can run DFS from each leaf, but it will be too slow.

Instead, we can track and return two values from DFS: maximum costs with and without including a root in the path.

It was tricky for me to figure it out right away, and I initially came up with a BFS solution.

In the end, the logic turned out to be quite similar, though perhaps the BFS solution could be easier to follow for someone.

**C++**
```cpp
long long max_cost = 0;
array<long long, 2> dfs(int i, int p, vector<vector<int>> &al, vector<int>& price) {
    array<long long, 2> res({price[i], 0});
    for (int j : al[i])
        if (j != p) {
            auto res_j = dfs(j, i, al, price);
            max_cost = max({ max_cost, res[0] + res_j[1], res[1] + res_j[0] });
            res[0] = max(res[0], res_j[0] + price[i]);
            res[1] = max(res[1], res_j[1] + price[i]);
        }
    return i == 0 ? array<long long, 2>({max_cost, 0}) : res;
}
long long maxOutput(int n, vector<vector<int>>& edges, vector<int>& price) {
    vector<vector<int>> al(n);
    for(auto& e : edges) {
        al[e[0]].push_back(e[1]);
        al[e[1]].push_back(e[0]);
    }
    return dfs(0, -1, al, price)[0];
}
```

#### BFS
We can do BFS starting from leaves. For node `i`, we track two values:
- `leaf[i]` - maximum cost so far to reach node `i`, including the price of starting leaf.
- `root[i]` - same as above, but excluding the price of starting node. 

When we reach node `j` from node `i`, we can form a path with cost `leat[i] + root[j]` or `root[i] + leaf[j]`.

This way, we maximize the cost by combining the best rooted and non-rooted path.

We track the edges for each node in `cnt`. When we reach a node `i`, we decrement `cnt[i]`. 

Once the count reaches `1`, then all subtrees have converged at node `i`, and we can go further.

**C++**
```cpp
long long maxOutput(int n, vector<vector<int>>& edges, vector<int>& price) {
    long long res = 0;
    vector<vector<int>> al(n);
    vector<int> cnt(n), leaf(price), root(price), q;
    for (auto &e : edges) {
        al[e[0]].push_back(e[1]);
        al[e[1]].push_back(e[0]);
    }
    for (int i = 0; i < n; ++i) 
        if ((cnt[i] = al[i].size()) == 1) {
            q.push_back(i);
            root[i] -= price[i];
        }
    while (!q.empty()) {
        vector<int> q1;
        for (int i : q) {
            --cnt[i];
            for (int j : al[i])
                if (cnt[j] > 0) {
                    res = max({res, (long long)leaf[i] + root[j], (long long)root[i] + leaf[j]});
                    leaf[j] = max(leaf[i] + price[j], leaf[j]);
                    root[j] = max(root[i] + price[j], root[j]);
                    if (--cnt[j] == 1)
                        q1.push_back(j);
                }
        }
        swap(q, q1);
    }
    return res;
}
```