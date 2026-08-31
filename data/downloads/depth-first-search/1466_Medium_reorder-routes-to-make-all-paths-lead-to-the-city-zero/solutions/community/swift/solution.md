# Swift easy O(n)

**Author:** TigranNeDoDeveloper
**Votes:** 2
**Link:** [https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/3336641/](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/3336641/)

---

# Complexity
- Time complexity: O(n)

The main operations in the code are building the graph and traversing it using Depth First Search (DFS).
The buildGraph(from:) function iterates over all the connections, which are N-1 in number. So the time complexity for building the graph is O(n).
The dfs(startingAt:) function visits each node exactly once using DFS. Since there are N nodes, the time complexity for DFS is also O(n).
Combining the complexities of building the graph and DFS, the overall time complexity is O(n).
Space complexity: 

- Space complexity: O(n)

The space complexity is primarily influenced by the storage of the adjacency list and the visited dictionary.
The adjacency list stores N nodes and their corresponding connections, so the space complexity is O(n).
The visited dictionary stores a boolean value for each of the N nodes, also resulting in O(n) space complexity.
The depth of the function call stack during DFS is at most N (in the worst case when the graph is a single path), so the space complexity contributed by the call stack is also O(n).
Combining these factors, the overall space complexity is O(n).

# Code
```
class Solution {
    var adjacencyList: [Int: [(Int, Int)]] = [:]
    var visited: [Int: Bool] = [:]
    var result = 0

    func minReorder(_ n: Int, _ connections: [[Int]]) -> Int {
        buildGraph(from: connections)

        dfs(startingAt: 0)
        return result
    }

    func dfs(startingAt start: Int) {
        visited[start] = true

        guard let children = adjacencyList[start] else {
            return
        }

        for child in children {
            if visited[child.0] == nil {
                if child.1 == -1 {
                    result += 1
                }
                dfs(startingAt: child.0)
            }
        }
    }

    func buildGraph(from connections: [[Int]]) {
        for connection in connections {
            adjacencyList[connection[1], default: []].append((connection[0], 1))
            adjacencyList[connection[0], default: []].append((connection[1], -1))
        }
    }
}

```