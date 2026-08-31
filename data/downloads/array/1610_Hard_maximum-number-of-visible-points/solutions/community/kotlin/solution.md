# Kotlin. Sliding window

**Author:** anton-pogonets
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-visible-points/solutions/5170204/](https://leetcode.com/problems/maximum-number-of-visible-points/solutions/5170204/)

---

# Complexity
- Time complexity: $$O(n*log(n))$$ 
- Space complexity: $$O(n)$$ 

# Code
```
class Solution {
    fun visiblePoints(points: List<List<Int>>, angle: Int, location: List<Int>): Int {
        var angles = ArrayList<Double>()
        var pointsAtStart = 0

        val (originX, originY) = location
        for ((x, y) in points) {
            if (x == originX && y == originY) {
                pointsAtStart++
            } else {
                val rad = atan2(
                    (x - originX).toDouble(),
                    (y - originY).toDouble()
                )
                val degree = rad * 180 / PI
                val positiveDegree = (degree + 360) % 360

                angles += positiveDegree
                angles += positiveDegree + 360
            }
        }

        angles.sort()
        
        var result = 0
        var i = 0
        var j = 0
        
        while (j < angles.size) {
            if (angles[j] - angles[i] <= angle) {
                j++
            } else {
                i++
            }
            
            result = maxOf(result, j - i)
        }

        return result + pointsAtStart
    }
}
```