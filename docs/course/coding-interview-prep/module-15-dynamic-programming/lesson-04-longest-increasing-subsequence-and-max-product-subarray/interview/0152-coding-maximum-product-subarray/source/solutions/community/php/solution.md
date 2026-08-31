# PHP Solution

**Author:** mohammed_aladham
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-subarray/solutions/3099341/](https://leetcode.com/problems/maximum-product-subarray/solutions/3099341/)

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
    function maxProduct($nums) {
        $ans = $max = $min = $nums[0];
     
        for($i=1; $i<count($nums); $i++){
            $n = $nums[$i];
           
            if($n < 0){
                $temp = $max;
                $max = $min;
                $min = $temp;
            }
   
            $max = max($n, $max*$n);
            $min = min($n, $min*$n);
         
            $ans = max($max, $ans);
        }

        return $ans;
    }
}
```