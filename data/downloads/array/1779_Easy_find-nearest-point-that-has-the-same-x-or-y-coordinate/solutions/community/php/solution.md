# Simple and straightforward PHP solution

**Author:** eplaksin
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/3292811/](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/3292811/)

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
     * @param Integer $x
     * @param Integer $y
     * @param Integer[][] $points
     * @return Integer
     */
    function nearestValidPoint($x, $y, $points) {
        $minDistance = 0;
        $index = -1;

        foreach ($points as $i => $point) {
            if ($x === $point[0] || $y === $point[1]) {
                $distance = abs($x - $point[0]) + abs($y - $point[1]);
                
                if ($index === -1 || $distance < $minDistance) {
                    $minDistance = $distance;
                    $index = $i;
                }
            }
        }

        return $index;
    }
}
```