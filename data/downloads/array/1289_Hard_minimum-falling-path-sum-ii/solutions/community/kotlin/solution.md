# Iterative DP with space optimization.

**Author:** drgavrikov
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-falling-path-sum-ii/solutions/5095519/](https://leetcode.com/problems/minimum-falling-path-sum-ii/solutions/5095519/)

---

# Approach
The solution idea relies on iterative Dynamic Programming (DP).

Two minimum values and their indices are stored for each row. They can be initialized with zeros and non-existent indices (-1).

When computing the optimal path for each element of the row, the path sums from the previous row are taken into account. To do this, it is checked whether the current element is the index of the minimum sum in the previous row. If not, the first minimum is added; if yes, then the second minimum. Update two minimums on each steps.

To optimize additional memory, it's sufficient to store only the row with the previous sums instead of the entire matrix.

After processing all rows, the minimum path sum in the last row is returned.

# Complexity
- Time complexity: $O(n^2)$

- Space complexity: $O(n)$ additional memory

# Code
```
class Solution {
    fun minFallingPathSum(grid: Array<IntArray>): Int {

        var firstMin = Pair(0, -1)
        var secondMin = Pair(0, -1)

        for (row in grid) {

            var nextFirstMin = Pair(Int.MAX_VALUE / 2, -1)
            var nextSecondMin = Pair(Int.MAX_VALUE / 2, -1)

            row.forEachIndexed { index, value ->
                val current = Pair(value + (if (index == firstMin.second) secondMin.first else firstMin.first), index)
                if (current.first < nextFirstMin.first) {
                    nextSecondMin = nextFirstMin
                    nextFirstMin = current
                } else if (current.first < nextSecondMin.first) {
                    nextSecondMin = current
                }
            }
            
            firstMin = nextFirstMin
            secondMin = nextSecondMin
        }
        return firstMin.first
    }
}
```