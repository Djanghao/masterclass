# Simple Kotlin solution for beginners

**Author:** ganesh2shiv
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-triangle-area/solutions/3030146/](https://leetcode.com/problems/largest-triangle-area/solutions/3030146/)

---

```
class Solution {
    fun largestTriangleArea(points: Array<IntArray>): Double {
        val n = points.size
        var max = 0.0
        for (i in 0..n-3) {
            for (j in i+1..n-2) {
                for (k in j+1..n-1) {
                    max = maxOf(max, calArea(points[i], points[j], points[k]))
                }
            }
        }
        return max
    }

    private fun calArea(p1: IntArray, p2: IntArray, p3: IntArray): Double {
        return Math.abs(p1[0]*(p2[1]-p3[1])+p2[0]*(p3[1]-p1[1])+p3[0]*(p1[1]-p2[1]))/2.0
    }
}
```