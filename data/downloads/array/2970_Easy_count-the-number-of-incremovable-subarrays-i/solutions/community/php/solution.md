# task with php

**Author:** kaushalendrapanday
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/4664593/](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/4664593/)

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
     * @param Integer[] $nums
     * @return Integer
     */
    function incremovableSubarrayCount($nums) {
       $ans = 0;$sub=[];
        $n = count($nums);
        for ($i = 0; $i < $n; $i++) {
            for ($j = $i; $j < $n; $j++) {
                 $ok = true;
                 $lst = -1; 
                for ($k = 0; $k < $n; $k++) {
                    if ($k >= $i && $k <= $j) {
                        $sub[]=$nums[$k];
                    } else {
                        $ok &= ($lst < $nums[$k]); 
                        $lst = $nums[$k];         
                    }
                }
                
                $ans += $ok; 
            }
        }
        return $ans;  
    }
}
```