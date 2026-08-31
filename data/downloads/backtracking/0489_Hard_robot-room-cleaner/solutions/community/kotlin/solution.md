# Kotlin solution

**Author:** peter3579e
**Votes:** 0
**Link:** [https://leetcode.com/problems/robot-room-cleaner/solutions/5221894/](https://leetcode.com/problems/robot-room-cleaner/solutions/5221894/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * // This is the Robot's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Robot {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     fun move(): Boolean {}
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     fun turnLeft() {}
 *     fun turnRight() {}
 *
 *     // Clean the current cell.
 *     fun clean() {}
 * }
 */

class Solution {
    fun cleanRoom(robot: Robot) {
        val row = intArrayOf(-1,0,1,0)
        val col = intArrayOf(0,1,0,-1)
        val visited = mutableSetOf<Pair<Int,Int>>()

        fun goBack() {
            with(robot) {
                turnRight()
                turnRight()
                move()
                turnRight()
                turnRight()
            } 
        }

        fun backTrack(point: Pair<Int,Int>, index: Int) {
            val x = point.first
            val y = point.second
            visited.add(point)
            robot.clean()
            var i = index
            
            repeat(4) {
                if(i > 3) i = i % 4
                val newX = x + row[i]
                val newY = y + col[i]
                if(!visited.contains(Pair(newX,newY)) && robot.move()) {
                    backTrack(Pair(newX,newY),i)
                    goBack()
                } 
                robot.turnRight()
                i++
            }

        }

        backTrack(Pair(0,0),0)
    }
}
```