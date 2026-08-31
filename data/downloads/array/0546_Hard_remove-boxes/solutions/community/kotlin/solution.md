# [Kotlin] DP O(n^4) Recursive Solution

**Author:** catcatcute
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-boxes/solutions/1402942/](https://leetcode.com/problems/remove-boxes/solutions/1402942/)

---

```
import kotlin.math.max

class Solution {
    data class Box(val color: Int, val previousIndex: Int?) {
        var count: Int = 1
            private set

        fun increase() = ++count
        fun isSameColor(color: Int) = this.color == color
    }

    fun removeBoxes(boxes: IntArray): Int {
        val colorPosition = mutableMapOf<Int, Int>() // color, index
        val allBoxes: List<Box> = boxes.fold(mutableListOf()) { acc, i ->
            acc.also {
                if (it.isNotEmpty() && it.last().isSameColor(i)) {
                    it.last().increase()
                } else {
                    it.add(Box(color = i, previousIndex = colorPosition[i]))
                    colorPosition[i] = it.lastIndex
                }
            }
        }

        // points[startIndex][endIndex][endColorCount]
        val points = Array(allBoxes.size) { Array(allBoxes.size) { IntArray(101) } }

        fun getPoint(startIndex: Int, endIndex: Int, endColorCount: Int): Int {
            var point = points[startIndex][endIndex][endColorCount]
            if (point > 0) {
                return point
            }

            if (startIndex == endIndex) {
                point = endColorCount * endColorCount
            } else {
                point = endColorCount * endColorCount + getPoint(startIndex, endIndex - 1, allBoxes[endIndex - 1].count)
                var previousIndex = allBoxes[endIndex].previousIndex
                while (previousIndex != null && previousIndex >= startIndex) {
                    point = max(
                        point, getPoint(startIndex, previousIndex, endColorCount + allBoxes[previousIndex].count)
                                + getPoint(previousIndex + 1, endIndex - 1, allBoxes[endIndex - 1].count)
                    )
                    previousIndex = allBoxes[previousIndex].previousIndex
                }
            }

            points[startIndex][endIndex][endColorCount] = point
            return point
        }

        return getPoint(0, allBoxes.lastIndex, allBoxes.last().count)
    }
}
```