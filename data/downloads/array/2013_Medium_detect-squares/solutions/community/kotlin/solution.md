# Kotlin O(n)

**Author:** MatthiasSiegmund
**Votes:** 2
**Link:** [https://leetcode.com/problems/detect-squares/solutions/2460739/](https://leetcode.com/problems/detect-squares/solutions/2460739/)

---

```
// Based on https://www.youtube.com/watch?v=bahebearrDc
class DetectSquares() {
    private val points: MutableList<IntArray> = mutableListOf()
    private val pointCountMap: MutableMap<String, Int> = mutableMapOf()

    fun add(point: IntArray) {
        val key = "${point[0]}:${point[1]}"
        if (pointCountMap.containsKey(key)) {
            pointCountMap.put(key, pointCountMap.getOrDefault(key, 0) + 1)
        } else {
            points.add(point)    
            pointCountMap.put(key, 1)
        }
    }

    fun count(point: IntArray): Int {
        var x = point[0]
        var y = point[1]
        var result = 0
        
        points.forEach { p ->
            val notTheSamePoint = p[0] != x && p[1] != y
            // in a square the distance for x and y needs to be the same to be the diagonal point
            val isDiagonal = Math.abs(x - p[0]) == Math.abs(y - p[1])
            if (notTheSamePoint && isDiagonal) {
                val topLeft = pointCountMap.getOrDefault("$x:${p[1]}", 0)
                val bottomRight = pointCountMap.getOrDefault("${p[0]}:$y", 0)
                val diagonal = pointCountMap.getOrDefault("${p[0]}:${p[1]}", 0)
                result += topLeft * bottomRight * diagonal
            }
        }
        
        return result
    }
}
```