# Extremely simple no-math

**Author:** yx-z
**Votes:** 6
**Link:** [https://leetcode.com/problems/zigzag-conversion/solutions/348755/](https://leetcode.com/problems/zigzag-conversion/solutions/348755/)

---

code is self-explanatory
```kotlin
fun convert(s: String, numRows: Int): String {
        if (numRows == 1) return s
        val grid = Array(numRows) { StringBuilder() }
        var goDown = true
        var row = 0
        for (c in s) {
            grid[row].append(c)
            if (row == numRows - 1) goDown = false
            if (row == 0) goDown = true
            if (goDown) row++ else row--
        }
        return grid.joinToString("")
 }
	
	