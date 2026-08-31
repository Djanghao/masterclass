# PHP. T-O(n),M-O(n).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/4888839/](https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/4888839/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
class Solution {

    /**
     * @param Integer[] $A
     * @param Integer[] $B
     * @return Integer[]
     */
    function findThePrefixCommonArray($A, $B) {
        $d = [];
        $res = [];
        for($i=0;$i<count($A);$i++){
            if(isset($d[$A[$i]])){
                unset($d[$A[$i]]);
            } else {
                $d[$A[$i]] = 1;
            }
            if(isset($d[$B[$i]])){
                unset($d[$B[$i]]);
            } else {
                $d[$B[$i]] = 1;
            }
            $res[] = (($i+1)*2-count($d))/2;
        }
        return $res;
    }
}
```