# ✅SIMPLE AND EASY SOLUTION USING KOTLIN ✅ WITH EXPLANATION

**Author:** tusharahmed11
**Votes:** 1
**Link:** [https://leetcode.com/problems/walking-robot-simulation/solutions/5735942/](https://leetcode.com/problems/walking-robot-simulation/solutions/5735942/)

---

# PLEASE UPVOTE IF YOU FIND IT HELPFULL (MY FIRST POST) !!

# Intuition
The problem involves simulating a robot's movements based on a series of commands. The robot can move forward or turn left or right. Obstacles can stop its movement. The goal is to determine the maximum Euclidean distance squared from the origin that the robot reaches during its movement.

# Approach
1. **Direction Management:** Use an array to represent the four possible directions (North, East, South, West) in a clockwise manner.
Position Tracking: Keep track of the robot's current position starting from the origin.
2. **Obstacle Handling:** Store obstacles in a hashmap where the keys are the x-coordinates and the values are hash sets of y-coordinates. This allows for efficient checking if a position is an obstacle.
3. **Command Execution:** For each command, either turn the robot or move it forward step by step, checking for obstacles at each step.
4. **Result Calculation:** After executing all commands, calculate and return the maximum distance squared from the origin.

# Complexity
- Time complexity:
  - The time complexity is $$O(n+k)$$, where $$n$$ is the number of commands and $$k$$ is the total number of obstacles. The commands are processed in linear time, and checking for obstacles is $$O(1)$$ on average due to the hashmap.

- Space complexity:
  - The space complexity is $$O(k)$$, where $$k$$ is the number of obstacles stored in the hashmap.

# Code
```kotlin []
class Solution {
    fun robotSim(commands: IntArray, obstacles: Array<IntArray>): Int {

        //0: North, 1: East, 2: South, 3: West
        val directions = arrayOf(
                intArrayOf(0, 1),
                intArrayOf(1, 0),
                intArrayOf(0, -1),
                intArrayOf(-1, 0)
        )

        val currentPosition = intArrayOf(0,0)

        var result = 0

        var currentDirection = 0

        val  obstacleMap: HashMap<Int, HashSet<Int>> = HashMap()

        for (obstacle in obstacles){
            if (!obstacleMap.containsKey(obstacle[0])){
                obstacleMap[obstacle[0]] = hashSetOf()
            }
            obstacleMap[obstacle[0]]!!.add(obstacle[1])
        }

        for (command in commands){
            if (command == -1){
                //Turn right
                currentDirection = (currentDirection+1)%4
                continue
            }

            if (command == -2){
                //turn left
                currentDirection = (currentDirection-1)
                if (currentDirection == -1){
                    currentDirection =3
                }
                continue
            }
            
            // move forward
            
            val direction = directions[currentDirection]
            
            for (step in 0 until command){
                val nextX = currentPosition[0] + direction[0]
                val nextY = currentPosition[1] + direction[1]
                
                if (obstacleMap.containsKey(nextX) && obstacleMap[nextX]!!.contains(nextY)){
                    break
                }
                
                currentPosition[0] = nextX
                currentPosition[1] = nextY
            }
            
            result = max(result,currentPosition[0] * currentPosition[0] + currentPosition[1] * currentPosition[1])

        }
        
        return result

    }
}
```