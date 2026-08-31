# Kotlin 2 Pointer Solution

**Author:** jkgrg
**Votes:** 11
**Link:** [https://leetcode.com/problems/is-subsequence/solutions/3525870/](https://leetcode.com/problems/is-subsequence/solutions/3525870/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
class Solution {
    fun isSubsequence(s: String, t: String): Boolean {
        var sIndex = 0
        var tIndex = 0
        while (sIndex < s.length && tIndex < t.length) {
            if (s[sIndex] == t[tIndex]) {
                sIndex++
            }
            tIndex++
        }
        return sIndex == s.length
    }
}
```