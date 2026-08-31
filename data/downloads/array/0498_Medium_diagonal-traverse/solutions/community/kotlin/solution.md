# Kotlin using Map

**Author:** akechetaki10736
**Votes:** 2
**Link:** [https://leetcode.com/problems/diagonal-traverse/solutions/2776203/](https://leetcode.com/problems/diagonal-traverse/solutions/2776203/)

---

```kotlin
    fun findDiagonalOrder(mat: Array<IntArray>): IntArray {
        val m = mat.size
        val n = mat.first().size
        val temp = mutableMapOf<Int, MutableList<Int>>()

        for (i in 0 .. (m + n - 2)) {
            temp[i] = mutableListOf()
        }

        mat.indices.forEach { i ->
            mat[i].forEachIndexed { j, value ->
                temp[i + j]?.add(value)
            }
        }

        temp.mapValues { (key, value) ->
            if (key and 1 == 0) value.reverse()
        }

        return temp.flatMap { it.value }.toIntArray()
    }
```