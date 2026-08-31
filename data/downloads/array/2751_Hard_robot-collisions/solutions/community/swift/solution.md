# Swift | Stack and Simulation

**Author:** pagafan7as
**Votes:** 3
**Link:** [https://leetcode.com/problems/robot-collisions/solutions/5468141/](https://leetcode.com/problems/robot-collisions/solutions/5468141/)

---

# Code
```
class Solution {
    func survivedRobotsHealths(_ positions: [Int], _ healths: [Int], _ directions: String) -> [Int] {
        var stack = [Int]()
        let directions = Array(directions)
        var healths = healths

        // Sort robots by increasing position.
        var robots = positions.indices.sorted { positions[$0] < positions[$1] }

        // Place each robot on the stack and see if it collides against any
        // of the robots already on the stack.
        for robot in robots {
            stack.append(robot)

            // If the top 2 robots on the stack are moving towards each other, resolve their collision.
            while stack.suffix(2).map { directions[$0] } == ["R", "L"] {
                let lastRobots = [stack.removeLast(), stack.removeLast()]

                // Compute the new healths of the 2 robots after the collision, and if a
                // robot survives, re-add it to the stack.
                let minHealth = lastRobots.map { healths[$0] }.min()!
                for robot in lastRobots {
                    healths[robot] = healths[robot] > minHealth ? healths[robot] - 1 : 0
                    if healths[robot] > 0 { stack.append(robot) }
                }
            }
        }

        return healths.filter { $0 > 0 }
    }
}
```