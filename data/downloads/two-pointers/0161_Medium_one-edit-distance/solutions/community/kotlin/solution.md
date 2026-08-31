# Kotlin - beats 100% time

**Author:** vorovuskela
**Votes:** 1
**Link:** [https://leetcode.com/problems/one-edit-distance/solutions/4227647/](https://leetcode.com/problems/one-edit-distance/solutions/4227647/)

---

# Code
```
class Solution {
    fun isOneEditDistance(s: String, t: String): Boolean {
        if (s == t || abs(s.length - t.length) > 1) {
            return false
        }
        val sl = s.length
        val tl = t.length

        for (i in 0..min(sl - 1, tl - 1)) {
            if (s[i] != t[i]) {
                val isEqualAfterEdit = s.substring(i + 1, sl) == t.substring(i + 1, tl)
                val isEqualAfterDelete = s.substring(i + 1, sl) == t.substring(i, tl)
                val isEqualAfterInsert = s.substring(i, sl) == t.substring(i + 1, tl)
                return isEqualAfterEdit || isEqualAfterDelete || isEqualAfterInsert
            }
        }

        return true
    }
}
```