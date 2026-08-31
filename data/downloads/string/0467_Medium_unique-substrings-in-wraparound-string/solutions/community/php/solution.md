# Solution Unique Substrings in Wraparound String

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/4726625/](https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/4726625/)

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
     * @return Integer
     */
    function findSubstringInWraproundString($s) {
        $count = array_fill(0, 26, 0); 
        $length = strlen($s);
        $maxLength = 0; 
        for ($i = 0; $i < $length; $i++) {
            if ($i > 0 && (ord($s[$i]) - ord($s[$i - 1]) == 1 || ($s[$i] == 'a' && $s[$i - 1] == 'z'))) {
                $maxLength++;
            } else {
                $maxLength = 1; 
            }
            $index = ord($s[$i]) - ord('a');
            $count[$index] = max($count[$index], $maxLength);
        }
        return array_sum($count);
    }
}

```