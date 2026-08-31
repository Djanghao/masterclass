# PHP Beats 100% runtime

**Author:** fernan7994
**Votes:** 1
**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3477814/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3477814/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- It's not necessary to save the number as you multiply only save the sign.
- If 0 is found break the loop and return 0
- If the array has a single value don't enter into the loop

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function arraySign($nums) {
        
        $sign = ($nums[0] != 0) ? $nums[0]/abs($nums[0]) : $nums[0]; 
        for($i = 1; $i < count($nums); $i++) { 
            
            if($sign * $nums[$i] > 0) { 
                
                $sign = 1; 
                
            } elseif($sign * $nums[$i] < 0) { 
                
                $sign = -1; 
                
            } else { 
                
                $sign = 0; 
                break; 
            } 
        } 
        
        return $sign;
    }
}
```