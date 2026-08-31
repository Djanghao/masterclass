# Solution Base 7

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/base-7/solutions/4734171/](https://leetcode.com/problems/base-7/solutions/4734171/)

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
     * @return String
     */
    function convertToBase7($num) {
        if ($num == 0) return "0";
        
        $isNegative = $num < 0;
        $num = abs($num);
        
        $result = "";
        
        while ($num > 0) {
            $remainder = $num % 7;
            $result = $remainder . $result;
            $num = intdiv($num, 7);
        }
        
        if ($isNegative) {
            $result = "-" . $result;
        }
        
        return $result;
    }
}

```