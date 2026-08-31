# C++ Kotlin 1 Liner

**Author:** shtanriverdi
**Votes:** 3
**Link:** [https://leetcode.com/problems/sorting-the-sentence/solutions/1259526/](https://leetcode.com/problems/sorting-the-sentence/solutions/1259526/)

---

```
class Solution {
    fun sortSentence(s: String): String {
        return s.split(" ").sortedBy { it.last() }.joinToString(" ") { it.dropLast(1) }
    }
}
```