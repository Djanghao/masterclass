# Runtime 927 ms / Memory 124 MB

**Author:** ordinary9843
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/3003472/](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/3003472/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {

    /**
     * @param Integer[][] $points
     * @return Integer
     */
    function findMinArrowShots($points) {
        usort($points, function ($a, $b) {
            return $a[1] > $b[1];  
        });

        $res = 0;
        $min = PHP_INT_MIN;
        foreach ($points as $point) {
            if ($point[0] > $min) {
                $min = $point[1];
                $res++;
            }
        }

        return $res;
    }
}
```