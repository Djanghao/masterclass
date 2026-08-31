# kotlin xor

**Author:** gurumewell
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/1970981/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/1970981/)

---

```
  class Solution {
     /**
     * Property 2 can be translated as follows:
     *  use first row as reference, all other rows must be the same as it or inverse of it.
     * Two properties:
     *  1. the flip transformation has this equivalence relationship -
     *      A <-> B <-> C, then A <-> C, A, B and C are all equivalent
     *  2. if one column/row is all 0's, then all other columns/rows must be 0
     *      that is, to verify A is equivalent to the all 0 Z, we just need to
     *      transfer A to B which has one all 0 row, then if any other row has 1 then that
     *      row must have all 1's. Otherwise, A is not <-> Z. return false
     */
    fun removeOnes(grid: Array<IntArray>): Boolean {
        val m = grid.size
        val n = grid[0].size
        if (m <= 1 || n <= 1) return true

        for (i in 1 .. m-1) {
            val xorBase = grid[0][0] xor grid[i][0]
            for (j in 1 .. n-1) {
                if (xorBase != (grid[0][j] xor grid[i][j])) return false
            }
        }

        return true
    }
}