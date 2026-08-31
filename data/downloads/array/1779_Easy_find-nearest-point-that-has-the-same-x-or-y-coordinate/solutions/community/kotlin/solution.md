# Kotlin Fast and Easy Solution || 488ms, faster than 92.59%

**Author:** Z3ROsum
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/2301614/](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/2301614/)

---

```
class Solution {
    fun nearestValidPoint(x: Int, y: Int, points: Array<IntArray>): Int {
        var min = Int.MAX_VALUE
        var index = -1
        for (ix in points.indices) {
            val i = points[ix]
            if (i[0] != x && i[1] != y) continue // the point is not "valid"
            val dist = Math.abs(i[0] - x) + Math.abs(i[1] - y)
            if (dist < min) { // update min and index
                min = dist
                index = ix
            }
        }
        return index // done
    }
}
```