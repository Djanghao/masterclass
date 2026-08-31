# ✅ [Solution][Swift] Dijkstra

**Author:** adanilyak
**Votes:** 2
**Link:** [https://leetcode.com/problems/modify-graph-edge-weights/solutions/5711427/](https://leetcode.com/problems/modify-graph-edge-weights/solutions/5711427/)

---

**TC:** $$O(e + v^2)$$
**SC:** $$O(e)$$
```swift []
class Solution {
    private let inf = 2_000_000_000

    func modifiedGraphEdges(
        _ n: Int,
        _ edges: [[Int]],
        _ source: Int,
        _ destination: Int,
        _ target: Int
    ) -> [[Int]] {

        var edges = edges
        let (currentDist, _) = dijkstra(n, source, edges)

        guard currentDist[destination] >= target else { return [] }

        var foundPathWithinTarget = currentDist[destination] == target
        for i in 0..<edges.count {
            guard edges[i][2] == -1 else { continue }

            edges[i][2] = foundPathWithinTarget ? inf : 1

            if !foundPathWithinTarget {
                let (newDist, _) = dijkstra(n, source, edges)
                if newDist[destination] <= target {
                    foundPathWithinTarget = true
                    edges[i][2] += target - newDist[destination]
                }
            }
        }

        return foundPathWithinTarget ? edges : []
    }

    func dijkstra(
        _ n: Int,
        _ source: Int,
        _ edges: [[Int]]
    ) -> (dist: [Int], prev: [Int]) {
        var map = [Int: [(to: Int, w: Int)]]()
        for e in edges {
            guard e[2] != -1 else { continue }

            map[e[0], default: []].append((e[1], e[2]))
            map[e[1], default: []].append((e[0], e[2]))
        }

        var dist = Array(repeating: inf, count: n)
        var prev = Array(repeating: -1, count: n)
        var visited = Set<Int>()

        dist[source] = 0
        
        for _ in 0..<n {
            var i = -1
            for j in 0..<n {
                guard !visited.contains(j) else { continue }
                if i == -1 || dist[j] < dist[i] {
                    i = j
                }
            }
            visited.insert(i)

            for a in map[i] ?? [] {
                guard !visited.contains(a.to) else { continue }
                let altD = dist[i] + a.w
                if altD < dist[a.to] {
                    dist[a.to] = altD
                    prev[a.to] = i
                }
            }
        }

        return (dist, prev)
    }
}
```