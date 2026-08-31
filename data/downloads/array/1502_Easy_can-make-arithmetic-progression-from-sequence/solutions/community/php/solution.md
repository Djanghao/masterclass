# Easy PHP accept best solution

**Author:** Abu_Daud
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/3668929/](https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/3668929/)

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
     * @param Integer[] $arr
     * @return Boolean
     */
    function canMakeArithmeticProgression($arr) {

            sort($arr);
            $a =$arr[0]; 
            $b =$arr[1];
            $diff = $b-$a;  
            for($i=2;$i<count($arr);$i++){
                $val=$arr[$i]-$arr[$i-1];
                if($val != $diff){
                   return false;
                }
            }
                    
       return true;
                
    }
}
```