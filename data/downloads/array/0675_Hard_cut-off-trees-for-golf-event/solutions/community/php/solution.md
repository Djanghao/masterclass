# Solution Cut Off Trees for Golf Event

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/4751522/](https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/4751522/)

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
     * @param Integer[][] $forest
     * @return Integer
     */
    function cutOffTree($forest) {
        $m = count($forest);
        $n = count($forest[0]);

        $trees = [];
        foreach ($forest as $i => $row) {
            foreach ($row as $j => $height) {
                if ($height > 1) {
                    $trees[] = [$i, $j, $height];
                }
            }
        }

        usort($trees, function($a, $b) {
            return $a[2] - $b[2];
        });

        $bfs = function($sx, $sy, $tx, $ty) use ($forest, $m, $n) {
            $visited = array_fill(0, $m, array_fill(0, $n, false));
            $queue = [[$sx, $sy, 0]];
            $dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

            while ($queue) {
                list($x, $y, $steps) = array_shift($queue);
                if ($x == $tx && $y == $ty) {
                    return $steps;
                }

                foreach ($dirs as $dir) {
                    $nx = $x + $dir[0];
                    $ny = $y + $dir[1];
                    if ($nx >= 0 && $nx < $m && $ny >= 0 && $ny < $n && !$visited[$nx][$ny] && $forest[$nx][$ny] > 0) {
                        $visited[$nx][$ny] = true;
                        array_push($queue, [$nx, $ny, $steps + 1]);
                    }
                }
            }

            return -1;
        };

        $sx = 0;
        $sy = 0;
        $totalSteps = 0;

        foreach ($trees as $tree) {
            $tx = $tree[0];
            $ty = $tree[1];
            $steps = $bfs($sx, $sy, $tx, $ty);
            if ($steps == -1) {
                return -1;
            }
            $totalSteps += $steps;
            $sx = $tx;
            $sy = $ty;
        }

        return $totalSteps;
    }
}

```