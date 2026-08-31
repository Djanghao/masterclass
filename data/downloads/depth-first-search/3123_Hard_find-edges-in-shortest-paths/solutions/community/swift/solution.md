# ✅ Optimal Approach using Swift

**Author:** lebon
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-edges-in-shortest-paths/solutions/5203174/](https://leetcode.com/problems/find-edges-in-shortest-paths/solutions/5203174/)

---

# Intuition
The problem is essentially about finding the edges that are part of the shortest path from the source node (0) to the destination node (`n-1`). By identifying these edges, we can determine which edges contribute to the shortest path. Using Dijkstra's algorithm helps us find the shortest path efficiently, and then we can backtrack to identify the edges involved.

# Approach
1. **Adjacency List Construction**: 
   - Construct an adjacency list where each node points to its neighboring nodes along with the index of the edge connecting them. This helps in efficiently traversing the graph.

2. **Dijkstra's Algorithm**: 
   - Use a priority queue to implement Dijkstra's algorithm and find the shortest path from the source node (0) to all other nodes. The priority queue helps in selecting the node with the smallest distance at each step.
   - Maintain an array to keep track of the shortest path distances from the source node to each node.

3. **Backtracking**: 
   - Start from the destination node (`n-1`) and backtrack using the shortest path distances to determine which edges are part of the shortest path. This helps in identifying the specific edges that were used to reach the shortest path.

4. **Result Array**: 
   - Initialize a result array to mark the edges that are part of the shortest path. If an edge is part of the shortest path, mark it as `true` in the result array.

# Complexity
- **Time complexity**: 
  - The time complexity is $$O(E \\log V)$$, where $$E$$ is the number of edges and $$V$$ is the number of vertices. This is primarily due to Dijkstra's algorithm which uses a priority queue.
  
- **Space complexity**: 
  - The space complexity is $$O(V + E)$$, where $$V$$ is the number of vertices and $$E$$ is the number of edges. This accounts for the adjacency list, priority queue, and the additional arrays used for tracking distances and results.



# Code
```swift []
import Foundation

class Solution {
    func findAnswer(_ n: Int, _ edges: [[Int]]) -> [Bool] {
        var result = [Bool](repeating: false, count: edges.count) // Initialize the result array
        var visited = [Bool](repeating: false, count: n) // Keep track of visited nodes
        var adjacencyList = [[(neighbor: Int, edgeIndex: Int)]](repeating: [], count: n) // Adjacency list to store edges and their indices
        
        // Fill the adjacency list
        for i in 0..<edges.count {
            let u = edges[i][0]
            let v = edges[i][1]
            let weight = edges[i][2]
            adjacencyList[u].append((neighbor: v, edgeIndex: i))
            adjacencyList[v].append((neighbor: u, edgeIndex: i))
        }
        
        // Priority queue to store (distance, node)
        var priorityQueue = PriorityQueue<(Int, Int)> { $0.0 < $1.0 }
        var shortestPath = [Int](repeating: Int.max, count: n)
        
        priorityQueue.push((0, 0)) // Start with the source node
        shortestPath[0] = 0
        
        // Dijkstra's algorithm to find the shortest path
        while !priorityQueue.isEmpty {
            let (currentDistance, currentNode) = priorityQueue.pop()!
            if currentDistance == shortestPath[currentNode] {
                for (neighbor, edgeIndex) in adjacencyList[currentNode] {
                    let newDistance = currentDistance + edges[edgeIndex][2]
                    if newDistance < shortestPath[neighbor] {
                        shortestPath[neighbor] = newDistance
                        priorityQueue.push((newDistance, neighbor))
                    }
                }
            }
        }
        
        // Backtrack from the destination node to mark the edges in the shortest path
        priorityQueue.push((shortestPath[n - 1], n - 1))
        while !priorityQueue.isEmpty {
            let (currentDistance, currentNode) = priorityQueue.pop()!
            for (neighbor, edgeIndex) in adjacencyList[currentNode] {
                if currentDistance - edges[edgeIndex][2] == shortestPath[neighbor] {
                    if !visited[neighbor] {
                        priorityQueue.push((shortestPath[neighbor], neighbor))
                    }
                    result[edgeIndex] = true
                    visited[neighbor] = true
                }
            }
        }
        
        return result
    }
}

// Priority Queue implementation
struct PriorityQueue<Element> {
    private var elements: [Element]
    private let areInIncreasingOrder: (Element, Element) -> Bool

    var isEmpty: Bool { elements.isEmpty }

    init(_ areInIncreasingOrder: @escaping (Element, Element) -> Bool) {
        self.elements = []
        self.areInIncreasingOrder = areInIncreasingOrder
    }

    mutating func push(_ element: Element) {
        elements.append(element)
        elements.sort(by: areInIncreasingOrder)
    }

    mutating func pop() -> Element? {
        return isEmpty ? nil : elements.removeFirst()
    }
}

```