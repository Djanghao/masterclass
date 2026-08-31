# Very Easy Tabulation Scala Code

**Author:** suwarnashukla6
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-square-submatrices-with-all-ones/solutions/5975183/](https://leetcode.com/problems/count-square-submatrices-with-all-ones/solutions/5975183/)

---



# Code
```scala []
object Solution {
    def countSquares(matrix: Array[Array[Int]]): Int = {
        val n = matrix.length
        val m = matrix(0).length
        val dp = Array.ofDim[Int](n, m)
        var count = 0
        
        for (i <- 0 until n) {
            for (j <- 0 until m) {
                if (matrix(i)(j) == 1) {
                    // If we're at the first row or first column, the maximum square we can have is 1x1
                    if (i == 0 || j == 0) {
                        dp(i)(j) = 1
                    } else {
                        // Otherwise, calculate the largest square that can end at (i, j)
                        dp(i)(j) = math.min(math.min(dp(i-1)(j), dp(i)(j-1)), dp(i-1)(j-1)) + 1
                    }
                    // Add to the total count of squares
                    count += dp(i)(j)
                }
            }
        }
        
        count
    }
}

```