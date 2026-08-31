# Solution Validate IP Address

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/validate-ip-address/solutions/4726636/](https://leetcode.com/problems/validate-ip-address/solutions/4726636/)

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
     * @param String $queryIP
     * @return String
     */
    function validIPAddress($queryIP) {
        if (strpos($queryIP, '.') !== false) {
            $parts = explode('.', $queryIP);
            if (count($parts) !== 4) return "Neither";
            foreach ($parts as $part) {
                if (!ctype_digit($part) || $part > 255 || ($part[0] === '0' && strlen($part) > 1)) return "Neither";
            }
            return "IPv4";
        } elseif (strpos($queryIP, ':') !== false) {
            $parts = explode(':', $queryIP);
            if (count($parts) !== 8) return "Neither";
            foreach ($parts as $part) {
                if (strlen($part) === 0 || strlen($part) > 4 || !ctype_xdigit($part)) return "Neither";
            }
            return "IPv6";
        }
        return "Neither";
    }
}

```