# sort to find max and min and loop through min

**Author:** ccdsiu
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/4860502/](https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/4860502/)

---

# Intuition
sort to find max and min and loop through min

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findGCD($nums) {
        sort($nums);
        $min = $nums[0];
        $max = $nums[count($nums)-1];
        $a = [];
        for($i=1;$i<=$min;$i++){
            if(($max%$i==0 && $min%$i==0)){
               array_push($a,$i);
            }
        }
        return max($a);
    }
}
```