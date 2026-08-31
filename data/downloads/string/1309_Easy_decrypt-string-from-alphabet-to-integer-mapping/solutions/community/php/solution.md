# Solution Decrypt String from Alphabet to Integer Mapping

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/4914657/](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/4914657/)

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
     * @return String
     */
    function freqAlphabets($s) {
        $result = "";
        $i = 0;
        while ($i < strlen($s)) {
            if ($i + 2 < strlen($s) && $s[$i + 2] == '#') {
                $num = intval(substr($s, $i, 2));
                $result .= chr($num + 96);
                $i += 3;
            } else {
                $num = intval($s[$i]);
                $result .= chr($num + 96);
                $i++;
            }
        }
        return $result;
    }
}

```