# PHP solution one loop

**Author:** Yuwipi
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/4527531/](https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/4527531/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```
class Solution {

    /**
     * @param Integer[][] $dimensions
     * @return Integer
     */
    function areaOfMaxDiagonal($dimensions) {
        $a = 0;
        $d = 0; 
        for($i =0;$i < count($dimensions);$i++){
            if( pow($dimensions[$i][1],2)+pow($dimensions[$i][0],2) > $d  || (pow($dimensions[$i][1],2)+pow($dimensions[$i][0],2) === $d  && $dimensions[$i][1]*$dimensions[$i][0] > $a)){ 
                $a = $dimensions[$i][1]*$dimensions[$i][0];
                $d = pow($dimensions[$i][1],2)+pow($dimensions[$i][0],2);
            }
        }
        return $a; 
    }
}
```