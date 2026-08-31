# Simple solution using DFS with explanation in comments

**Author:** user8649vD
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/6082364/](https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/6082364/)

---


# Code
```swift []
class Solution {

    var goodNodes = 0

    func countGoodNodes(_ edges: [[Int]]) -> Int {
        // Build adjacency list.
        var adjList = [Int: [Int]]()

        for edge in edges {
            adjList[edge[0], default: []].append(edge[1])
            adjList[edge[1], default: []].append(edge[0])
        }

        // To keep track of visited nodes while traversing.
        var visited = [Bool](repeating: false, count: edges.count + 1)

        // Traverse the graph.
        _ = dfs(0, adjList, &visited)

        return goodNodes
    }

    func dfs(_ node: Int, _ list: [Int: [Int]], _ visited: inout [Bool]) -> Int {

        guard visited[node] == false else { return 0 }
        
        // Mark the node visited.
        visited[node] = true

        // Calculate total subtree nodes at this node.
        // Root of the subtree itself considered as one of the node, hence, initialise it 1.
        var subtreeNodes = 1

        // Keep track of subtree nodes for all child nodes. If there's more than one count, it means subtrees have different count of nodes.
        var counts = Set<Int>()

        // Visit all subtree nodes.
        for adjNode in list[node] ?? [] {
            if !visited[adjNode] {
                let count = dfs(adjNode, list, &visited)
                subtreeNodes += count
                counts.insert(count)
            }
        }

        // If there is only one count in set, that means subtree total is same for all child nodes.
        // If subtreeNodes is 1, there's no child nodes. Consider it a good node.
        if counts.count == 1 || subtreeNodes == 1 {
            goodNodes += 1
        }

        // Return total nodes in this subtree.
        return subtreeNodes
    }
}
```