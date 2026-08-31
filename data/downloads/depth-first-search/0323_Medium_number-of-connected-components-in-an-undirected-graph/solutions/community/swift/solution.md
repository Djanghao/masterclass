# Swift - simple DFS explanation - 80ms

**Author:** daniel166
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/885050/](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/885050/)

---

Track _seen_ nodes. For every node `i` in `(0..<n)`, if we have not seen node `i` before we have 1 more connected component. Use DFS to mark all nodes connected to `i` as seen, then move on to `i+1`.

This problem is similar to https://leetcode.com/problems/number-of-islands/. Try one after the other to solidify your understanding of the concepts.

```
class Solution {
    func countComponents(_ n: Int, _ edges: [[Int]]) -> Int {
        if edges.isEmpty { return n }
        if edges.count == 1 { return n-1 }
        
        //build adjacency list graph representation
        var adjacencyList = Array(repeating: [Int](), count: n)
        
        for edge in edges {
            adjacencyList[edge[0]].append(edge[1])
            adjacencyList[edge[1]].append(edge[0])
        }
        
        var result = 0
        
        var stack = [Int]()
        var seen = Array(repeating: false, count: n)

        for i in 0..<n {
            guard !seen[i] else { continue }
            //we found a new connected component
            result += 1
            
            //dfs to mark all nodes connected to `i` as seen
            stack.append(i)
            while let node = stack.popLast() {
                guard !seen[node] else { continue }
                seen[node] = true
                stack.append(contentsOf: adjacencyList[node])
            }
        }
        
        return result
    }
}
```