# Kotlin. Beats 100% (165 ms). Nested loops solution

**Author:** mobdev778
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/5604459/](https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/5604459/)

---

![image.png](./images/0.png)

# Code
```
class Solution {
    fun countLatticePoints(circles: Array<IntArray>): Int {
        var points = 0

        val matrix = Array(201) { BooleanArray(201) }
        for ((cx, cy, r) in circles) {
            val rr = r * r
            for (dy in 0 .. (r shl 1)) {
                for (dx in 0 .. (r shl 1)) {
                    if ((dx - r) * (dx - r) + (dy - r) * (dy - r) <= rr) {
                        if (!matrix[cy - r + dy][cx - r + dx]) {
                            matrix[cy - r + dy][cx - r + dx] = true
                            points++
                        }
                    }
                }
            }
        }

        return points
    }
}
```

# Approach 

We can simulate drawing each circle on a plane - for this we simply create a 200x200 Boolean matrix and add all new points that are included in the next circle to it.

If some cell of the matrix has already been marked earlier - we ignore such a cell.

To estimate the distance, I use a comparison of squared distances - this is faster than calculating the square root of the difference in coordinates.