# PHP solution with median

**Author:** darkoracic
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/2217323/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/2217323/)

---

```
class Solution {
    function minMoves2($nums) {
        $r = 0;
        sort($nums);
        
        $middleIndex = count($nums) / 2;
        
        if (is_float($middleIndex)) 
        {
            $median = $nums[(int) $middleIndex];
        }
        else
        {
            $median = ($nums[$middleIndex] + $nums[$middleIndex - 1]) / 2;
        }

        foreach($nums as $value)
        {
            $r = $r + abs($median - $value);
        }

        return $r;
    }
}
```