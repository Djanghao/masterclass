# Kotlin O(1) solution with modulo division

**Author:** user4026M
**Votes:** 0
**Link:** [https://leetcode.com/problems/walking-robot-simulation-ii/solutions/3626900/](https://leetcode.com/problems/walking-robot-simulation-ii/solutions/3626900/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Robot walks only on the outerband 'circle' in a counter clockwise direction. We can calculate the direction and the position based on the number of steps.

# Approach
<!-- Describe your approach to solving the problem. -->

Use modulo division by the number of all fields where the robot can walk to avoid loops

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
class Robot(width: Int, height: Int) {

    var currPos: Int = 0
    val east = "East"
    val north = "North"
    val west = "West"
    val south = "South"

    //example for grid: 6x3
    val topRow = height - 1
    val roundLength = width * 2 + (height - 2) * 2 // 12 + 2 = 14
    val rightDown = width - 1 //  5
    val rightTop = rightDown + height - 1 //5 + 3 -1 = 7
    val leftTop = rightTop + rightDown // 7 + 5 = 12
    var totalSteps = 0


    fun step(num: Int) {
        totalSteps += num
        currPos = totalSteps % roundLength
    }

    fun getPos(): IntArray = when (currPos) {
        in 0..rightDown -> arrayOf(currPos, 0).toIntArray() // 2 -> [2,0] 5-> [5,0]
        in rightDown + 1..rightTop -> arrayOf(rightDown, currPos - rightDown).toIntArray() // 6 -> [5,1], 7-> [5, 2]
        in rightTop + 1..leftTop -> arrayOf(
            rightDown - (currPos - rightTop),
            topRow
        ).toIntArray()// 8-> [5-(8-7),2], 12->[5-(12-7)]
        else -> arrayOf(0, topRow - (currPos - leftTop)).toIntArray()// 13->[0, 2-(13-12)] -> [0,1]
    }

    fun getDir(): String = when (currPos) {
        in 0..rightDown -> {
            //robot keeps the direction so when it does the round robin trip and reaches [0,0] it should keep 'South' direction
            // instead of 'East' that was initially set at the start
            if ((totalSteps / roundLength > 0) && currPos == 0) south
            else east
        }

        in rightDown + 1..rightTop -> north
        in rightTop + 1..leftTop -> west
        else -> south
    }
}
```