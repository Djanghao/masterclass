# Simple loop -  O(n) time and O(1) space complexity

**Author:** mahdieft
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/4585525/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/4585525/)

---

```
class Solution {
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function removeDuplicates(&$nums) {
        $count = count($nums);
        $writeIndex = 1;
        
        for ($i = 1; $i < $count; $i++) {
            if ($nums[$i] !== $nums[$i - 1]) {
                $nums[$writeIndex] = $nums[$i];
                $writeIndex++;
            }            
        }
        
        return $writeIndex;
    }
}
```