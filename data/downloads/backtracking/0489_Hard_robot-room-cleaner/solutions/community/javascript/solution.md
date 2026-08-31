# JavaScript, backtracking

**Author:** hon9g
**Votes:** 9
**Link:** [https://leetcode.com/problems/robot-room-cleaner/solutions/544464/](https://leetcode.com/problems/robot-room-cleaner/solutions/544464/)

---

- Time Complexity: O(4^(N-M))
- Space Complexity: O(N-M)
```JavaScript
/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
    const directions = [[-1,0],[0,1],[1,0],[0,-1]], visited = new Set();
    /**
     * @return {void}
     */
    function goBack() {
        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.turnRight();
    }
    /**
     * @param {number[]} cell
     * @param {numver} prev
     * @return {void}
     */
    function backtrack(cell, prev) {
        visited.add(cell.join());
        robot.clean();
        for (let d = 0; d < 4; d++) {
            const next = (prev + d) % 4;
            const nextCell = [cell[0] + directions[next][0], cell[1] + directions[next][1]];
            if (!visited.has(nextCell.join()) && robot.move()) {
                backtrack(nextCell, next);
                goBack();
            }
            robot.turnRight();
        }
    }
    
    backtrack([0,0], 0);
};
```