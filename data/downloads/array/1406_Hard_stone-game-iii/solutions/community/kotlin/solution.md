# Kotlin, in-place DP

**Author:** equocredite
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-iii/solutions/3569781/](https://leetcode.com/problems/stone-game-iii/solutions/3569781/)

---

# Complexity
- Time complexity: linear.
- Space complexity: constant.

# Code
```
class Solution {
    fun stoneGameIII(values: IntArray): String {
        values.reverse()
        for (i in 1 until values.size) values[i] += values[i - 1]
        val total = values.last()
        for (i in values.indices) values[i] -= (1..3).map { values.getOrNull(i - it) ?: 0 }.min()!!
        return when (total.compareTo(2 * values.last())) {
            -1 -> "Alice"
            1 -> "Bob"
            else -> "Tie"
        }
    }
}
```