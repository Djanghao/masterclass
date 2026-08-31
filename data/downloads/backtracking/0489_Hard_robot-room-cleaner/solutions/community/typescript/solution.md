# ✅ intuitive backtracking solution.

**Author:** seredenko99
**Votes:** 0
**Link:** [https://leetcode.com/problems/robot-room-cleaner/solutions/4629759/](https://leetcode.com/problems/robot-room-cleaner/solutions/4629759/)

---

# Code
```
function cleanRoom(robot: Robot) {
    const visited = new Set<string>();
    const direction = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    const backtrack = (currPosition: number[], state: number) => {
        visited.add(`${currPosition[0]},${currPosition[1]}`);
        robot.clean();

        for (let i = state; i < state + 4; i++) { //iterate 4 times (4)
            const indexState = i % 4; //get index in range [0, 3] in order to get the right distance
            const newPosition = [currPosition[0] + direction[indexState][0], currPosition[1] + direction[indexState][1]];

            //if the next cell is visited turn the robot
            if (visited.has(`${newPosition[0]},${newPosition[1]}`)) {
                robot.turnRight();
                continue;
            }

            //move the robot or we can't move turn the robot
            const canMove = robot.move();
            if (!canMove) {
                robot.turnRight();
                continue;
            }

            //go to next cell
            backtrack(newPosition, indexState);

            //go back
            robot.turnRight();
            robot.turnRight();
            robot.move();
            robot.turnRight();
            robot.turnRight();

            //turn robot to next position as we go to next i
            robot.turnRight();
        }
    }
    backtrack([0, 0], 0);
};
```