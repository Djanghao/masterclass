# Solution Best Position for a Service Centre

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-position-for-a-service-centre/solutions/5105737/](https://leetcode.com/problems/best-position-for-a-service-centre/solutions/5105737/)

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
    function getMinDistSum($pos) {
        $left = 100;
        $bottom = 100;
        $right = 0;
        $top = 0;
        
        foreach ($pos as $p) {
            $left = min($left, (double)$p[0]);
            $bottom = min($bottom, (double)$p[1]);
            $right = max($right, (double)$p[0]);
            $top = max($top, (double)$p[1]);
        }
        
        $res = PHP_FLOAT_MAX;
        $res_x = 0;
        $res_y = 0;
        
        for ($delta = 10; $delta >= 0.00001; $delta /= 10) {
            for ($x = $left; $x <= $right; $x += $delta) {
                for ($y = $bottom; $y <= $top; $y += $delta) {
                    $d = 0;
                    foreach ($pos as $p) {
                        $d += sqrt(($p[0] - $x) * ($p[0] - $x) + ($p[1] - $y) * ($p[1] - $y));
                    }
                    if ($res > $d) {
                        $res = $d;
                        $res_x = $x;
                        $res_y = $y;
                    }
                }
            }
            $left = $res_x - $delta;
            $bottom = $res_y - $delta;
            $right = $res_x + $delta * 2;
            $top = $res_y + $delta * 2;
        }
        
        return $res == PHP_FLOAT_MAX ? 0 : $res;
    }
}

```