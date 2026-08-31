# [Swift] 90.32% faster, Easy to understand

**Author:** LH17
**Votes:** 2
**Link:** [https://leetcode.com/problems/robot-room-cleaner/solutions/1317948/](https://leetcode.com/problems/robot-room-cleaner/solutions/1317948/)

---

```
class Solution {
    struct Pair: Hashable {
        let row: Int
        let col: Int
    }
    var robot: Robot!
    var visited = Set<Pair>()
    var directions = [[-1,0], [0,1], [1,0], [0,-1]]
    
    func cleanRoom(_ robot: Robot) {
        self.robot = robot
        backtrack(0,0,0)
    }
    
    private func backtrack(_ row: Int, _ col: Int, _ direction: Int) {
        visited.insert(Pair(row: row, col: col))
        robot.clean()
        
        for i in 0..<4 {
            let newDirection = (direction + i) % 4
            let newRow = row + directions[newDirection][0]
            let newCol = col + directions[newDirection][1]
            
            if !visited.contains(Pair(row: newRow, col: newCol)) && robot.move() {
                backtrack(newRow, newCol, newDirection)
                goBack()
            }
            robot.turnRight()
        }
    }
    
    private func goBack() {
        robot.turnRight()
        robot.turnRight()
        robot.move()
        robot.turnRight()
        robot.turnRight()
    }
}
```