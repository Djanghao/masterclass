# Java DFS with comments- 15 lines of logic

**Author:** mvahidalizadeh
**Votes:** 8
**Link:** [https://leetcode.com/problems/robot-room-cleaner/solutions/1151965/](https://leetcode.com/problems/robot-room-cleaner/solutions/1151965/)

---

Suppose you start from cell (0,0) and the head of robot is toward direction 0. This will be a dfs solution. Please follow the comments. Not that for returning to the prev cell, you need to turn the head of robot 180 degrees (right,right). Then, you move to the prev cell. But, you need to turn the head of the robot back to the original position before moving from the prev cell. This is why you need to turn the head 180 degrees (another right,right). For each dfs, clean the cell, mark it visited, then explore the four different directions if not blocked and not visited.
*) Use import javafx.util.Pair for your pairs
```
    public void cleanRoom(Robot robot) {
        dfs(robot, 0, 0, 0, new HashSet<>(), new int[][]{{-1, 0}, {0, 1}, {1, 0}, {0, -1}}); // Start from row 0 col 0 direction 0- // up, right, down, left-clockwise
    }

    private void dfs(Robot robot, int row, int col, int dir, Set<Pair<Integer, Integer>> visited, int[][] directions) {
        robot.clean(); // Clean the current cell
        visited.add(new Pair<>(row, col)); // Mark the current cell visited
        for (int i = 0; i < 4; i++) { // Explore 4 different directions
            int newDir = (dir + i) % 4; // Next direction 0,1,2,3
            int newI = row + directions[newDir][0]; // New cell row
            int newJ = col + directions[newDir][1]; // New cell column
            if (!visited.contains(new Pair<>(newI, newJ)) && robot.move()) { // If cell not visited and not blocked
                dfs(robot, newI, newJ, newDir, visited, directions); // Explore the new cell
                robot.turnRight(); // Go back
                robot.turnRight();
                robot.move();
                robot.turnRight(); // Turn the head to the original direction
                robot.turnRight();
            }
            robot.turnRight(); // Explore the next direction-total 4 directions
        }
    }
```