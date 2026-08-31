# Solution Valid Perfect Square

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-perfect-square/solutions/4712987/](https://leetcode.com/problems/valid-perfect-square/solutions/4712987/)

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
     * @param Integer $num
     * @return Boolean
     */
    function isPerfectSquare($num) {
        if ($num < 2) return true;
        
        $left = 2;
        $right = $num;
        
        while ($left <= $right) {
            $mid = $left + intdiv($right - $left, 2);
            $midSquared = $mid * $mid;
            
            if ($midSquared == $num) {
                return true;
            } elseif ($midSquared < $num) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }
        
        return false;
    }
}

```