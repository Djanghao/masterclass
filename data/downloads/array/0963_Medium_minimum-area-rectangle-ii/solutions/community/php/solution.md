# Solution Minimum Area Rectangle II

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/4834590/](https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/4834590/)

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
     * @param Integer[][] $points
     * @return Float
     */
    function minAreaFreeRect($points) {
        $n = count($points);
        $pointSet = array();
        foreach ($points as $point) {
            $pointSet[$point[0]][$point[1]] = true;
        }
        
        $minArea = PHP_INT_MAX;
        for ($i = 0; $i < $n - 1; $i++) {
            for ($j = $i + 1; $j < $n; $j++) {
                $p1 = $points[$i];
                $p2 = $points[$j];
                $dx1 = $p2[0] - $p1[0];
                $dy1 = $p2[1] - $p1[1];
                
                for ($k = $j + 1; $k < $n; $k++) {
                    $p3 = $points[$k];
                    $dx2 = $p3[0] - $p1[0];
                    $dy2 = $p3[1] - $p1[1];
                    
                    if ($dx1 * $dx2 + $dy1 * $dy2 == 0) {
                        $p4x = $p2[0] + $p3[0] - $p1[0];
                        $p4y = $p2[1] + $p3[1] - $p1[1];
                        
                        if (isset($pointSet[$p4x][$p4y])) {
                            $area = sqrt(($dx1 ** 2 + $dy1 ** 2) * ($dx2 ** 2 + $dy2 ** 2));
                            $minArea = min($minArea, $area);
                        }
                    }
                }
            }
        }
        
        return $minArea == PHP_INT_MAX ? 0 : $minArea;
    }
}

```