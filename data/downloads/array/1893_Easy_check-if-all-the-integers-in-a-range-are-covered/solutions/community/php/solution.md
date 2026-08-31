# PHP Solution

**Author:** JimWei89
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/5658007/](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/5658007/)

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
     * @param Integer[][] $ranges
     * @param Integer $left
     * @param Integer $right
     * @return Boolean
     */
    function isCovered($ranges, $left, $right) {
        for($i=$left;$i<=$right;$i++){
           for($j=0;$j<count($ranges);$j++){
                if($i>=$ranges[$j][0] && $i<=$ranges[$j][1]){
                    continue 2;
                }
           }  
           return false;         
        }
        return true;
    }
}
```