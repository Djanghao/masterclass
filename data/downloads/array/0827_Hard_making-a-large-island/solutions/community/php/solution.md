# Solution Making A Large Island

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/making-a-large-island/solutions/4794864/](https://leetcode.com/problems/making-a-large-island/solutions/4794864/)

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

    function largestIsland($grid) {
        $n = count($grid);
        $directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        $index = 2;
        
        $explore = function($r, $c, $index) use (&$grid, &$directions, &$explore) {
            $area = 0;
            $grid[$r][$c] = $index;
            foreach ($directions as $dir) {
                $nr = $r + $dir[0];
                $nc = $c + $dir[1];
                if ($nr >= 0 && $nc >= 0 && $nr < count($grid) && $nc < count($grid[0]) && $grid[$nr][$nc] == 1) {
                    $area += $explore($nr, $nc, $index);
                }
            }
            return $area + 1;
        };
        
        $sizes = [];
        $maxIsland = 0;
        for ($i = 0; $i < $n; $i++) {
            for ($j = 0; $j < $n; $j++) {
                if ($grid[$i][$j] == 1) {
                    $sizes[$index] = $explore($i, $j, $index);
                    $maxIsland = max($maxIsland, $sizes[$index]);
                    $index++;
                }
            }
        }
        
        for ($i = 0; $i < $n; $i++) {
            for ($j = 0; $j < $n; $j++) {
                if ($grid[$i][$j] == 0) {
                    $seen = [];
                    $area = 1;
                    foreach ($directions as $dir) {
                        $nr = $i + $dir[0];
                        $nc = $j + $dir[1];
                        if ($nr >= 0 && $nc >= 0 && $nr < $n && $nc < $n && $grid[$nr][$nc] > 1 && !isset($seen[$grid[$nr][$nc]])) {
                            $seen[$grid[$nr][$nc]] = true;
                            $area += $sizes[$grid[$nr][$nc]];
                        }
                    }
                    $maxIsland = max($maxIsland, $area);
                }
            }
        }
        
        return $maxIsland;
    }
}

```