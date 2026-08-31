# Swift beats 100% runtime & memory

**Author:** TigranNeDoDeveloper
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3341396/](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3341396/)

---

# Complexity
- Time complexity:
The time complexity of this code is O(n + m), where n is the number of nodes and m is the number of edges. This is because the graph is built by iterating through the edges (O(m)), and the DFS traversal visits each node exactly once (O(n)). The depth-first search (DFS) may visit some edges more than once, but the overall complexity will still be proportional to the number of nodes and edges.

- Space complexity:
The space complexity of this code is also O(n + m), as we are storing the graph as an adjacency list, which has space complexity proportional to the number of nodes and edges. Additionally, the visited array has a space complexity of O(n), but since O(n + m) is an upper bound on the overall space complexity, it dominates the space complexity of the visited array.

# Code
```
class Solution {
    func countPairs(_ n: Int, _ edges: [[Int]]) -> Int {
        let graph = buildGraph(n: n, edges: edges)
        var visited = Array(repeating: false, count: n)
        var count = 0
        
        for i in 0..<n {
            if !visited[i] {
                let numNodes = dfs(start: i, graph: graph, visited: &visited)
                count += numNodes * (numNodes - 1) / 2
            }
        }
        
        return n * (n - 1) / 2 - count
    }
    
    func buildGraph(n: Int, edges: [[Int]]) -> [Int: [Int]] {
        var graph = [Int: [Int]]()
        for edge in edges {
            let a = edge[0], b = edge[1]
            graph[a, default: []].append(b)
            graph[b, default: []].append(a)
        }
        return graph
    }
    
    func dfs(start: Int, graph: [Int: [Int]], visited: inout [Bool]) -> Int {
        visited[start] = true
        var numNodes = 1
        
        if let neighbors = graph[start] {
            for neighbor in neighbors {
                if !visited[neighbor] {
                    numNodes += dfs(start: neighbor, graph: graph, visited: &visited)
                }
            }
        }
        
        return numNodes
    }
}
```