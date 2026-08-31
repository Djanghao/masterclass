# Solution Minimum Number of Days to Disconnect Island

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5156972/](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5156972/)

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
    public function dfs($row, $col, &$grid, &$vis) {
        $n = count($grid);
        $m = count($grid[0]);
        $vis[$row][$col] = 1;
        $delrow = [1, -1, 0, 0];
        $delcol = [0, 0, 1, -1];

        for ($i = 0; $i < 4; $i++) {
            $nrow = $row + $delrow[$i];
            $ncol = $col + $delcol[$i];
            if ($nrow >= 0 && $nrow < $n && $ncol >= 0 && $ncol < $m && !$vis[$nrow][$ncol] && $grid[$nrow][$ncol] == 1) {
                $this->dfs($nrow, $ncol, $grid, $vis);
            }
        }
    }

    public function countIsland(&$grid) {
        $n = count($grid);
        $m = count($grid[0]);
        $island = 0;
        $vis = array_fill(0, $n, array_fill(0, $m, 0));

        for ($i = 0; $i < $n; $i++) {
            for ($j = 0; $j < $m; $j++) {
                if (!$vis[$i][$j] && $grid[$i][$j] == 1) {
                    $this->dfs($i, $j, $grid, $vis);
                    $island++;
                }
            }
        }
        return $island;
    }

    public function minDays(&$grid) {
        $n = count($grid);
        $m = count($grid[0]);
        $islands = $this->countIsland($grid);

        if ($islands > 1 || $islands == 0) {
            return 0;
        } else {
            for ($i = 0; $i < $n; $i++) {
                for ($j = 0; $j < $m; $j++) {
                    if ($grid[$i][$j]) {
                        $grid[$i][$j] = 0;
                        $islands = $this->countIsland($grid);
                        $grid[$i][$j] = 1;
                        if ($islands > 1 || $islands == 0) {
                            return 1;
                        }
                    }
                }
            }
        }
        return 2;
    }
}

```