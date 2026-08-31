# Swift solution using subsums

**Author:** AndreevIVdev
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/solutions/2489544/](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/solutions/2489544/)

---

```
class Solution {
    func maxSumSubmatrix(_ matrix: [[Int]], _ k: Int) -> Int {
        var subSums: [[Int]] = .init(repeating: .init(repeating: 0, count: matrix[0].count + 1), count: matrix.count + 1)
        var res = Int.min
        for y in 1...matrix.count {
            for x in 1...matrix[0].count {
                subSums[y][x] = matrix[y - 1][x - 1]
                subSums[y][x] += subSums[y - 1][x]
                subSums[y][x] += subSums[y][x - 1]
                subSums[y][x] -= subSums[y - 1][x - 1]
            }
        }
        for y in 0...matrix.count {
            for x in 0...matrix[0].count {
                for g in 0..<y {
                    for h in 0..<x {
                        let temp = subSums[y][x] - (subSums[y][h] + subSums[g][x] - subSums[g][h])
                        if temp <= k {
                            res = max(res, temp)
                        }
                    }
                }
            }
        }
        return res
    }
}
```