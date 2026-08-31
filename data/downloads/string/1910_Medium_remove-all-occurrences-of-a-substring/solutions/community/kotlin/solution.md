# The beauty of Kotlin

**Author:** DanyZy
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/5120722/](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/5120722/)

---

# Code
```
class Solution {
    fun removeOccurrences(s: String, part: String): String = with(s) {
        var res = ""
        forEach { res += it; if (res.endsWith(part)) res = res.removeSuffix(part) }
        return@with res
    }
}
```