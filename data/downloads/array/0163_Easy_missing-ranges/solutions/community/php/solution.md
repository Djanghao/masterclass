# PHP Solution

**Author:** user0177X
**Votes:** 0
**Link:** [https://leetcode.com/problems/missing-ranges/solutions/3661858/](https://leetcode.com/problems/missing-ranges/solutions/3661858/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $lower
     * @param Integer $upper
     * @return Integer[][]
     */
    function findMissingRanges($nums, $lower, $upper) {
        $n = count($nums);
        if ($n == 0) {
            return [[$lower, $upper]];
        }

        $ranges = [];
        if ($lower < $nums[0]) {
            $ranges[] = [$lower, $nums[0] - 1];
        }

        if ($n > 1) {
            for ($i = 1; $i < $n; $i++) {
                if ($nums[$i] != $nums[$i - 1] + 1) {
                    $ranges[] = [$nums[$i - 1] + 1, $nums[$i] - 1];
                }
            }
        }

        if ($upper > $nums[$n - 1]) {
            $ranges[] = [$nums[$n - 1] + 1, $upper];
        }
        return $ranges;
    }
}
```