# Solution Coordinate With Maximum Network Quality

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/coordinate-with-maximum-network-quality/solutions/5200386/](https://leetcode.com/problems/coordinate-with-maximum-network-quality/solutions/5200386/)

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
    public function bestCoordinate(array $towers, int $radius): array {
        usort($towers, function($a, $b) {
            return $a[0] <=> $b[0];
        });

        $reach_x = new SplQueue();
        $tid = 0;
        $max_x = PHP_INT_MAX;
        $max_y = PHP_INT_MAX;
        $max_q = PHP_INT_MIN;

        for ($x = 0; $x <= 50; ++$x) {
            while ($tid < count($towers) && $x + $radius >= $towers[$tid][0]) {
                $reach_x->push($tid++);
            }

            while (!$reach_x->isEmpty() && $towers[$reach_x->bottom()][0] + $radius < $x) {
                $reach_x->shift();
            }

            for ($y = 0; $y <= 50; ++$y) {
                $q = 0;
                foreach ($reach_x as $id) {
                    if ($towers[$id][1] < $y - $radius || $towers[$id][1] > $y + $radius) {
                        continue;
                    }
                    $dd = pow($towers[$id][0] - $x, 2) + pow($towers[$id][1] - $y, 2);
                    if ($dd <= pow($radius, 2)) {
                        $q += floor($towers[$id][2] / (1 + sqrt($dd)));
                    }
                }
                if ($q > $max_q || ($q == $max_q && ($x < $max_x || ($x == $max_x && $y < $max_y)))) {
                    $max_q = $q;
                    $max_x = $x;
                    $max_y = $y;
                }
            }
        }

        return [$max_x, $max_y];
    }
}

```