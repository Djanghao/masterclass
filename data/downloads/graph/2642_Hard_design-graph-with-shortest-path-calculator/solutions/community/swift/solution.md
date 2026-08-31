# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4274906/](https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4274906/)

---

# Complexity
- Time complexity: $$O(1),addEdge(self: List[int]): O(1), shortestPath(node1: int, node2: int): O((\u2223V\u2223+\u2223E\u2223)log\u2223V\u2223)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(\u2223V\u2223+\u2223E\u2223)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Graph {
    private var graph: [[(Int, Int)]]
    
    init(_ n: Int, _ edges: [[Int]]) {
        graph = [[(Int, Int)]](repeating: [], count: n)
        for edge in edges { addEdge(edge) }
    }
    
    func addEdge(_ edge: [Int]) {
        let (u, v, w) = (edge[0], edge[1], edge[2])
        graph[u].append((v, w))
    }
    
    func shortestPath(_ node1: Int, _ node2: Int) -> Int {
        var dist = [Int](repeating: Int.max, count: graph.count)
        dist[node1] = 0

        var minHeap = [(Int, Int)]()
        minHeap.append((dist[node1], node1))
        
        while !minHeap.isEmpty {
            let (d, u) = minHeap.removeFirst()
            if u == node2 { return d }

            for (v, w) in graph[u] {
                if d + w < dist[v] {
                    dist[v] = d + w
                    minHeap.append((dist[v], v))
                }
            }
            
            minHeap.sort { $0.0 < $1.0 }
        }
        
        return -1
    }
}
```