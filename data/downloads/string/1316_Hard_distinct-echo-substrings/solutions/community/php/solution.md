# Solution Distinct Echo Substrings

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-echo-substrings/solutions/4918307/](https://leetcode.com/problems/distinct-echo-substrings/solutions/4918307/)

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
     * @param String $text
     * @return Integer
     */
    function distinctEchoSubstrings($text) {
        $n = strlen($text);
        $result = array();
        
        for ($i = 0; $i < $n; $i++) {
            for ($len = 1; $i + 2 * $len <= $n; $len++) {
                $sub = substr($text, $i, $len);
                $next = substr($text, $i + $len, $len);
                
                if ($sub === $next) {
                    $result[$sub] = true;
                }
            }
        }
        
        return count($result);
    }
}

```