# Swift Solution - Beats 100% - Topological Sort + Memoization

**Author:** ingax
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-eventual-safe-states/solutions/3757246/](https://leetcode.com/problems/find-eventual-safe-states/solutions/3757246/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use cycle detection and DFS to find all safe nodes aka nodes that are not part of a cycle.

# Approach
<!-- Describe your approach to solving the problem. -->
Use topological sort approach for cycle detection.

Run DFS starting from every node.

Use a memoization table to remember if a node had a cycle or was verified to not lead to a cycle.

# Complexity
Note: V == n
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(V + E)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(V)$$
# Code
```
class Solution {
    enum State {
        case unprocessed
        case processing
    }

    func eventualSafeNodes(_ graph: [[Int]]) -> [Int] {
        var result: [Int] = []
        // tristate memoization table
        var memo: [Bool?] = Array(repeating: nil, count: graph.count)
        // visited state tracker for cycle detection
        var visited: [State] = Array(repeating: .unprocessed, count: graph.count)

        func dfs(_ root: Int) -> Bool {
            if let hasCycle = memo[root] {
                return hasCycle
            }

            if visited[root] == .processing  {
                memo[root] = false
                return false
            }

            visited[root] = .processing
            
            for neighbor in graph[root] {
                if !dfs(neighbor) {
                    memo[neighbor] = false
                    return false
                }
            }
            
            visited[root] = .unprocessed
            memo[root] = true
            return true
        }

        for node in graph.indices {
            if dfs(node) {
                result.append(node)
            } else {
                memo[node] = false
            }
        }

        return result
    }
}
```