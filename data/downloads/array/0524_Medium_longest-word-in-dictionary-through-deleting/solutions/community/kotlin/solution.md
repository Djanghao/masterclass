# Kotlin

**Author:** GeorgCantor
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/5116065/](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/5116065/)

---

```
fun findLongestWord(s: String, d: List<String>): String {
    d.sortedWith(compareByDescending<String> { it.length }.thenBy { it }).forEach {
        var c = 0
        s.forEach { ch ->
            if (ch == it[c]) {
                ++c
                if (c == it.length) return it
            }
        }
    }
    return ""
}
```