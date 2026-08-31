# Kotlin short example

**Author:** aymaletdinov2012
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-the-number-of-visible-mountains/solutions/5393172/](https://leetcode.com/problems/finding-the-number-of-visible-mountains/solutions/5393172/)

---

# Intuition
1) find foundation size 
2) find overlapping 

# Complexity
- Time complexity: O(n log n)
- Space complexity: O(n)

# Code
```
class Solution {
    fun visibleMountains(peaks: Array<IntArray>): Int {
        val foundation = peaks
            .map { (x, y) -> intArrayOf(x-y, x+y) }
            .sortedWith(compareBy<IntArray> { it[0] }.thenByDescending { it[1] })

        val mountins = BooleanArray(peaks.size) { true }

        var i1 = 0
        var i2 = 0
        while (++i2 < foundation.size) {
            val crr = foundation[i2]
            val prev = foundation[i1]
            when {
                crr[0] == prev[0] && crr[1] == prev[1] -> {
                    mountins[i1] = false
                    mountins[i2] = false
                }
                crr[0] >= prev[0] && crr[1] <= prev[1] -> mountins[i2] = false
                else -> i1 = i2
            }
        }
        
        return mountins.count { it }
    }
}
```