# Easy way

**Author:** mcmouse88
**Votes:** 0
**Link:** [https://leetcode.com/problems/snake-in-matrix/solutions/5768106/](https://leetcode.com/problems/snake-in-matrix/solutions/5768106/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```kotlin []
class Solution {
    fun finalPositionOfSnake(n: Int, commands: List<String>): Int {
        var (y, x) = 0 to 0
        commands.forEach {
            when (it) {
                "UP" -> y -= 1
                "RIGHT" -> x += 1
                "DOWN" -> y += 1
                "LEFT" -> x -= 1
            }
        }
        return y * n + x
    }
}
```