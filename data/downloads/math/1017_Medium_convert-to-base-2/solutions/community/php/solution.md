# Solution Convert to Base -2

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-to-base-2/solutions/4863360/](https://leetcode.com/problems/convert-to-base-2/solutions/4863360/)

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
     * @param Integer $n
     * @return String
     */
    function baseNeg2($n) {
        if ($n === 0) return "0";
        
        $result = '';
        while ($n != 0) {
            $remainder = $n % -2;
            $n = ($n - $remainder) / -2;
            if ($remainder < 0) {
                $remainder += 2;
                $n++;
            }
            $result = $remainder . $result;
        }
        
        return $result;
    }
}

```