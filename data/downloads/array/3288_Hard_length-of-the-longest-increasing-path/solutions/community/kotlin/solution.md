# Kotlin

**Author:** SamoylenkoDmitry
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-increasing-path/solutions/5787253/](https://leetcode.com/problems/length-of-the-longest-increasing-path/solutions/5787253/)

---

Failed this on contest

```kotlin []

    fun maxPathLength(coordinates: Array<IntArray>, k: Int): Int {
        fun lis(cs: List<IntArray>): Int {
            var seq = IntArray(cs.size) { Int.MAX_VALUE }
            val bisectLeft = { a: Int ->
                var lo = 0; var hi = seq.lastIndex
                while (lo <= hi) if (seq[(lo + hi) / 2] < a) 
                    lo = 1 + (lo + hi) / 2 else hi = (lo + hi) / 2 - 1
                lo
            }
            for ((x, y) in cs.sortedWith(compareBy({ it[0] }, { -it[1] }))) 
                seq[bisectLeft(y)] = y
            return bisectLeft(Int.MAX_VALUE)
        }
        val smaller = coordinates.filter { it[0] < coordinates[k][0] && it[1] < coordinates[k][1] }
        val bigger  = coordinates.filter { it[0] > coordinates[k][0] && it[1] > coordinates[k][1] }
        return lis(smaller) + lis(bigger) + 1
    }

```