# Swift | Step by step

**Author:** pagafan7as
**Votes:** 1
**Link:** [https://leetcode.com/problems/walking-robot-simulation/solutions/5734024/](https://leetcode.com/problems/walking-robot-simulation/solutions/5734024/)

---

# Code
```swift []
class Solution {
    func robotSim(_ commands: [Int], _ obstacles: [[Int]]) -> Int {
        // Convert "obstacles" into a set, so they can be queried quickly.
        // Interestingly, the solution will still be accepted if we remove
        // this line but it will much slower.
        let obstacles = Set(obstacles)

        // Start at the origin, facing north.
        // Using vectors like this for the position and the direction
        // makes computations much easier.
        var pos = [0, 0], dir = [0, 1]

        var res = 0

        for k in commands {
            switch k {
            // This is a trick that can be used whenever we have to
            // deal with rotations by 90 degrees on the plane.
            // It can be checked by hand, by looking at all the different
            // directions. Or one can check using the rotation formula.
            case -2: dir = [-dir[1], dir[0]]  // Rotate left.
            case -1: dir = [dir[1], -dir[0]]  // Rotate right.
            default: 
                // Try moving forward for k units.
                for _ in 0..<k {
                    // If next position is not an obstacle, move to it.
                    // Otherwise move to the next command.
                    let nextPos = [pos[0] + dir[0], pos[1] + dir[1]]
                    if obstacles.contains(nextPos) { break }
                    pos = nextPos
                }
            }

            // Update max distance squared.
            res = max(res, pos[0] * pos[0] + pos[1] * pos[1])
        }

        return res
    }
}
```