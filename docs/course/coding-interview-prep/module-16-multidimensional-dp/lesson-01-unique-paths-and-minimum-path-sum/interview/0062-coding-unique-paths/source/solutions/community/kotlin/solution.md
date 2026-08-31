# Dynamic calculation without storing whole matrix in memory

**Author:** dilix90
**Votes:** 4
**Link:** [https://leetcode.com/problems/unique-paths/solutions/3236957/](https://leetcode.com/problems/unique-paths/solutions/3236957/)

---

# Intuition
How many paths are there to the final destination from the previous step? Exact 2, from the top and from then left. The same applies to each and every cell.  

# Approach
We could store matrix n*m elements and count how many unique paths are there to each cell from the very beginning. First row and cell initially has `1` as values because you can't go top and left.

For each cell number of possible paths is just the sum of possible paths to get to the cell on top and to the left of current cell.

If you look a bit close to the solution you don't care about the whole matrix and for the computation only line above is needed. Storing one line in memory is enough to comnpute paths on each 'level'. The last cell is the answer!

# Complexity
- Time complexity:
O(n*m) - need to run for each element once

- Space complexity:
O(n) - we want to store one line in memory.

MAYBE it's possible to rotate initial matrix and get O(min(n,m)) but it's up to you to check that theory. 

# Code
```
class Solution {
    fun uniquePaths(m: Int, n: Int): Int {
        val line = IntArray(n)
        for (i in 0 until n) line[i] = 1
        for (i in 0 until m - 1) {
            for (j in 0 until n) {
                if (j == 0) line[j] = 1 
                else line[j] = line[j-1] + line[j]
            }
        }

        return line[n - 1]
    }
}
```