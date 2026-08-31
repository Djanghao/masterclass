# Kotlin 1 line

**Author:** GeorgCantor
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/1636036/](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/1636036/)

---

```
fun isCovered(ar: Array<IntArray>, l: Int, r: Int) = (l..r).all { n -> ar.any { n in it.first()..it.last() } }
```