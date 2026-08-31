# Kotlin

**Author:** jschnall
**Votes:** 1
**Link:** [https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/2104370/](https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/2104370/)

---

Not sure how this got rated "medium". It's easier than many "easy" problems I've done. It passed the tests without any optimizations required. I'm thinking there might be a 2nd part to the question that solution was intended for, in which the user can batch together a bunch of different queries and then request an aggregate answer.

```
class NumMatrix(val matrix: Array<IntArray>) {
    
    fun sumRegion(row1: Int, col1: Int, row2: Int, col2: Int): Int {
        var sum = 0
        
        for (i in row1 .. row2) {
            for (j in col1 .. col2) {
                sum += matrix[i][j]
            }
        }
        
        return sum
    }
    
}
```