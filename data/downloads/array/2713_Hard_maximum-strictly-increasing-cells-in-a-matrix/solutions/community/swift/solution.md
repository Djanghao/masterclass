# Swift Solution using DP and sorting

**Author:** AndreevIVdev
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/3571838/](https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/3571838/)

---

# Code
```
class Solution {

    private struct P: Hashable {
        let x: Int
        let y: Int
    }

    func maxIncreasingCells(_ matrix: [[Int]]) -> Int {
        var map: [Int: Set<P>] = [:]

        for y in matrix.indices {
            for x in matrix[0].indices {
                map[matrix[y][x], default: []].insert(.init(x: x, y: y))
            }
        }

        var dp: [[Int]] = .init(repeating: .init(repeating: 1, count: matrix[0].count), count: matrix.count)

        var rowMax: [Int] = .init(repeating: 0, count: matrix.count)
        var colMax: [Int] = .init(repeating: 0, count: matrix[0].count)

        for element in map.keys.sorted() {
            for p in map[element, default: []] {
                dp[p.y][p.x] = max(rowMax[p.y], colMax[p.x]) + 1
            }

            for p in map[element, default: []] {
                rowMax[p.y] = max(rowMax[p.y], dp[p.y][p.x])
                colMax[p.x] = max(colMax[p.x], dp[p.y][p.x])
            }
        }

        return dp.flatMap{ $0 }.max()!
    }
}

```