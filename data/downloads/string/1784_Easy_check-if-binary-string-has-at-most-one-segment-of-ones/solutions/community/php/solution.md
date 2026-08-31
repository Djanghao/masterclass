# PHP. T - O(n), M - O(1).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/solutions/4791401/](https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/solutions/4791401/)

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
O(1)
# Code
```
class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function checkOnesSegment($s) {
        for($i=1;$i<strlen($s)-1;$i++){
            if($s[$i]=="0" && $s[$i+1]=="1") return false;
        }
        return true;
    }
}
```