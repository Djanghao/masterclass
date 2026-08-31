# [Kotlin] Fastest and Clean Solution

**Author:** catcatcute
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/1429148/](https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/1429148/)

---

```
class Solution {
    fun findLUSlength(strs: Array<String>): Int {
        strs.sortBy { -it.length }
        strs.forEachIndexed { index, s ->
            strs.filterIndexed { checkIndex, checkString ->
                checkIndex != index && checkString.length >= s.length
            }.forEach { checkString ->
                var index = 0
                var indexCheck = 0
                while (index < s.length && indexCheck < checkString.length) {
                    if (s[index] == checkString[indexCheck]) {
                        ++index
                    }
                    ++indexCheck
                }
                if (index == s.length) {
                    return@forEachIndexed
                }
            }
            return s.length
        }
        return -1
    }
}
```