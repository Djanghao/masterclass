# Kotlin

**Author:** GeorgCantor
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary/solutions/1345725/](https://leetcode.com/problems/longest-word-in-dictionary/solutions/1345725/)

---

```
fun longestWord(ar: Array<String>) = mutableSetOf<String>().apply {
    ar.sorted().forEach { if (it.length == 1 || contains(it.dropLast(1))) add(it) }
}.maxBy { it.length } ?: ""
```