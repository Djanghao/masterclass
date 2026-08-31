# ✔️ 100% Fastest Swift Solution, time: O(n + m), space: O(n).

**Author:** sergeyleschev
**Votes:** 20
**Link:** [https://leetcode.com/problems/clone-graph/solutions/1938465/](https://leetcode.com/problems/clone-graph/solutions/1938465/)

---

```
/**
 * Definition for a Node.
 * public class Node {
 *     public var val: Int
 *     public var neighbors: [Node?]
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.neighbors = []
 *     }
 * }
 */

class Solution {
    // - Complexity:
    //   - time: O(n + m), where n is the number of nodes in the graph, and m is the number of edges in the graph.
    //   - space: O(n), where n is the number of nodes in the graph.
    
    func cloneGraph(_ node: Node?) -> Node? {
        var visited = [Int: Node]()
        return cloneGraphDFS(node, visited: &visited)
    }

    
    func cloneGraphDFS(_ node: Node?, visited: inout [Int: Node]) -> Node? {
        guard let node = node else { return nil }

        let newNode = Node(node.val)
        visited[node.val] = newNode

        for neighbor in node.neighbors {
            guard let neighbor = neighbor else { continue }

            if let n = visited[neighbor.val] {
                newNode.neighbors.append(n)
            } else {
                let n = cloneGraphDFS(neighbor, visited: &visited)
                newNode.neighbors.append(n)
            }
        }

        return newNode
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.