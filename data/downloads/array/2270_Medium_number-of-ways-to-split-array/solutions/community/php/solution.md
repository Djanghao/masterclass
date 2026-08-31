# Sliding Window -ish approach

**Author:** DemetriSam
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-array/solutions/4671026/](https://leetcode.com/problems/number-of-ways-to-split-array/solutions/4671026/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function waysToSplitArray($nums) {
        $len = count($nums);
        $sum = array_sum($nums);
        $i = $count = $leftSum = 0;

        do {
            $leftSum += $nums[$i];
            $rightSum = $sum - $leftSum;
            $count += $leftSum >= $rightSum;
            $i++;
        } while($i < $len - 1);

        return $count;
    }
}
```