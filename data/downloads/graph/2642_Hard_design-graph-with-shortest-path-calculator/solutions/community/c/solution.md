# Dijkstra vs. Floyd–Warshall

**Author:** votrubac_back
**Votes:** 28
**Link:** [https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/3420159/](https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/3420159/)

---

> My account (votrubac) was banned due to the contest rules violation... Not sure if LeetCode got hacked or someting.

We could pre-compute all-pairs shortest paths in O(n ^ 3) using the Floyd\u2013Warshall algorithm. There are algorithms that are a bit faster (but more complex).

I am not aware, however, of a fast incremental version of the all-pairs shortest paths algorithm. For Floyd\u2013Warshall it would take O(n ^ 2) to recompute, and we need to do for each `addEdge` call.

Since we are limited to 100 `addEdge` and 100 `shortestPath` calls, we can just do Dijkstra instead - O(n ^ 2) for every `shortestPath` call. If the number of updates is much smaller than the number of queries - then Floyd\u2013Warshall would be a better choice.

## Dijkstra
**C++**
```cpp
class Graph {
public:
    vector<vector<array<int, 2>>> al;
    Graph(int n, vector<vector<int>>& edges) {
        al.resize(n);
        for (auto &e : edges)
            al[e[0]].push_back({e[1], e[2]});
    }
    void addEdge(const vector<int> &e) {
        al[e[0]].push_back({e[1], e[2]});
    }
    int shortestPath(int node1, int node2) {
        priority_queue<array<int, 2>, vector<array<int, 2>>, greater<>> pq;
        vector<int> cost(al.size(), INT_MAX);
        cost[node1] = 0;
        pq.push({0, node1});
        while (!pq.empty() && pq.top()[1] != node2) {
            auto [cost_i, i] = pq.top(); pq.pop();
            if (cost_i != cost[i])
                continue;
            for(auto [j, cost_j] : al[i])
                if (cost_i + cost_j < cost[j]) {
                    cost[j] = cost_i + cost_j;
                    pq.push({cost[j], j});
                }
        }
        return cost[node2] == INT_MAX ? -1 : cost[node2];
    }
};
```

## Floyd\u2013Warshall
**C++**
```cpp
class Graph {
public:
    vector<vector<int>> am;
    Graph(int n, vector<vector<int>>& edges) {
        am = vector<vector<int>>(n, vector<int>(n, 1e9));
        for (auto &e : edges)
            am[e[0]][e[1]] = e[2];
        for (int i = 0; i < n; ++i)
            am[i][i] = 0;
        for (int k = 0; k < n; ++k)
            for (int i = 0; i < n; ++i)
                for (int j = 0; j < n; ++j)
                    am[i][j] = min(am[i][j], am[i][k] + am[k][j]);
    }
    void addEdge(const vector<int> &e) {
        for (int i = 0; i < am.size(); ++i)
            for (int j = 0; j < am.size(); ++j)
                am[i][j] = min(am[i][j], am[i][e[0]] + am[e[1]][j] + e[2]);
    }
    int shortestPath(int n1, int n2) {
        return am[n1][n2] == 1e9 ? -1 : am[n1][n2];
    }
};
```