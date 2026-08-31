# Kotlin Easy HashSet solution O(n ^ 2)

**Author:** xXKawaiiFoxXx
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-area-rectangle/solutions/1340871/](https://leetcode.com/problems/minimum-area-rectangle/solutions/1340871/)

---

The idea, is if you know diagonal of a rectangle then we can use the diagonal's coordinates to generate other two coordinates as well.
After generating other two coordinates just check if both of them really exist, if they do, we have got a rectangle, calculate it's area and minimize the result.

```
import kotlin.math.absoluteValue

class Solution {
    fun minAreaRect(points: Array<IntArray>): Int {
        val set = points.map { Pair(it[0], it[1]) }.toHashSet()
        var minArea = Int.MAX_VALUE


        for (point1 in points) {
            for (point2 in points) if (point1[0] != point2[0] && point1[1] != point2[1]) {
                val point3 = Pair(point1[0], point2[1])
                val point4 = Pair(point2[0], point1[1])

                if (set.contains(point3) && set.contains(point4)) {
                    val length = (point2[1] - point1[1]).absoluteValue
                    val breadth = (point2[0] - point1[0]).absoluteValue
                    minArea = minOf(minArea, length * breadth)
                }
            }
        }

        return if (minArea == Int.MAX_VALUE) 0 else minArea
    }
}
```