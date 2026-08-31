# php easy solution

**Author:** hjoru
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-hidden-sequences/solutions/1709966/](https://leetcode.com/problems/count-the-hidden-sequences/solutions/1709966/)

---

```
class Solution {

    /**
     * @param Integer[] $differences
     * @param Integer $lower
     * @param Integer $upper
     * @return Integer
     */
    function numberOfArrays($differences, $lower, $upper) {
        $rangeLow = $lower;
        $rangeHigh = $upper;
        foreach ($differences as $differenceIndex => $difference) {
            if ($difference > abs($upper - $lower)) {
                return 0;
            }
            $rangeLow = $rangeLow + $difference;
            $rangeHigh = $rangeHigh + $difference;
            
            if ($rangeLow < $lower) {
                $rangeLow = $lower;
            }
            if ($rangeHigh > $upper) {
                $rangeHigh = $upper;
            }
            if ($rangeHigh < $rangeLow) {
                return 0;
            }
        }
        return $rangeHigh - $rangeLow + 1;
    }
}