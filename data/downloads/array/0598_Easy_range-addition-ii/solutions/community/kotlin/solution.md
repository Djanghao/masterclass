# Simple Kotlin solution for beginners

**Author:** ganesh2shiv
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-addition-ii/solutions/2997236/](https://leetcode.com/problems/range-addition-ii/solutions/2997236/)

---

```
class Solution {
    fun maxCount(m: Int, n: Int, ops: Array<IntArray>): Int {
        if (ops.size == 0) return m*n
        var row = Int.MAX_VALUE
        var col = Int.MAX_VALUE
        for (op in ops) {
            row = minOf(row, op[0])
            col = minOf(col, op[1])
        }
        return row*col
    }
}
```