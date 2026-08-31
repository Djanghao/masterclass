# Kotlin | BitMasking & Circular Array

**Author:** jschnall
**Votes:** 0
**Link:** [https://leetcode.com/problems/prison-cells-after-n-days/solutions/5852797/](https://leetcode.com/problems/prison-cells-after-n-days/solutions/5852797/)

---

# Intuition
This is actually pretty tricky. It appears there are 256 possible states for cells, but depending on the configurations, it's possible to get caught in a cycle of shorter length. In fact, there is also an initial configuration, which because of the requirements may never be reached again. Since the ends cannot be 1, there are really only 2^6 == 64 possible configurations.

# Approach
Dynamic programming: Save all the possible states in order beginning with the the second state (since the starting state is special and may not be reachable again). Treat this like a circular array, using the % operator to find the corresponding index for the potentially much larger value of n.

# Complexity
- Time complexity:
$$O(1)$$ Loop will be executed at most 64 times, regardless of how large n is.

- Space complexity:
$$O(1)$$ Fixed size array of length 64

# Code
```kotlin []
class Solution {
    fun prisonAfterNDays(cells: IntArray, n: Int): IntArray {
        if (n == 0) return cells

        val dp = UByteArray(64)
        var start = cells.joinToString("").toUByte(2)
        val endMask = "01111110".toUByte(2)
        val notMask = "11111111".toUByte(2) // Not sure why kotlin has no ~ (unary not) operator!
        
        dp[0] = (start.rotateLeft(1) xor start.rotateRight(1)) xor notMask and endMask
        var size = 64
        for (i in 1 until dp.size) {
            dp[i] = (dp[i-1].rotateLeft(1) xor dp[i-1].rotateRight(1)) xor notMask and endMask
            if (dp[i] == dp[0]) {
                size = i
                break
            }
        }

        return dp[(n - 1) % size].toString(radix = 2).padStart(8, '0').map { it.digitToInt() }.toIntArray()
    }
}
```