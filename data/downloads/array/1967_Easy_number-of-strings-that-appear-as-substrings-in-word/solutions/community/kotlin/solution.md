# [Kotlin] 1 Line Solution

**Author:** catcatcute
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/1404862/](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/1404862/)

---

```
class Solution {
    fun numOfStrings(patterns: Array<String>, word: String): Int {
        return patterns.count { word.contains(it) }
    }
}
```