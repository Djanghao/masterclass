# BFS from Houses to Empty Land

**Author:** sumeetk83
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/5624689/](https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/5624689/)

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
<?php
class Solution {
    public function shortestDistance($grid) {
        if ($grid == null || count($grid[0]) == 0) return 0;
        $shift = [0, 1, 0, -1, 0];
        
        $row  = count($grid);
        $col = count($grid[0]);
        $distance = array_fill(0, $row, array_fill(0, $col, 0));
        $reach = array_fill(0, $row, array_fill(0, $col, 0));
        $buildingNum = 0;
        
        for ($i = 0; $i < $row; $i++) {
            for ($j = 0; $j < $col; $j++) {
                if ($grid[$i][$j] == 1) {
                    $buildingNum++;
                    $myQueue = [];
                    array_push($myQueue, [$i, $j]);

                    $isVisited = array_fill(0, $row, array_fill(0, $col, false));
                    $level = 1;
                    
                    while (!empty($myQueue)) {
                        $qSize = count($myQueue);
                        for ($q = 0; $q < $qSize; $q++) {
                            $curr = array_shift($myQueue);
                            
                            for ($k = 0; $k < 4; $k++) {
                                $nextRow = $curr[0] + $shift[$k];
                                $nextCol = $curr[1] + $shift[$k + 1];
                                
                                if ($nextRow >= 0 && $nextRow < $row && $nextCol >= 0 && $nextCol < $col
                                    && $grid[$nextRow][$nextCol] == 0 && !$isVisited[$nextRow][$nextCol]) {
                                        $distance[$nextRow][$nextCol] += $level;
                                        $reach[$nextRow][$nextCol]++;
                                        
                                        $isVisited[$nextRow][$nextCol] = true;
                                        array_push($myQueue, [$nextRow, $nextCol]);
                                    }
                            }
                        }
                        $level++;
                    }
                }
            }
        }
        
        $shortest = PHP_INT_MAX;
        for ($i = 0; $i < $row; $i++) {
            for ($j = 0; $j < $col; $j++) {
                if ($grid[$i][$j] == 0 && $reach[$i][$j] == $buildingNum) {
                    $shortest = min($shortest, $distance[$i][$j]);
                }
            }
        }
        
        return $shortest == PHP_INT_MAX ? -1 : $shortest;
    }
}
?>

```