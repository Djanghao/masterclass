# 205. Isomorphic Strings PHP

**Author:** BiSsmarCK21
**Votes:** 2
**Link:** [https://leetcode.com/problems/isomorphic-strings/solutions/2800254/](https://leetcode.com/problems/isomorphic-strings/solutions/2800254/)

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
     * @param String $t
     * @return Boolean
     */
    function isIsomorphic($s, $t) {
        $s = str_split($s);
        $t = str_split($t);
        $count = count($s); 
        $S = array_combine($s, $t);
        $T = array_combine($t, $s);
        for ($i = 0; $i < $count; $i++) {
            if ($S[$s[$i]] == $t[$i] && $T[$t[$i]] == $s[$i]) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
}
```