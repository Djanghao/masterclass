# Simple Kotlin solution

**Author:** DmitryNekrasov
**Votes:** 1
**Link:** [https://leetcode.com/problems/robot-bounded-in-circle/solutions/3895586/](https://leetcode.com/problems/robot-bounded-in-circle/solutions/3895586/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    fun isRobotBounded(instructions: String): Boolean {
        val steps = listOf(1 to 0, 0 to 1, -1 to 0, 0 to -1)
        var step = 0
        var y = 0
        var x = 0
        for (c in instructions.repeat(4)) {
            when (c) {
                'R' -> step = (step + 1) % steps.size
                'L' -> step = (step - 1 + steps.size) % steps.size
                else -> steps[step].also { (dy, dx) -> y += dy; x += dx }
            }
        }
        return y == 0 && x == 0
    }
}
```