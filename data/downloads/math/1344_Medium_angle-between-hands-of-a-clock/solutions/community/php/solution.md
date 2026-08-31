# Solution Angle Between Hands of a Clock

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/4925493/](https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/4925493/)

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
     * @param Integer $hour
     * @param Integer $minutes
     * @return Float
     */
    function angleClock($hour, $minutes) {
        $minute_angle = $minutes * 6;
        $hour_angle = ($hour % 12) * 30 + $minutes * 0.5;
        $angle = abs($hour_angle - $minute_angle);
        $angle = min($angle, 360 - $angle);
        return $angle;
    }
}

$solution = new Solution();
$hour = 12;
$minutes = 30;
echo $solution->angleClock($hour, $minutes);

```