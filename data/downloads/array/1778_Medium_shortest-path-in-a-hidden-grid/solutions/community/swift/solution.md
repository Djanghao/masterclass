# Swift Solution - Passed all the test cases

**Author:** ShawnBaek
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-in-a-hidden-grid/solutions/5221005/](https://leetcode.com/problems/shortest-path-in-a-hidden-grid/solutions/5221005/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * // This is the GridMaster's API interface.
 * // You should not implement it, or speculate about its implementation
 * class GridMaster {
 *     public func canMove(direction: Character) -> Bool {}
 *     public func move(direction: Character) {}
 *     public func isTarget() -> Bool {}
 * }
 */

class Solution {
    enum Block: Int {
        case start = -1 //Start point
        case blocked = 8 //Can't move this area
        case empty = 1 //Can move this area
        case end = 2 //End position
        case unvisited = 0 //Haven't check this area
    }

    enum Direction: Character, CaseIterable {
        case up = "U"
        case down = "D"
        case left = "L"
        case right = "R"

        //Pass current row, col
        func nextPoint(row: Int, col: Int) -> (row: Int, col: Int) {
            switch self {
                case .up: return (row + 1, col + 0)
                case .down: return (row + -1, col + 0)
                case .left: return (row + 0, col + -1)
                case .right: return (row + 0, col + 1)
            }
        }

        func reverted() -> Direction {
            switch self {
                case .up: return .down
                case .down: return .up
                case .left: return .right
                case .right: return .left
            }
        }
    }

    var master: GridMaster!
    var grid: [[Block]] = Array(repeating: Array(repeating: .unvisited, count: 2000), count: 2000)
    let startPosition = (row: 500, col: 500)
    func findShortestPath( _ master: GridMaster) -> Int {
        self.master = master
        //Mark Start position at center of grid
        grid[startPosition.row][startPosition.col] = .start
        dfs(startPosition.row, startPosition.col)
        return checkDistance()
    }

    func dfs(_ row: Int, _ col: Int) {
        guard grid[row][col] != .empty else {
            return
        }
        if master.isTarget() {
            grid[row][col] = .end
            return
        }
        grid[row][col] = .empty
        for direction in Direction.allCases {
            let nextPoint = direction.nextPoint(row: row, col: col)
            if master.canMove(direction.rawValue) {
                master.move(direction.rawValue)
                //Search target starting from next row and col
                dfs(nextPoint.row, nextPoint.col)
                master.move(direction.reverted().rawValue)
            }
            else {
                grid[nextPoint.row][nextPoint.col] = .blocked
            }
        }
    }

    //BFS: Calculate distance start to target
    func checkDistance() -> Int {
        var queue = [[Int]]()
        queue.append([startPosition.row, startPosition.col])
        var distance = 0
        while !queue.isEmpty {
            var size = queue.count
            for i in 0..<size {
                var current = queue.removeFirst()
                for direction in Direction.allCases {
                    let nextPoint = direction.nextPoint(row: current[0], col: current[1])
                    //Reached Start from target
                    if grid[nextPoint.row][nextPoint.col] == .end {
                        return distance + 1
                    }
                    //Mark it as blocked to prevent visit this area again and again
                    if grid[nextPoint.row][nextPoint.col] == .empty {
                        grid[nextPoint.row][nextPoint.col] = .blocked
                        queue.append([nextPoint.row, nextPoint.col])
                    }
                }
            }
            distance += 1
        }
        return -1
    }
}
```