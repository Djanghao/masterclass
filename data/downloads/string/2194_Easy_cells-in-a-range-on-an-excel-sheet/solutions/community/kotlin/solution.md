# Simple Kotlin solution for beginners

**Author:** ganesh2shiv
**Votes:** 1
**Link:** [https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/3404209/](https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/3404209/)

---

```
class Solution {
    fun cellsInRange(s: String): List<String> {
        val arr = ArrayList<String>()
        for (row in s[0]..s[3]) {
            for (col in s[1]..s[4]) arr.add("$row$col")
        }
        return arr
    }
}
```