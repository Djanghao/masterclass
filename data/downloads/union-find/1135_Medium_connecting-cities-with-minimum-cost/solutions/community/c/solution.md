# C++ Prim's Algorithm(Heap) and Kruskal's Algorithm(UF)

**Author:** ginnyww
**Votes:** 56
**Link:** [https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/468349/](https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/468349/)

---

**Prim's Algorithm**
Time complexity ```O((E+N)logN)``` where E is the number of edges.
Prim's algorithm is very similar to Dijkstra algorithm.
The only difference is that instead of keeping a list of minimum total distance and updating it with
```dist[v] = min(dist[v], weight(u,v) + dist[u]);```
we keep a list of minimum cost for the current node and update it with
```minCost[v] = min(minCost[v], cost(u,v));```
to find the light edge(edge that add one more node to the tree with minimum cost) in the priority queue.
```
typedef pair<int,int> pii;
class Solution {
public:
    int minimumCost(int N, vector<vector<int>>& connections) {
        vector<vector<pii>> mp(N+1);
        vector<bool> visited(N+1, false);
        vector<int> minCost(N+1, INT_MAX);
        for (auto& edge : connections) {
            mp[edge[0]].push_back({edge[2], edge[1]});
            mp[edge[1]].push_back({edge[2], edge[0]});
        }
        priority_queue<pii, vector<pii>, greater<pii>> pq;
        pq.push({0,1});
        int numVisited = 0, res = 0;
        while (numVisited < N && !pq.empty()) {
            int cost = pq.top().first, city = pq.top().second;
            pq.pop();
            if (visited[city]) continue;
            visited[city] = true;
            numVisited++;
            res += cost;
            for (auto& n : mp[city]) {
                cost = n.first;
                city = n.second;
                if (!visited[city] && cost < minCost[city]) {
                    minCost[city] = cost;
                    pq.push({cost, city});
                }
            }
        }
        return numVisited == N ? res : -1;
    }
};
```

**Kruskal's Algorithm**
Kruskal's algorithm is a greedy algorithm using Union Find.
Time complexity: ```O(ElogE)```
```
class Solution {
public:
    vector<int> parent;
    static bool comp(const vector<int>& a, const vector<int>& b) {
        return (a[2] < b[2]);
    }
    
    int find(int i) {
        if (parent[i] != i) parent[i] = find(parent[i]);
        return parent[i];
    }
    
    int minimumCost(int N, vector<vector<int>>& connections) {
        sort(connections.begin(), connections.end(), comp);
        parent.resize(N+1, 0);
        for (int i = 1; i <= N; i++) {
            parent[i] = i;
        }
        int res = 0, count = 1;
        for (auto& c : connections) {
            int rx = find(c[0]), ry = find(c[1]);
            if (rx != ry) {
                res += c[2];
                parent[ry] = rx;
                count++;
            }
            if (count == N) return res;
        }
        return -1;
    }
};
```