# Solution Graph Connectivity With Threshold

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/5206096/](https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/5206096/)

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
class DisjointSet {
    public $rank;
    public $parent;
    public $size;

    public function __construct($n) {
        $this->rank = array_fill(0, $n + 1, 0);
        $this->parent = range(0, $n);
        $this->size = array_fill(0, $n + 1, 1);
    }

    public function findUltimateParent($node) {
        if ($node == $this->parent[$node]) {
            return $node;
        }
        return $this->parent[$node] = $this->findUltimateParent($this->parent[$node]);
    }

    public function unionByRank($u, $v) {
        $ulp_u = $this->findUltimateParent($u);
        $ulp_v = $this->findUltimateParent($v);
        if ($ulp_u == $ulp_v) {
            return;
        }

        if ($this->rank[$ulp_u] < $this->rank[$ulp_v]) {
            $this->parent[$ulp_u] = $ulp_v;
        } else if ($this->rank[$ulp_v] < $this->rank[$ulp_u]) {
            $this->parent[$ulp_v] = $ulp_u;
        } else {
            $this->parent[$ulp_v] = $ulp_u;
            $this->rank[$ulp_u]++;
        }
    }

    public function unionBySize($u, $v) {
        $ulp_u = $this->findUltimateParent($u);
        $ulp_v = $this->findUltimateParent($v);
        if ($ulp_u == $ulp_v) {
            return;
        }

        if ($this->size[$ulp_u] < $this->size[$ulp_v]) {
            $this->parent[$ulp_u] = $ulp_v;
            $this->size[$ulp_v] += $this->size[$ulp_u];
        } else {
            $this->parent[$ulp_v] = $ulp_u;
            $this->size[$ulp_u] += $this->size[$ulp_v];
        }
    }
}

class Solution {
    public function areConnected($n, $threshold, $queries) {
        $ds = new DisjointSet($n);
        $ans = [];

        for ($i = $threshold + 1; $i <= $n; $i++) {
            for ($j = $i; $j <= $n; $j += $i) {
                $ds->unionByRank($i, $j);
            }
        }

        foreach ($queries as $query) {
            $u = $query[0];
            $v = $query[1];

            if ($ds->findUltimateParent($u) == $ds->findUltimateParent($v)) {
                $ans[] = true;
            } else {
                $ans[] = false;
            }
        }

        return $ans;
    }
}

```