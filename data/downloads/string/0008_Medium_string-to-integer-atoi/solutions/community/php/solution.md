# 8. String to Integer (atoi)

**Author:** nilshani
**Votes:** 1
**Link:** [https://leetcode.com/problems/string-to-integer-atoi/solutions/5421495/](https://leetcode.com/problems/string-to-integer-atoi/solutions/5421495/)

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
    function myAtoi($s) {
        // return (int)$s;
        $s = trim($s);
        $n = '';
        for ($i=0; $i<strlen($s); $i++) {
            if (!is_numeric($s[$i]) && $s[$i] != "+" && $s[$i] != "-") break;
            $n .= $s[$i];
        }

        $n = (int)$n;
        if ($n < -2147483648) return -2147483648;
        if ($n > 2147483647) return 2147483647;
        return $n;
    }
}
```