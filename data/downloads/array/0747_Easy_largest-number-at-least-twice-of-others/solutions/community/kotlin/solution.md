# Kotlin 1 line

**Author:** GeorgCantor
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/1107784/](https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/1107784/)

---

```
fun dominantIndex(ar: IntArray) = if (ar.sorted().dropLast(1).all { it * 2 <= ar.max()!! }) ar.indexOf(ar.max()!!) else -1
```
***More efficient:***
```
    fun dominantIndex(ar: IntArray): Int {
        val maxI = ar.indexOf(ar.max()!!)
        for (i in ar.indices) if (i != maxI && ar[i] * 2 > ar[maxI]) return -1

        return maxI
    }
```