# Check if a Parentheses String Can Be Valid || Simple PHP Solution

**Author:** umerkhanwp
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/4789358/](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/4789358/)

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
     * @param String $s
     * @param String $locked
     * @return Boolean
     */
    function canBeValid($s, $locked) {
        return strlen($s) % 2 == 0 
            && $this->isValid($s, $locked, 'left') 
            && $this->isValid(strrev($s), strrev($locked), 'right');
    }

    function isValid($s, $locked, $dir) {
        $flip = $open = $close = 0;
        $n = strlen($s);

        for($i = 0; $i < $n; $i++) {
            if($locked[$i] == '0') {
                $flip++;
            } elseif($s[$i] == '(') {
                $open++;
            } elseif($s[$i] == ')') {
                $close++;
            }

            if($dir == 'left' && $flip + $open < $close) {
                return false;
            } elseif($dir == 'right' && $flip + $close < $open) {
                return false;
            }
        }

        return true;
    }
}
```