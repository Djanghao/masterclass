# Solution Remove Covered Intervals

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-covered-intervals/solutions/4913214/](https://leetcode.com/problems/remove-covered-intervals/solutions/4913214/)

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
     * @param Integer[][] $intervals
     * @return Integer
     */
    function removeCoveredIntervals($intervals) {
        usort($intervals, function($a, $b) {
            if ($a[0] != $b[0]) {
                return $a[0] - $b[0];
            } else {
                return $b[1] - $a[1];
            }
        });

        $count = 0;
        $end = PHP_INT_MIN;
        
        foreach ($intervals as $interval) {
            if ($interval[1] > $end) {
                $end = $interval[1];
                $count++;
            }
        }

        return $count;
    }
}

```