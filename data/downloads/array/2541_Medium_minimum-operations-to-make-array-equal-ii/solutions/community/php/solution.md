# Php Solution

**Author:** muneebshoukat60
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3085100/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3085100/)

---



# Code
```
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @param Integer $k
     * @return Integer
     */
    function minOperations($nums1, $nums2, $k) {
        if($nums1 == $nums2) return 0;
        if($k == 0) return -1;
        $operations = 0;
        $pos = 0;
        $neg = 0;
        foreach($nums1 as $key => $val){
            $diff = $val - $nums2[$key];
            if($diff % $k !== 0){
                return -1;
            }
            $operations += abs($diff / $k);
            $diff >= 0 ? $pos += $diff : $neg += abs($diff);
        }
        if($pos != $neg) return -1;
        return $operations % 2 == 0 ? $operations / 2 : -1;
    }
}
```