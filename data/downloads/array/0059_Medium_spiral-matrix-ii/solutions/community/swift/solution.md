# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 12
**Link:** [https://leetcode.com/problems/spiral-matrix-ii/solutions/1912550/](https://leetcode.com/problems/spiral-matrix-ii/solutions/1912550/)

---

```
class Solution {
    func generateMatrix(_ n: Int) -> [[Int]] {
        var matrix: [[Int]] = Array(repeating: Array(repeating: 0, count: n), count: n)
        let count = n / 2
        var num = 1
        
        for i in 0..<count {
            var index = 0
            for j in i..<(n - i - 1) {
                
                let i1 = i
                let j1 = j
                matrix[i1][j1] =  num + j - i
                
                let i2 = j
                let j2 = n - i - 1
                matrix[i2][j2] =  num + j + (n - i * 2 - 1) * 1 - i
                
                let i3 = n - i - 1
                let j3 = n - j - 1
                matrix[i3][j3] =  num + j + (n - i * 2 - 1) * 2 - i
                
                let i4 = n - j - 1
                let j4 = i
                matrix[i4][j4] =  num + j + (n - i * 2 - 1) * 3 - i
                index += 4
            }
            num += index
        }
        
        if n % 2 == 1 { matrix[(n - 1) / 2][(n - 1) / 2] = n * n }
        return matrix
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.