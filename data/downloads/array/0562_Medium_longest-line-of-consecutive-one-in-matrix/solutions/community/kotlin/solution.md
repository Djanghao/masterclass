# Kotlin dp solution

**Author:** sprocket101
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/3884269/](https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/3884269/)

---

```
fun longestLine(mat: Array<IntArray>): Int {
        val dp = Array(mat.size) {
            Array(mat[0].size) {IntArray(4) {0}}
        }
        var max = 0
        
        for(row in 0..mat.lastIndex) {
            for(col in 0..mat[0].lastIndex) {
                if(mat[row][col] == 1) {
                    //horizontal
                    dp[row][col][0] = if(col > 0) dp[row][col-1][0] + 1 else 1
                    //vertical
                    dp[row][col][1] = if(row > 0) dp[row-1][col][1] + 1 else 1
                    //diagonal
                    dp[row][col][2] = if(row > 0 && col > 0) dp[row-1][col-1][2] + 1 else 1
                    //anti-diagonal
                    dp[row][col][3] = 
                        if(row > 0 && col < mat[0].lastIndex) dp[row-1][col+1][3] + 1 else 1
                }
                max = maxOf(dp[row][col].max()!!, max)
            }
        }
        
        return max
    }