# Swift, Code to get the actual path too. I became interested in this problem, to find the real path.

**Author:** nraptis
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-path-visiting-all-nodes/solutions/3505888/](https://leetcode.com/problems/shortest-path-visiting-all-nodes/solutions/3505888/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```


class Solution {

    func spl(_ graph: [[Int]]) -> (Int, [Int]) {
        if graph.isEmpty || graph.count == 1 {
            return (0, [])
        }
        
        var queue: [(curNode: Int, mask: Int, path: [Int])] = []
        
        // Add all initial nodes to the queue with their corresponding masks and paths
        for i in 0..<graph.count {
            let element = (i, 1 << i, [i])
            queue.append(element)
        }
        
        var seen: Set<[Int]> = Set(queue.map { [$0.0, $0.1] })
        let endMask = (1 << graph.count) - 1
        
        while !queue.isEmpty {
            let (curNode, mask, path) = queue.removeFirst()
            
            if mask == endMask {
                // If all nodes have been visited, return the path and its length
                return (path.count - 1, path)
            }
            
            let neighbours = graph[curNode] ?? [] // Nodes reachable from current node
            
            for neighbour in neighbours {
                let newMask = mask | (1 << neighbour)
                let seenKey = [neighbour, newMask]
                
                if seen.contains(seenKey) {
                    continue
                }
                
                seen.insert(seenKey)
                let newPath = path + [neighbour]
                let newElement = (neighbour, newMask, newPath)
                queue.append(newElement)
            }
        }
        
        return (0, [])
    }
    func shortestPathLength(_ graph: [[Int]]) -> Int {
        let res = spl(graph)

        print("the path: \\(res.1)")
        return res.0
    }
    
    
}



```