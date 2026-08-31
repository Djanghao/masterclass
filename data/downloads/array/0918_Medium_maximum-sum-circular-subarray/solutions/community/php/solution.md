# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/6082650/](https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/6082650/)

---

```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxSubarraySumCircular($nums) {
        // Note: similar to https://leetcode.com/problems/maximum-subarray
        //
        // Due to the circular constraint, it might be the case that the max sum contains elements from both the beginning AND the end.
        // Regarding the MINIMUM sum, we also know (and it's important to note it), that:
        //      - The minimum sum will contain all the elements not contained in maximum sum.
        //      - max_sum + min_sim = total_sum of the array
        //      - Either one or the other will be contained without need of the circular constraint.
        //
        // Hence, our solution will be: max(max_sum, total_sum-min_sum)

        // We will use Kadane's algorithm.
        $curMax = $curMin = $total = 0;
        $absMax = $absMin = $nums[0];

        foreach ($nums as $num) {
            $curMax = max($curMax+$num, $num);
            $absMax = max($absMax, $curMax);

            $curMin = min($curMin+$num, $num);
            $absMin = min($absMin, $curMin);

            $total += $num;
        }
        
        return $absMax >= 0
            ? max($absMax, $total-$absMin)
            : $absMax;  // Only if all nums were negative
    }
}
```