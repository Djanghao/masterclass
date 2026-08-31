# Solution Bricks Falling When Hit

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/bricks-falling-when-hit/solutions/4789576/](https://leetcode.com/problems/bricks-falling-when-hit/solutions/4789576/)

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
     * @param Integer[][] $hits
     * @return Integer[]
     */
    function hitBricks($grid, $hits) {
        $m = count($grid);
        $n = count($grid[0]);
        
        foreach ($hits as &$hit) {
            list($row, $col) = $hit;
            $grid[$row][$col]--;
        }
        
        foreach ($grid[0] as $col => &$val) {
            if ($val == 1) {
                $this->dfs($grid, 0, $col);
            }
        }
        
        $numHits = count($hits);
        $result = array_fill(0, $numHits, 0);
        for ($i = $numHits - 1; $i >= 0; $i--) {
            list($row, $col) = $hits[$i];
            $grid[$row][$col]++;
            if ($grid[$row][$col] == 1 && $this->isConnectedToTop($grid, $row, $col)) {
                $result[$i] = $this->dfs($grid, $row, $col) - 1;
            }
        }
        
        return $result;
    }
    
    function dfs(&$grid, $row, $col) {
        $m = count($grid);
        $n = count($grid[0]);
        
        if ($row < 0 || $row >= $m || $col < 0 || $col >= $n || $grid[$row][$col] != 1) {
            return 0;
        }
        
        $grid[$row][$col] = 2;
        
        $count = 1;
        $dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        foreach ($dirs as $dir) {
            $newRow = $row + $dir[0];
            $newCol = $col + $dir[1];
            $count += $this->dfs($grid, $newRow, $newCol);
        }
        
        return $count;
    }
    
    function isConnectedToTop(&$grid, $row, $col) {
        $m = count($grid);
        $n = count($grid[0]);
        
        if ($row == 0) {
            return true;
        }
        
        $dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        foreach ($dirs as $dir) {
            $newRow = $row + $dir[0];
            $newCol = $col + $dir[1];
            if ($newRow >= 0 && $newRow < $m && $newCol >= 0 && $newCol < $n && $grid[$newRow][$newCol] == 2) {
                return true;
            }
        }
        
        return false;
    }
}

```