# Kotlin FP Style

**Author:** myeongin
**Votes:** 2
**Link:** [https://leetcode.com/problems/robot-return-to-origin/solutions/501932/](https://leetcode.com/problems/robot-return-to-origin/solutions/501932/)

---

```
    class Solution {
        fun judgeCircle(moves: String): Boolean {
            return moves.fold(0 to 0) { acc, direction ->
                when (direction) {
                    'U' -> (acc.first + 1) to acc.second
                    'D' -> (acc.first - 1) to acc.second
                    'L' -> acc.first to (acc.second + 1)
                    else -> acc.first to (acc.second - 1)
                }
            }.let {
                it.first == 0 && it.second == 0
            }
        }
    }

```