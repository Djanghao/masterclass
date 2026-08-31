# Kotlin using 2 pointers

**Author:** doct0rX
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-meeting-point/solutions/4421239/](https://leetcode.com/problems/best-meeting-point/solutions/4421239/)

---

# Complexity
- Time complexity: $$O(mn)$$

- Space complexity: $$O(mn)$$

# Code
```
class Solution {
  fun minTotalDistance(grid: Array<IntArray>): Int {
    val rows = grid.collectRows().minDistanceID()
    val cols = grid.collectCols().minDistanceID()
    
    return rows + cols
  }

  private fun List<Int>.minDistanceID(): Int {
    var distance = 0
    var i = 0
    var j = size - 1
    while (i < j) {
      distance += get(j) - get(i)
      i++
      j--
    }
    return distance
  }

  private fun Array<IntArray>.collectRows(): List<Int> {
    val rows = mutableListOf<Int>()
    for (row in indices) {
      for (col in get(row).indices) {
        if (get(row).get(col) == 1) { rows.add(row) }
      }
    }
    return rows
  }

  private fun Array<IntArray>.collectCols(): List<Int> {
    val cols = mutableListOf<Int>()
    for (col in get(0).indices) {
      for (row in indices) {
        if (get(row).get(col) == 1) { cols += col }
      }
    }
    return cols
  }
}
```