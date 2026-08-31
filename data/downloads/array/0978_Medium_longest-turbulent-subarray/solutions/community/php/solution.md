# Solution Longest Turbulent Subarray

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-turbulent-subarray/solutions/4843008/](https://leetcode.com/problems/longest-turbulent-subarray/solutions/4843008/)

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
     * @param Integer[] $arr
     * @return Integer
     */
    function maxTurbulenceSize($arr) {
        $n = count($arr);
        if ($n == 1) return 1;
        
        $maxLen = 1;
        $left = 0;
        
        for ($right = 1; $right < $n; $right++) {
            $compare = $this->compare($arr[$right - 1], $arr[$right]);
            
            if ($compare == 0) {
                $left = $right;
            } elseif ($right == $n - 1 || $compare * $this->compare($arr[$right], $arr[$right + 1]) != -1) {
                $maxLen = max($maxLen, $right - $left + 1);
                $left = $right;
            }
        }
        
        return $maxLen;
    }
    
    function compare($a, $b) {
        return $a == $b ? 0 : ($a > $b ? 1 : -1);
    }
}

```