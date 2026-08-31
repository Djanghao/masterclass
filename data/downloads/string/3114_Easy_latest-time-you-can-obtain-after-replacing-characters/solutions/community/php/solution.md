# one line

**Author:** LuisFelipe1
**Votes:** 0
**Link:** [https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5191949/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5191949/)

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
    function findLatestTime($s) {
        
        return (($s[0] == "?") ? ((intval($s[1]) >= 2) ? "0" : "1") : $s[0]).(($s[1] == "?") ? (($s[0] == "0") ? "9" : "1") : $s[1]).":".(($s[3] == "?") ? "5" : $s[3]).(($s[4] == "?") ? "9" : $s[4]);

    }
}
```