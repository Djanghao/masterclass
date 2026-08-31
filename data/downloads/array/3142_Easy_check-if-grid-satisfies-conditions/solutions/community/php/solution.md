# PHP solution using nested loop beats 100%

**Author:** utahir10
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5193230/](https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5193230/)

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
     * @param Integer[][] $grid
     * @return Boolean
     */
    function satisfiesConditions($grid) {
        for($i=0; $i<count($grid); $i++){
            for($j = 0; $j < count($grid[0]); $j++){
                if($i+1 < count($grid) && $grid[$i][$j] != $grid[$i+1][$j]){
                    return false;
                }
                if($j+1 < count($grid[0]) && $grid[$i][$j] == $grid[$i][$j+1]){
                    return false;
                }
            }
        }
        return true;
    }
}
```