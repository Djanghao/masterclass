# Using treemap

**Author:** 2pac_shakur
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/1198752/](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/1198752/)

---

```
    fun maxDistance(A: IntArray, B: IntArray): Int {
        var ans = 0
        val map = TreeMap<Int, Int>()
        for ((i, x) in B.withIndex())
            map[x] = i
        for (i in A.indices) {
            val ceil = map.ceilingEntry(A[i])
            if (ceil != null) {
                val k = ceil.value
                for (j in k until B.size) {
                    if (A[i] <= B[j])
                        ans = maxOf(ans, j - i)
                    else
                        break
                }
            }
        }
        return ans
    }
```