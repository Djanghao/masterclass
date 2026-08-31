# PHP Solution with best :)

**Author:** ramziddinrustamov
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/4098148/](https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/4098148/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
# Memory
19.16MB
Beats 44.44%of users with PHP
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
> **10ms**
Beats 61.11%of users with PHP
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    /**
     * @param String $num
     * @return String
     */
    function removeTrailingZeros($num) {
        $arr = str_split($num);
        $count = count($arr);
        
        $lastNonZeroIndex = $count - 1;
        while ($lastNonZeroIndex >= 0 && $arr[$lastNonZeroIndex] === '0') {
            $lastNonZeroIndex--;
        }


        if ($lastNonZeroIndex < 0) {
            return "0";
        }
        return implode("", array_slice($arr, 0, $lastNonZeroIndex + 1));
    }
}

```