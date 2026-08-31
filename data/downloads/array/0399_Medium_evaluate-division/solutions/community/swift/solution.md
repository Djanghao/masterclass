# Concise DFS

**Author:** mudejar
**Votes:** 1
**Link:** [https://leetcode.com/problems/evaluate-division/solutions/4891056/](https://leetcode.com/problems/evaluate-division/solutions/4891056/)

---

# Code
```
class Solution {
    var map = [String: [String: Double]]()

    func calcEquation(_ equations: [[String]], _ values: [Double], _ queries: [[String]]) -> [Double] {
        for (eq, v) in zip(equations, values) {
            let (a, b) = (eq[0], eq[1])
            map[a] = map[a] ?? [:]
            map[a]![b] = v
            map[b] = map[b] ?? [:]
            map[b]![a] = 1 / v
        }

        return queries.map { getPathWeight($0[0], $0[1], Set<String>()) }
    }

    func getPathWeight(_ start: String, _ end: String, _ visited: Set<String>) -> Double {
        if let res = map[start]?[end] { return res }
        if visited.contains(start) { return -1.0 }

        for (neighbour, weight) in map[start] ?? [:] {
            let productWeight = getPathWeight(neighbour, end, visited.union([start]))
            if productWeight != -1.0 { return weight * productWeight }
        }

        return -1.0
    }
}


```