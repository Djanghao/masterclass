# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-boomerangs/solutions/3886339/](https://leetcode.com/problems/number-of-boomerangs/solutions/3886339/)

---

```
class Solution {
    func numberOfBoomerangs(_ points: [[Int]]) -> Int {
        
        var dists = Array(
            repeating: Array(repeating: 0.0, count: points.count),
            count: points.count
        )

        for i in 0..<points.count - 1 {
            for j in 1 + i..<points.count {
                let dx = points[i][0] - points[j][0]
                let dy = points[i][1] - points[j][1]
                dists[i][j] = Double(dx * dx + dy * dy).squareRoot()
                dists[j][i] = dists[i][j]
            }
        }

        var res = 0

        for i in points.indices {
            for j in points.indices
                where i != j {
                    for k in points.indices
                        where i != k && j != k {
                            if dists[i][j] == dists[i][k] { res += 1 }
                        }
                }
        }

        return res
    }
}
```