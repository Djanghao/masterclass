# Kotlin

**Author:** GeorgCantor
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5246023/](https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5246023/)

---

```
fun numberOfSpecialChars(s: String) = mutableSetOf<Char>().apply {
    s.forEach { if (it.isLowerCase() && s.contains(it.uppercaseChar())) add(it) }
}.size
```