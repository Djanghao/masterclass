# Kotlin oneline

**Author:** qveex
**Votes:** 0
**Link:** [https://leetcode.com/problems/hash-divided-string/solutions/5807538/](https://leetcode.com/problems/hash-divided-string/solutions/5807538/)

---

# Code
```kotlin []
fun stringHash(s: String, k: Int): String =
    s.chunked(k) { sub ->
        'a' + sub.sumOf { it - 'a' } % 26
    }.joinToString("")
```