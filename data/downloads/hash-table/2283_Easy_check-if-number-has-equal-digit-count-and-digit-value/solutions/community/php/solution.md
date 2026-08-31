# Check if Number Has Equal Digit Count and Digit Value

**Author:** LuisFelipe1
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/4689452/](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/4689452/)

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
     * @param String $num
     * @return Boolean
     */
    function digitCount($num) {
        
        $flag = true;
        for($i=0; $i<strlen($num); $i++){
            $conteo = substr_count($num, $i);
            
            if($conteo != $num[$i]){
                $flag = false;
                break;
            }

        }

        return $flag;
    }
}
```