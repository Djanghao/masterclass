# [PHP] Easy understanding solution, beat 100% both runtime and memory

**Author:** hoangloc
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3327394/](https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3327394/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function zeroFilledSubarray($nums) {
        $count = 0;
        $length = 0;
        for ($i = 0; $i < sizeof($nums); $i++) {
            if ($nums[$i] === 0) {
                $length++;
                $count += $length;
            } else $length = 0;
        }
        return $count;
    }
}
```