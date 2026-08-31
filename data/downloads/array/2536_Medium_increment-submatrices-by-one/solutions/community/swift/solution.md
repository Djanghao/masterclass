# Swift solution with timeout

**Author:** ZheDre1N
**Votes:** 0
**Link:** [https://leetcode.com/problems/increment-submatrices-by-one/solutions/3055378/](https://leetcode.com/problems/increment-submatrices-by-one/solutions/3055378/)

---

Who can tell me how to decide better on swift? Same code in other programming languages works

# Code
```
class Solution {
    func rangeAddQueries(_ n: Int, _ queries: [[Int]]) -> [[Int]] {
        var matrix = Array(repeating: Array(repeating: 0, count: n), count: n)
        
        for query in queries {
            for i in query[0]...query[2] {
                for j in query[1]...query[3]  {
                    matrix[i][j] += 1
                }
            }
        }
        return matrix
    }
}
```