# PHP. T - O(n*n), M - O(n).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/4333536/](https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/4333536/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n*n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function surfaceArea($grid) {
        $res = 0;
        $xx = array_fill(0, count($grid), 0);
        $yy = array_fill(0, count($grid), 0);
        foreach($grid as $y => $row){
            foreach($row as $x => $v){
                // front and back views
                if($v > 0){
                    $res += 2;
                }
                // from top view
                if($v >= $xx[$x]){
                    $res += $v - $xx[$x];
                } else {
                    $res += $xx[$x] - $v;
                }
                $xx[$x] = $v;
                //from left view
                if($v >= $yy[$y]){
                    $res += $v - $yy[$y];
                } else {
                    $res += $yy[$y] - $v;
                }
                $yy[$y] = $v;
            }
        }
        // res + bottom view + right view
        return $res + array_sum($xx) + array_sum($yy);
    }
}
```