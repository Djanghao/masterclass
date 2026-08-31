# Kotlin

**Author:** GeorgCantor
**Votes:** 1
**Link:** [https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/1998007/](https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/1998007/)

---

```
fun findEvenNumbers(a: IntArray) = mutableSetOf<Int>().apply {
    for (i in a.indices) {
        if (a[i] == 0) continue
        for (j in a.indices) {
            if (j == i) continue
            for (k in a.indices) {
                if (k == i || k == j) continue
                if (a[k] % 2 == 0) add(a[i] * 100 + a[j] * 10 + a[k])
            }
        }
    }
}.sorted().toIntArray()
```