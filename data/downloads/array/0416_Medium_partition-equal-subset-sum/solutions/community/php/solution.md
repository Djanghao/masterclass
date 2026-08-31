# Knapsack Solution with 1 row

**Author:** Miryafa
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-equal-subset-sum/solutions/3549647/](https://leetcode.com/problems/partition-equal-subset-sum/solutions/3549647/)

---

# Approach
This is from following the explanation here:
https://leetcode.com/problems/partition-equal-subset-sum/solutions/462699/whiteboard-editorial-all-approaches-explained/

Then I made the variable names make sense to me, and added one small optimization. Given `$sum` is always decreasing, and `$sum - $value < 0` => `($sum - 1) - $value < 0`, we can break the first time it's less than 0.

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function canPartition($nums) {
        $target = array_sum($nums) / 2;
        if (!is_int($target)) {
            return false;
        }
        $length = count($nums);
        $canMake = array_fill(0, $target + 1, false);
        $canMake[0] = true;
        for ($i = 1; $i <= $length; $i++) {
            $value = $nums[$i - 1];
            for ($sum = $target; $sum >= 0; $sum--) {
                if ($sum - $value < 0) {
                    break;
                }
                $canMake[$sum] = $canMake[$sum - $value] || $canMake[$sum];
            }
        }

        return $canMake[$target];
    }
}
```