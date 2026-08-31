# PHP. T - O(n**3), M - O(1).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-triangle-area/solutions/4722025/](https://leetcode.com/problems/largest-triangle-area/solutions/4722025/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n**3)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {

    /**
     * @param Integer[][] $points
     * @return Float
     */
    function largestTriangleArea($points) {
        $res = 0;
        for($i=0;$i<count($points)-2;$i++){
            for($j=$i+1;$j<count($points)-1;$j++){
                for($k=$j+1;$k<count($points);$k++){
                    $cur = 0.5 * abs($points[$i][0] * ($points[$j][1]-$points[$k][1]) + $points[$j][0] * ($points[$k][1]-$points[$i][1]) + $points[$k][0] * ($points[$i][1]-$points[$j][1]));
                    $res = max($res,$cur);
                }
            }   
        }
        return $res;
    }
}
```