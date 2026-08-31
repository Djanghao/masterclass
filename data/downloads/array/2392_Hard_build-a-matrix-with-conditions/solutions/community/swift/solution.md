# Swift | DFS Topological Sort (+ Kahn)

**Author:** pagafan7as
**Votes:** 1
**Link:** [https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5511658/](https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5511658/)

---

I originally wrote this using **DFS Topological Sort** (```dfsSort()```) but I'm adding **Kahn's Topological Sort** (```khansSort()```) for comparison, since most solutions use that algorithm.

Asymptotically, they both run in O(V + E) time and in practice they seem roughly equivalent.

I thought that one may be easier to implement than the other one, but I also find them to be approximately equal from that point of view.

# Code
```
class Solution {
    func buildMatrix(_ k: Int, _ rowConditions: [[Int]], _ colConditions: [[Int]]) -> [[Int]] {
        var matrix = Array(repeating: Array(repeating: 0, count: k), count: k)
        guard let sortedRows = Graph(nodes: Array(1...k), edges: rowConditions).dfsSort(),
              let sortedCols = Graph(nodes: Array(1...k), edges: colConditions).kahnsSort()
        else { return [] }

        for num in 1...k {
            if let row = sortedRows.firstIndex(of: num), let col = sortedCols.firstIndex(of: num) {
                matrix[row][col] = num
            }
        }

        return matrix
    }
}

class Graph {
    private let nodes: [Int]
    private let edges: [[Int]]
    private var adj = [Int: [Int]]()

    init(nodes: [Int], edges: [[Int]]) {
        self.nodes = nodes
        self.edges = edges
        for edge in edges {
            adj[edge[0], default: []].append(edge[1])
        }
    }

    func dfsSort() -> [Int]? {
        enum NodeState { case visited, visiting, unvisited }
        var nodeState = [Int: NodeState]()
        var stack: [Int] = []

        for node in nodes { nodeState[node] = .unvisited }
        for node in nodes {
            if !dfs(node) {
                return nil
            }
        }
        
        return stack.reversed()
    
        func dfs(_ node: Int) -> Bool {
            if let state = nodeState[node], state == .visited { return true }
            if let state = nodeState[node], state == .visiting { return false }
            nodeState[node] = .visiting
        
            if let neighbors = adj[node] {
                for neighbor in neighbors {
                    if !dfs(neighbor) { return false }
                }
            }
        
            nodeState[node] = .visited
            stack.append(node)
            return true
        }      
    }

    func kahnsSort() -> [Int]? {
        var sorted: [Int] = []
        var inDegrees: [Int: Int] = Dictionary(uniqueKeysWithValues: nodes.map { ($0, 0) })
        for edge in edges {
            inDegrees[edge[1], default: 0] += 1
        }
        var stack = inDegrees.filter{ $0.1 == 0 }.map { $0.0 }

        while let node = stack.popLast() {
            if let neighbors = adj[node] {
                for neighbor in neighbors {
                    inDegrees[neighbor, default: 0] -= 1
                    if inDegrees[neighbor] == 0 { stack.append(neighbor) }
                }
            }
            sorted.append(node)
        }

        return sorted.count == nodes.count ? sorted : nil
    }
}
```