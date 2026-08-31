# Kotlin beats 100%

**Author:** GroundZeroCro
**Votes:** 0
**Link:** [https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/4192215/](https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/4192215/)

---

# Code
```
class Solution {
    fun processQueries(queries: IntArray, m: Int): IntArray {
        val p = IntArray(m)
        for (i in 1..m) {
            p[i - 1] = i
        }

        var list = p.toMutableList()

        val result = IntArray(queries.size)

        for(i in queries.indices) {
            val value = queries[i]
            val index = list.indexOf(value)
            result[i] = index
            list.removeAt(index)
            list = (listOf(value) + list).toMutableList()
        }

        return result
    }
}
```