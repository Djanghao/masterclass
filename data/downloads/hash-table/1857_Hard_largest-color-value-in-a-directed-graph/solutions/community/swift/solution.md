# Swift | Kahn's Topological Sort

**Author:** OrchidHunter
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solutions/3395674/](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solutions/3395674/)

---

**Kahn's Algorithm (accepted answer)**
```
class Solution {
    func largestPathValue(_ colors: String, _ edges: [[Int]]) -> Int {
        let outGraph = edges.reduce(into: [Int:[Int]]()) { g,e in g[e[0], default:[]] += [e[1]] }
        var inDegrees = edges.reduce(into: Array(repeating:0, count:colors.count)) { arr,e in arr[e[1]] += 1}
        let colors = Array(colors)
        var freqMap = Array(repeating: [Character: Int](), count: colors.count)
        var unvisited = Set(colors.indices)
        var queue = colors.indices.filter { inDegrees[$0] == 0 }
        
        while !queue.isEmpty {
            let node = queue.removeFirst()
            unvisited.remove(node)
            freqMap[node][colors[node], default:0] += 1
            
            for adj in outGraph[node, default:[]] {
                inDegrees[adj] -= 1
                if inDegrees[adj] == 0 { queue.append(adj) }
                freqMap[adj].merge(freqMap[node], uniquingKeysWith: max)
            }
        }
        
        return unvisited.isEmpty ? freqMap.reduce(0) {max($0, $1.values.max()!)} : -1
    }
}
```