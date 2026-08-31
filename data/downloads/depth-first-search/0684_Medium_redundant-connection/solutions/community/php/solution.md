# ✍ ✅ [PHP][JavaScript] 🚀Beats 100% | Disjoint Set Union (Union Find)

**Author:** akunopaka
**Votes:** 3
**Link:** [https://leetcode.com/problems/redundant-connection/solutions/3470672/](https://leetcode.com/problems/redundant-connection/solutions/3470672/)

---

# Approach
 This approach uses the Disjoint Set Union (Union Find) data structure to find a redundant connection in a given input of edges. 

We use a DSU constructor with a parent and rank array. 
This will keep track of the parent of each node and the rank of each subset. 
We also use a union function to join two subsets and *a find function* to find the parent of a node. 

In the main function, we iterate through each edge and use the union function to join the two nodes. 

If the union function returns false, then the edge is a redundant connection and we return it.

# Complexity
Time complexity: $$O(E * log(V))$$ where E is the number of edges and V is the number of vertices. 
Space complexity: $$O(V)$$ where V is the number of vertices.




# Code

```javascript []
// Disjoint Set Union -- Union Find
class DSU {
    constructor(n) {
        this.parent = Array(n).fill(0);
        this.rank = Array(n).fill(1);
        for (let i = 0; i <= n; i++) {
            this.parent[i] = i;
        }
    }

    find(x) {
        if (x == this.parent[x])
            return x;
        else
            return this.parent[x] = this.find(this.parent[x]);
    }

    union(x, y) {
        let xParent = this.find(x);
        let yParent = this.find(y);
        if (xParent == yParent) {
            return false;
        }
        if (this.rank[xParent] > this.rank[yParent]) {
            this.parent[yParent] = xParent;
            this.rank[xParent] += this.rank[yParent];
        } else {
            this.parent[xParent] = yParent;
            this.rank[yParent] += this.rank[xParent];
        }
        return true;
    }
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    let dsu = new DSU(edges.length);
    for (let edge of edges)
        if (!dsu.union(edge[0], edge[1]))
            return edge;
    return [];
};
```
```php []
// Disjoint Set Union -- Union Find
class DSU
{
    private array $parent;
    private array $rank;

    public function __construct(int $n) {
        $this->parent = array_fill(0, $n, 0);
        $this->rank = array_fill(0, $n, 0);
        for ($i = 0; $i < $n; $i++) {
            $this->parent[$i] = $i;
        }
    }

    public function find(int $x) {
        if ($x == $this->parent[$x])
            return $x;
        else
            return $this->parent[$x] = $this->find($this->parent[$x]);
    }

    public function union(int $x,int $y): bool {
        $xParent = $this->find($x);
        $yParent = $this->find($y);
        if ($xParent == $yParent) {
            return false;
        }
        if ($this->rank[$xParent] > $this->rank[$yParent]) {
            $this->parent[$yParent] = $xParent;
            $this->rank[$xParent] += $this->rank[$yParent];
        } else {
            $this->parent[$xParent] = $yParent;
            $this->rank[$yParent] += $this->rank[$xParent];
        }
        return true;
    }
}

class Solution
{
    /**
     * @param Integer[][] $edges
     * @return Integer[]
     */
    function findRedundantConnection(array $edges): array {
        $dsu = new DSU(sizeof($edges) + 1);
        foreach ($edges as $edge)
            if (!$dsu->union($edge[0], $edge[1]))
                return $edge;
        return [];
    }
}
```
```php []
class Solution
{
    /**
     * @param Integer[][] $edges
     * @return Integer[]
     */
    function findRedundantConnection(array $edges): array {
        $uf = new UnionFind(count($edges) + 1);
        foreach ($edges as $edge) {
            if ($uf->find($edge[0]) == $uf->find($edge[1])) {
                return $edge;
            }
            $uf->union($edge[0], $edge[1]);
        }
        return [];
    }

}

class UnionFind
{
    private array $parent;

    function __construct($n) {
        $this->parent = range(0, $n);
    }

    function find($x) {
        if ($this->parent[$x] != $x) {
            $this->parent[$x] = $this->find($this->parent[$x]);
        }
        return $this->parent[$x];
    }

    function union($x, $y) {
        $this->parent[$this->find($x)] = $this->find($y);
    }
}
```

##### Thanks for reading! If you have any questions or suggestions, please leave a comment below. I would love to hear your thoughts! \uD83D\uDE0A
### **Please upvote if you found this post helpful! \uD83D\uDC4D**
