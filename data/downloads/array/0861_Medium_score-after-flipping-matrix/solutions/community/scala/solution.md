# Flip and track count

**Author:** kamikumakun
**Votes:** 0
**Link:** [https://leetcode.com/problems/score-after-flipping-matrix/solutions/5154295/](https://leetcode.com/problems/score-after-flipping-matrix/solutions/5154295/)

---

# Intuition

We can flip any row/column number of times but should we?

Q: Ask yourself, how can we make the binary number (row) highest number?
A: By ensuring that the foremost left is 1. If not then we should flip?

Q: After performing the initial flip, when should we flip the rows? What are the criteria?
A: We want the count amount for that particular column to be less or equal to half the length of m

Q: How do we keep track of the count?
A: Keep an array


<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(M * N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def matrixScore(grid: Array[Array[Int]]): Int = {
        
        val m = grid.length
        val n = grid.head.length

        val onesInColumns = new Array[Int](n)

        for(row <- 0 until m) {

            val shouldFlipWhenHeadIsZero = grid(row).head == 0

            for(col <- 0 until n) {

                if(shouldFlipWhenHeadIsZero) grid(row)(col) = (grid(row)(col) - 1).abs

                if(grid(row)(col) == 1) onesInColumns(col) += 1

            }

        }

        for(col <- 0 until n) {
            val count = onesInColumns(col)
            if(count <= m / 2) {
                for(row <- 0 until m) {
                    grid(row)(col) = (grid(row)(col) - 1).abs
                }
            }
        }

        var answer = 0

        for(row <- 0 until m) answer += Integer.parseInt(grid(row).mkString, 2)

        answer
    }
}
```