# Kotlin Manhattan distance

**Author:** xXKawaiiFoxXx
**Votes:** 0
**Link:** [https://leetcode.com/problems/escape-the-ghosts/solutions/1603769/](https://leetcode.com/problems/escape-the-ghosts/solutions/1603769/)

---

```
import kotlin.math.abs

class Solution {
    fun escapeGhosts(ghosts: Array<IntArray>, target: IntArray, myDist: Int = dist(intArrayOf(0, 0), target)) =
        !ghosts.any { dist(it, target) <= myDist }

    private fun dist(from: IntArray, to: IntArray): Int = abs(from[0] - to[0]) + abs(from[1] - to[1])
}
```