# Kotlin simulation (Sort + Stack)

**Author:** james4388
**Votes:** 2
**Link:** [https://leetcode.com/problems/robot-collisions/solutions/5468441/](https://leetcode.com/problems/robot-collisions/solutions/5468441/)

---

```
data class Robot (var position: Int, var health: Int, var direction: Char, val index: Int) {}

enum class DIRECTION(val value: Char) {
    LEFT('L'),
    RIGHT('R')
}

class Solution {
    fun survivedRobotsHealths(positions: IntArray, healths: IntArray, directions: String): List<Int> {
        var robots = positions.withIndex().map { (index, position) -> Robot(position, healths[index], directions[index], index) }.toMutableList()
        robots.sortBy { it.position }
        var rightRobots = mutableListOf<Robot>()

        for (robot in robots) {
            if (robot.direction == DIRECTION.RIGHT.value) {
                rightRobots.add(robot)
            } else { // Left robot
                while (rightRobots.isNotEmpty() && robot.health > 0) {
                    val rightRobot = rightRobots.removeLast()
                    if (rightRobot.health > robot.health) {
                        rightRobot.health -= 1
                        robot.health = 0
                        rightRobots.add(rightRobot)
                    } else if (rightRobot.health < robot.health) {
                        robot.health -= 1
                        rightRobot.health = 0
                    } else {
                        robot.health = 0
                        rightRobot.health = 0
                    }
                }
            }
        }
        robots.sortBy { it.index }
        
        return robots.filter { it.health > 0 }.map { it.health }
    }
}
```