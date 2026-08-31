# Solution Binary String With Substrings Representing 1 To N

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/4863368/](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/4863368/)

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
     * @param Integer $n
     * @return Boolean
     */
    function queryString($s, $n) {
        for ($i = 1; $i <= $n; $i++) {
            $binary = decbin($i);
            if (strpos($s, $binary) === false) {
                return false;
            }
        }
        return true;
    }
}

```