# PHP solutions beats 86% in time , simple solution sorting loop

**Author:** utahir10
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5409658/](https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5409658/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Integer
     */
    function addedInteger($nums1, $nums2) {
        sort($nums1);
        sort($nums2);
        if($nums1 == $nums2){
            return 0;
        }
    
        for($i=0; $i<count($nums1); $i++){
            if($nums1[$i] != $nums2[$i]){
                return $nums2[$i] - $nums1[$i];
            }
        }
    }

}
```