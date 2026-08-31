# sort array and get big number then loop array

**Author:** ccdsiu
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/4937918/](https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/4937918/)

---

# Intuition
sort array and get big number then loop array


# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function dominantIndex($nums) {
        $o = $nums;
        rsort($nums);
        $big = $nums[0];
        $r = true;
        foreach($nums as $k=>$num){
            if($k>0){
                if($num*2>$big){
                    $r = false;
                }
            }
        };
        if($r){
            return  array_search($big,$o);
        }else{
            return -1;
        }
    }
}
```