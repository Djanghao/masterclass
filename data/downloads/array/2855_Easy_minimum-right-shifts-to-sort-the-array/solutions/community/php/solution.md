# PHP 100%

**Author:** fredo30400
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4645994/](https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4645994/)

---



# Code
```
class Solution {
    function minimumRightShifts($nums) {
        $nums2 = $nums;
        sort($nums2);
        if ($nums2==$nums){return 0;}
        for($i=0;$i<count($nums);$i++){
            array_unshift($nums,array_pop($nums));
            if ($nums2==$nums){return $i+1;}
        }
        return -1;
    }
}
```