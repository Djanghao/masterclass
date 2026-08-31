# Beats 100% solution | Use this all functionality DSU template everywhere (Template + Code)

**Author:** sanskarpatidar
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-complete-components/solutions/5941150/](https://leetcode.com/problems/count-the-number-of-complete-components/solutions/5941150/)

---

# Template
``` Cpp []
class DisjointSet {
public:
    std::vector<int> size, parent, edge;

    DisjointSet(int s) {
        size.resize(s + 1, 1);
        parent.resize(s + 1);
        edge.resize(s + 1, 0);
        for (int i = 0; i <= s; ++i) parent[i] = i;
    }

    int findUPar(int node) {
        if (parent[node] == node) return node;
        return parent[node] = findUPar(parent[node]);
    }

    int getEdges(int node) {
        return edge[findUPar(node)];
    }

    int getSizes(int node) {
        return size[findUPar(node)];
    }

    void unionBySize(int u, int v) {
        int Uparu = findUPar(u);
        int Uparv = findUPar(v);

        if (Uparu == Uparv) {
            edge[Uparu]++;
            return;
        }

        if (size[Uparu] < size[Uparv]) {
            parent[Uparu] = Uparv;
            size[Uparv] += size[Uparu];
            edge[Uparv] += edge[Uparu] + 1;
        } else {
            parent[Uparv] = Uparu;
            size[Uparu] += size[Uparv];
            edge[Uparu] += edge[Uparv] + 1;
        }
    }
};
```
# Code
```Cpp []
class DisjointSet {
public:
    std::vector<int> size, parent, edge;

    DisjointSet(int s) {
        size.resize(s + 1, 1);
        parent.resize(s + 1);
        edge.resize(s + 1, 0);
        for (int i = 0; i <= s; ++i) parent[i] = i;
    }

    int findUPar(int node) {
        if (parent[node] == node) return node;
        return parent[node] = findUPar(parent[node]);
    }

    int getEdges(int node) {
        return edge[findUPar(node)];
    }

    int getSizes(int node) {
        return size[findUPar(node)];
    }

    void unionBySize(int u, int v) {
        int Uparu = findUPar(u);
        int Uparv = findUPar(v);

        if (Uparu == Uparv) {
            edge[Uparu]++;
            return;
        }

        if (size[Uparu] < size[Uparv]) {
            parent[Uparu] = Uparv;
            size[Uparv] += size[Uparu];
            edge[Uparv] += edge[Uparu] + 1;
        } else {
            parent[Uparv] = Uparu;
            size[Uparu] += size[Uparv];
            edge[Uparu] += edge[Uparv] + 1;
        }
    }
};

class Solution {
public:
    int countCompleteComponents(int n, std::vector<std::vector<int>>& edges) {
        DisjointSet ds(n);

        for (const auto& edge : edges) {
            ds.unionBySize(edge[0], edge[1]);
        }

        int cnt = 0;

        for (int i = 0; i < n; ++i) {
            if (ds.findUPar(i) == i) {
                int edgesOfComponent = ds.getEdges(i);
                int sizeOfComponent = ds.getSizes(i);

                if (sizeOfComponent * (sizeOfComponent - 1) / 2 == edgesOfComponent) {
                    cnt++;
                }
            }
        }

        return cnt;
    }
};


```
```Kotlin []
class DisjointSet(s: Int) {
    val size = MutableList(s + 1) { 1 }
    val parent = MutableList(s + 1) { it }
    val edge = MutableList(s + 1) { 0 }

    fun findUPar(node: Int): Int {
        if (parent[node] == node) return node
        parent[node] = findUPar(parent[node])
        return parent[node]
    }

    fun getEdges(node: Int): Int {
        return edge[findUPar(node)]
    }

    fun getSizes(node: Int): Int {
        return size[findUPar(node)]
    }

    fun unionBySize(u: Int, v: Int) {
        val Uparu = findUPar(u)
        val Uparv = findUPar(v)

        if (Uparu == Uparv) {
            edge[Uparu]++  // If they're already connected, increment the edge count
            return
        }

        if (size[Uparu] < size[Uparv]) {
            parent[Uparu] = Uparv
            size[Uparv] += size[Uparu]
            edge[Uparv] += edge[Uparu] + 1  // Update edge count when merging
        } else {
            parent[Uparv] = Uparu
            size[Uparu] += size[Uparv]
            edge[Uparu] += edge[Uparv] + 1
        }
    }
}

class Solution {
    fun countCompleteComponents(n: Int, edges: Array<IntArray>): Int {
        val ds = DisjointSet(n)

        // First, process all edges to form the components
        for (edge in edges) {
            ds.unionBySize(edge[0], edge[1])
        }

        var cnt = 0

        // Now check for complete components
        for (i in 0 until n) {
            // Check if this node is the representative of its component
            if (ds.findUPar(i) == i) {
                val edgesOfComponent = ds.getEdges(i)
                val sizeOfComponent = ds.getSizes(i)

                // A complete component must have size*(size-1)/2 edges
                if (sizeOfComponent * (sizeOfComponent - 1) / 2 == edgesOfComponent) {
                    cnt++
                }
            }
        }

        return cnt
    }
}

```