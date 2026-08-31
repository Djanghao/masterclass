# Swift Solution | TLE | O(nm)

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/stamping-the-grid/solutions/2782402/](https://leetcode.com/problems/stamping-the-grid/solutions/2782402/)

---

```
class Solution {
    func possibleToStamp(_ M: [[Int]], _ h: Int, _ w: Int) -> Bool {
        let m = M.count, n = M[0].count
        var A = Array(repeating: Array(repeating: 0, count: n + 1), count: m + 1), B = Array(repeating: Array(repeating: 0, count: n + 1), count: m + 1), good = Array(repeating: Array(repeating: 0, count: n), count: m)
        for i in 0..<m {
            for j in 0..<n {
                A[i + 1][j + 1] = A[i + 1][j] + A[i][j + 1] - A[i][j] + (1 - M[i][j])
                if i + 1 >= h && j + 1 >= w {
                    let x = i + 1 - h, y = j + 1 - w
                    if A[i + 1][j + 1] - A[x][j + 1] - A[i + 1][y] + A[x][y] == w * h {
                        good[i][j] += 1
                    }
                }
            }
        }
        for i in 0..<m {
            for j in 0..<n {
                B[i + 1][j + 1] = B[i + 1][j] + B[i][j + 1] - B[i][j] + good[i][j]
            }
        }
        for i in 0..<m {
            for j in 0..<n {
                let x = min(i + h, m), y = min(j + w, n)
                if M[i][j] == 0 && B[x][y] - B[i][y] - B[x][j] + B[i][j] == 0 {
                    return false
                }
            }
        }
        return true
    }
}
```