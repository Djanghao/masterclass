# Beats 100.00% of users with PHP

**Author:** vanroosie
**Votes:** 0
**Link:** [https://leetcode.com/problems/furthest-point-from-origin/solutions/4803103/](https://leetcode.com/problems/furthest-point-from-origin/solutions/4803103/)

---

# Intuition
Because when moving, the left and right steps will cancel each other out. As for the `"_"` step, it can be customized into either a left or right step. Therefore, to take the farthest step possible, it is necessary to find out which step gains the advantage after the left and right steps have nullified each other. Subsequently, the `"_"` steps will transform into the type of step that holds that advantage.

# Code
```
class Solution {

    /**
     * @param String $moves
     * @return Integer
     */
    function furthestDistanceFromOrigin($moves) {
        $number_left = substr_count($moves, 'L');
        $number_right = substr_count($moves, 'R');
        $number_break = substr_count($moves, '_');
        return abs($number_left - $number_right) + $number_break;
    }
}
```