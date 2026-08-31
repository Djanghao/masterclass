# PHP Solution, Beats 100%

**Author:** Sporkyy
**Votes:** 0
**Link:** [https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/362996/](https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/362996/)

---

Runtime: 28 ms, faster than 100.00% of PHP online submissions
Memory Usage: 15.3 MB, less than 100.00% of PHP online submissions

```
class Solution
{

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function projectionArea($grid)
    {
        $xy = array_fill(0, count($grid) * 2, 0);
        $z = 0;
        for ($i = 0; $i < count($grid); $i++) {
            for ($j = 0; $j < count($grid); $j++) {
                $xy[$i * 2] = max($xy[$i * 2], $grid[$i][$j]);
                $xy[$i * 2 + 1] = max($xy[$i * 2 + 1], $grid[$j][$i]);
                if (0 < $grid[$i][$j]) $z++;
            }
        }
        return array_sum($xy) + $z;
    }
}
```