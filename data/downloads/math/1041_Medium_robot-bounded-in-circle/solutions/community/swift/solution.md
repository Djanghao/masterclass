# Swift Solution (beats 100%)

**Author:** JerExplosion
**Votes:** 2
**Link:** [https://leetcode.com/problems/robot-bounded-in-circle/solutions/3447938/](https://leetcode.com/problems/robot-bounded-in-circle/solutions/3447938/)

---


```
class Solution {
    func isRobotBounded(_ instructions: String) -> Bool {
    
        let potentialMovements = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        var directionIndex = 0
        var currX = 0, currY = 0
        
        for instruction in instructions {
            switch instruction {
            case "L":
                directionIndex = (directionIndex + 3) % 4
            case "R":
                directionIndex = (directionIndex + 1) % 4
            default:
                currX += potentialMovements[directionIndex][0]
                currY += potentialMovements[directionIndex][1]
            }
        }

        return directionIndex != 0 || (currX == 0 && currY == 0)
    }
}
```