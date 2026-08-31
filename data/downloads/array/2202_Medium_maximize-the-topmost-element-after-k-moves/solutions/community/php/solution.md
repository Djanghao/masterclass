# php solution

**Author:** hjoru
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/1909184/](https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/1909184/)

---

```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function maximumTop($nums, $k) {
        $remove = [];
        $nums = array_reverse($nums);
        if (count($nums) == 1) {
            if ($k % 2 == 1) {
                return -1;
            } else {
                return $nums[0];
            }
        }
        while ($k > 1 && !empty($nums)) {
            $remove[] = array_pop($nums);
            $k--;
        }
        if ($k === 0) {
            return $nums[count($nums) - 1]; 
        }
        if (empty($remove)) {
            return $nums[count($nums) - 2];
        } 
        $maxRemove = max($remove);
        if ($nums[count($nums) - 2] > $maxRemove) {
            return $nums[count($nums) - 2];
        } else {
            return $maxRemove;
        }
    }
}