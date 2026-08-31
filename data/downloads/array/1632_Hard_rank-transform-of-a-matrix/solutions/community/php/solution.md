# Solution Rank Transform of a Matrix

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/5208638/](https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/5208638/)

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
    private $parent;
    private $size;

    private function initializeDSU($n) {
        $this->size = array_fill(0, $n + 1, 1);
        $this->parent = array_fill(0, $n + 1, 0);
        for ($i = 0; $i <= $n; $i++) {
            $this->parent[$i] = $i;
        }
    }

    private function findPar($x) {
        if ($x == $this->parent[$x]) return $x;
        return $this->parent[$x] = $this->findPar($this->parent[$x]);
    }

    private function merge($x, $y) {
        $x = $this->findPar($x);
        $y = $this->findPar($y);

        if ($x == $y) return 0;
        if ($this->size[$x] > $this->size[$y]) {
            list($x, $y) = [$y, $x];
        }
        $this->parent[$x] = $y;
        $this->size[$y] += $this->size[$x];
        return 1;
    }

    public function matrixRankTransform($matrix) {
        $n = count($matrix);
        $m = count($matrix[0]);
        $mp = [];

        for ($i = 0; $i < $n; $i++) {
            for ($j = 0; $j < $m; $j++) {
                $mp[$matrix[$i][$j]][] = [$i, $j];
            }
        }

        $ans = array_fill(0, $n, array_fill(0, $m, 0));
        $row = array_fill(0, $n, 0);
        $col = array_fill(0, $m, 0);
        $rank = array_fill(0, $n + $m, 0);

        ksort($mp);

        foreach ($mp as $val => $indexes) {
            $this->initializeDSU($n + $m);

            foreach ($indexes as list($i, $j)) {
                $this->merge($i, $j + $n);
            }

            foreach ($indexes as list($i, $j)) {
                $rank[$this->findPar($i)] = max([$rank[$this->findPar($i)], $row[$i], $col[$j]]);
            }

            foreach ($indexes as list($i, $j)) {
                $ans[$i][$j] = $row[$i] = $col[$j] = $rank[$this->findPar($i)] + 1;
            }
        }

        return $ans;
    }
}

```