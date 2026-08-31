# C# beat 94%

**Author:** Jimmyoku
**Votes:** 1
**Link:** [https://leetcode.com/problems/robot-room-cleaner/solutions/4837875/](https://leetcode.com/problems/robot-room-cleaner/solutions/4837875/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n + m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1);
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * interface Robot {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     public bool Move();
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     public void TurnLeft();
 *     public void TurnRight();
 *
 *     // Clean the current cell.
 *     public void Clean();
 * }
 */

class Solution {
    public void CleanRoom(Robot robot) {
        
        List<int[]> directions = new() { new int[]{-1, 0}, new int[]{0, 1}, new int[]{1, 0}, new int[]{0, -1}};
        HashSet<(int, int)> visited = new();

        void Moves(Robot robot)
        {
            robot.TurnRight();
            robot.TurnRight();
            robot.Move();
            robot.TurnRight();
            robot.TurnRight();
        }

        BackTracking(0, 0, 0);

        void BackTracking(int row, int col, int direction)
        {
            visited.Add((row, col));
            robot.Clean();

            for (int i = 0; i < 4; i++)
            {
                int newDir = (direction + i) % 4;
                int newRow = row + directions[newDir][0];
                int newCol = col + directions[newDir][1];

                if (!visited.Contains((newRow, newCol)) && robot.Move())
                {
                    BackTracking(newRow, newCol, newDir);
                    Moves(robot);
                }
                robot.TurnRight();
            }
        }
    }
}
```