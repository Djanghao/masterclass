# Sort the Matrix Diagonally || PHP || Easy to Understand

**Author:** umerkhanwp
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/4491235/](https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/4491235/)

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
     * @param Integer[][] $mat
     * @return Integer[][]
     */
    function diagonalSort($mat) {
        $m = count($mat);
        $n = count($mat[0]);
        if($n === 1) return $mat;

        $limit = $n;
        $this->processDiagonals($mat, $m, $n, $limit, 'top');

        $limit = $m;
        $this->processDiagonals($mat, $m, $n, $limit, 'left');

        return $mat;
    }

    function processDiagonals(&$mat, $m, $n, $limit, $cond) {
        $depth = 0;

        if($cond == 'top') {
            $top = 0;
        } else {
            $top = 1;
        }

        for($start = $limit - 1; $start >= $top; $start--) {
            if($cond == 'top') {
                $row = 0;
                $col = $start;
            } else {
                $row = $start;
                $col = 0;
            }

            $row1 = $row;
            $col1 = $col;
            $depth1 = $depth;
            
            $diagonal = [];
            for($diag = 0; $diag <= $depth; $diag++) {
                $diagonal[] = $mat[$row][$col];
                $row++;
                $col++;
            }
            sort($diagonal);

            $this->recontructMatrix($mat, $row1, $col1, $depth1, $diagonal);
            
            $depth++;
            
            if($cond == 'top') {
                if($depth > $m - 1) $depth = $m - 1;
            } else {
                if($depth > $n - 1) $depth = $n - 1;
            }
        }
    }

    function recontructMatrix(&$mat, $row, $col, $depth, $diagonal) {
        $i = 0;
        for($diag = 0; $diag <= $depth; $diag++) {
            $mat[$row][$col] = $diagonal[$i];
            $row++;
            $col++;
            $i++;
        }
    }
}
```