# PHP: Beats 99.79%

**Author:** chymcakmilan
**Votes:** 8
**Link:** [https://leetcode.com/problems/contains-duplicate/solutions/2808487/](https://leetcode.com/problems/contains-duplicate/solutions/2808487/)

---

# Intuition
```
Speed: isset($arr[$i]) is much faster than in_array()
```
```
Speed: $arr[$i] is much faster than array_push()
```

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function containsDuplicate($nums) {
        
        $tempArr = [];

        foreach($nums as $num) {
            if(isset($tempArr[$num])) return true;
            $tempArr[$num] = 1;
        }
        
        return false;

    }
}
```