# Kotlin 1 line

**Author:** GeorgCantor
**Votes:** 2
**Link:** [https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/1819619/](https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/1819619/)

---

```
fun prefixCount(a: Array<String>, p: String) = a.count { it.startsWith(p) }
```