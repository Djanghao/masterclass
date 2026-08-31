# Simple PHP solution, 6 ms

**Author:** EvilBleezard
**Votes:** 7
**Link:** [https://leetcode.com/problems/remove-element/solutions/2222194/](https://leetcode.com/problems/remove-element/solutions/2222194/)

---

```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $val
     * @return Integer
     */
    function removeElement(&$nums, $val) {
        $nums = array_diff($nums, [$val]);
        return count($nums);
    }
}
```