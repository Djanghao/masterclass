# DFS

**Author:** votrubac
**Votes:** 11
**Link:** [https://leetcode.com/problems/count-the-number-of-complete-components/solutions/3522363/](https://leetcode.com/problems/count-the-number-of-complete-components/solutions/3522363/)

---

For some reason, this problem was easier for me than all other problems in the contest.

I initially got excited because I though it's the famous clique problem. Clique is a fully-connected subgraph, not an isolated component.

> The limit `n <= 50` is confusing as it implies that the expected solution is harder than quadratic. 

We run DFS to identify all connected nodes in a subgraph.

If we have a subgraph with `m` nodes, it is connected if all `m` nodes have `m - 1` edges.

**C++**
```cpp
void dfs(int i, vector<vector<int>> &al, unordered_set<int> &s) {
    if (s.insert(i).second)
        for (int j : al[i])
            dfs(j, al, s);
}
int countCompleteComponents(int n, vector<vector<int>>& edges) {
    vector<vector<int>> al(n);
    int res = 0;
    for (const auto &e : edges) {
        al[e[0]].push_back(e[1]);
        al[e[1]].push_back(e[0]);
    }
    unordered_set<int> ms;
    for (int i = 0; i < n; ++i) {
        if (ms.count(i) == 0) {
            unordered_set<int> s;
            dfs(i, al, s);
            res += all_of(begin(s), end(s), [&](int i){ return al[i].size() == s.size() - 1; });
            ms.insert(begin(s), end(s));
        }
    }
    return res;
}
```