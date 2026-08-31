# Simple and verbose Kotlin solution O(n + m + indices.length)

**Author:** yybk
**Votes:** 0
**Link:** [https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/4887959/](https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/4887959/)

---

# Intuition
Trying to calculate result without moving through the every column and row.


# Approach
Odd value is result of odd value + even value. It means count of all odd values in matrix is next combination:

```
oddCount = oddRows * (columns.size - oddColumns) + oddColumns * (rows.size - oddRows)
```

# Complexity
- Time complexity:
O(n + m + indices.length)

- Space complexity:
O(n + m)

# Code
```
class Solution {
    fun oddCells(m: Int, n: Int, indices: Array<IntArray>): Int {
        var rows = IntArray(m)
        var columns = IntArray(n)

        for (idx in indices) {
            rows[idx[0]]++
            columns[idx[1]]++
        }

        var oddRows = 0
        for (r in rows) {
            if (r % 2 == 1) {
                oddRows++
            }
        }

        var oddColumns = 0
        for (c in columns) {
            if (c % 2 == 1) {
                oddColumns++
            }
        }
        
        return oddRows * (columns.size - oddColumns) + oddColumns * (rows.size - oddRows)
    }
}
```