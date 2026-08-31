# Solution Masking Personal Information

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/masking-personal-information/solutions/4794747/](https://leetcode.com/problems/masking-personal-information/solutions/4794747/)

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
    function maskPII($S) {
        if (strpos($S, "@") !== false) { // email
            list($sub1, $sub2) = explode("@", strtolower($S), 2);
            $sub1 = $sub1[0] . "*****" . substr($sub1, -1);
            return $sub1 . "@" . $sub2;
        } else { // number
            $symbols = array("(", ")", "-", "+", " ");
            $S = str_replace($symbols, "", $S);
            $rv = "***-***-" . substr($S, -4);
            $digits = preg_match_all("/\\d/", $S);
            if ($digits == 10) return $rv;
            return "+" . str_repeat("*", $digits - 10) . "-" . $rv;
        }
    }
}
```