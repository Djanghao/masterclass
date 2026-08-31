# Swift - BFS

**Author:** ksmirnovnn
**Votes:** 2
**Link:** [https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/5547313/](https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/5547313/)

---

1. Graph Representation: The graph is represented using an adjacency list.
2. Multi-Level BFS:
- We use a queue to perform BFS. Each element in the queue is a tuple containing the current node and the current time.
- We maintain arrays firstTimes and secondTimes to track the shortest and second shortest times to reach each node.
3. Signal Change Handling:
- For each move, if the current time is during a red signal period, calculate and add the wait time until the signal turns green.
4. Updating Times:
- When visiting a neighbor, update the shortest and second shortest times accordingly.
- Only add to the queue if the new time is a candidate for either the shortest or the second shortest time.

# Code
```
import Foundation

class Solution {
    func secondMinimum(_ n: Int, _ edges: [[Int]], _ time: Int, _ change: Int) -> Int {
        // Initialize the adjacency list for the graph
        var graph = [Int: [Int]]()
        for edge in edges {
            let u = edge[0]
            let v = edge[1]
            graph[u, default: []].append(v)
            graph[v, default: []].append(u)
        }
        
        // Use a queue to perform BFS, keeping track of node, time, and number of visits
        var queue = [(node: 1, time: 0)]
        // Array to track visits to nodes, initialized to 0
        var visited = Array(repeating: 0, count: n + 1)
        // Mark the starting node (node 1) as visited once
        visited[1] = 1
        
        // Arrays to store the shortest and second shortest times to each node
        var firstTimes = Array(repeating: Int.max, count: n + 1)
        var secondTimes = Array(repeating: Int.max, count: n + 1)
        // The shortest time to reach node 1 is 0
        firstTimes[1] = 0
        
        // Perform BFS
        while !queue.isEmpty {
            // Dequeue the first element (current node and time)
            let (currentNode, currentTime) = queue.removeFirst()
            
            // Traverse all neighbors of the current node
            for neighbor in graph[currentNode, default: []] {
                // Calculate the new time to reach this neighbor
                var newTime = currentTime + time
                // If the current time falls within a red signal period
                if (currentTime / change) % 2 == 1 {
                    // Add the waiting time until the next green signal
                    newTime += change - (currentTime % change)
                }
                
                // If the new time is less than the currently known shortest time to the neighbor
                if newTime < firstTimes[neighbor] {
                    // Update the second shortest time to the neighbor
                    secondTimes[neighbor] = firstTimes[neighbor]
                    // Update the shortest time to the neighbor
                    firstTimes[neighbor] = newTime
                    // Enqueue this neighbor with the new time
                    queue.append((neighbor, newTime))
                } else if newTime > firstTimes[neighbor] && newTime < secondTimes[neighbor] {
                    // If the new time is between the shortest and second shortest times
                    // Update the second shortest time to the neighbor
                    secondTimes[neighbor] = newTime
                    // Enqueue this neighbor with the new time
                    queue.append((neighbor, newTime))
                }
            }
        }
        
        // Return the second shortest time to reach node n
        return secondTimes[n]
    }
}

```