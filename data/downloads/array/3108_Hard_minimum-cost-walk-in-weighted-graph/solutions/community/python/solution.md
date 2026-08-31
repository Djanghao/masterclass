# [C++, Java, Python3] Union Find

**Author:** tojuna
**Votes:** 43
**Link:** [https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/solutions/4985451/](https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/solutions/4985451/)

---

# Intuition
When navigating the graph, we use bitwise `AND` operations between edges to calculate the path's cost. Additionally, we can reuse the same edges multiple times. By performing bitwise `AND`, the cost may decrease or remain the same. Hence, our objective is to maximize edge utilization to minimize path cost. We can organize vertices into groups reachable via connected edges. Within each group, traversing any two nodes results in the same cost since we traverse all edges in the group, ensuring the minimum cost. Consequently, for each group of interconnected vertices, the cost remains constant, equivalent to the `AND` operation of all connecting edges within the group.

# Approach
* Perform union find on edges to find the groups of connected vertices
* During the union-find operation, maintain a list called `weights` to represent the weight of each connected group. When performing a `union` operation between two vertices, compute the new weight of the group by performing a bitwise AND operation between the existing weight of each group and the cost of the edge connecting them. This process updates the cost of the group of vertices to reflect the addition of the new edge
* All `weights` are initialized to `131071`. `131071` is chosen because it is `11111111111111111` in binary and is greater than `10^5`.
* When returning result for a query if s<sub>i</sub> is equal to t<sub>i</sub> return 0 because start and target are same
* If s<sub>i</sub> and t<sub>i</sub> don't belong to the same group return -1
* If s<sub>i</sub> and t<sub>i</sub> are members of the same group, return the result of performing the `AND` operation on all edges within that group.

# Complexity
- Time complexity: $O(N)$. Time complexity of union find with path compresson and rank is close to $O(N)$
- Space complexity: $O(N)$. We create new arrays in the `DSU` class which incur a space complexity of $O(N)$.

### **Note**: The code shared here uses *rank* and *path compression* both to lower time complexity. If you don't use *rank*, time complexity will be $O(N \\cdot logN)$.

# Code
**Python3**:
```
class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.weights = [131071] * n
    def find(self, x):
        if x != self.parent[x]:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    def union(self, x, y, weight):
        xx, yy = self.find(x), self.find(y)
        if self.rank[xx] < self.rank[yy]:
            self.parent[xx] = yy        
        else:
            self.parent[yy] = xx
        self.weights[xx] = self.weights[yy] = self.weights[xx] & self.weights[yy] & weight
        if self.rank[xx] == self.rank[yy]:
            self.rank[xx] += 1
    def minimum_cost_of_walk(self, x, y):
        if x == y: return 0
        if self.find(x) != self.find(y): return -1
        return self.weights[self.find(x)]

class Solution:
    def minimumCost(self, n, edges, query):
        uf = DSU(n)
        for x, y, z in edges:
            uf.union(x, y, z)
        return [uf.minimum_cost_of_walk(x, y) for x, y in query]
```

**C++**:
```
class DSU {
private:
    vector<int> parent, rank, weights;
public:
    DSU(int n) {
        parent = vector<int>(n);
        rank = vector<int>(n, 0);
        weights = vector<int>(n, 131071);
        for (int i = 0; i < n; ++i)
            parent[i] = i;
    }
    int find(int x) {
        if (x != parent[x])
            parent[x] = find(parent[x]);
        return parent[x];
    }
    void union_(int x, int y, int weight) {
        int xx = find(x);
        int yy = find(y);
        if (rank[xx] < rank[yy])
            parent[xx] = yy;
        else
            parent[yy] = xx;
        weights[xx] = weights[yy] = weights[xx] & weights[yy] & weight;
        if (rank[xx] == rank[yy])
            rank[xx]++;
    }
    int minimumCostOfWalk(int x, int y) {
        if (x == y) return 0;
        if (find(x) != find(y)) return -1;
        return weights[find(x)];
    }
};

class Solution {
public:
    vector<int> minimumCost(int n, vector<vector<int>>& edges, vector<vector<int>>& query) {
        DSU uf(n);
        for (auto& edge : edges)
            uf.union_(edge[0], edge[1], edge[2]);
        vector<int> result;
        for (auto& q : query)
            result.push_back(uf.minimumCostOfWalk(q[0], q[1]));
        return result;
    }
};
```

**Java**:
```
class DSU {
    int[] parent, rank, weights;
    public DSU(int n) {
        parent = new int[n];
        rank = new int[n];
        weights = new int[n];
        Arrays.fill(weights, 131071);
        for (int i = 0; i < n; i++)
            parent[i] = i;
    }
    public int find(int x) {
        if (x != parent[x])
            parent[x] = find(parent[x]);
        return parent[x];
    }
    public void union(int x, int y, int weight) {
        int xx = find(x);
        int yy = find(y);
        if (rank[xx] < rank[yy])
            parent[xx] = yy;
        else
            parent[yy] = xx;
        weights[xx] = weights[yy] = weights[xx] & weights[yy] & weight;
        if (rank[xx] == rank[yy])
            rank[xx]++;
    }
    public int minimumCostOfWalk(int x, int y) {
        if (x == y)
            return 0;
        if (find(x) != find(y))
            return -1;
        return weights[find(x)];
    }
}
class Solution {
    public int[] minimumCost(int n, int[][] edges, int[][] query) {
        DSU uf = new DSU(n);
        for (int[] edge : edges)
            uf.union(edge[0], edge[1], edge[2]);
        int[] result = new int[query.length];
        for (int i = 0; i < query.length; i++)
            result[i] = uf.minimumCostOfWalk(query[i][0], query[i][1]);
        return result;
    }
}
```