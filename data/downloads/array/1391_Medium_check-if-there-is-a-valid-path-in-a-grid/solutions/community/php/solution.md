# Solution Check if There is a Valid Path in a Grid

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/4962057/](https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/4962057/)

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
     * @return Boolean
     */
    function hasValidPath($grid) {
        $m = count($grid);
        $n = count($grid[0]);

        $dirs = [
            "left" => [0, -1, "right"],
            "right" => [0, 1, "left"],
            "up" => [-1, 0, "down"],
            "down" => [1, 0, "up"]
        ];

        $paths = [
            1 => ["left", "right"],
            2 => ["up", "down"],
            3 => ["left", "down"],
            4 => ["right", "down"],
            5 => ["up", "left"],
            6 => ["up", "right"]
        ];

        $visited = array_fill(0, $m * $n, false);

        $queue = [];
        $visited[0] = true;
        array_push($queue, [0, 0, $grid[0][0]]);

        while (!empty($queue)) {
            [$currRow, $currCol, $currStreet] = array_shift($queue);

            if ($currRow === $m - 1 && $currCol === $n - 1) return true;

            for ($i = 0; $i < 2; $i++) {
                $dir = $paths[$currStreet][$i];

                [$rowDir, $colDir, $from] = $dirs[$dir];

                $neiRow = $currRow + $rowDir;
                $neiCol = $currCol + $colDir;

                if ($this->withinBound($neiRow, $neiCol, $m, $n)) {
                    $idx = ($neiRow * $n) + $neiCol;
                    $neiStreet = $grid[$neiRow][$neiCol];

                    if (!$visited[$idx] && in_array($from, $paths[$neiStreet])) {
                        $visited[$idx] = true;
                        array_push($queue, [$neiRow, $neiCol, $neiStreet]);
                    }
                }
            }
        }

        return false;
    }

    function withinBound($row, $col, $m, $n) {
        return $row >= 0 && $col >= 0 && $row < $m && $col < $n;
    }
}

```