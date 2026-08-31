# My kotlin solution with time O((MN)^2) and space O(MN), brute force!!

**Author:** hj-core
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/solutions/2488656/](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/solutions/2488656/)

---

After two times of Memory Limit Exceeded, I finally reduce the memoy space from (MN)^2 -> ~(MN)^2 / 4 -> MN.

However, the time complexity is O((MN)^2) and seems that it is able to improve it, may think about it later.

Below is my brute force solution in kotlin,
```
class Solution {
    /* Complexity:
     * Time O((MN)^2) and Space O(MN) where M and N are the size of matrix and matrix[0];
     */
    fun maxSumSubmatrix(matrix: Array<IntArray>, k: Int): Int {
        val rows = matrix.size
        val columns = matrix[0].size

        val runningSum = Array(rows + 1) { IntArray(columns + 1) }
        for (row in 1..rows) {
            for (column in 1..columns) {
                runningSum[row][column] = matrix[row - 1][column - 1] + runningSum[row][column - 1]
            }
        }
        for (column in 1..columns) {
            for (row in 1..rows) {
                runningSum[row][column] += runningSum[row - 1][column]
            }
        }

        fun calculateRangeSum(startRow: Int, startColumn: Int, endRow: Int, endColumn: Int): Int {
            val component1 = runningSum[endRow][endColumn]
            val component2 = runningSum[startRow - 1][startColumn - 1]
            val component3 = runningSum[startRow - 1][endColumn]
            val component4 = runningSum[endRow][startColumn - 1]
            return component1 + component2 - component3 - component4
        }

        var maxSum: Int? = null
        overallLoop@ for (startRow in 1..rows) {
            for (startColumn in 1..columns) {
                for (endRow in startRow..rows) {
                    for (endColumn in startColumn..columns) {
                        val currentSum = calculateRangeSum(startRow, startColumn, endRow, endColumn)
                        if (currentSum <= k && (maxSum == null || currentSum > maxSum)) maxSum = currentSum
                        if (maxSum == k) break@overallLoop
                    }
                }
            }
        }

        return maxSum ?: throw IllegalStateException()
    }
}
```