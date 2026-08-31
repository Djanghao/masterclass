# Simple Kotlin solution for beginners

**Author:** ganesh2shiv
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/2938411/](https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/2938411/)

---

```
class Solution {
    fun maxDistance(colors: IntArray): Int {
        val n = colors.size
        var max = 1
        val first = colors[0]
        val last = colors[n-1]
        for (i in colors.indices) {
            val curr = colors[i]
            if (curr != first) max = Math.max(i, max)
            if (curr != last) max = Math.max(n-1-i, max)
        }
        return max
    }
}
```