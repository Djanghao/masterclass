# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 14
**Link:** [https://leetcode.com/problems/set-matrix-zeroes/solutions/1918838/](https://leetcode.com/problems/set-matrix-zeroes/solutions/1918838/)

---

```
class Solution {
    func setZeroes(_ matrix: inout [[Int]]) {
        let row = matrix.count
        let col = matrix[0].count
        
        for i in 0..<row {
            for j in 0..<col {
                if matrix[i][j] == 0 {
                    setMax(&matrix, i, j)
                }
            }
        }
        
        for i in 0..<row {
            for j in 0..<col {
                if matrix[i][j] != 0 {
                    resetMax(&matrix, i, j)
                }
            }
        }
    }

    
    func setMax(_ matrix: inout [[Int]], _ row: Int, _ col: Int) {
        for i in 0..<matrix.count { 
            let val = matrix[i][col]
            matrix[i][col] = val == 0 ? 0 : Int.max
        }
        
        for j in 0..<matrix[0].count {
            let val = matrix[row][j]
            matrix[row][j] = val == 0 ? 0 : Int.max
        }
    }
    
    
    func resetMax(_ matrix: inout [[Int]], _ row: Int, _ col: Int) {
        let val = matrix[row][col]
        if val == Int.max { matrix[row][col] = 0 }
    }
    
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.