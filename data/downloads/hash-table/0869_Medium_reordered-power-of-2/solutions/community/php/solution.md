# Solution Reordered Power of 2

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/reordered-power-of-2/solutions/4807554/](https://leetcode.com/problems/reordered-power-of-2/solutions/4807554/)

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

    function reorderedPowerOf2($n) {
        $countDigits = function($num) {
            $count = array_fill(0, 10, 0);
            while ($num > 0) {
                $digit = $num % 10;
                $count[$digit]++;
                $num = intval($num / 10);
            }
            return $count;
        };
        
        $areDigitCountsEqual = function($count1, $count2) {
            for ($i = 0; $i < 10; $i++) {
                if ($count1[$i] !== $count2[$i]) {
                    return false;
                }
            }
            return true;
        };
        
        $powerOfTwo = 1;
        for ($i = 0; $i < 31; $i++) {
            $powerDigits = $countDigits($powerOfTwo);
            $nDigits = $countDigits($n);
            if ($areDigitCountsEqual($powerDigits, $nDigits)) {
                return true;
            }
            $powerOfTwo <<= 1;
        }
        
        return false;
    }
}

```