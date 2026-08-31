# Solution Rectangle Area II

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/rectangle-area-ii/solutions/4800243/](https://leetcode.com/problems/rectangle-area-ii/solutions/4800243/)

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
     * @param Integer[][] $rectangles
     * @return Integer
     */
    function rectangleArea($rectangles) {
        $MOD = pow(10, 9) + 7;
        $total = 0;

        $xValToId = [];
        $yValToId = [];
        foreach ($rectangles as $rec) {
            $xValToId[$rec[0]] = 1;
            $yValToId[$rec[1]] = 1;
            $xValToId[$rec[2]] = 1;
            $yValToId[$rec[3]] = 1;
        }
        
        $allXs = array_keys($xValToId);
        $allYs = array_keys($yValToId);
        sort($allXs);
        sort($allYs);

        $numXpoints = count($allXs);
        $numYpoints = count($allYs);

        for ($i = 0; $i < $numXpoints; $i++) $xValToId[$allXs[$i]] = $i;
        for ($i = 0; $i < $numYpoints; $i++) $yValToId[$allYs[$i]] = $i;

        $isCriticalDiff = array_fill(0, $numYpoints, array_fill(0, $numXpoints, 0));
        foreach ($rectangles as $rec) {
            $startX = $xValToId[$rec[0]];
            $startY = $yValToId[$rec[1]];
            $endX = $xValToId[$rec[2]];
            $endY = $yValToId[$rec[3]];

            // OPTIMISATION!!!
            $isCriticalDiff[$startY][$startX]++;
            $isCriticalDiff[$endY][$startX]--;
            $isCriticalDiff[$startY][$endX]--;
            $isCriticalDiff[$endY][$endX]++;
        }

        $computed = array_fill(0, $numYpoints, array_fill(0, $numXpoints, 0));
        for ($y = 0; $y < $numYpoints - 1; $y++) {
            for ($x = 0; $x < $numXpoints - 1; $x++) {
                $top = $y == 0 ? 0 : $computed[$y - 1][$x];
                $left = $x == 0 ? 0 : $computed[$y][$x - 1];
                $topLeft = $x == 0 || $y == 0 ? 0 : $computed[$y - 1][$x - 1];
                $computed[$y][$x] = $top + $left - $topLeft + $isCriticalDiff[$y][$x];
                if ($computed[$y][$x] <= 0) continue;

                $xDelta = $allXs[$x + 1] - $allXs[$x];
                $yDelta = $allYs[$y + 1] - $allYs[$y];
                $change = ($xDelta * $yDelta) % $MOD;
                $total = ($total + $change) % $MOD;
            }
        }
        return (int) ($total % $MOD);
    }
}

```