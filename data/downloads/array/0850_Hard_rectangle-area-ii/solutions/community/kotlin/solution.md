# [Kotlin] Readable Solution

**Author:** catcatcute
**Votes:** 1
**Link:** [https://leetcode.com/problems/rectangle-area-ii/solutions/1419584/](https://leetcode.com/problems/rectangle-area-ii/solutions/1419584/)

---

```
class Solution {
    object Range {
        private val lines = TreeMap<Int, Int>()
        val range: Long
            get() {
                var res = 0L
                if (lines.isNotEmpty()) {
                    var (lastKey, accValue) = listOf(lines.firstKey(), 0)
                    lines.forEach { (key, value) ->
                        if (accValue > 0) {
                            res += key - lastKey
                        }
                        lastKey = key
                        accValue += value
                    }
                }
                return res
            }

        enum class Operation(val value: Int) {
            ADD(1), REMOVE(-1)
        }
        
        fun operateLine(start: Int, end: Int, operation: Operation) {
            lines[start] = (lines[start] ?: 0) + operation.value
            lines[end] = (lines[end] ?: 0) - operation.value
        }
    }

    data class Rectangle(val x: Int, val yStart: Int, val yEnd: Int, val operation: Range.Operation)

    fun rectangleArea(rectangles: Array<IntArray>): Int {
        var res = 0L
        var lastX = 0
        rectangles.fold(mutableListOf<Rectangle>()) { acc, ints ->
            acc.add(Rectangle(ints[0], ints[1], ints[3], Range.Operation.ADD))
            acc.add(Rectangle(ints[2], ints[1], ints[3], Range.Operation.REMOVE))
            acc
        }.apply {
            sortBy { it.x }
        }.forEach {
            if (it.x > lastX) {
                res = (res + Range.range * (it.x - lastX)) % 1000000007
                lastX = it.x
            }
			Range.operateLine(it.yStart, it.yEnd, it.operation)
        }
        return res.toInt()
    }
}
```