# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4837613/](https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4837613/)

---

```
class Solution {
    func minimumOperationsToWriteY(_ grid: [[Int]]) -> Int {
        
        let n = grid.count

        var ys = [Int: Int]()
        var ns = [Int: Int]()

        for i in 0..<n / 2 {
            for j in 0..<n {

                if i == j || (n - i - 1) == j {
                    ys[grid[i][j], default: 0] += 1
                }
                else {
                    ns[grid[i][j], default: 0] += 1
                }
            }
        }

        for i in n / 2..<n {
            for j in 0..<n {

                if j == n / 2 {
                    ys[grid[i][j], default: 0] += 1
                }
                else {
                    ns[grid[i][j], default: 0] += 1
                }
            }
        }

        ys[ys.keys.max()! + 1] = 0

        let yc = ys.values.reduce(0, +)
        let nc = ns.values.reduce(0, +)

        var best = n * n

        for (yval, ycnt) in ys {
            var cur = yc - ycnt
            guard cur < best else { continue }

            var tgt = yval + 1
            var tgtc = ns[tgt, default: 0]

            for (nval, ncnt) in ns
                where nval != yval && ncnt > tgtc {
                    tgt = nval
                    tgtc = ncnt
                }
            
            cur += nc - tgtc
            best = min(best, cur)
        }

        return best
    }
}
```