# Solution i got using php with explanation

**Author:** mahendraaa
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/5956432/](https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/5956432/)

---

Think of the matrix as a landscape of buildings with different heights (the numbers). You want to move from building to building, but you can only move to a taller building that's in the same row or column.
Your task is to find the longest possible path where each move takes you to a taller building in the same row or column.

# Code
```php []
class Solution {

    /**
     * @param Integer[][] $mat
     * @return Integer
     */
    function maxIncreasingCells($mat) {
        $m = count($mat);
        $n = count($mat[0]);

        $value_positions = [];
        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                $val = $mat[$i][$j];
                if (!isset($value_positions[$val])) {
                    $value_positions[$val] = [];
                }
                $value_positions[$val][] = [$i, $j];
            }
        }

        ksort($value_positions);

        $row_max = array_fill(0, $m, 0);
        $col_max = array_fill(0, $n, 0);
        $ans = 0;

        foreach ($value_positions as $val => $positions) {
            $temp = [];
            foreach ($positions as $pos) {
                list($i, $j) = $pos;
                $temp[$i][$j] = max($row_max[$i], $col_max[$j]) + 1;
                $ans = max($ans, $temp[$i][$j]);
            }
            foreach ($positions as $pos) {
                list($i, $j) = $pos;
                $row_max[$i] = max($row_max[$i], $temp[$i][$j]);
                $col_max[$j] = max($col_max[$j], $temp[$i][$j]);
            }
        }

        return $ans;
    }
}

```