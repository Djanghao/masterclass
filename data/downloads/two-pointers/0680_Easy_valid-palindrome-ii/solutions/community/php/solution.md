# Simple PHP solution

**Author:** Pavellver
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-palindrome-ii/solutions/4238286/](https://leetcode.com/problems/valid-palindrome-ii/solutions/4238286/)

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
    function validPalindrome($s) {
        $left = 0;
        $right = strlen($s) - 1;
        while ($left <= $right) {
            if ($s[$left] != $s[$right]) {
                $leftstr = substr_replace($s, "", $left, 1);
                $rightstr = substr_replace($s, "", $right, 1);
                return $leftstr == strrev($leftstr) or $rightstr == strrev($rightstr);
            }
            $left++;
            $right--;
        }
        return true;
    }
}
```