# [PHP] Simple Map solution

**Author:** casshsu
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-anagram-mappings/solutions/1603427/](https://leetcode.com/problems/find-anagram-mappings/solutions/1603427/)

---

```
class Solution {
    function anagramMappings($nums1, $nums2) {
        $m = array();
        $ans = array();
        
        foreach($nums2 as $i => $n) {
            $m[$n] = $i;
        }
        
        foreach($nums1 as $n) {
            array_push($ans, $m[$n]);
        }
        
        return $ans;
    }
}
```