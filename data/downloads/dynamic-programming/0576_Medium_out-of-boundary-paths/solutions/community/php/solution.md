# Runtime - Memory: Beats 100.00% - 100.00% of users with PHP

**Author:** jakaria15
**Votes:** 0
**Link:** [https://leetcode.com/problems/out-of-boundary-paths/solutions/4627887/](https://leetcode.com/problems/out-of-boundary-paths/solutions/4627887/)

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
     * @param Integer $m
     * @param Integer $n
     * @param Integer $maxMove
     * @param Integer $startRow
     * @param Integer $startColumn
     * @return Integer
     */
    function findPaths($m, $n, $maxMove, $startRow, $startColumn) {
        $MOD = pow(10, 9) + 7;
        $jak = array_fill(0, $m, array_fill(0, $n, array_fill(0, $maxMove + 1, -1)));
        $directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        return $this->jaka($startRow, $startColumn, $maxMove, $jak, $m, $n, $directions, $MOD);
    }

    private function jaka($x, $y, $move, &$jak, $m, $n, $directions, $MOD) {
        if ($x < 0 || $y < 0 || $x >= $m || $y >= $n) {
            return 1;
        }
        if ($move === 0) {
            return 0;
        }
        if ($jak[$x][$y][$move] !== -1) {
            return $jak[$x][$y][$move];
        }
        $count = 0;
        foreach ($directions as $direction) {
            list($dx, $dy) = $direction;
            $nx = $x + $dx; $ny = $y + $dy;
            $count = ($count + $this->jaka($nx, $ny, $move - 1, $jak, $m, $n, $directions, $MOD)) % $MOD;
        }
        $jak[$x][$y][$move] = $count;
        return $jak[$x][$y][$move];
    }
}

```