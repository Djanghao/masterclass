# Php simple two liner

**Author:** NickHuijgen
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/1614427/](https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/1614427/)

---

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function targetIndices($nums, $target) {
        sort($nums);
		
        return array_keys($nums, $target);
    }
}