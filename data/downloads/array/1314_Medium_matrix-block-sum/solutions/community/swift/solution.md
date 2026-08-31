# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-block-sum/solutions/3233406/](https://leetcode.com/problems/matrix-block-sum/solutions/3233406/)

---

```
class Solution {
    func matrixBlockSum(_ mat: [[Int]], _ k: Int) -> [[Int]] {
        
        var res = mat
        
        for i in mat.indices {
            for j in mat[i].indices {
                
                res[i][j] = 0
                
                for x in max(0, i - k)...min(mat.count - 1, i + k) {
                    for y in max(0, j - k)...min(mat[x].count - 1, j + k) {
                        res[i][j] += mat[x][y]
                    }
                }
            }
        }
        
        return res
    }
}
```