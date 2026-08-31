# Solution Checking Existence of Edge Length Limited Paths

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solutions/5306239/](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solutions/5306239/)

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
    private $parent;
    private $rank;

    public function __construct($n) {
        $this->parent = array_fill(0, $n + 1, 0);
        $this->rank = array_fill(0, $n + 1, 0);

        for ($i = 0; $i <= $n; $i++) {
            $this->parent[$i] = $i;
        }
    }

    public function findParent($node) {
        if ($node == $this->parent[$node])
            return $node;

        return $this->parent[$node] = $this->findParent($this->parent[$node]);
    }

    public function unionByRank($u, $v) {
        $upU = $this->findParent($u);
        $upV = $this->findParent($v);

        if ($upU == $upV)
            return;

        if ($this->rank[$upU] < $this->rank[$upV]) {
            $this->parent[$upU] = $upV;
        } else {
            $this->parent[$upV] = $upU;
            if ($this->rank[$upU] == $this->rank[$upV]) {
                $this->rank[$upU]++;
            }
        }
    }

    public function isParentEqual($u, $v) {
        return ($this->findParent($u) == $this->findParent($v));
    }
}

class Solution {
    public function distanceLimitedPathsExist($nodes, $edges, $queries) {
        $n = count($queries);
        $ans = array_fill(0, $n, false);

        for ($i = 0; $i < $n; $i++) {
            $queries[$i][] = $i;
        }

        usort($edges, function($a, $b) {
            return $a[2] <=> $b[2];
        });

        usort($queries, function($a, $b) {
            return $a[2] <=> $b[2];
        });

        $ds = new DisjointSet($nodes);
        $i = 0;

        foreach ($queries as $query) {
            $u = $query[0];
            $v = $query[1];
            $limit = $query[2];
            $qId = $query[3];

            while ($i < count($edges) && $edges[$i][2] < $limit) {
                $ds->unionByRank($edges[$i][0], $edges[$i][1]);
                $i++;
            }
            $ans[$qId] = $ds->isParentEqual($u, $v);
        }

        return $ans;
    }
}

```