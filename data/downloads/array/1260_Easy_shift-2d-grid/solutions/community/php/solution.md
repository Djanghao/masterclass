# Solution Shift 2D Grid

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/shift-2d-grid/solutions/4909131/](https://leetcode.com/problems/shift-2d-grid/solutions/4909131/)

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
     * @param Integer[][] $grid
     * @param Integer $k
     * @return Integer[][]
     */
    function shiftGrid($grid, $k) {
        $m = count($grid);
        $n = count($grid[0]);
        $size = $m * $n;
        
        $k %= $size;
        
        if ($k == 0) return $grid;
        
        $flatGrid = [];
        foreach ($grid as $row) {
            foreach ($row as $cell) {
                $flatGrid[] = $cell;
            }
        }
        
        for ($i = 0; $i < $k; $i++) {
            $last = array_pop($flatGrid);
            array_unshift($flatGrid, $last);
        }
        
        $shiftedGrid = [];
        for ($i = 0; $i < $m; $i++) {
            $row = [];
            for ($j = 0; $j < $n; $j++) {
                $row[] = array_shift($flatGrid);
            }
            $shiftedGrid[] = $row;
        }
        
        return $shiftedGrid;
    }
}

```