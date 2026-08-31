# Simple Kotlin Solution.

**Author:** zohidjonakbarov
**Votes:** 2
**Link:** [https://leetcode.com/problems/max-points-on-a-line/solutions/3020693/](https://leetcode.com/problems/max-points-on-a-line/solutions/3020693/)

---

# Approach
From two points we can create the equestion if m points in the same line it means their linear equesion is the same. We can get the max one as a result. 

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(n)

# Code
```
class Solution {
    fun maxPoints(points: Array<IntArray>): Int {
    var result = 0
    if(points.size==1) return 1

    for (i in points.indices) {
        val map = mutableMapOf<String, Int>()
        val start = points[i]
        for (j in i + 1 until points.size) {
            val end = points[j]
            val s: String = if (start[0] == end[0]) {
                "y=${start[0]}"
            } else if (start[1] == end[1]) {
                "x=${start[1]}"
            } else {
                val m = 1.0 * (start[1] - end[1]) / (start[0] - end[0])// multiplying by 1.0 means we convert it to double
                val b = start[1] - m * start[0]
                "y=$m*x+$b"
            }
            map[s] = (map[s] ?: 1) + 1
            if (result < map[s]!!) result = map[s]!!
        }
    }
    return result   
    }
}
```