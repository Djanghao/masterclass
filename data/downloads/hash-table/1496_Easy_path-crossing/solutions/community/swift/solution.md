# 🚀 Swift | Time: O(n) | Space: O(n)

**Author:** alekseiwe
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-crossing/solutions/4446919/](https://leetcode.com/problems/path-crossing/solutions/4446919/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func isPathCrossing(_ path: String) -> Bool {
        let directions: [Character: (x: Int, y: Int)] = [
            "N": (x: 0, y: 1),
            "S": (x: 0, y: -1),
            "E": (x: 1, y: 0),
            "W": (x: -1, y: 0),
        ]
        
        var currentPosition: (x: Int, y: Int) = (x: 0, y: 0)
        var visited: Set<String> = .init(["\\(currentPosition.x)_\\(currentPosition.y)"])
        
        for direction in path {
            guard let direction = directions[direction] else { continue }
            currentPosition = (
                x: currentPosition.x + direction.x,
                y: currentPosition.y + direction.y
            )
            let currentPositionToStr = "\\(currentPosition.x)_\\(currentPosition.y)"
            if visited.contains(currentPositionToStr) {
                return true
            } else {
                visited.insert(currentPositionToStr)
            }
        }
        
        return false
    }
}
```