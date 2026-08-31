# Use array_filter

**Author:** ccdsiu
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/4852590/](https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/4852590/)

---

# Intuition
Use array_filter

# Code
```
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Integer[]
     */
    function findIntersectionValues($nums1, $nums2) {
        $c = array_filter($nums1,function($nm) use($nums2){
            return in_array($nm,$nums2);
        });
        $d = array_filter($nums2,function($nm) use($nums1){
            return in_array($nm,$nums1);
        });
        return [count($c),count($d)];
    }
}
```