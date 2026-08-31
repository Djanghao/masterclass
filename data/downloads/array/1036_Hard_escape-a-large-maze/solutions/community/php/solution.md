# First PHP Solution Beats 100%

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/escape-a-large-maze/solutions/5576798/](https://leetcode.com/problems/escape-a-large-maze/solutions/5576798/)

---

# Code
```
class Solution {
    private $direction = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    private function dfs1($row, $col, $blocked, &$vis, $cell, $destination, $row_offset, $col_offset) {
        if (abs($cell[1] - $col) >= count($blocked) || abs($cell[0] - $row) >= count($blocked)) {
            return true;
        }
        if ($row === $destination[0] && $col === $destination[1]) {
            return true;
        }
        $vis[$row + $row_offset][$col + $col_offset] = 1;

        foreach ($this->direction as $i) {
            $r = $row + $i[0];
            $c = $col + $i[1];
            if ($r >= 0 && $c >= 0 && $r < 1e6 && $c < 1e6 && $vis[$r + $row_offset][$c + $col_offset] === 0) {
                if ($this->dfs1($r, $c, $blocked, $vis, $cell, $destination, $row_offset, $col_offset)) {
                    return true;
                }
            }
        }
        return false;
    }

    private function is_not_trapped($blocked, $cell, $destination) {
        $n = count($blocked);
        $vis = array_fill(0, $n * 2 + 1, array_fill(0, $n * 2 + 1, 0));
        $row_offset = $n - $cell[0];
        $col_offset = $n - $cell[1];

        foreach ($blocked as $it) {
            $r = $it[0] + $row_offset;
            $c = $it[1] + $col_offset;
            if ($r >= 0 && $c >= 0 && $r < $n * 2 + 1 && $c < $n * 2 + 1) {
                $vis[$r][$c] = 1;
            }
        }

        return $this->dfs1($cell[0], $cell[1], $blocked, $vis, $cell, $destination, $row_offset, $col_offset);
    }

    /**
     * @param Integer[][] $blocked
     * @param Integer[] $source
     * @param Integer[] $target
     * @return Boolean
     */
    function isEscapePossible($blocked, $source, $target) {
        return $this->is_not_trapped($blocked, $source, $target) && $this->is_not_trapped($blocked, $target, $source);
    }
}
```