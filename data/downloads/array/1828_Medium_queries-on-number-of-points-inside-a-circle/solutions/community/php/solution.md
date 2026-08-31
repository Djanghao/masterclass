# PHP solution

**Author:** fredo30400
**Votes:** 0
**Link:** [https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/4208006/](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/4208006/)

---


# Approach
classic approach : a point is in circle if the distance between this point and the center of the circle is under or equal to the radius.


# Code
```
class Solution {
    function countPoints($points, $queries) {
        $out = [];
        foreach($queries as list($x,$y,$r)){
            $cnt = 0;
            foreach($points as list($a,$b)){
                $cnt+= ($x-$a)**2+($y-$b)**2<=$r**2 ? 1 : 0;
            }
            $out[] = $cnt;
        }
        return $out;
    }
}
```