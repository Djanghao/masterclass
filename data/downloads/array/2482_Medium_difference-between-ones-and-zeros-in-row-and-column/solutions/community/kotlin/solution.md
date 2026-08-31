# Simple Kotlin solution for beginners

**Author:** ganesh2shiv
**Votes:** 1
**Link:** [https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/3035559/](https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/3035559/)

---

```
class Solution {
    fun onesMinusZeros(grid: Array<IntArray>): Array<IntArray> {
        val m = grid.size
        val n = grid[0].size
        val arr = Array(m) {IntArray(n)}
        val rows = IntArray(m)
        val cols = IntArray(n)

        for (i in 0..m-1) {
            for (j in 0..n-1) {
                rows[i] += grid[i][j]
                cols[j] += grid[i][j]
            }
        }

        for (i in 0..m-1) {
            for (j in 0..n-1) {
                arr[i][j] = 2*rows[i] + 2*cols[j] - m - n
            }
        }

        return arr
    }
}
```