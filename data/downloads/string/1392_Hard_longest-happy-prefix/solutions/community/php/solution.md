# Solution Longest Happy Prefix

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-happy-prefix/solutions/4962071/](https://leetcode.com/problems/longest-happy-prefix/solutions/4962071/)

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
    function longestPrefix($s) {
        $len = 0;
        $i = 1;
        $lps = array_fill(0, strlen($s), 0);
        
        while ($i < strlen($s)) {
            if ($s[$i] == $s[$len]) {
                $len++;
                $lps[$i] = $len;
                $i++;
            } else {
                if ($len != 0) {
                    $len = $lps[$len - 1];
                } else {
                    $lps[$i] = $len;
                    $i++;
                }
            }
        }
        
        return substr($s, 0, $lps[strlen($s) - 1]);
    }
}

```