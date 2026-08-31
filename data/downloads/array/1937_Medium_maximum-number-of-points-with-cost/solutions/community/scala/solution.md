# Maximum number of points with cost. >:S

**Author:** Tran_Nhat_Gia_Huy_Codes
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5649104/](https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5649104/)

---

# Intuition
To solve the problem of maximizing points collected from a grid while accounting for penalties based on the distance between selected cells in consecutive rows, the first thought is to use dynamic programming. The idea is to keep track of the best possible score at each cell in every row and update it by considering the distance penalties from the previous row.

# Approach
Start by treating the first row's points as the initial state of maximum possible scores. For each subsequent row, we calculate the maximum possible points for each cell by considering both left and right transitions from the previous row. The left sweep traverses from left to right, calculating potential maximum points by considering the best possible score when moving from a cell to its right neighbors. The right sweep then traverses from right to left, updating the scores by considering transitions from the left. This approach ensures that all possible paths and penalties are accounted for, resulting in the maximum score being calculated in the last row.

# Complexity
- Time complexity:
$$O(m*n)$$

- Space complexity:
$$O(n)$$

# Code
```
object Solution {
    def maxPoints(points: Array[Array[Int]]): Long = {
        val m = points.length
        val n = points(0).length
        var prev = points(0).map(_.toLong)

        for (i <- 1 until m) {
            val curr = Array.fill(n)(0L)

            var leftMax = prev(0)
            for (j <- 0 until n) {
                leftMax = leftMax.max(prev(j) + j)
                curr(j) = leftMax - j + points(i)(j)
            }

            var rightMax = prev(n - 1) - (n - 1)
            for (j <- (0 until n).reverse) {
                rightMax = rightMax.max(prev(j) - j)
                curr(j) = curr(j).max(rightMax + j + points(i)(j))
            }

            prev = curr
        }
        prev.max
    }
}
```