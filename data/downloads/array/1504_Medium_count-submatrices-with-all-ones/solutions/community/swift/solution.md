# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/3403893/](https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/3403893/)

---

```
class Solution {
    func numSubmat(_ mat: [[Int]]) -> Int {
        
        var sums = Array(repeating: Array(repeating: 0, count: mat[0].count + 1), count: mat.count + 1)
        var res = 0

        func ok(_ t: Int, _ l: Int, _ b: Int, _ r: Int) -> Bool {
            (r - l + 1) * (b - t + 1) == sums[b][r] - sums[b][l - 1] - sums[t - 1][r] + sums[t - 1][l - 1]
        }

        for i in 1..<sums.count {
            for j in 1..<sums[i].count {
                sums[i][j] = mat[i - 1][j - 1] + sums[i][j - 1] + sums[i - 1][j] - sums[i - 1][j - 1]
            }
        }

        for i in 1..<sums.count {
            for j in 1..<sums[i].count {

                var maxi = i
                while maxi < sums.count, ok(i, j, maxi, j) { maxi += 1 }

                var maxj = j
                while maxj < sums[i].count, ok(i, j, i, maxj) { maxj += 1 }

                for k in i..<maxi {
                    for l in j..<maxj
                        where ok(i, j, k, l) {
                            res += 1
                        }
                }
            }
        }

        return res
    }
}
```