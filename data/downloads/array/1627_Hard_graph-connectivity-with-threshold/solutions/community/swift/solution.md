# Swift 836 ms

**Author:** pigmasha
**Votes:** 0
**Link:** [https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/2775120/](https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/2775120/)

---

```
class Solution {
    func areConnected(_ n: Int, _ threshold: Int, _ queries: [[Int]]) -> [Bool] {
        guard threshold > 0 else { return Array(repeating: true, count: queries.count) }
        guard threshold < n else { return Array(repeating: false, count: queries.count) }
        var graph = Array(0 ..< n)
        for i in threshold + 1 ... n {
            let parent = searchParent(i - 1, &graph)
            var j = 2 * i
            while j <= n {
                let p2 = searchParent(j - 1, &graph)
                if parent != p2 { graph[p2] = parent }
                j += i
            }
        }
        return queries.map { searchParent($0[0] - 1, &graph) == searchParent($0[1] - 1, &graph) }
    }

    private func searchParent(_ e: Int, _ graph: inout [Int]) -> Int {
        if graph[e] == e { return e }
        graph[e] = searchParent(graph[e], &graph)
        return graph[e]
    }
}
```