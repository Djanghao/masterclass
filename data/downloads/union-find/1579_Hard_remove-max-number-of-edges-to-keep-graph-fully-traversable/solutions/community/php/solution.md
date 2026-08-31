# ✍ ✅ [PHP][JavaScript] 🚀Beats 100% | Using Union Find or Disjoint-set data structure

**Author:** akunopaka
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/solutions/3470626/](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/solutions/3470626/)

---

This approach uses UnionFind to determine the number of edges to remove in order to disconnect a graph with edges of type 1, 2, and 3. 

The union-find data structure helps to keep track of connected components in the graph. 

The algorithm first iterates over all the edges of type 3 and uses the union-find data structure to union all the nodes connected by these edges. 
It then iterates over the edges of type 1 and 2 for each one, it checks if the two nodes connected by this edge have been already connected (using union-find) or not. 
If they are not connected, then the edge is added (using union-find) and the number of edges to keep is incremented. 

Finally, the algorithm checks if the graph is connected *isConnected* and if it is, it return the number of edges that need to be removed *(edges.length - resNumberOfEdgesToKeep)*, else it returns -1.

# Complexity
- Time complexity: $$O(m * log(n))$$ where *m* is the number of edges and *n* is the number of nodes. 
- Space complexity: $$O(N)$$, where N is the number of vertices.

# JavaScript
``` JavaScript
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function (n, edges) {
    let ufA = new UnionFind(n);
    let ufB = new UnionFind(n);
    let resNumberOfEdgesToKeep = 0;
    // Type 3
    for (let edge of edges) {
        if (edge[0] === 3) {
            resNumberOfEdgesToKeep += ufA.union(edge[1], edge[2]);
            ufB.union(edge[1], edge[2]);
        }
    }
    // Type 1 and 2
    for (let edge of edges) {
        if (edge[0] === 1) {
            resNumberOfEdgesToKeep += ufA.union(edge[1], edge[2]);
        } else if (edge[0] === 2) {
            resNumberOfEdgesToKeep += ufB.union(edge[1], edge[2]);
        }
    }
    return ufA.isConnected() && ufB.isConnected() ? edges.length - resNumberOfEdgesToKeep : -1;
};

class UnionFind {
    constructor(n) {
        this.parent = {};
        this.rank = {};
        this.count = n;
        for (let i = 0; i <= n; i++) {
            this.parent[i] = i;
            this.rank[i] = 1;
        }
    }

    find(node) {
        while (node !== this.parent[node]) {
            this.parent[node] = this.parent[this.parent[node]];
            node = this.parent[node];
        }
        return node;
    }

    union(u, v) {
        let rootU = this.find(u);
        let rootV = this.find(v);
        if (rootU === rootV) return 0;
        if (this.rank[rootU] > this.rank[rootV]) {
            this.parent[rootV] = rootU;
            this.rank[rootU] += this.rank[rootV];
        } else {
            this.parent[rootU] = rootV;
            this.rank[rootV] += this.rank[rootU];
        }
        this.count--;
        return 1;
    }

    isConnected() {
        return this.count === 1;
    }
}
```

# PHP
``` PHP
class Solution
{
    /**
     * @param Integer $n
     * @param Integer[][] $edges
     * @return Integer
     */
    function maxNumEdgesToRemove(int $n, array $edges): int {
        $ufA = new UnionFind($n);
        $ufB = new UnionFind($n);
        $resNumberOfEdgesToKeep = 0;
        // Type 3
        foreach ($edges as $edge) {
            if ($edge[0] == 3) {
                $resNumberOfEdgesToKeep += $ufA->union($edge[1], $edge[2]);
                $ufB->union($edge[1], $edge[2]);
            }
        }
        // Type 1 and 2
        foreach ($edges as $edge) {
            if ($edge[0] == 1) {
                $resNumberOfEdgesToKeep += $ufA->union($edge[1], $edge[2]);
            } else if ($edge[0] == 2) {
                $resNumberOfEdgesToKeep += $ufB->union($edge[1], $edge[2]);
            }
        }
        return $ufA->isConnected() && $ufB->isConnected() ? count($edges) - $resNumberOfEdgesToKeep : -1;
    }
}

class UnionFind
{
    private $parent = [];
    private $rank = [];
    private $count = 0;

    function __construct(int $n) {
        $this->count = $n;
        for ($i = 0; $i <= $n; $i++) {
            $this->parent[$i] = $i;
            $this->rank[$i] = 1;
        }
    }

    function find(int $node): int {
        while ($node != $this->parent[$node]) {
            $this->parent[$node] = $this->parent[$this->parent[$node]];
            $node = $this->parent[$node];
        }
        return $node;
    }

    function union(int $u, int $v): int {
        $rootU = $this->find($u);
        $rootV = $this->find($v);
        if ($rootU == $rootV) return 0;
        if ($this->rank[$rootU] > $this->rank[$rootV]) {
            $this->parent[$rootV] = $rootU;
            $this->rank[$rootU] += $this->rank[$rootV];
        } else {
            $this->parent[$rootU] = $rootV;
            $this->rank[$rootV] += $this->rank[$rootU];
        }
        $this->count--;
        return 1;
    }

    function isConnected(): bool {
        return $this->count == 1;
    }
}
```


##### Thanks for reading! If you have any questions or suggestions, please leave a comment below. I would love to hear your thoughts! \uD83D\uDE0A
### **Please upvote if you found this post helpful! \uD83D\uDC4D**