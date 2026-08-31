# Swift Solution two times using dfs

**Author:** AndreevIVdev
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/3434290/](https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/3434290/)

---

# Code
```
class Solution {

    func minimumTotalPrice(_ n: Int, _ edges: [[Int]], _ price: [Int], _ trips: [[Int]]) -> Int {
        var visited: Set<Int> = []
        var graph: [Int: [Int]] = [:]
        var count: [Int: Int] = [:]

        for edge in edges {
            graph[edge[0], default: []].append(edge[1])
            graph[edge[1], default: []].append(edge[0])
        }

        for trip in trips {
            visited = []
            for c in dfs(start: trip[0], end: trip[1], visited: &visited, graph: graph) {
                count[c, default: 0] += 1
            }
        }
        visited = []
        let res = dfs(0, &visited, graph, price, count)
        return min(res.0, res.1)
    }

    private func dfs(start: Int, end: Int, visited: inout Set<Int>, graph: [Int: [Int]]) -> [Int] {

        guard start != end else { return [start] }

        visited.insert(start)
        for n in graph[start, default: []] where !visited.contains(n) {
            if n == end {
                return [start, end]
            } else {
                let res = dfs(start: n, end: end, visited: &visited, graph: graph)
                if res != [] {
                    return [start] + res
                }
            }
        }

        return []
    }

    private func dfs(_ i: Int, _ visited: inout Set<Int>, _ graph: [Int: [Int]], _ price: [Int], _ count: [Int: Int]) -> (Int, Int) {
        visited.insert(i)
        guard let notVisitedNeighbours = graph[i]?.filter({ !visited.contains($0) }) else {
            return (count[i, default: 0] * (price[i] / 2), count[i, default: 0] * price[i])
        }

        let notVisitedPrices = notVisitedNeighbours.map { dfs($0, &visited, graph, price, count) }
        let halve = count[i, default: 0] * (price[i] / 2) + notVisitedPrices.map(\\.1).reduce(0, +)
        let notHalve = count[i, default: 0] * price[i] + notVisitedPrices.map { min($0.0, $0.1) }.reduce(0, +)

        return (halve, notHalve)
    }
}
```
Similar problem: https://leetcode.com/problems/house-robber-iii/description/