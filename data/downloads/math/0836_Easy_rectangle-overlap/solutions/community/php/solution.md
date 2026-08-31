# PHP.T-O(1),M-O(1).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/rectangle-overlap/solutions/4784313/](https://leetcode.com/problems/rectangle-overlap/solutions/4784313/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {

    /**
     * @param Integer[] $rec1
     * @param Integer[] $rec2
     * @return Boolean
     */
    function isRectangleOverlap($rec1, $rec2) {
        if($rec1[0] > $rec2[0]){
            $tmp = $rec2;
            $rec2 = $rec1;
            $rec1 = $tmp;
        } 
        if($rec1[1] < $rec2[3]){
            if($rec2[1] < $rec1[1]){
                if($rec2[0] < $rec1[2]){
                    return true;
                }
            } else {
                if($rec2[0] < $rec1[2] && $rec2[1] < $rec1[3]){
                    return true;
                }
            }
        }
        return false;
    }
}
```