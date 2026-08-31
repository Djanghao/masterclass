# Swift | Floyd-Warshall

**Author:** pagafan7as
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5536531/](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5536531/)

---

The time complexity is $O(n^3)$. Ideal for dense graphs.

# Code
```
class Solution {
    func findTheCity(_ n: Int, _ edges: [[Int]], _ threshold: Int) -> Int {
        var dist: [[Int]] = (0..<n).map { row in
            (0..<n).map { col in
                row == col ? 0 : threshold + 1
            }
        }

        for edge in edges {
            let (u, v, distance) = (edge[0], edge[1], edge[2])
            dist[u][v] = distance
            dist[v][u] = distance
        }

        for k in 0..<n {
            for i in 0..<n {
                for j in 0..<n {
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
                }
            }
        }

        let cityCounts = dist.map { $0.filter { $0 <= threshold }.count }

        return cityCounts.lastIndex(of: cityCounts.min()!)!
    }
}
```

Or for those who prefer something more terse:

```
import Algorithms

class Solution {
    func findTheCity(_ n: Int, _ e: [[Int]], _ t: Int) -> Int {
        // Compute distance matrix.
        var de = e.reduce(into: [[Int]: Int]()) { $0[[$1[0], $1[1]]] = $1[2] }
        var d: [[Int]] = (0..<n).map { r in
            (0..<n).map { c in
                r == c ? 0 : de[[r, c]] ?? de[[c, r]] ?? t + 1
            }
        }

        // Run Floyd-Warshall.
        for k in 0..<n {
            for (i, j) in product(0..<n, 0..<n) {
                d[i][j] = min(d[i][j], d[i][k] + d[k][j])
            }
        }

        // Return min city.
        let counts = d.map { $0.filter { $0 <= t }.count }
        return counts.lastIndex(of: counts.min()!)!
    }
}
```