# Kotlin

**Author:** GeorgCantor
**Votes:** 21
**Link:** [https://leetcode.com/problems/longest-common-prefix/solutions/1214400/](https://leetcode.com/problems/longest-common-prefix/solutions/1214400/)

---

```
fun longestCommonPrefix(a: Array<String>) = buildString {
    a.minBy { it.length }?.forEachIndexed { i, c -> if (a.all { it[i] == c }) append(c) else return toString() }
}
```