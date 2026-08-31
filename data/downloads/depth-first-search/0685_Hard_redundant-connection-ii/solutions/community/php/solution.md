# Solution Redundant Connection II

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/redundant-connection-ii/solutions/4751794/](https://leetcode.com/problems/redundant-connection-ii/solutions/4751794/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[][] $edges
     * @return Integer[]
     */
    function findRedundantDirectedConnection($edges) {
        $parents = [];
        $candidates = [];
        $n = count($edges);
        
        foreach ($edges as $edge) {
            $parent = $edge[0];
            $child = $edge[1];
            if (isset($parents[$child])) {
                $candidates[] = [$parents[$child], $child];
                $candidates[] = $edge;
            } else {
                $parents[$child] = $parent;
            }
        }
        
        $unionFind = new UnionFind($n);
        foreach ($edges as $edge) {
            if (isset($candidates[1]) && $edge === $candidates[1]) {
                continue;
            }
            $parent = $edge[0];
            $child = $edge[1];
            if (!$unionFind->union($parent - 1, $child - 1)) {
                return isset($candidates[0]) ? $candidates[0] : $edge;
            }
        }
        
        return $candidates[1];
    }
}

class UnionFind {
    private $parent;
    private $rank;
    
    function __construct($n) {
        $this->parent = range(0, $n - 1);
        $this->rank = array_fill(0, $n, 0);
    }
    
    function find($x) {
        if ($this->parent[$x] != $x) {
            $this->parent[$x] = $this->find($this->parent[$x]);
        }
        return $this->parent[$x];
    }
    
    function union($x, $y) {
        $rootX = $this->find($x);
        $rootY = $this->find($y);
        if ($rootX == $rootY) {
            return false;
        }
        
        if ($this->rank[$rootX] < $this->rank[$rootY]) {
            $this->parent[$rootX] = $rootY;
        } elseif ($this->rank[$rootX] > $this->rank[$rootY]) {
            $this->parent[$rootY] = $rootX;
        } else {
            $this->parent[$rootY] = $rootX;
            $this->rank[$rootX]++;
        }
        
        return true;
    }
}

```