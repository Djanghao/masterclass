# First ever solution in PHP

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/5495018/](https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/5495018/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxValueAfterReverse($nums) {
        $originalValue = 0;
        $sz = count($nums);
        for ($idx = 0; $idx < $sz - 1; $idx++) {
            $originalValue += abs($nums[$idx] - $nums[$idx + 1]);
        }
        $finalValue = $originalValue;
        for ($idx = 1; $idx < $sz - 1; $idx++) {
            $finalValue = max($finalValue, $originalValue - abs($nums[$idx] - $nums[$idx + 1]) + abs($nums[$idx + 1] - $nums[0]));
            $finalValue = max($finalValue, $originalValue - abs($nums[$idx] - $nums[$idx - 1]) + abs($nums[$idx - 1] - $nums[$sz - 1]));
        }
        $minimum = PHP_INT_MAX;
        $maximum = PHP_INT_MIN;
        for ($idx = 0; $idx < $sz - 1; $idx++) {
            $tempMin = min($nums[$idx], $nums[$idx + 1]);
            $tempMax = max($nums[$idx], $nums[$idx + 1]);
            if ($minimum < $tempMin) { $finalValue = max($finalValue, $originalValue + ($tempMin - $minimum) * 2); }
            if ($tempMax < $maximum) { $finalValue = max($finalValue, $originalValue + ($maximum - $tempMax) * 2); }
            $minimum = min($minimum, $tempMax);
            $maximum = max($maximum, $tempMin);
        }
        return $finalValue;
    }
}
```