# Kotlin - beats 100% | Time O(n) | Space O(1)

**Author:** lucasvillaverde
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/5944784/](https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/5944784/)

---

# Intuition
Basically we need to have a range (r1, r2) that we can move and check how items are being affected (if the item is within that "changeable range").

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```kotlin []
class Solution {
    fun minimumMoves(s: String): Int {
        var r1 = -1
        var r2 = -1
        var counter = 0

        s.forEachIndexed { index, item ->
            // If the item is O, skip
            if (item == 'O') return@forEachIndexed
            // If the item is in the current "changeable range", skip
            if (r1 <= index && index <= r2) return@forEachIndexed
            // If we need to move the range to the first X, we count as a move
            // Being careful to not move the r2 out of bounds.
            if (r1 + 2 > s.lastIndex) {
                r1 = r1 - (r1 + 2 - s.lastIndex)
            } else {
                r1 = index
            }

            r2 = r1 + 2
            counter += 1
        }

        return counter
    }
}
```