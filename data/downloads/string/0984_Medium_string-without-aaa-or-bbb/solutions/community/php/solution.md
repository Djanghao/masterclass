# Solution String Without AAA or BBB

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/4847989/](https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/4847989/)

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
     * @param Integer $a
     * @param Integer $b
     * @return String
     */
    function strWithout3a3b($a, $b) {
        $result = '';
        
        while ($a > 0 || $b > 0) {
            if ($a > $b) {
                if (strlen($result) >= 2 && $result[strlen($result) - 1] == 'a' && $result[strlen($result) - 2] == 'a') {
                    $result .= 'b';
                    $b--;
                } else {
                    $result .= 'a';
                    $a--;
                }
            } 
            elseif ($b > $a) {
                if (strlen($result) >= 2 && $result[strlen($result) - 1] == 'b' && $result[strlen($result) - 2] == 'b') {
                    $result .= 'a';
                    $a--;
                } else {
                    $result .= 'b';
                    $b--;
                }
            } 
            else {
                if ($result[strlen($result) - 1] == 'a') {
                    $result .= 'b';
                    $b--;
                } else {
                    $result .= 'a';
                    $a--;
                }
            }
        }
        
        return $result;
    }
}

```