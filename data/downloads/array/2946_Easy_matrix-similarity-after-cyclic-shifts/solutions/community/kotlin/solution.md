# [Kotlin] An FP style solution

**Author:** martin0327
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4342514/](https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4342514/)

---

```
class Solution {
    fun areSimilar(a: Array<IntArray>, k: Int): Boolean {
        return a.mapIndexed { i, b ->
            val m = b.size
            val d = k % m
            when (i % 2) {
                0 -> b contentEquals b.sliceArray(m - d until m) + b.slice(0 until m-d)
                else -> b contentEquals b.sliceArray(d until m) + b.slice(0 until d)
            }
        }.all {it}
    }
}
```