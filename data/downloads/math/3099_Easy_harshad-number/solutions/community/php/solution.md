# Solution with the help str_split

**Author:** evgpol
**Votes:** 0
**Link:** [https://leetcode.com/problems/harshad-number/solutions/5401631/](https://leetcode.com/problems/harshad-number/solutions/5401631/)

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
     * @param Integer $x
     * @return Integer
     */
    function sumOfTheDigitsOfHarshadNumber($x) {
        
        
        $res = str_split($x);
        $res = array_sum($res);
    
        if ($x%$res==0){
            return $res;
        }else{
            return -1;
        }
    }
}
```