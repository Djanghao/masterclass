# Kotlin - pure BFS

**Author:** qsqnk
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4650414/](https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4650414/)

---

# Intuition
Go through graph of possible transformations with per-level BFS

# Approach
BFS


# Code
```
class Solution {
    fun minimumOperationsToMakeEqual(x: Int, y: Int): Int {
        var level = setOf(x)
        val seen = mutableSetOf(x)
        var ops = 0
        while (y !in level) {
            level = level.flatMap { x ->
                listOfNotNull(
                    x + 1,
                    x - 1,
                    if (x % 5 == 0) x / 5 else null,
                    if (x % 11 == 0) x / 11 else null,
                )
            }.filterTo(mutableSetOf(),  seen::add)
            ops++
        }
        return ops
    }
}
```