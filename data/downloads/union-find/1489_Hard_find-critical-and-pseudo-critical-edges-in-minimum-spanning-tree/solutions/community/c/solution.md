# Detailed Video + Solution | Java C++ Python

**Author:** jeevankumar159
**Votes:** 22
**Link:** [https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/solutions/3929349/](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/solutions/3929349/)

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/u1-Xuvl2RoA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```
class UnionFind {
    private int[] parent;

    public UnionFind(int n) {
        parent = new int[n];
        for (int i = 0; i < n; i++)
            parent[i] = i;
    }

    public int findParent(int p) {
        return parent[p] == p ? p : (parent[p] = findParent(parent[p]));
    }

    public void union(int u, int v) {
        int pu = findParent(u), pv = findParent(v);
        parent[pu] = pv;
    }
}

class Solution {
    public List<List<Integer>> findCriticalAndPseudoCriticalEdges(int n, int[][] edges) {
        List<Integer> critical = new ArrayList<>();
        List<Integer> pseudoCritical = new ArrayList<>();
        
        for (int i = 0; i < edges.length; i++) {
            int[] edge = edges[i];
            edge = Arrays.copyOf(edge, edge.length + 1);
            edge[3] = i;
            edges[i] = edge;
        }
        
        Arrays.sort(edges, (a, b) -> Integer.compare(a[2], b[2]));

        int mstwt = findMST(n, edges, -1, -1);

        for (int i = 0; i < edges.length; i++) {
            if (mstwt < findMST(n, edges, i, -1))
                critical.add(edges[i][3]);
            else if (mstwt == findMST(n, edges, -1, i))
                pseudoCritical.add(edges[i][3]);
        }

        List<List<Integer>> result = new ArrayList<>();
        result.add(critical);
        result.add(pseudoCritical);
        return result;
    }

    private int findMST(int n, int[][] edges, int block, int e) {
        UnionFind uf = new UnionFind(n);
        int weight = 0;

        if (e != -1) {
            weight += edges[e][2];
            uf.union(edges[e][0], edges[e][1]);
        }

        for (int i = 0; i < edges.length; i++) {
            if (i == block)
                continue;

            if (uf.findParent(edges[i][0]) == uf.findParent(edges[i][1]))
                continue;

            uf.union(edges[i][0], edges[i][1]);
            weight += edges[i][2];
        }

        for (int i = 0; i < n; i++) {
            if (uf.findParent(i) != uf.findParent(0))
                return Integer.MAX_VALUE;
        }

        return weight;
    }
}
```

```
class UnionFind {
private:
    vector<int> parent;

public:
    UnionFind(int n) {
        parent.resize(n);
        for (int i = 0; i < n; i++)
            parent[i] = i;
    }

    int findParent(int p) {
        return parent[p] == p ? p : (parent[p] = findParent(parent[p]));
    }

    void unionSets(int u, int v) {
        int pu = findParent(u), pv = findParent(v);
        parent[pu] = pv;
    }
};

class Solution {
public:
    vector<vector<int>> findCriticalAndPseudoCriticalEdges(int n, vector<vector<int>>& edges) {
        vector<int> critical;
        vector<int> pseudoCritical;
        
        for (int i = 0; i < edges.size(); i++) {
            edges[i].push_back(i);
        }
        
        sort(edges.begin(), edges.end(), [](const vector<int>& a, const vector<int>& b) {
            return a[2] < b[2];
        });

        int mstwt = findMST(n, edges, -1, -1);

        for (int i = 0; i < edges.size(); i++) {
            if (mstwt < findMST(n, edges, i, -1))
                critical.push_back(edges[i][3]);
            else if (mstwt == findMST(n, edges, -1, i))
                pseudoCritical.push_back(edges[i][3]);
        }

        vector<vector<int>> result;
        result.push_back(critical);
        result.push_back(pseudoCritical);
        return result;
    }

    int findMST(int n, vector<vector<int>>& edges, int block, int e) {
        UnionFind uf(n);
        int weight = 0;

        if (e != -1) {
            weight += edges[e][2];
            uf.unionSets(edges[e][0], edges[e][1]);
        }

        for (int i = 0; i < edges.size(); i++) {
            if (i == block)
                continue;

            if (uf.findParent(edges[i][0]) == uf.findParent(edges[i][1]))
                continue;

            uf.unionSets(edges[i][0], edges[i][1]);
            weight += edges[i][2];
        }

        for (int i = 0; i < n; i++) {
            if (uf.findParent(i) != uf.findParent(0))
                return INT_MAX;
        }

        return weight;
    }
};
```

```
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        
    def find_parent(self, p):
        if self.parent[p] != p:
            self.parent[p] = self.find_parent(self.parent[p])
        return self.parent[p]
    
    def union_sets(self, u, v):
        pu, pv = self.find_parent(u), self.find_parent(v)
        self.parent[pu] = pv

class Solution:
    def findCriticalAndPseudoCriticalEdges(self, n: int, edges: List[List[int]]) -> List[List[int]]:
        def find_MST(graph, block, e):
            uf = UnionFind(n)
            weight = 0
            
            if e != -1:
                weight += edges[e][2]
                uf.union_sets(edges[e][0], edges[e][1])
            
            for i in range(len(edges)):
                if i == block:
                    continue
                
                if uf.find_parent(edges[i][0]) == uf.find_parent(edges[i][1]):
                    continue
                
                uf.union_sets(edges[i][0], edges[i][1])
                weight += edges[i][2]
            
            for i in range(n):
                if uf.find_parent(i) != uf.find_parent(0):
                    return float('inf')
            
            return weight
        
        critical = []
        pseudo_critical = []
        
        for i, edge in enumerate(edges):
            edge.append(i)
        
        edges.sort(key=lambda x: x[2])
        mst_weight = find_MST(edges, -1, -1)
        
        for i, edge in enumerate(edges):
            if mst_weight < find_MST(edges, i, -1):
                critical.append(edge[3])
            elif mst_weight == find_MST(edges, -1, i):
                pseudo_critical.append(edge[3])
        
        return [critical, pseudo_critical]

```