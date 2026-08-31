# php | Implementation of official solution Approach 2: Kruskal's Algorithm with Union-Find

**Author:** lancelijade
**Votes:** 0
**Link:** [https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/1917315/](https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/1917315/)

---

```php
class UnionFind {       // union by rank, find path compression

    private $root = [];
    private $rank = [];

    public function __construct($size) {
        $this->root = range(0, $size-1);
        $this->rank = array_fill(0, $size, 1);
    }

    public function find($x) {
        if ($x == $this->root[$x]) return $x;
        return $this->root[$x] = $this->find($this->root[$x]);
    }

    public function union($x, $y) {

        $rootX = $this->find($x);
        $rootY = $this->find($y);
        if ($rootX == $rootY) return false;

        if ($this->rank[$rootX] > $this->rank[$rootY]) {
            $this->root[$rootY] = $rootX;
        } elseif ($this->rank[$rootX] < $this->rank[$rootY]) {
            $this->root[$rootX] = $rootY;
        } else {
            $this->root[$rootY] = $rootX;
            $this->rank[$rootX]++;
        }

        return true;
    }
}

class Solution {

    /**
     * @param Integer $n
     * @param Integer[] $wells
     * @param Integer[][] $pipes
     * @return Integer
     */
    function minCostToSupplyWater($n, $wells, $pipes) {
        
        $orderedEdges = [];

        for ($i=0; $i<count($wells); $i++) $orderedEdges[] = [0, $i+1, $wells[$i]];

        for ($i=0; $i<count($pipes); $i++) $orderedEdges[] = $pipes[$i];

        usort($orderedEdges, function ($a, $b) {
            return $a[2] - $b[2];
        });

        $uf = new UnionFind($n+1);
        $totalCost = 0;
        foreach ($orderedEdges as $edge) {
            if ($uf->union($edge[0], $edge[1])) $totalCost += $edge[2];
        }

        return $totalCost;
    }
}
```