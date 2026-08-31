# Kotlin solution

**Author:** nothingelsematters
**Votes:** 3
**Link:** [https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4262619/](https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4262619/)

---

# Complexity
- Time complexity: $$O(1)$$
- Space complexity: $$O(1)$$

# Code
```
import kotlin.math.abs

class Solution {
    fun isReachableAtTime(sx: Int, sy: Int, fx: Int, fy: Int, t: Int): Boolean {
        val distance = maxOf(abs(sx - fx), abs(sy - fy))
        return (distance != 0 || t != 1) && t >= distance
    }
}
```