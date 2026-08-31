# C# Solution for Walking Robot Simulation Problem

**Author:** Aman_Raj_Sinha
**Votes:** 6
**Link:** [https://leetcode.com/problems/walking-robot-simulation/solutions/5734379/](https://leetcode.com/problems/walking-robot-simulation/solutions/5734379/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves simulating the movement of a robot on an infinite grid where obstacles may be present. The key is to track the robot\u2019s direction and position while efficiently handling obstacles. The goal is to determine the maximum Euclidean distance squared that the robot reaches from the origin during its journey.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Direction Management:
	\u2022	The robot can move in four possible directions: North, East, South, and West. These directions are represented by vectors (dx, dy) stored in a 2D array called directions.
	\u2022	A directionIndex variable tracks the current direction the robot is facing. This index is updated when the robot turns left or right.
2.	Obstacle Handling:
	\u2022	Obstacles are stored in a Dictionary<(int, int), bool>, where the key is a tuple representing the obstacle\u2019s coordinates. This allows for efficient O(1) checking to see if the robot\u2019s next move will hit an obstacle.
	\u2022	The dictionary helps avoid the overhead of string operations or searching through a list, which can be less efficient.
3.	Command Execution:
	\u2022	Turn Commands (-1 for right, -2 for left): The directionIndex is adjusted to point to the new direction vector in the directions array.
	\u2022	Move Command (positive integer): The robot moves one step at a time in the current direction. After each step, the robot checks if the next position is blocked by an obstacle. If an obstacle is encountered, the robot stops moving in that direction.
	\u2022	Max Distance Calculation: After each move, the distance squared from the origin is calculated and compared to the current maximum. If it\u2019s larger, the maximum is updated.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Command Processing: Each command is processed once, leading to O(N) operations where N is the number of commands.
\u2022	Movement: For each command, the robot may move up to K steps (where K is the maximum move value, up to 9). Since K is constant, the complexity remains O(N).
\u2022	Obstacle Checking: Checking if a move results in hitting an obstacle is O(1) due to the use of a Dictionary.

Overall, the time complexity is O(N).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	Direction Array: The directions array uses O(1) space.
\u2022	Obstacle Dictionary: Storing obstacles in a Dictionary uses O(M) space, where M is the number of obstacles.
\u2022	Variables: Other variables such as x, y, maxDistance, and directionIndex use constant space, O(1).

Overall, the space complexity is O(M), where M is the number of obstacles.

# Code
```csharp []
public class Solution {
    public int RobotSim(int[] commands, int[][] obstacles) {
        // Define direction vectors for North, East, South, West
        int[,] directions = new int[,] { { 0, 1 }, { 1, 0 }, { 0, -1 }, { -1, 0 } };
        
        // Map obstacles into a Dictionary for O(1) lookups
        var obstacleMap = new Dictionary<(int, int), bool>();
        foreach (var obstacle in obstacles) {
            obstacleMap[(obstacle[0], obstacle[1])] = true;
        }

        int x = 0, y = 0;  // Initial position of the robot
        int directionIndex = 0;  // Starting direction (North)
        int maxDistance = 0;  // To track the maximum distance squared

        foreach (var command in commands) {
            if (command == -1) {
                // Turn right: Increase the direction index
                directionIndex = (directionIndex + 1) % 4;
            } else if (command == -2) {
                // Turn left: Decrease the direction index
                directionIndex = (directionIndex + 3) % 4;
            } else {
                // Move forward by command units
                for (int i = 0; i < command; i++) {
                    int nextX = x + directions[directionIndex, 0];
                    int nextY = y + directions[directionIndex, 1];

                    // Check if next position is an obstacle
                    if (!obstacleMap.ContainsKey((nextX, nextY))) {
                        x = nextX;
                        y = nextY;
                        maxDistance = Math.Max(maxDistance, x * x + y * y);
                    } else {
                        break;  // Stop moving in this direction if an obstacle is encountered
                    }
                }
            }
        }

        return maxDistance;
    }
}
```