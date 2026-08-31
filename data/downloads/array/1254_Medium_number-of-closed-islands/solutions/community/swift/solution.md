# Solution in Swift Using  DFS, Recursion and only one loop

**Author:** user8649vD
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-closed-islands/solutions/6115432/](https://leetcode.com/problems/number-of-closed-islands/solutions/6115432/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Traverse graph with nodes 0s. If the traversed nodes connect to edge, exclude them. Keep counting rest of the components.
# Approach
<!-- Describe your approach to solving the problem. -->
Traverse using DFS. Mark visited nodes by changing their value to avoid revisit. If node is at the edge, return false. If the traversed path is not connected to the edge, return true. Keep counting such islands by iterating over grid.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```swift []
class Solution {
    func closedIsland(_ grid: [[Int]]) -> Int {
        var graph = grid
        var islands = 0

        for i in 0..<grid.count {
            // Traverse nodes with 0s only.
            for j in 0..<grid[0].count where graph[i][j] == 0 {
                let islandFound = dfs(&graph, i, j)

                if islandFound == true {
                    // If all nodes in the path are inside.
                    islands += 1
                }
            }
        }
        
        return islands
    }

    func dfs(_ graph: inout [[Int]], _ i: Int, _ j: Int) -> Bool? {
        let m = graph.count
        let n = graph[0].count

        // If out of the grid.
        guard i >= 0, i < m, j >= 0, j < n else { return nil }

        // If node is not 0.
        guard graph[i][j] == 0 else { return nil }

        // Mark the node visited to avoid revisting.
        graph[i][j] = 2

        // Traverse in four directions.
        let one = dfs(&graph, i + 1, j)
        let two = dfs(&graph, i - 1, j)
        let three = dfs(&graph, i, j + 1)
        let four = dfs(&graph, i, j - 1)

        // If the node is on the edge, return false.
        let atEdge = i == 0 || i == m - 1 || j == 0 || j == n - 1

        if atEdge {
            return false
        }

        // Check whether nodes in path were on the edge.
        // If all directions are nil,
        // that means it is part of an island, returns true in this case.
        let res = [one, two, three, four].compactMap { $0 }.reduce (true) { $0 && $1 }

        return res
    }
}
```